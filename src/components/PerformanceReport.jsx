import React, { useState, useEffect, useCallback, useRef } from "react";
import { HeadElement } from "../sub-components/HeadElement";

const PSI_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const DEFAULT_URL = "https://www.abhishekportfolio.com/";

const ENV_API_KEY = process.env?.REACT_APP_PSI_API_KEY;


const CATEGORY_META = [
  { key: "performance", label: "Performance" },
  { key: "accessibility", label: "Accessibility" },
  { key: "best-practices", label: "Best Practices" },
  { key: "seo", label: "SEO" },
];

const CWV_AUDITS = [
  { key: "first-contentful-paint", label: "First Contentful Paint", abbr: "FCP" },
  { key: "largest-contentful-paint", label: "Largest Contentful Paint", abbr: "LCP" },
  { key: "total-blocking-time", label: "Total Blocking Time", abbr: "TBT" },
  { key: "cumulative-layout-shift", label: "Cumulative Layout Shift", abbr: "CLS" },
  { key: "speed-index", label: "Speed Index", abbr: "SI" },
];

function scoreColor(score) {
  if (score === null || score === undefined) return { fg: "#5B6675", ring: "#5B6675", bg: "rgba(91,102,117,0.10)" };
  if (score >= 0.9) return { fg: "#5FD57A", ring: "#5FD57A", bg: "rgba(95,213,122,0.10)" };
  if (score >= 0.5) return { fg: "#F5B84F", ring: "#F5B84F", bg: "rgba(245,184,79,0.10)" };
  return { fg: "#F2664F", ring: "#F2664F", bg: "rgba(242,102,79,0.10)" };
}

function scoreLabel(score) {
  if (score === null || score === undefined) return "N/A";
  if (score >= 0.9) return "GOOD";
  if (score >= 0.5) return "NEEDS WORK";
  return "POOR";
}

function fmtTime() {
  const d = new Date();
  return (
    d.toLocaleTimeString("en-US", { hour12: false }) +
    " · " +
    d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
  );
}

function normalizeUrl(raw) {
  const trimmed = raw.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

/* ---------------- Circular gauge ---------------- */
const Gauge = React.memo(function Gauge({ label, score, delay = 0 }) {
  const [animated, setAnimated] = useState(0);
  const pct = score === null || score === undefined ? 0 : Math.round(score * 100);
  const colors = scoreColor(score);
  const R = 42;
  const C = 2 * Math.PI * R;

  useEffect(() => {
    const t = setTimeout(() => setAnimated(pct), 120 + delay);
    return () => clearTimeout(t);
  }, [pct, delay]);

  const offset = C - (animated / 100) * C;

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative w-20 h-20 sm:w-28 sm:h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" aria-hidden="true">
          <circle cx="50" cy="50" r={R} fill="none" stroke="#1A2230" strokeWidth="7" />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke={colors.ring}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)" }}
          />
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * 360;
            const isMajor = i % 6 === 0;
            return (
              <line
                key={i}
                x1="50"
                y1={isMajor ? "4" : "6"}
                x2="50"
                y2="9"
                stroke="#2A3444"
                strokeWidth={isMajor ? "1.2" : "0.6"}
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-mono text-lg sm:text-2xl font-semibold tabular-nums"
            style={{ color: colors.fg }}
          >
            {score === null || score === undefined ? "—" : animated}
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.12em] text-[#5B6675] font-mono mt-0.5">
            {scoreLabel(score)}
          </span>
        </div>
      </div>
      <span className="text-[11px] sm:text-[13px] font-medium text-[#C4CCD8] text-center leading-tight px-1">
        {label}
      </span>
    </div>
  );
});

/* ---------------- Core Web Vital row ---------------- */
const CwvCard = React.memo(function CwvCard({ audit }) {
  if (!audit) return null;
  const colors = scoreColor(audit.score);
  return (
    <div className="flex items-center justify-between gap-3 py-3 px-3.5 sm:px-4 rounded-lg bg-[#121821] border border-[#1E2733]">
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <span
          className="font-mono text-[10px] px-1.5 py-0.5 rounded border shrink-0"
          style={{ color: colors.fg, borderColor: colors.fg + "55", background: colors.bg }}
        >
          {audit.abbr}
        </span>
        <span className="text-[13px] sm:text-sm text-[#C4CCD8] truncate">{audit.label}</span>
      </div>
      <span className="font-mono text-[13px] sm:text-sm font-semibold shrink-0" style={{ color: colors.fg }}>
        {audit.displayValue ?? "—"}
      </span>
    </div>
  );
});

/* ---------------- Main ---------------- */
export default function PerformanceReport() {
  const [url, setUrl] = useState(DEFAULT_URL);
  const [strategy, setStrategy] = useState("mobile");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [checkedAt, setCheckedAt] = useState("");
  const [apiKey, setApiKey] = useState(ENV_API_KEY);
  const [showKeyField, setShowKeyField] = useState(!ENV_API_KEY);

  // Cancel a stale in-flight request if the user fires another one.
  const abortRef = useRef(null);

  const runReport = useCallback(async (targetUrl, targetStrategy, key) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus("loading");
    setError("");
    try {
      const normalized = normalizeUrl(targetUrl);
      const params = new URLSearchParams({ url: normalized, strategy: targetStrategy });
      ["performance", "accessibility", "best-practices", "seo"].forEach((c) => params.append("category", c));
      if (key?.trim()) params.append("key", key.trim());

      const res = await fetch(`${PSI_ENDPOINT}?${params.toString()}`, { signal: controller.signal });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error?.message || `Request failed (${res.status})`);
      }
      if (!data?.lighthouseResult) {
        throw new Error("No Lighthouse result returned for this URL.");
      }

      setResult(data);
      setCheckedAt(fmtTime());
      setStatus("success");
    } catch (e) {
      if (e.name === "AbortError") return; // superseded by a newer request
      const msg = e.message || "Something went wrong fetching live data.";
      if (/quota|blocked/i.test(msg)) setShowKeyField(true);
      setError(msg);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    runReport(DEFAULT_URL, "mobile", ENV_API_KEY);
    return () => abortRef.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lh = result?.lighthouseResult;
  const categories = lh?.categories;
  const audits = lh?.audits;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!url.trim() || status === "loading") return;
      runReport(url, strategy, apiKey);
    },
    [url, strategy, apiKey, status, runReport]
  );

  const isQuotaError = /quota|blocked/i.test(error);

  return (
    <>
      <HeadElement pageurl="performance-reports" pagetitle="PSI Report" pagedescription="Explore detailed PSI performance reports from Abhishek Kumar’s portfolio, highlighting web application speed, accessibility, and optimization insights for React, Blazor, and modern UI/UX projects." />
      <div
        className="min-h-screen w-full bg-[#0B0F14] text-gray-200"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .scan-sweep { position: relative; overflow: hidden; }
        .scan-sweep::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(79,209,197,0.08), transparent);
          animation: sweep 1.8s linear infinite;
        }
      `}</style>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14">
          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5FD57A] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#8e9fb6] uppercase">
                Live diagnostics
              </span>
            </div>
            <p className="font-sans text-lg sm:text-4xl font-semibold tracking-tight text-gray-100">Performance Report</p>
            <p className="text-[#7C8797] text-xs sm:text-sm mt-1.5">
              PageSpeed Insights &amp; Lighthouse, fetched in real time.
            </p>
          </div>

          {/* Console / input bar */}
          <form onSubmit={onSubmit} className="mb-8">
            <div className="relative rounded-xl border border-[#1E2733] bg-[#0E141B] p-1.5 flex flex-col sm:flex-row gap-1.5">
              <div className="flex items-center gap-2 flex-1 px-3.5 py-2.5 rounded-lg bg-[#121821]">
                <span className="font-mono text-[#4FD1C5] text-sm select-none">$</span>
                <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="example.com" aria-label="Website URL to audit" className="bg-transparent outline-none flex-1 font-mono text-sm text-[#E7ECF2] placeholder:text-[#4A5563] min-w-0" spellCheck={false} autoCapitalize="off"autoCorrect="off" />
              </div>
              <div className="flex gap-1.5">
                <div className="flex rounded-lg bg-[#121821] p-1 flex-1 sm:flex-none">
                  {["mobile", "desktop"].map((s) => (
                    <button type="button" key={s} onClick={() => setStrategy(s)} aria-pressed={strategy === s} className={`flex-1 sm:flex-none px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wide transition-colors ${strategy === s ? "bg-[#1E2733] text-[#4FD1C5]" : "text-[#93a5bc] hover:text-[#8996A6]" }`}>
                      {s}
                    </button>
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 sm:px-5 py-2.5 rounded-lg bg-[#4FD1C5] text-[#08110F] text-sm font-semibold hover:bg-[#6BDBD1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === "loading" ? "Running…" : "Run report"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2 px-1 gap-3 flex-wrap">
              {checkedAt && status === "success" ? (
                <p className="font-mono text-[10px] sm:text-[11px] text-[#A0AEC0]">
                  Last checked {checkedAt} · strategy: {strategy}
                </p>
              ) : (
                <span />
              )}
            </div>

            {showKeyField && (
              <div className="mt-2 rounded-lg border border-[#1E2733] bg-[#0E141B] p-3.5">
                <label
                  htmlFor="psi-api-key"
                  className="block font-mono text-[10px] tracking-wide text-[#5B6675] uppercase mb-1.5"
                >
                  Google PageSpeed Insights API key (optional)
                </label>
                <input id="psi-api-key" type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="AIza…"
                  className="w-full bg-[#121821] rounded-md px-3 py-2 font-mono text-xs text-[#E7ECF2] placeholder:text-[#4A5563] outline-none border border-[#1E2733] focus:border-[#4FD1C5]"
                  spellCheck={false}
                  autoComplete="off"
                />
                <p className="text-[11px] text-[#5B6675] mt-2 leading-relaxed">
                  The shared/anonymous quota for this API runs out fast. A free key of your own removes that limit —
                  get one at{" "}
                  <a
                    href="https://developers.google.com/speed/docs/insights/v5/get-started"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4FD1C5] hover:underline"
                  >
                    developers.google.com/speed/docs/insights
                  </a>
                  , enable "PageSpeed Insights API" for your project, then paste the key here. It's kept only in this
                  browser session — never hardcode a key into source code, since it ships to every visitor.
                </p>
              </div>
            )}
          </form>

          {/* Loading state */}
          {status === "loading" && (
            <div className="scan-sweep rounded-xl border border-[#1E2733] bg-[#0E141B] p-8 sm:p-12 flex flex-col items-center gap-4">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#1E2733] border-t-[#4FD1C5] animate-spin"
                role="status"
                aria-label="Loading"
              />
              <p className="font-mono text-[11px] sm:text-xs text-[#5B6675] tracking-wide text-center px-4">
                running audit on {url.replace(/^https?:\/\//, "")}…
              </p>
            </div>
          )}

          {/* Error state */}
          {status === "error" && (
            <div className="rounded-xl border border-[#3A2530] bg-[#1A1216] p-6 sm:p-8 text-center">
              <p className="text-[#F2664F] font-medium mb-1 text-sm sm:text-base">Couldn't fetch a live report</p>
              <p className="text-[#8996A6] text-xs sm:text-sm break-words">{error}</p>
              {isQuotaError ? (
                <p className="text-[#5B6675] text-xs mt-3 font-mono">
                  Add your own API key above, and make sure "PageSpeed Insights API" is enabled for that key's
                  project.
                </p>
              ) : (
                <p className="text-[#5B6675] text-xs mt-3 font-mono">
                  Check the URL is publicly reachable (not localhost), then try again.
                </p>
              )}
            </div>
          )}

          {/* Results */}
          {status === "success" && categories && (
            <div className="space-y-7 sm:space-y-8">
              {/* Gauges */}
              <div className="rounded-xl border border-[#1E2733] bg-[#0E141B] p-5 sm:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {CATEGORY_META.map((c, i) => (
                    <Gauge key={c.key} label={c.label} score={categories[c.key]?.score} delay={i * 120} />
                  ))}
                </div>
              </div>

              {/* Core Web Vitals */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="font-display text-xs sm:text-sm font-semibold tracking-wide text-[#C4CCD8] uppercase">
                    Core Web Vitals
                  </h2>
                  <div className="h-px flex-1 bg-[#1A2230]" />
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {CWV_AUDITS.map((c) => (
                    <CwvCard
                      key={c.key}
                      audit={audits?.[c.key] ? { ...audits[c.key], abbr: c.abbr, label: c.label } : null}
                    />
                  ))}
                </div>
              </div>

              <p className="font-mono text-[10px] text-[#899fbc] text-center pt-2">
                Fetched live from googleapis.com/pagespeedonline/v5 · results may vary run to run
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}