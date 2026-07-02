import type { ComponentType, ReactNode } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { BrandBadge } from "@/components/ui/badge";
import { MoveTrace } from "@/components/ui/move-trace";
import { type Accent, accentStyles } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { LockIcon, type IconProps } from "@/components/icons";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  /** Section accent used for the hero glow and icon tile. */
  accent?: Accent;
  /** Upcoming capabilities to preview for this section. */
  features: { title: string; body: string; icon: ComponentType<IconProps> }[];
  children?: ReactNode;
};

const featureCycle: Accent[] = ["emerald", "teal", "amber"];

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  accent = "emerald",
  features,
  children,
}: PlaceholderPageProps) {
  const a = accentStyles[accent];
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={<BrandBadge />}
      />

      {/* Hero banner */}
      <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div
          aria-hidden
          className="chessboard-texture pointer-events-none absolute inset-0 opacity-70"
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 -top-24 h-48",
            a.glow,
          )}
        />
        <MoveTrace className="right-4 top-6 hidden h-24 w-40 opacity-60 md:block" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "grid size-14 shrink-0 place-items-center rounded-2xl border",
                a.iconBg,
                a.text,
              )}
            >
              <Icon width={26} height={26} />
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h2>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-secondary">
                This module is scaffolded and ready. Live functionality lands in
                an upcoming Premove phase.
              </p>
            </div>
          </div>
          <button
            type="button"
            disabled
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-muted"
          >
            <LockIcon width={16} height={16} />
            Coming soon
          </button>
        </div>
      </div>

      {/* Feature preview grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const FeatureIcon = feature.icon;
          const fa = accentStyles[featureCycle[i % featureCycle.length]];
          return (
            <div
              key={feature.title}
              className={cn(
                "glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
                fa.border,
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r opacity-70 transition-opacity group-hover:opacity-100",
                  fa.line,
                )}
              />
              <span
                className={cn(
                  "grid size-10 place-items-center rounded-xl border",
                  fa.iconBg,
                  fa.text,
                )}
              >
                <FeatureIcon width={20} height={20} />
              </span>
              <h3 className="mt-4 text-sm font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {feature.body}
              </p>
            </div>
          );
        })}
      </div>

      {children}
    </div>
  );
}
