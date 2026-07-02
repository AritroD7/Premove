import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionLabel } from "@/components/ui/section-label";
import { StatCard } from "@/components/ui/stat-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { Badge } from "@/components/ui/badge";
import { OpeningChip } from "@/components/ui/opening-chip";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ReadinessRing } from "@/components/ui/readiness-ring";
import { MoveTrace } from "@/components/ui/move-trace";
import {
  BoltIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  CrownIcon,
  FlameIcon,
  GraduationCapIcon,
  ShieldIcon,
  TargetIcon,
  TrophyIcon,
  VaultIcon,
} from "@/components/icons";
import {
  activeEvent,
  blackRepertoire,
  dashboardStats,
  player,
  recentLessons,
  trainingThemes,
  tournamentChecklist,
  whiteRepertoire,
} from "@/lib/sample-data";
import type { Accent } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Dashboard",
};

const statMeta: { icon: typeof FlameIcon; accent: Accent }[] = [
  { icon: FlameIcon, accent: "emerald" },
  { icon: BookOpenIcon, accent: "teal" },
  { icon: VaultIcon, accent: "amber" },
  { icon: CheckCircleIcon, accent: "emerald" },
];

export default function DashboardPage() {
  const completed = tournamentChecklist.filter((t) => t.done).length;
  const checklistPct = Math.round(
    (completed / tournamentChecklist.length) * 100,
  );

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <SectionHeader
        eyebrow={`${activeEvent.daysUntil} days to ${activeEvent.name}`}
        title={`Welcome back, ${player.name}`}
        description="Your preparation cockpit. Everything you need to walk into the next round ready."
        action={
          <Link
            href="/tournament"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-teal px-4 py-2 text-sm font-semibold text-background shadow-lg shadow-emerald/20 transition-transform hover:scale-[1.02]"
          >
            <TrophyIcon width={16} height={16} />
            Tournament Mode
          </Link>
        }
      />

      {/* Repertoire chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Repertoire
        </span>
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

      {/* Stat row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, i) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            trend={stat.trend}
            positive={stat.positive}
            icon={statMeta[i].icon}
            accent={statMeta[i].accent}
          />
        ))}
      </div>

      {/* Card grid — grouped sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* D. Focus & readiness */}
        <SectionLabel
          icon={CrownIcon}
          label="Focus & readiness"
          accent="emerald"
          className="lg:col-span-2"
        />
        {/* Current Focus — featured, spans wide */}
        <FeatureCard
          title="Current Focus"
          eyebrow="This week"
          icon={CrownIcon}
          href="/course-vault"
          action="Study plan"
          accent="emerald"
          featured
          className="lg:col-span-2"
        >
          <MoveTrace className="right-2 top-2 hidden h-20 w-32 opacity-70 sm:block" />
          <div className="relative space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="gold">{activeEvent.name} preparation</Badge>
              <Badge tone="muted">{activeEvent.format}</Badge>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-secondary">
              Lock in the key habits before {activeEvent.name}. Sharpen the
              lines you will actually face and rehearse the decisions that
              decide games.
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-3">
              {trainingThemes.map((theme) => (
                <li
                  key={theme.title}
                  className="rounded-xl border border-border bg-background-soft/60 p-3.5 transition-colors hover:border-emerald/25"
                >
                  <div className="flex items-center gap-2 text-emerald">
                    <TargetIcon width={16} height={16} />
                    <span className="text-sm font-semibold text-foreground">
                      {theme.title}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {theme.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FeatureCard>

        {/* Tournament Prep */}
        <FeatureCard
          title="Tournament Prep"
          eyebrow={activeEvent.location}
          icon={TrophyIcon}
          href="/tournament"
          action="Open"
          accent="teal"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {activeEvent.daysUntil}
                  <span className="ml-1 text-sm font-medium text-muted">
                    days out
                  </span>
                </p>
                <p className="mt-1 text-xs text-muted">
                  {activeEvent.rounds} rounds · {activeEvent.status}
                </p>
              </div>
              <ReadinessRing value={checklistPct} />
            </div>
            <ul className="space-y-2">
              {tournamentChecklist.map((task) => (
                <li
                  key={task.label}
                  className="flex items-start gap-2.5 text-sm"
                >
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
                      task.done ? "text-muted line-through" : "text-secondary"
                    }
                  >
                    {task.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FeatureCard>

        {/* Pre-Game Boost */}
        <FeatureCard
          title="Pre-Game Boost"
          eyebrow="Round-day warm-up"
          icon={BoltIcon}
          href="/pre-game-boost"
          action="Start"
          accent="amber"
        >
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-secondary">
              A focused 15-minute routine to prime your calculation and settle
              your nerves before the round.
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Tactics primer", meta: "5 sharp puzzles" },
                { label: "Repertoire refresh", meta: "Today's likely lines" },
                { label: "Mindset reset", meta: "Breathing + intent" },
              ].map((step) => (
                <li
                  key={step.label}
                  className="flex items-center justify-between rounded-xl border border-border bg-background-soft/60 px-3.5 py-3 transition-colors hover:border-amber/25"
                >
                  <span className="text-sm font-medium text-foreground">
                    {step.label}
                  </span>
                  <span className="text-xs text-muted">{step.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </FeatureCard>

        {/* E. Repertoire health */}
        <SectionLabel
          icon={ShieldIcon}
          label="Repertoire health"
          accent="teal"
          className="mt-2 lg:col-span-2"
        />
        {/* Opening Confidence */}
        <FeatureCard
          title="Opening Confidence"
          eyebrow="Repertoire health"
          icon={BookOpenIcon}
          href="/opening-vault"
          action="Repertoire"
          accent="emerald"
          className="lg:col-span-2"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <ShieldIcon width={14} height={14} />
                White
              </div>
              {whiteRepertoire.map((line) => (
                <RepertoireRow key={line.name} line={line} tone="emerald" />
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <ShieldIcon width={14} height={14} />
                Black
              </div>
              {blackRepertoire.map((line) => (
                <RepertoireRow key={line.name} line={line} tone="amber" />
              ))}
            </div>
          </div>
        </FeatureCard>

        {/* F. Review & learning */}
        <SectionLabel
          icon={GraduationCapIcon}
          label="Review & learning"
          accent="amber"
          className="mt-2 lg:col-span-2"
        />
        {/* Recent Lessons */}
        <FeatureCard
          title="Recent Lessons"
          eyebrow="Pick up where you left off"
          icon={GraduationCapIcon}
          href="/course-vault"
          action="Courses"
          accent="teal"
        >
          <ul className="space-y-3">
            {recentLessons.map((lesson) => (
              <li
                key={lesson.title}
                className="rounded-xl border border-border bg-background-soft/60 p-4 transition-colors hover:border-teal/25"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {lesson.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {lesson.category}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs text-muted">
                    <ClockIcon width={13} height={13} />
                    {lesson.duration}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <ProgressBar value={lesson.progress} tone="teal" />
                  <span className="text-xs font-medium text-secondary">
                    {lesson.progress}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </FeatureCard>

        {/* Game Vault */}
        <FeatureCard
          title="Game Vault"
          eyebrow="Learn from yourself"
          icon={VaultIcon}
          href="/game-vault"
          action="Browse"
          accent="amber"
        >
          <div className="space-y-4">
            <div className="flex items-end gap-2">
              <p className="text-3xl font-semibold tracking-tight text-foreground">
                312
              </p>
              <p className="pb-1 text-xs text-muted">games archived</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { label: "Wins", value: "58%", tone: "text-emerald" },
                { label: "Draws", value: "27%", tone: "text-secondary" },
                { label: "Losses", value: "15%", tone: "text-danger" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-background-soft/60 py-2.5"
                >
                  <p className={`text-sm font-semibold ${s.tone}`}>{s.value}</p>
                  <p className="text-[0.65rem] uppercase tracking-wide text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-muted">
              Rating {player.rating}{" "}
              <span className="text-emerald">+{player.ratingDelta}</span> over
              the last two events.
            </p>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
}

function RepertoireRow({
  line,
  tone,
}: {
  line: { name: string; detail: string; confidence: number };
  tone: "emerald" | "amber";
}) {
  return (
    <div className="rounded-xl border border-border bg-background-soft/60 p-3 transition-colors hover:border-border-strong">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-foreground">{line.name}</p>
        <span className="text-xs font-medium text-secondary">
          {line.confidence}%
        </span>
      </div>
      <p className="mb-2 mt-0.5 truncate text-xs text-muted">{line.detail}</p>
      <ProgressBar value={line.confidence} tone={tone} />
    </div>
  );
}
