import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { ProgressBar } from "@/components/ui/progress-bar";
import { OpeningChip } from "@/components/ui/opening-chip";
import {
  BookOpenIcon,
  ShieldIcon,
  TargetIcon,
  TrendingUpIcon,
} from "@/components/icons";
import { blackRepertoire, whiteRepertoire } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Opening Vault" };

export default function OpeningVaultPage() {
  return (
    <PlaceholderPage
      icon={BookOpenIcon}
      accent="emerald"
      eyebrow="Preparation"
      title="Opening Vault"
      description="Your living repertoire for both colours — Catalan and 1.c4 with White; Caro-Kann, QGD and Symmetrical English with Black."
      features={[
        {
          icon: BookOpenIcon,
          title: "Dual repertoires",
          body: "Maintain separate, well-structured White and Black repertoires.",
        },
        {
          icon: TargetIcon,
          title: "Confidence tracking",
          body: "Know exactly which lines are sharp and which need a refresh.",
        },
        {
          icon: TrendingUpIcon,
          title: "Move-tree editor",
          body: "Build and prune variations in a clean, visual tree.",
        },
        {
          icon: ShieldIcon,
          title: "Gap detection",
          body: "Spot untested branches before an opponent finds them.",
        },
      ]}
    >
      <div className="flex flex-wrap items-center gap-2">
        {whiteRepertoire.map((line) => (
          <OpeningChip
            key={line.name}
            name={line.name}
            color="white"
            confidence={line.confidence}
          />
        ))}
        {blackRepertoire.map((line) => (
          <OpeningChip
            key={line.name}
            name={line.name}
            color="black"
            confidence={line.confidence}
          />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <RepertoirePanel
          title="White Repertoire"
          lines={whiteRepertoire}
          tone="emerald"
        />
        <RepertoirePanel
          title="Black Repertoire"
          lines={blackRepertoire}
          tone="amber"
        />
      </div>
    </PlaceholderPage>
  );
}

function RepertoirePanel({
  title,
  lines,
  tone,
}: {
  title: string;
  lines: { name: string; detail: string; confidence: number }[];
  tone: "emerald" | "amber";
}) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        <ShieldIcon width={14} height={14} />
        {title}
      </div>
      <ul className="space-y-3">
        {lines.map((line) => (
          <li
            key={line.name}
            className="rounded-xl border border-border bg-background-soft/60 p-4 transition-colors hover:border-border-strong"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-foreground">
                {line.name}
              </p>
              <span className="text-xs font-medium text-secondary">
                {line.confidence}%
              </span>
            </div>
            <p className="mb-2.5 mt-0.5 text-xs text-muted">{line.detail}</p>
            <ProgressBar value={line.confidence} tone={tone} />
          </li>
        ))}
      </ul>
    </div>
  );
}
