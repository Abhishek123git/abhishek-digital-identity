import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import ContributionCalendar from "../components/ContributionCalendar";

const DEFAULT_YEARS = ["2026", "2025", "2024"];

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 min
const cache = new Map(); // username -> { data, timestamp }

const inFlight = new Map(); // username -> Promise

async function fetchContributions(username, signal) {
  const cached = cache.get(username);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  if (inFlight.has(username)) {
    return inFlight.get(username);
  }

  const promise = (async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`,
      { signal }
    );
    if (!res.ok) throw new Error(`GitHub contributions fetch failed (${res.status})`);
    const json = await res.json();
    cache.set(username, { data: json, timestamp: Date.now() });
    return json;
  })();

  inFlight.set(username, promise);
  try {
    return await promise;
  } finally {
    inFlight.delete(username);
  }
}

function GithubContributionCalendar({ username, years = DEFAULT_YEARS }) {
  const [dataByYear, setDataByYear] = useState(null);
  const [totalsByYear, setTotalsByYear] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const retryRef = useRef(0);

  const load = useCallback((signal) => {
    if (!username) return;
    setStatus("loading");

    fetchContributions(username, signal)
      .then((json) => {      
        const byYear = Object.create(null);
        const contributions = json.contributions ?? [];
        for (let i = 0; i < contributions.length; i++) {
          const entry = contributions[i];
          const year = entry.date.slice(0, 4);
          let yearBucket = byYear[year];
          if (!yearBucket) yearBucket = byYear[year] = Object.create(null);
          yearBucket[entry.date] = entry.level;
        }

        setDataByYear(byYear);
        setTotalsByYear(json.total ?? {});
        setStatus("ready");
        retryRef.current = 0;
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // not a real failure, just cleanup
        console.error(err);
        setStatus("error");
      });
  }, [username]);

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [username, load]);

  const retry = useCallback(() => {
    cache.delete(username);
    const controller = new AbortController();
    load(controller.signal);
  }, [username, load]);

  const calendarProps = useMemo(
    () => ({ years, dataByYear, totalsByYear }),
    [years, dataByYear, totalsByYear]
  );

  if (status === "error") {
    return (
      <div className="text-center text-sm text-red-400">
        <p>Couldn't load contributions for "{username}". Check the username and try again.</p>
        <button
          onClick={retry}
          className="mt-2 underline underline-offset-2 hover:text-red-300"
        >
          Retry
        </button>
      </div>
    );
  }

  if (status === "loading" && !dataByYear) {
    return (
      <p className="text-center text-sm text-slate-500">
        Loading contribution history…
      </p>
    );
  }

  return <ContributionCalendar {...calendarProps} />;
}

export default React.memo(GithubContributionCalendar);