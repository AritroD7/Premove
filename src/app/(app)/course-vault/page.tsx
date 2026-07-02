import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import {
  BrainIcon,
  CheckCircleIcon,
  GraduationCapIcon,
  TrendingUpIcon,
} from "@/components/icons";

export const metadata: Metadata = { title: "Course Vault" };

export default function CourseVaultPage() {
  return (
    <PlaceholderPage
      icon={GraduationCapIcon}
      accent="teal"
      eyebrow="Preparation"
      title="Course Vault"
      description="Structured lessons and study plans that build the exact skills your next event demands."
      features={[
        {
          icon: GraduationCapIcon,
          title: "Guided courses",
          body: "Follow curated tracks for openings, endgames, and calculation.",
        },
        {
          icon: CheckCircleIcon,
          title: "Progress tracking",
          body: "Resume any lesson exactly where you left off.",
        },
        {
          icon: BrainIcon,
          title: "Theme drills",
          body: "Reinforce critical-move discipline and clean conversion.",
        },
        {
          icon: TrendingUpIcon,
          title: "Study plans",
          body: "Auto-scheduled sessions in the run-up to each tournament.",
        },
      ]}
    />
  );
}
