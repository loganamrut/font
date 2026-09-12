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

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(transformedText);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch (err) {
      // ignore
    }
  }, [style.name, transformedText]);

  return (
    <div className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200">
      {/* Top Header: Style Name & Actions */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 min-w-0">
          <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
            {style.name}
          </h3>
          {style.isPopular && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Popular</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {/* Favorite Button */}
          <button
            type="button"
            onClick={() => onToggleFavorite(style.id)}
            aria-label={isFavorite ? `Remove ${style.name} from favorites` : `Add ${style.name} to favorites`}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              isFavorite
                ? "text-rose-500 bg-rose-50 dark:bg-rose-950/40"
                : "text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-rose-500" : ""}`} />
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            aria-label={`Share ${style.name}`}
            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Share or quick copy"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Center Preview - Prominent Typography */}
      <div className="my-2 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 min-h-[4.5rem] flex items-center overflow-x-auto select-all">
        <p className="text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-slate-50 break-words font-normal tracking-wide whitespace-pre-wrap selection:bg-indigo-500 selection:text-white">
          {transformedText}
        </p>
      </div>

      {/* Bottom Footer: Description & Action */}
      <div className="flex items-center justify-between gap-3 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/60">
        <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate max-w-[180px] sm:max-w-[240px]">
          {style.description}
        </span>

        <CopyButton textToCopy={transformedText} label="Copy" />
      </div>
    </div>
  );
}
