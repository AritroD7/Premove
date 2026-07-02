import type { ComponentType } from "react";
import { cn } from "@/lib/cn";
import { type Accent, accentStyles } from "@/lib/accents";
import { TrendingUpIcon, type IconProps } from "@/components/icons";

type StatCardProps = {
  label: string;
  value: string;
  trend?: string;
  positive?: boolean;
  icon?: ComponentType<IconProps>;
  accent?: Accent;
  className?: string;
};

export function StatCard({
  label,
  value,
  trend,
  positive = true,
  icon: Icon,
  accent = "emerald",
  className,
}: StatCardProps) {
  const a = accentStyles[accent];
  return (
    <div
      className={cn(
        "glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300",
        a.border,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-5 left-0 w-px bg-gradient-to-b opacity-70",
          a.line,
        )}
      />
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-secondary">{label}</p>
        {Icon ? (
          <span
            className={cn(
              "grid size-9 place-items-center rounded-lg border",
              a.iconBg,
              a.text,
            )}
          >
            <Icon width={18} height={18} />
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
      {trend ? (
        <div
          className={cn(
            "mt-2 inline-flex items-center gap-1.5 text-xs font-medium",
            positive ? "text-emerald" : "text-amber",
          )}
        >
          <TrendingUpIcon
            width={14}
            height={14}
            className={cn(!positive && "rotate-90")}
          />
          <span>{trend}</span>
        </div>
      ) : null}
    </div>
  );
}
