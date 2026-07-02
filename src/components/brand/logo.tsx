import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoMarkProps = {
  /** Pixel size of the square mark. */
  size?: number;
  className?: string;
  /** Adds a soft glow ring behind the mark. */
  glow?: boolean;
};

/**
 * Premove "Ghost Move" mark — the locked brand asset.
 *
 * Renders the vector mark (`/brand/premove-mark.svg`) at a fixed square size
 * so it never stretches or distorts. Served unoptimized so the SVG is passed
 * through untouched and stays crisp at any size.
 */
export function LogoMark({ size = 36, className, glow = false }: LogoMarkProps) {
  return (
    <span
      className={cn("relative inline-grid shrink-0 place-items-center", className)}
      style={{ width: size, height: size }}
    >
      {glow ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-emerald/20 blur-xl"
        />
      ) : null}
      <Image
        src="/brand/premove-mark.svg"
        alt="Premove"
        width={size}
        height={size}
        priority
        unoptimized
        className="size-full object-contain"
      />
    </span>
  );
}

type LogoProps = {
  href?: string;
  showWordmark?: boolean;
  size?: number;
  className?: string;
};

/**
 * Premove lockup — the Ghost Move mark paired with the wordmark and tagline.
 * Used in the sidebar and topbar.
 */
export function Logo({
  href = "/",
  showWordmark = true,
  size = 36,
  className,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[1.08rem] font-semibold tracking-tight text-foreground">
            Premove
          </span>
          <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-emerald/80">
            Prepare before move one
          </span>
        </span>
      ) : null}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="Premove home"
        className="inline-flex items-center rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-emerald/40"
      >
        {content}
      </Link>
    );
  }

  return content;
}

type LogoLockupProps = {
  /** Rendered width in pixels; height is derived from the 1280×360 artwork. */
  width?: number;
  className?: string;
  priority?: boolean;
};

const LOCKUP_RATIO = 360 / 1280;

/**
 * Full Premove lockup artwork (`/brand/premove-lockup.svg`) — mark, serif
 * wordmark, and tagline. Preserves the native aspect ratio so it never skews.
 */
export function LogoLockup({
  width = 340,
  className,
  priority = false,
}: LogoLockupProps) {
  const height = Math.round(width * LOCKUP_RATIO);
  return (
    <Image
      src="/brand/premove-lockup.svg"
      alt="Premove — Prepare before move one"
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={cn("object-contain", className)}
      style={{ width, height }}
    />
  );
}
