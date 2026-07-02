import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import {
  BookOpenIcon,
  BrainIcon,
  ShieldIcon,
  TargetIcon,
} from "@/components/icons";

export const metadata: Metadata = { title: "Opponent Intel" };

export default function OpponentIntelPage() {
  return (
    <PlaceholderPage
      icon={TargetIcon}
      accent="emerald"
      eyebrow="Competition"
      title="Opponent Intel"
      description="Scout your next opponent before you sit down — their openings, tendencies, and the lines they'd rather avoid."
      features={[
        {
          icon: BookOpenIcon,
          title: "Opening profile",
          body: "See what they play with both colours and how often.",
        },
        {
          icon: BrainIcon,
          title: "Tendency map",
          body: "Identify pet lines, time-trouble habits, and weak structures.",
        },
        {
          icon: TargetIcon,
          title: "Targeted prep",
          body: "Generate a focused plan aimed at their soft spots.",
        },
        {
          icon: ShieldIcon,
          title: "Counter-prep guard",
          body: "Prepare surprises while covering your own likely repertoire.",
        },
      ]}
    />
  );
}
