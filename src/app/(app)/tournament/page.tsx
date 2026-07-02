import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  CheckCircleIcon,
  ClockIcon,
  TargetIcon,
  TrophyIcon,
} from "@/components/icons";
import { activeEvent, tournamentChecklist } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Tournament Mode" };

export default function TournamentPage() {
  const completed = tournamentChecklist.filter((t) => t.done).length;
  const pct = Math.round((completed / tournamentChecklist.length) * 100);

  return (
    <PlaceholderPage
      icon={TrophyIcon}
      accent="teal"
      eyebrow="Competition"
      title="Tournament Mode"
      description={`Round-by-round preparation for ${activeEvent.name} — ${activeEvent.location}, ${activeEvent.rounds} rounds of ${activeEvent.format}.`}
      features={[
        {
          icon: TrophyIcon,
          title: "Event planner",
          body: "Track pairings, colours, and round-by-round prep in one place.",
        },
        {
          icon: TargetIcon,
          title: "Round focus",
          body: "Auto-build a prep pack for each opponent as pairings drop.",
        },
        {
          icon: ClockIcon,
          title: "Schedule aware",
          body: "Prep reminders timed to the real event calendar.",
        },
        {
          icon: CheckCircleIcon,
          title: "Readiness score",
          body: "See exactly how prepared you are before round one.",
        },
      ]}
    >
      <div className="glass-card rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {activeEvent.name}
            </h3>
            <Badge tone="gold">{activeEvent.daysUntil} days out</Badge>
          </div>
          <Badge tone="emerald">{pct}% ready</Badge>
        </div>
        <div className="mt-4">
          <ProgressBar value={pct} tone="emerald" />
        </div>
        <ul className="mt-5 space-y-2.5">
          {tournamentChecklist.map((task) => (
            <li key={task.label} className="flex items-start gap-2.5 text-sm">
              <CheckCircleIcon
                width={16}
                height={16}
                className={
                  task.done
                    ? "mt-0.5 shrink-0 text-emerald"
                    : "mt-0.5 shrink-0 text-muted/50"
                }
              />
              <span
                className={
                  task.done ? "text-muted line-through" : "text-muted-strong"
                }
              >
                {task.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PlaceholderPage>
  );
}
