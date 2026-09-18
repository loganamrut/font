import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showBadge?: boolean;
  className?: string;
  asLink?: boolean;
}

export default function Logo({
  size = "md",
  showText = true,
  showBadge = true,
  className = "",
  asLink = false,
}: LogoProps) {
  // Dimensions based on size
  const config = {
    sm: {
      mark: 28,
      textSize: "text-lg",
      badgeSize: "text-[10px] px-1.5 py-0.5",
      gap: "gap-2",
    },
    md: {
      mark: 36,
      textSize: "text-xl sm:text-22px",
      badgeSize: "text-[11px] px-2 py-0.5",
      gap: "gap-2.5",
    },
    lg: {
      mark: 48,
      textSize: "text-2xl sm:text-3xl",
      badgeSize: "text-xs px-2.5 py-1",
      gap: "gap-3",
    },
    xl: {
      mark: 64,
      textSize: "text-3xl sm:text-4xl",
      badgeSize: "text-xs px-3 py-1",
      gap: "gap-3.5",
    },
  }[size];

  const content = (
    <div className={`inline-flex items-center ${config.gap} group ${className}`}>
      {/* Modern Dimensional Logomark */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
        style={{ width: config.mark, height: config.mark }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
          aria-hidden="true"
        >
          <defs>
            {/* Primary background gradient */}
            <linearGradient id="logo-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            {/* Glyph ribbon gradient */}
            <linearGradient id="glyph-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0e7ff" />
            </linearGradient>

            {/* Sparkle accent gradient */}
            <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            {/* Glassmorphic border glow */}
            <linearGradient id="border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Squircle base with modern continuous corner curve */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="26"
            fill="url(#logo-bg-grad)"
          />

          {/* Subtle inner highlight border */}
          <rect
            x="5.5"
            y="5.5"
            width="89"
            height="89"
            rx="24.5"
            stroke="url(#border-glow)"
            strokeWidth="3"
          />

          {/* Modern Geometric 'F' Glyph with Sleek Proportions */}
          {/* Vertical Stem */}
          <rect
            x="26"
            y="24"
            width="14"
            height="52"
            rx="7"
            fill="url(#glyph-grad)"
          />

          {/* Top Horizontal Bar with Angled Terminal */}
          <path
            d="M 33 24 L 68 24 C 72 24 75 27 75 31 C 75 35 72 38 68 38 L 33 38 Z"
            fill="url(#glyph-grad)"
          />

          {/* Middle Crossbar */}
          <path
            d="M 33 44 L 60 44 C 64 44 67 47 67 51 C 67 55 64 58 60 58 L 33 58 Z"
            fill="url(#glyph-grad)"
          />

          {/* Radiant 4-Point Transformation Star (Magic Sparkle) */}
          <path
            d="M 77 18 Q 77 26 85 26 Q 77 26 77 34 Q 77 26 69 26 Q 77 26 77 18 Z"
            fill="url(#sparkle-grad)"
          />

          {/* Tiny accent dot for visual balance */}
          <circle cx="77" cy="51" r="3.5" fill="#a5b4fc" />
        </svg>
      </div>

      {/* Modern Wordmark */}
      {showText && (
        <div className="flex items-center tracking-tight select-none">
          <span
            className={`font-black tracking-[-0.03em] text-slate-900 dark:text-white transition-colors duration-200 ${config.textSize}`}
          >
            Font
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text text-transparent ml-[0.5px]">
              Gen
            </span>
          </span>

          {showBadge && (
            <span
              className={`ml-1.5 font-bold uppercase rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 tracking-wider shadow-sm transition-all group-hover:border-indigo-400 dark:group-hover:border-indigo-600 ${config.badgeSize}`}
            >
              .dev
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="FontGen.dev - Home" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
