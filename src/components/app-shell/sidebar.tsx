"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { navSections } from "@/lib/navigation";
import { Logo } from "@/components/brand/logo";
import { LockIcon, SparklesIcon } from "@/components/icons";

type SidebarProps = {
  onNavigate?: () => void;
  className?: string;
};

export function Sidebar({ onNavigate, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 border-r border-border bg-background-elevated/60 px-4 py-6 backdrop-blur-xl",
        className,
      )}
    >
      <div className="px-2">
        <Logo />
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto">
        {navSections.map((section) => (
          <div key={section.heading} className="space-y-1.5">
            <p className="px-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted/70">
              {section.heading}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-white/[0.06] text-foreground"
                          : "text-muted hover:bg-white/[0.03] hover:text-foreground",
                      )}
                    >
                      {active ? (
                        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-emerald to-teal" />
                      ) : null}
                      <Icon
                        width={18}
                        height={18}
                        className={cn(
                          "shrink-0 transition-colors",
                          active
                            ? "text-emerald"
                            : "text-muted group-hover:text-foreground",
                        )}
                      />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="glass-card space-y-3 rounded-2xl p-4">
        <div className="flex items-center gap-2 text-teal">
          <SparklesIcon width={16} height={16} />
          <span className="text-xs font-semibold tracking-wide text-foreground">
            AI Coach
          </span>
        </div>
        <p className="text-xs leading-relaxed text-muted">
          Personalised prep insights arrive in a future release.
        </p>
        <button
          type="button"
          disabled
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-white/[0.02] px-3 py-2 text-xs font-medium text-muted"
        >
          <LockIcon width={14} height={14} />
          Coming soon
        </button>
      </div>
    </div>
  );
}
