import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SparklesIcon } from "@/components/icons";

type BadgeProps = {
  children: ReactNode;
  tone?: "accent" | "emerald" | "teal" | "gold" | "muted";
  className?: string;
};

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  accent: "border-emerald/30 bg-emerald/10 text-emerald",
  emerald: "border-emerald/30 bg-emerald/10 text-emerald",
  teal: "border-teal/30 bg-teal/10 text-teal",
  gold: "border-amber/30 bg-amber/10 text-amber",
  muted: "border-border bg-white/[0.03] text-muted-strong",
};

export function Badge({ children, tone = "muted", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium tracking-wide",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * The signature "Private Alpha" brand badge — a glowing emerald dot,
 * an optional label, and the tier name. Used in the topbar and landing.
 */
export function BrandBadge({
  label = "Private Alpha",
  className,
  compact = false,
}: {
  label?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-emerald/25 bg-emerald/[0.08] px-2.5 py-1 text-[0.7rem] font-medium text-emerald shadow-[0_0_16px_-6px_rgba(52,211,153,0.6)]",
        className,
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald/70" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald" />
      </span>
      {compact ? null : <SparklesIcon width={11} height={11} />}
      {label}
    </span>
  );
}
