import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import {
  BoltIcon,
  BookOpenIcon,
  BrainIcon,
  FlameIcon,
} from "@/components/icons";

export const metadata: Metadata = { title: "Pre-Game Boost" };

export default function PreGameBoostPage() {
  return (
    <PlaceholderPage
      icon={BoltIcon}
      accent="amber"
      eyebrow="Competition"
      title="Pre-Game Boost"
      description="A focused round-day warm-up to prime your calculation and settle your nerves before the first move."
      features={[
        {
          icon: FlameIcon,
          title: "Tactics primer",
          body: "A short, sharp puzzle set tuned to warm up your vision.",
        },
        {
          icon: BookOpenIcon,
          title: "Repertoire refresh",
          body: "Quick review of the lines you're most likely to face today.",
        },
        {
          icon: BrainIcon,
          title: "Mindset reset",
          body: "Breathing and intent-setting to walk in calm and focused.",
        },
        {
          icon: BoltIcon,
          title: "15-minute routine",
          body: "A time-boxed flow designed for the minutes before the round.",
        },
      ]}
    />
  );
}
