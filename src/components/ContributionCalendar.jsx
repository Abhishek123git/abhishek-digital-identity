import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";

const COLORS = ["#0d0520", "#3b1278", "#6d28d9", "#8b5cf6", "#c4b5fd"];
const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const SIZE_BREAKPOINTS = [
  { minWidth: 640, cell: 13, gap: 4 },
  { minWidth: 420, cell: 10, gap: 3 },
  { minWidth: 0, cell: 8, gap: 2 },
];

function useResponsiveCellSize() {
  const [size, setSize] = useState(() => {
    if (typeof window === "undefined") return SIZE_BREAKPOINTS[0];
    return (
      SIZE_BREAKPOINTS.find((bp) => window.innerWidth >= bp.minWidth) ??
      SIZE_BREAKPOINTS[SIZE_BREAKPOINTS.length - 1]
    );
  });

  useEffect(() => {
    let frame = null;
    const onResize = () => {
      // rAF-throttle so we don't recompute layout on every resize tick
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const width = window.innerWidth;
        const next =
          SIZE_BREAKPOINTS.find((bp) => width >= bp.minWidth) ??
          SIZE_BREAKPOINTS[SIZE_BREAKPOINTS.length - 1];
        setSize((prev) => (prev.cell === next.cell ? prev : next));
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return size;
}

function toKey(date) {
  return date.toISOString().slice(0, 10);
}

function buildYearGrid(year, data) {
  const jan1 = new Date(Date.UTC(year, 0, 1));
  const dec31 = new Date(Date.UTC(year, 11, 31));
  const firstDow = jan1.getUTCDay(); // 0 = Sun

  const weeks = [];
  const monthStarts = [];
  const seenMonths = new Set();

  for (
    let d = new Date(jan1);
    d <= dec31;
    d.setUTCDate(d.getUTCDate() + 1)
  ) {
    const dow = d.getUTCDay();
    const dayOfYear = Math.floor((d - jan1) / 86400000);
    const weekIndex = Math.floor((dayOfYear + firstDow) / 7);

    if (!weeks[weekIndex]) weeks[weekIndex] = [];
    const key = toKey(d);
    weeks[weekIndex][dow] = { date: key, level: data[key] ?? 0 };

    const monthKey = d.getUTCMonth();
    if (!seenMonths.has(monthKey)) {
      seenMonths.add(monthKey);
      monthStarts.push({ weekIndex, label: MONTH_NAMES[monthKey] });
    }
  }

  return { weeks, monthStarts };
}

function useCellLayout(weeks, cell, gap) {
  return useMemo(() => {
    const step = cell + gap;
    const cells = [];
    for (let w = 0; w < weeks.length; w++) {
      const week = weeks[w];
      if (!week) continue;
      for (let d = 0; d < 7; d++) {
        const entry = week[d];
        if (!entry) continue;
        cells.push({
          key: entry.date,
          date: entry.date,
          level: entry.level,
          x: w * step,
          y: d * step,
        });
      }
    }
    return { cells, step };
  }, [weeks, cell, gap]);
}

const Legend = React.memo(function Legend({ cell }) {
  return (
    <div className="ml-auto flex items-center gap-[3px]">
      <span className="mr-1">Less</span>
      {COLORS.map((c) => (
        <div key={c} className="rounded-[2px]"
          style={{
            width: cell,
            height: cell,
            backgroundColor: c,
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        />
      ))}
      <span className="ml-1">More</span>
    </div>
  );
});

export default function ContributionCalendar({
  years = ["2026", "2025", "2024"],
  dataByYear = {},
  totalsByYear = {},
}) {
  const [activeYear, setActiveYear] = useState(years[0]);
  const [hovered, setHovered] = useState(null); // { date, level }
  const gridRef = useRef(null);

  const { cell: CELL, gap: GAP } = useResponsiveCellSize();

  const { weeks, monthStarts } = useMemo(
    () => buildYearGrid(Number(activeYear), dataByYear[activeYear] ?? {}),
    [activeYear, dataByYear]
  );

  const { cells, step } = useCellLayout(weeks, CELL, GAP);
  const weekCount = weeks.length;
  const total = totalsByYear[activeYear] ?? 0;
 
  const handlePointerMove = useCallback((e) => {
    const target = e.target.closest("[data-date]");
    if (!target) return;
    const { date, level } = target.dataset;
    setHovered((prev) =>
      prev?.date === date ? prev : { date, level: Number(level) }
    );
  }, []);

  const handlePointerLeave = useCallback(() => setHovered(null), []);

  return (
    <section className="flex flex-col justify-center items-center mt-12 sm:mt-20 mb-10 sm:mb-14 space-y-4 px-4">
      <div className="flex flex-col items-center gap-2 mt-6 mb-10 sm:mt-10 sm:mb-20 text-center">
        <p className="rounded-full border text-white py-2 px-6 sm:px-8 text-sm sm:text-base">just a curious developer</p>
        <p className="text-white mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">Crafting Premium Solutions</p>
      </div>

      {/* Year tabs */}
      <div className="flex flex-row flex-wrap gap-2 justify-center my-2 sm:my-4">
        {years.map((y) => {
          const active = y === activeYear;
          return (
            <button key={y} type="button" onClick={() => setActiveYear(y)} aria-pressed={active}
              className={[ "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                active
                  ? "text-white bg-violet-700/55 border-violet-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-slate-400 bg-[#0d0520]/70 border-violet-700/20 hover:text-slate-200",
              ].join(" ")}
            >
              {y}
            </button>
          );
        })}
      </div>

      {/* Card */}
      <div className="w-full flex justify-center">
        <div className="relative p-4 sm:p-8 rounded-2xl w-full max-w-full backdrop-blur-md border border-violet-700/25 shadow-[0_0_0_1px_rgba(107,70,193,0.08),inset_0_1px_0_rgba(159,122,234,0.08),0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <div className="mb-2 h-4 text-center text-xs text-slate-400">
            {hovered
              ? `${hovered.level} contributions on ${hovered.date}`
              : "\u00A0"}
          </div>

          <div className="overflow-x-auto pt-1">
            <div style={{ width: weekCount * step }}>
              {/* month labels */}
              <div className="relative text-[10px] sm:text-xs text-slate-400" style={{ height: 16 }}>
                {monthStarts.map(({ weekIndex, label }, i) => (
                  <span
                    key={i}
                    className="absolute top-0"
                    style={{ left: weekIndex * step }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              
              <div
                ref={gridRef}
                className="relative"
                style={{
                  width: weekCount * step,
                  height: 7 * step,
                  marginTop: 6,
                }}
                onMouseOver={handlePointerMove}
                onMouseLeave={handlePointerLeave}
                onFocus={handlePointerMove}
                role="img"
                aria-label={`${total} contributions in ${activeYear}`}
              >
                {cells.map((c) => (
                  <div
                    key={c.key}
                    data-date={c.date}
                    data-level={c.level}
                    tabIndex={-1}
                    className="absolute rounded-[2px]"
                    style={{
                      left: c.x,
                      top: c.y,
                      width: CELL,
                      height: CELL,
                      backgroundColor: COLORS[c.level] ?? COLORS[0],
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs whitespace-nowrap text-slate-400">
            <span>
              {total} contributions in {activeYear}
            </span>
            <Legend cell={CELL} />
          </div>
        </div>
      </div>
    </section>
  );
}