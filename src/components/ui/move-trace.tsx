import { cn } from "@/lib/cn";

type MoveTraceProps = {
  className?: string;
};

/**
 * Decorative "move-trace" — a faint knight L-path drawn in emerald/teal with
 * an animated dashed glow. Purely ornamental; sits behind card content.
 */
export function MoveTrace({ className }: MoveTraceProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
    >
      <path
        d="M12 68 V28 a10 10 0 0 1 10 -10 H92"
        stroke="url(#trace-stroke)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeDasharray="4 8"
        className="animate-trace"
      />
      <circle cx="12" cy="68" r="3" className="fill-teal/70" />
      <circle cx="92" cy="18" r="3.5" className="fill-emerald" />
      <defs>
        <linearGradient id="trace-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
