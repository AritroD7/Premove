"use client";

import { usePathname } from "next/navigation";
import { getNavItem } from "@/lib/navigation";
import { player } from "@/lib/sample-data";
import { Logo } from "@/components/brand/logo";
import { BrandBadge } from "@/components/ui/badge";
import {
  BellIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";

type TopbarProps = {
  onOpenSidebar: () => void;
};

function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Topbar({ onOpenSidebar }: TopbarProps) {
  const pathname = usePathname();
  const current = getNavItem(pathname);
  const title = current?.label ?? "Dashboard";

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        {/* Mobile menu + logo */}
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="Open navigation"
          className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-white/[0.02] text-muted-strong transition-colors hover:text-foreground lg:hidden"
        >
          <MenuIcon width={18} height={18} />
        </button>

        <div className="lg:hidden">
          <Logo showWordmark={false} />
        </div>

        {/* Page label (desktop) — compact, single row */}
        <div className="hidden min-w-0 items-center gap-2.5 lg:flex">
          <h1 className="truncate text-sm font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          <BrandBadge compact />
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Alpha badge on mobile */}
          <BrandBadge compact className="lg:hidden" />

          {/* Search (desktop) */}
          <div className="hidden items-center gap-2 rounded-xl border border-border bg-white/[0.02] px-3 py-2 text-sm text-muted md:flex">
            <SearchIcon width={16} height={16} />
            <span className="text-xs">Search prep…</span>
            <kbd className="ml-4 rounded border border-border px-1.5 py-0.5 text-[0.6rem] text-muted">
              ⌘K
            </kbd>
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="relative grid size-9 place-items-center rounded-lg border border-border bg-white/[0.02] text-muted-strong transition-colors hover:text-foreground"
          >
            <BellIcon width={18} height={18} />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-emerald" />
          </button>

          {/* Profile / avatar placeholder */}
          <button
            type="button"
            className="flex items-center gap-2.5 rounded-full border border-border bg-white/[0.02] py-1 pl-1 pr-3 transition-colors hover:border-border-strong"
          >
            <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-emerald/40 to-teal/10 text-xs font-semibold text-foreground">
              {initials(player.name)}
            </span>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-xs font-semibold text-foreground">
                {player.name}
              </span>
              <span className="block text-[0.65rem] text-muted">
                {player.title}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
