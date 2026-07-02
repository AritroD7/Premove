/**
 * Shared accent tokens for branded surfaces (cards, chips, glows).
 * Keeps per-feature colour treatments consistent and typed.
 */
export type Accent = "emerald" | "teal" | "amber";

type AccentStyle = {
  /** Icon / text colour class. */
  text: string;
  /** Soft tinted background for icon tiles. */
  iconBg: string;
  /** Border used on hover / for the accent line. */
  border: string;
  /** Gradient stops for the top accent line. */
  line: string;
  /** Radial glow (as an arbitrary bg value) for featured surfaces. */
  glow: string;
  /** Ring colour for featured cards. */
  ring: string;
};

export const accentStyles: Record<Accent, AccentStyle> = {
  emerald: {
    text: "text-emerald",
    iconBg: "bg-emerald/10 border-emerald/25",
    border: "hover:border-emerald/30",
    line: "from-emerald/0 via-emerald/70 to-emerald/0",
    glow: "bg-[radial-gradient(60%_100%_at_50%_0%,rgba(52,211,153,0.2),transparent)]",
    ring: "ring-emerald/25",
  },
  teal: {
    text: "text-teal",
    iconBg: "bg-teal/10 border-teal/25",
    border: "hover:border-teal/30",
    line: "from-teal/0 via-teal/70 to-teal/0",
    glow: "bg-[radial-gradient(60%_100%_at_50%_0%,rgba(45,212,191,0.2),transparent)]",
    ring: "ring-teal/25",
  },
  amber: {
    text: "text-amber",
    iconBg: "bg-amber/10 border-amber/25",
    border: "hover:border-amber/30",
    line: "from-amber/0 via-amber/70 to-amber/0",
    glow: "bg-[radial-gradient(60%_100%_at_50%_0%,rgba(242,200,121,0.18),transparent)]",
    ring: "ring-amber/25",
  },
};
