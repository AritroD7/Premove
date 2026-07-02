import { cn } from "@/lib/cn";

type OpeningColor = "white" | "black";

type OpeningChipProps = {
  name: string;
  /** Which side of the board this opening belongs to. */
  color?: OpeningColor;
  /** Optional 0-100 confidence used to tint/label the chip. */
  confidence?: number;
  className?: string;
};

/**
 * A branded repertoire chip (e.g. "Catalan", "Caro-Kann"). Shows a small
 * board-square swatch indicating colour and an optional confidence value.
 */
export function OpeningChip({
  name,
  color = "white",
  confidence,
  className,
}: OpeningChipProps) {
  return (
    <span
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-border bg-background-soft/70 py-1 pl-1.5 pr-3 text-xs font-medium text-secondary transition-colors hover:border-border-strong hover:text-foreground",
        className,
      )}
    >
      <span
        className={cn(
          "grid size-4 place-items-center rounded-[0.3rem] border text-[0.5rem] font-bold",
          color === "white"
            ? "border-white/20 bg-white/85 text-background"
            : "border-white/10 bg-background-deep text-secondary",
        )}
        aria-hidden="true"
      >
        {color === "white" ? "♙" : "♟"}
      </span>
      <span className="whitespace-nowrap">{name}</span>
      {typeof confidence === "number" ? (
        <span
          className={cn(
            "ml-0.5 rounded-full px-1.5 py-0.5 text-[0.6rem] font-semibold",
            confidence >= 75
              ? "bg-emerald/15 text-emerald"
              : confidence >= 65
                ? "bg-teal/15 text-teal"
                : "bg-amber/15 text-amber",
          )}
        >
          {confidence}%
        </span>
      ) : null}
    </span>
  );
}
