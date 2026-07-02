import { cn } from "@/lib/cn";

type ProgressBarProps = {
  value: number; // 0-100
  tone?: "accent" | "gold" | "emerald" | "teal" | "amber";
  className?: string;
};

const toneStyles: Record<NonNullable<ProgressBarProps["tone"]>, string> = {
  accent: "from-emerald to-teal",
  gold: "from-amber/80 to-amber",
  amber: "from-amber/80 to-amber",
  emerald: "from-emerald/80 to-emerald",
  teal: "from-teal/80 to-teal",
};

export function ProgressBar({
  value,
  tone = "accent",
  className,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn(
        "h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]",
        className,
      )}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full bg-gradient-to-r transition-[width] duration-500",
          toneStyles[tone],
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
