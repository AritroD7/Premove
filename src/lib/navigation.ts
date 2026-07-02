import type { ComponentType } from "react";
import {
  BoltIcon,
  BookOpenIcon,
  GraduationCapIcon,
  type IconProps,
  LayoutGridIcon,
  SettingsIcon,
  TargetIcon,
  TrophyIcon,
  VaultIcon,
} from "@/components/icons";

export type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
  description: string;
};

export type NavSection = {
  heading: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    heading: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutGridIcon,
        description: "Your preparation cockpit at a glance",
      },
    ],
  },
  {
    heading: "Preparation",
    items: [
      {
        label: "Game Vault",
        href: "/game-vault",
        icon: VaultIcon,
        description: "Archive and study your own games",
      },
      {
        label: "Opening Vault",
        href: "/opening-vault",
        icon: BookOpenIcon,
        description: "Your living repertoire, White and Black",
      },
      {
        label: "Course Vault",
        href: "/course-vault",
        icon: GraduationCapIcon,
        description: "Structured lessons and study plans",
      },
    ],
  },
  {
    heading: "Competition",
    items: [
      {
        label: "Tournament Mode",
        href: "/tournament",
        icon: TrophyIcon,
        description: "Round-by-round event preparation",
      },
      {
        label: "Opponent Intel",
        href: "/opponent-intel",
        icon: TargetIcon,
        description: "Scout opponents before you play them",
      },
      {
        label: "Pre-Game Boost",
        href: "/pre-game-boost",
        icon: BoltIcon,
        description: "Focused warm-up before the round",
      },
    ],
  },
  {
    heading: "Account",
    items: [
      {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        description: "Preferences and workspace configuration",
      },
    ],
  },
];

export const navItems: NavItem[] = navSections.flatMap((s) => s.items);

export function getNavItem(href: string): NavItem | undefined {
  return navItems.find((item) => item.href === href);
}
