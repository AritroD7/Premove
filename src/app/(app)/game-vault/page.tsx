import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import {
  BrainIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  VaultIcon,
} from "@/components/icons";

export const metadata: Metadata = { title: "Game Vault" };

export default function GameVaultPage() {
  return (
    <PlaceholderPage
      icon={VaultIcon}
      accent="amber"
      eyebrow="Preparation"
      title="Game Vault"
      description="Archive every serious game and turn your own play into a permanent, searchable study set."
      features={[
        {
          icon: VaultIcon,
          title: "Personal archive",
          body: "Import PGNs and keep every tournament game in one private library.",
        },
        {
          icon: BrainIcon,
          title: "Pattern insights",
          body: "Surface recurring mistakes and the structures where you thrive.",
        },
        {
          icon: TrendingUpIcon,
          title: "Result trends",
          body: "Track performance by colour, opening, and time control over time.",
        },
        {
          icon: CheckCircleIcon,
          title: "Annotated reviews",
          body: "Attach notes and critical-moment markers to any position.",
        },
      ]}
    />
  );
}
