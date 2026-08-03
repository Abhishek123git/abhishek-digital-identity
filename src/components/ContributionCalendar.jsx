import React, { useMemo, useState } from "react";
const COLORS = ["#0d0520", "#3b1278", "#6d28d9", "#8b5cf6", "#c4b5fd"];
const CELL = 13; // px
const GAP = 4; // px
const STEP = CELL + GAP; // column/row pitch
const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function toKey(date) {
  return date.toISOString().slice(0, 10);
}

// Build the week/day grid for a given year, GitHub-style:
// weeks run Sunday -> Saturday, first week only shows days from Jan 1 onward.
function buildYearGrid(year, data) {
  const jan1 = new Date(Date.UTC(year, 0, 1));
  const dec31 = new Date(Date.UTC(year, 11, 31));

  const days = [];
  for (let d = new Date(jan1); d <= dec31; d.setUTCDate(d.getUTCDate() + 1)) {
    days.push(new Date(d));
  }

  // week index 0 = the Sunday-starting week that contains Jan 1
  const firstDow = jan1.getUTCDay(); // 0 = Sun
  const weeks = [];
  const monthStarts = []; // { weekIndex, label }
  let seenMonths = new Set();

  days.forEach((date) => {
    const dow = date.getUTCDay();
    const dayOfYear = Math.floor((date - jan1) / 86400000);
    const weekIndex = Math.floor((dayOfYear + firstDow) / 7);

    if (!weeks[weekIndex]) weeks[weekIndex] = [];
    const key = toKey(date);
    weeks[weekIndex][dow] = { date: key, level: data[key] ?? 0 };

    const monthKey = date.getUTCMonth();
    if (!seenMonths.has(monthKey)) {
      seenMonths.add(monthKey);
      monthStarts.push({ weekIndex, label: MONTH_NAMES[monthKey] });
    }
  });

  return { weeks, monthStarts };
}

export default function ContributionCalendar({
  years = ["2026", "2025", "2024"],
  dataByYear = {},
  totalsByYear = {},
}) {
  const [activeYear, setActiveYear] = useState(years[0]);
  const [hovered, setHovered] = useState(null); // { date, level }

  const { weeks, monthStarts } = useMemo(
    () => buildYearGrid(Number(activeYear), dataByYear[activeYear] ?? {}),
    [activeYear, dataByYear]
  );

  const total = totalsByYear[activeYear] ?? 0;
  const weekCount = weeks.length;

  return (
    <section className="flex flex-col justify-center items-center mt-20 mb-14 space-y-4">
        <div className="flex flex-col items-center gap-2 mt-10 mb-20">
            <p className="rounded-full border text-white py-2 px-8">just a curious developer</p>
            <p className="text-center text-7xl text-white mt-2">
               Crafting Premium Solutions
            </p>
        </div>
      {/* Year tabs */}
      <div className="flex flex-row flex-wrap gap-2 justify-center my-4">
        {years.map((y) => {
          const active = y === activeYear;
          return (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={[
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border",
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
      <div className="inline-block">
        <div className="relative p-8 rounded-2xl w-full backdrop-blur-md border border-violet-700/25 shadow-[0_0_0_1px_rgba(107,70,193,0.08),inset_0_1px_0_rgba(159,122,234,0.08),0_8px_32px_rgba(0,0,0,0.4)]">
          {/* top hairline glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          {/* tooltip line */}
          <div className="mb-2 h-4 text-center text-xs text-slate-400">
            {hovered ? `${hovered.level} contributions on ${hovered.date}` : "\u00A0"}
          </div>

          <div className="overflow-x-auto pt-1">
            <div>
              {/* month labels */}
              <div
                className="relative text-xs text-slate-400"
                style={{ height: 16, width: weekCount * STEP }}
              >
                {monthStarts.map(({ weekIndex, label }, i) => (
                  <span
                    key={i}
                    className="absolute top-0"
                    style={{ left: weekIndex * STEP }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* grid */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${weekCount}, ${CELL}px)`,
                  gridTemplateRows: `repeat(7, ${CELL}px)`,
                  gridAutoFlow: "column",
                  gap: GAP,
                  marginTop: 6,
                }}
              >
                {weeks.map((week, w) =>
                  Array.from({ length: 7 }).map((_, d) => {
                    const cell = week?.[d];
                    if (!cell) return <div key={`${w}-${d}`} />;
                    return (
                      <div
                        key={`${w}-${d}`}
                        onMouseEnter={() => setHovered(cell)}
                        onMouseLeave={() => setHovered(null)}
                        className="rounded-[2px]"
                        style={{
                          width: CELL,
                          height: CELL,
                          backgroundColor: COLORS[cell.level] ?? COLORS[0],
                          border: "1px solid rgba(255,255,255,0.04)",
                        }}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs whitespace-nowrap text-slate-400">
            <span>{total} contributions in {activeYear}</span>
            <div className="ml-auto flex items-center gap-[3px]">
              <span className="mr-1">Less</span>
              {COLORS.map((c) => (
                <div
                  key={c}
                  className="rounded-[2px]"
                  style={{
                    width: CELL,
                    height: CELL,
                    backgroundColor: c,
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                />
              ))}
              <span className="ml-1">More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}