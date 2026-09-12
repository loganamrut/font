"use client";

import { SOCIAL_PRESETS, SocialPreset, CategoryId } from "@/lib/unicode/categories";
import { Sparkles } from "lucide-react";

interface SocialPresetsProps {
  activePresetId: string | null;
  onSelectPreset: (preset: SocialPreset | null) => void;
  onFilterCategory?: (category: CategoryId) => void;
}

export default function SocialPresets({
  activePresetId,
  onSelectPreset,
  onFilterCategory,
}: SocialPresetsProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
        <span>Quick Social Presets & Limits</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          type="button"
          onClick={() => onSelectPreset(null)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            activePresetId === null
              ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          No Limit (Default)
        </button>

        {SOCIAL_PRESETS.map((preset) => {
          const isActive = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => {
                if (isActive) {
                  onSelectPreset(null);
                } else {
                  onSelectPreset(preset);
                  if (preset.filterCategory && onFilterCategory) {
                    onFilterCategory(preset.filterCategory);
                  }
                }
              }}
              title={`${preset.description} ${preset.limit ? `(${preset.limit} chars)` : ""}`}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400/30 dark:bg-indigo-500"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <span>{preset.label}</span>
              {preset.limit && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-indigo-800/60 text-indigo-100"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {preset.limit > 999 ? `${Math.round(preset.limit / 1000)}k` : preset.limit}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
