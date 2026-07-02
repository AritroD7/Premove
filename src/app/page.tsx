import Link from "next/link";
import { Logo, LogoLockup } from "@/components/brand/logo";
import { BrandBadge } from "@/components/ui/badge";
import { OpeningChip } from "@/components/ui/opening-chip";
import { MoveTrace } from "@/components/ui/move-trace";
import { type Accent, accentStyles } from "@/lib/accents";
import { cn } from "@/lib/cn";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BoltIcon,
  BookOpenIcon,
  LayoutGridIcon,
  TargetIcon,
  TrophyIcon,
  VaultIcon,
} from "@/components/icons";

const previews: {
  href: string;
  icon: typeof VaultIcon;
  title: string;
  body: string;
  accent: Accent;
}[] = [
  {
    href: "/dashboard",
    icon: LayoutGridIcon,
    title: "Dashboard",
    body: "Your command center — focus, readiness, repertoire and lessons at a glance.",
    accent: "emerald",
  },
  {
    href: "/opening-vault",
    icon: BookOpenIcon,
    title: "Opening Vault",
    body: "A repertoire that breathes — Catalan, Caro-Kann, QGD and more, with confidence tracking.",
    accent: "emerald",
  },
  {
    href: "/game-vault",
    icon: VaultIcon,
    title: "Game Vault",
    body: "Archive every serious game and turn your own play into a living study set.",
    accent: "amber",
  },
  {
    href: "/tournament",
    icon: TrophyIcon,
    title: "Tournament Mode",
    body: "Round-by-round preparation built for the pressure of a real event.",
    accent: "teal",
  },
  {
    href: "/opponent-intel",
    icon: TargetIcon,
    title: "Opponent Intel",
    body: "Scout your next opponent's habits and walk to the board already knowing the plan.",
    accent: "teal",
  },
  {
    href: "/pre-game-boost",
    icon: BoltIcon,
    title: "Pre-Game Boost",
    body: "A calm, focused pre-round routine to arrive sharp and ready for move one.",
    accent: "amber",
  },
];

const heroOpenings: { name: string; color: "white" | "black" }[] = [
  { name: "Catalan", color: "white" },
  { name: "1.c4", color: "white" },
  { name: "Caro-Kann", color: "black" },
  { name: "QGD", color: "black" },
  { name: "Symmetrical English", color: "black" },
];

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-3">
            <BrandBadge className="hidden sm:inline-flex" />
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-teal px-4 py-2 text-sm font-semibold text-background shadow-lg shadow-emerald/20 transition-transform hover:scale-[1.02]"
            >
              Enter Cockpit
              <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
        <div
          aria-hidden
          className="chessboard-texture pointer-events-none absolute inset-0 -z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(45,212,191,0.12),transparent)]"
        />
        <MoveTrace className="left-1/2 top-24 hidden h-64 w-64 -translate-x-1/2 opacity-40 sm:block" />

        <div className="animate-rise">
          <LogoLockup width={320} priority className="mx-auto" />
        </div>

        <div className="animate-rise mt-7">
          <BrandBadge />
        </div>

        <h1 className="animate-rise mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Prepare before{" "}
          <span className="bg-gradient-to-r from-emerald via-foreground to-amber bg-clip-text text-transparent">
            move one.
          </span>
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-balance text-lg leading-relaxed text-secondary">
          Premove is a premium, private-first preparation cockpit for serious
          tournament players. Build repertoires, scout opponents, and turn
          preparation into an edge — long before the first pawn is pushed.
        </p>
        <div className="animate-rise mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald to-teal px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-emerald/25 transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Enter Dashboard
            <ArrowRightIcon width={16} height={16} />
          </Link>
          <Link
            href="#prep-system"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-white/[0.02] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.05] sm:w-auto"
          >
            View Prep System
          </Link>
        </div>

        {/* Repertoire chips */}
        <div className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-2">
          {heroOpenings.map((o) => (
            <OpeningChip key={o.name} name={o.name} color={o.color} />
          ))}
        </div>

        {/* Preview strip */}
        <div className="animate-rise mt-16 w-full">
          <div className="glass-card rounded-3xl p-2 shadow-2xl shadow-black/40">
            <div className="grid gap-2 rounded-2xl bg-background/40 p-4 sm:grid-cols-3">
              {[
                { label: "Prep readiness", value: "74%", tone: "text-emerald" },
                {
                  label: "Repertoire lines",
                  value: "5",
                  tone: "text-teal",
                },
                { label: "Games archived", value: "312", tone: "text-amber" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-white/[0.02] p-5 text-left"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {stat.label}
                  </p>
                  <p className={`mt-2 text-3xl font-semibold ${stat.tone}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prep system preview cards */}
      <section
        id="prep-system"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 pb-24 sm:px-6"
      >
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal/80">
            One cockpit for everything
          </p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Preparation, refined into a system
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-sm leading-relaxed text-muted">
            Six connected surfaces — one calm, private workspace built for the
            week before the event.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((item) => {
            const Icon = item.icon;
            const a = accentStyles[item.accent];
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "glass-card group relative overflow-hidden rounded-2xl p-6 transition-colors",
                  a.border,
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-70",
                    a.line,
                  )}
                />
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-xl border",
                      a.iconBg,
                      a.text,
                    )}
                  >
                    <Icon width={22} height={22} />
                  </span>
                  <ArrowUpRightIcon
                    width={18}
                    height={18}
                    className="text-muted transition-colors group-hover:text-foreground"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(52,211,153,0.22),transparent)]"
          />
          <h2 className="relative text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The Canada Open is 12 days out.
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-balance text-secondary">
            Your repertoire, opponent notes, and pre-game routine — all in one
            calm, focused workspace.
          </p>
          <Link
            href="/dashboard"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-teal px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-emerald/25 transition-transform hover:scale-[1.02]"
          >
            Open your dashboard
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Logo />
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Premove · premove.org — Private Alpha
          </p>
        </div>
      </footer>
    </div>
  );
}
