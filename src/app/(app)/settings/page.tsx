import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import {
  LockIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
} from "@/components/icons";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <PlaceholderPage
      icon={SettingsIcon}
      accent="teal"
      eyebrow="Account"
      title="Settings"
      description="Preferences and workspace configuration for your private Premove cockpit."
      features={[
        {
          icon: SettingsIcon,
          title: "Workspace",
          body: "Set default board, theme, and preparation preferences.",
        },
        {
          icon: ShieldIcon,
          title: "Privacy",
          body: "Premove is private-first — your prep stays yours.",
        },
        {
          icon: SparklesIcon,
          title: "AI preferences",
          body: "Tune how the future AI coach surfaces insights.",
        },
        {
          icon: LockIcon,
          title: "Account & auth",
          body: "Sign-in and sync arrive with the Supabase integration.",
        },
      ]}
    />
  );
}
