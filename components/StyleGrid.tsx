"use client";

import { useState } from "react";
import { FontStyleDefinition } from "@/lib/unicode/engine";
import StyleCard from "./StyleCard";
import { ChevronDown, Sparkles } from "lucide-react";

interface StyleGridProps {
  styles: FontStyleDefinition[];
  inputText: string;
  resultsMap: Map<string, string>;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  defaultVisibleCount?: number;
}

export default function StyleGrid({
  styles,
  inputText,
  resultsMap,
  favorites,
  onToggleFavorite,
  defaultVisibleCount = 36,
}: StyleGridProps) {
  const [showAll, setShowAll] = useState(false);

  if (styles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 my-4">
        <Sparkles className="w-8 h-8 text-slate-400 mb-3" />
        <h4 className="text-base font-semibold text-slate-700 dark:text-slate-200">
          No matching font styles found
        </h4>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
          Try a different search keyword or switch category to discover more styles.
        </p>
      </div>
    );
  }

  const displayedStyles = showAll ? styles : styles.slice(0, defaultVisibleCount);
  const remainingCount = styles.length - defaultVisibleCount;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
        {displayedStyles.map((style) => {
          const transformed = resultsMap.get(style.id) || inputText;
          const isFav = favorites.includes(style.id);

          return (
            <StyleCard
              key={style.id}
              style={style}
              transformedText={transformed}
              isFavorite={isFav}
              onToggleFavorite={onToggleFavorite}
            />
          );
        })}
      </div>

      {!showAll && remainingCount > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-semibold text-sm shadow-sm hover:shadow transition-all active:scale-95"
          >
            <span>Show All {styles.length} Fonts (+{remainingCount} more)</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
