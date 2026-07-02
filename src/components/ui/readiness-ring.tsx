import { cn } from "@/lib/cn";

type ReadinessRingProps = {
  value: number; // 0-100
  size?: number;
  label?: string;
  className?: string;
};

/**
 * A compact circular readiness gauge with an emerald→teal sweep and a soft
 * glow — used to visualise tournament prep / repertoire readiness.
 */
export function ReadinessRing({
  value,
  size = 76,
  label = "ready",
  className,
}: ReadinessRingProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (clamped / 100) * circumference;

  return (
    <div
      className={cn("relative inline-grid place-items-center", className)}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${clamped}% ${label}`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#readiness-gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          style={{ filter: "drop-shadow(0 0 6px rgba(52,211,153,0.5))" }}
        />
        <defs>
          <linearGradient id="readiness-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center leading-none">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          {clamped}%
        </span>
        <span className="mt-0.5 text-[0.55rem] uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}
