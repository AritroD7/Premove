import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { type Accent, accentStyles } from "@/lib/accents";
import { ArrowUpRightIcon, type IconProps } from "@/components/icons";

type FeatureCardProps = {
  title: string;
  icon?: ComponentType<IconProps>;
  eyebrow?: string;
  href?: string;
  action?: string;
  children: ReactNode;
  className?: string;
  /** Feature-specific accent colour used for the icon, line and glow. */
  accent?: Accent;
  /** Visually elevate the card (used for the primary focus card). */
  featured?: boolean;
};

export function FeatureCard({
  title,
  icon: Icon,
  eyebrow,
  href,
  action = "Open",
  children,
  className,
  accent = "emerald",
  featured = false,
}: FeatureCardProps) {
  const a = accentStyles[accent];
  return (
    <section
      className={cn(
        "glass-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300",
        a.border,
        featured && cn("ring-1", a.ring),
        className,
      )}
    >
      {/* Top accent line */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r opacity-70 transition-opacity group-hover:opacity-100",
          a.line,
        )}
      />

      {featured ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 -top-24 h-40",
            a.glow,
          )}
        />
      ) : null}

      <header className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {Icon ? (
            <span
              className={cn(
                "grid size-10 place-items-center rounded-xl border",
                a.iconBg,
                a.text,
              )}
            >
              <Icon width={20} height={20} />
            </span>
          ) : null}
          <div>
            {eyebrow ? (
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
                {eyebrow}
              </p>
            ) : null}
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {title}
            </h3>
          </div>
        </div>
        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-muted-strong transition-colors hover:border-border-strong hover:text-foreground"
          >
            {action}
            <ArrowUpRightIcon width={14} height={14} />
          </Link>
        ) : null}
      </header>

      <div className="relative mt-5 flex-1">{children}</div>
    </section>
  );
}
