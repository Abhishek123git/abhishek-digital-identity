import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import ContributionCalendar from "../components/ContributionCalendar";

const DEFAULT_YEARS = ["2026", "2025", "2024"];
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 min
const MAX_RETRIES = 3;

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
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`,
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

function groupByYear(json) {
  const byYear = Object.create(null);
  const contributions = json.contributions ?? [];
  for (let i = 0; i < contributions.length; i++) {
    const entry = contributions[i];
    const year = entry.date.slice(0, 4);
    let yearBucket = byYear[year];
    if (!yearBucket) yearBucket = byYear[year] = Object.create(null);
    yearBucket[entry.date] = entry.level;
  }
  return { byYear, totals: json.total ?? {} };
}

/** Lightweight skeleton that mirrors the calendar's aspect ratio to avoid layout shift. */
function CalendarSkeleton() {
  const weeks = Array.from({ length: 53 });
  const days = Array.from({ length: 7 });
  return (
    <div
      className="w-full animate-pulse overflow-x-auto"
      role="status"
      aria-label="Loading contribution history"
    >
      <div className="flex gap-1 min-w-[600px] sm:min-w-[700px]">
        {weeks.map((_, w) => (
          <div key={w} className="flex flex-col gap-1">
            {days.map((_, d) => (
              <div
                key={d}
                className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-sm bg-slate-700/50"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function GithubContributionCalendar({ username, years = DEFAULT_YEARS }) {
  const [dataByYear, setDataByYear] = useState(null);
  const [totalsByYear, setTotalsByYear] = useState(null);
  const [status, setStatus] = useState(username ? "loading" : "idle"); // idle | loading | ready | error
  const [errorMessage, setErrorMessage] = useState(null);

  const controllerRef = useRef(null);
  const mountedRef = useRef(true);
  const retryCountRef = useRef(0);

  const load = useCallback(
    (username) => {
      if (!username) return;

      // Cancel any in-flight request for a previous username/retry before starting a new one.
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      setStatus("loading");
      setErrorMessage(null);

      fetchContributions(username, controller.signal)
        .then((json) => {
          if (!mountedRef.current || controller.signal.aborted) return;
          const { byYear, totals } = groupByYear(json);
          setDataByYear(byYear);
          setTotalsByYear(totals);
          setStatus("ready");
          retryCountRef.current = 0;
        })
        .catch((err) => {
          if (err.name === "AbortError") return; // cleanup/superseded request, not a real failure
          if (!mountedRef.current) return;
          console.error(err);
          setErrorMessage(err.message || "Something went wrong.");
          setStatus("error");
        });
    },
    []
  );

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      controllerRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!username) {
      setStatus("idle");
      setDataByYear(null);
      setTotalsByYear(null);
      return;
    }
    retryCountRef.current = 0;
    load(username);
    // load intentionally omitted from deps beyond username: it's stable (useCallback, no deps).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const retry = useCallback(() => {
    if (!username) return;
    retryCountRef.current = Math.min(retryCountRef.current + 1, MAX_RETRIES);
    cache.delete(username);
    load(username);
  }, [username, load]);

  const calendarProps = useMemo(
    () => ({ years, dataByYear, totalsByYear }),
    [years, dataByYear, totalsByYear]
  );

  if (status === "idle") return null;

  if (status === "error") {
    return (
      <div className="w-full px-4 text-center text-sm text-red-400 sm:px-0">
        <p className="break-words">
          Couldn't load contributions for "{username}"
          {errorMessage ? `: ${errorMessage}` : ". Check the username and try again."}
        </p>
        <button
          type="button"
          onClick={retry}
          className="mt-2 underline underline-offset-2 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (status === "loading" && !dataByYear) {
    return (
      <div className="w-full px-2 sm:px-0">
        <CalendarSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto px-2 sm:px-0">
      <ContributionCalendar {...calendarProps} />
    </div>
  );
}

export default React.memo(GithubContributionCalendar);