/**
 * Static sample content for the Premove private alpha.
 * This is placeholder data only — no backend, no persistence.
 * Replace with live data once Supabase and the engine layer land.
 */

export const player = {
  name: "Aritro",
  handle: "@aritro",
  title: "Tournament Player",
  rating: 2114,
  ratingDelta: 38,
};

export const activeEvent = {
  name: "Canada Open",
  location: "Toronto, ON",
  daysUntil: 12,
  rounds: 9,
  format: "Classical · 90+30",
  status: "Preparing",
};

export type RepertoireLine = {
  name: string;
  detail: string;
  confidence: number; // 0-100
};

export const whiteRepertoire: RepertoireLine[] = [
  {
    name: "Catalan",
    detail: "Main workhorse · open & closed systems",
    confidence: 82,
  },
  {
    name: "1.c4 Simplified",
    detail: "Low-theory English backup",
    confidence: 68,
  },
];

export const blackRepertoire: RepertoireLine[] = [
  {
    name: "Caro-Kann",
    detail: "vs 1.e4 · solid main lines",
    confidence: 79,
  },
  {
    name: "Queen's Gambit Declined",
    detail: "vs 1.d4 · classical structures",
    confidence: 74,
  },
  {
    name: "Symmetrical English",
    detail: "vs 1.c4 / 1.Nf3 · flexible setups",
    confidence: 61,
  },
];

export type TrainingTheme = {
  title: string;
  note: string;
};

export const trainingThemes: TrainingTheme[] = [
  {
    title: "Critical move discipline",
    note: "Slow down and calculate at the true turning points.",
  },
  {
    title: "Active rook conversion",
    note: "Convert winning endgames with rooks on the 7th.",
  },
  {
    title: "Don't simplify too early",
    note: "Keep tension when the position is in your favour.",
  },
];

export type Lesson = {
  title: string;
  category: string;
  progress: number; // 0-100
  duration: string;
};

export const recentLessons: Lesson[] = [
  {
    title: "Catalan: Closed Center Plans",
    category: "White Repertoire",
    progress: 72,
    duration: "18 min left",
  },
  {
    title: "Caro-Kann: Advance Variation Structures",
    category: "Black Repertoire",
    progress: 45,
    duration: "26 min left",
  },
  {
    title: "Rook Endgames: The Active Defence",
    category: "Endgame Technique",
    progress: 90,
    duration: "6 min left",
  },
];

export type PrepTask = {
  label: string;
  done: boolean;
};

export const tournamentChecklist: PrepTask[] = [
  { label: "Confirm White repertoire vs 1.e4 responders", done: true },
  { label: "Review Caro-Kann Advance sidelines", done: true },
  { label: "Scout board-1 seeds & anti-Catalan setups", done: false },
  { label: "Build round-1 pre-game boost pack", done: false },
];

export const dashboardStats = [
  {
    label: "Prep readiness",
    value: "74%",
    trend: "+6% this week",
    positive: true,
  },
  {
    label: "Repertoire coverage",
    value: "5 lines",
    trend: "2 need review",
    positive: false,
  },
  {
    label: "Games archived",
    value: "312",
    trend: "+9 recent",
    positive: true,
  },
  {
    label: "Study streak",
    value: "11 days",
    trend: "Personal best",
    positive: true,
  },
];
