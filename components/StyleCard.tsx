"use client";

import { FontStyleDefinition } from "@/lib/unicode/engine";
import CopyButton from "./CopyButton";
import { Heart, Share2, Sparkles } from "lucide-react";
import { useCallback, useState } from "react";

interface StyleCardProps {
  style: FontStyleDefinition;
  transformedText: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function StyleCard({
  style,
  transformedText,
  isFavorite,
  onToggleFavorite,
}: StyleCardProps) {
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${style.name} - FontGen`,
          text: transformedText,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback below
      }
    }

    try {
      await navigator.clipboard.writeText(transformedText);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch (err) {
      // ignore
    }
  }, [style.name, transformedText]);

  return (
    <div className="group w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-sm transition-all duration-150">
      {/* Left Area: Style Name and Main Text Line */}
      <div className="flex-1 min-w-0 pr-2">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            {style.name}
          </span>
          {style.cat && (
            <span className="hidden sm:inline-block text-[10px] text-slate-600 dark:text-slate-400 font-medium">
              • {style.cat}
            </span>
          )}
          {style.isPopular && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/50">
              <Sparkles className="w-2.5 h-2.5 text-amber-600" />
              <span>Popular</span>
            </span>
          )}
        </div>

        <div className="text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-slate-50 font-normal tracking-wide break-words select-all leading-normal">
          {transformedText}
        </div>
      </div>

      {/* Right Area: Minimal Action Buttons */}
      <div className="flex items-center gap-1.5 shrink-0 justify-end">
        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => onToggleFavorite(style.id)}
          aria-label={isFavorite ? `Remove ${style.name} from favorites` : `Add ${style.name} to favorites`}
          className={`p-2 rounded-lg text-xs transition-colors ${
            isFavorite
              ? "text-rose-500 bg-rose-50 dark:bg-rose-950/40"
              : "text-slate-500 hover:text-rose-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          }`}
          title={isFavorite ? "Favorited" : "Add to favorites"}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-rose-500" : ""}`} />
        </button>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          aria-label={`Share ${style.name}`}
          className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
          title="Share style"
        >
          <Share2 className="w-4 h-4" />
        </button>

        {/* One-Click Copy */}
        <CopyButton textToCopy={transformedText} label="Copy" className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg" />
      </div>
    </div>
  );
}
