import { useState, useEffect } from "react";
import { Monitor, Smartphone } from "lucide-react";

const BREAKPOINT = 768;

function detectMobile() {
  if (typeof window === "undefined") return false;

  const uaMobile = /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(
    navigator.userAgent
  );
  const narrowViewport = window.innerWidth < BREAKPOINT;
  const coarsePointer = window.matchMedia?.(
    "(pointer: coarse)"
  )?.matches;

  const signals = [uaMobile, narrowViewport, coarsePointer].filter(
    Boolean
  ).length;

  return signals >= 2;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(detectMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(detectMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function DesktopOnlyGate({ children }) {
  const isMobile = useIsMobile();

  if (!isMobile) return children;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm px-6">
      <div className="max-w-sm w-full rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center shadow-2xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-800">
          <Monitor className="h-7 w-7 text-neutral-200" strokeWidth={1.5} />
        </div>

        <h2 className="text-lg font-semibold text-neutral-50">
          Desktop required
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          This app isn't optimized for mobile yet. Please switch to a
          desktop or laptop browser to continue.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <Smartphone className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>Mobile view is currently unsupported</span>
        </div>
      </div>
    </div>
  );
}