import type { ComponentType } from "react";
import { cn } from "@/lib/cn";
import { type Accent, accentStyles } from "@/lib/accents";
import type { IconProps } from "@/components/icons";

type SectionLabelProps = {
  icon?: ComponentType<IconProps>;
  label: string;
  /** Accent colour for the icon. */
  accent?: Accent;
  className?: string;
};

/**
 * A lightweight labelled divider used to group related cards into sections.
 * Full-width by default so it can span a grid row via `col-span` utilities.
 */
export function SectionLabel({
  icon: Icon,
  label,
  accent = "emerald",
  className,
}: SectionLabelProps) {
  const a = accentStyles[accent];
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {Icon ? (
        <span className={cn("shrink-0", a.text)}>
          <Icon width={15} height={15} />
        </span>
      ) : null}
      <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
        {label}
      </span>
      <span
        aria-hidden
        className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent"
      />
    </div>
  );
}
