"use client";

interface CharacterStatsProps {
  text: string;
  activeLimit?: number;
  presetLabel?: string;
}

export default function CharacterStats({
  text,
  activeLimit,
  presetLabel,
}: CharacterStatsProps) {
  const charsCount = Array.from(text).length;
  const noSpacesCount = Array.from(text.replace(/\s/g, "")).length;
  const wordsCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const remaining = activeLimit !== undefined ? activeLimit - charsCount : null;
  const isOverLimit = remaining !== null && remaining < 0;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium py-1.5 px-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-1.5">
        <span className="text-slate-900 dark:text-slate-100 font-bold">{charsCount}</span>
        <span>characters</span>
      </div>

      <span className="text-slate-200 dark:text-slate-700 select-none">•</span>

      <div className="flex items-center gap-1.5">
        <span className="text-slate-900 dark:text-slate-100 font-bold">{wordsCount}</span>
        <span>words</span>
      </div>

      <span className="text-slate-200 dark:text-slate-700 select-none">•</span>

      <div className="flex items-center gap-1.5">
        <span className="text-slate-900 dark:text-slate-100 font-bold">{noSpacesCount}</span>
        <span>no spaces</span>
      </div>

      {activeLimit !== undefined && (
        <>
          <span className="text-slate-200 dark:text-slate-700 select-none">•</span>
          <div
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-xs font-semibold transition-colors ${
              isOverLimit
                ? "bg-rose-50 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900"
                : "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900"
            }`}
          >
            <span>{presetLabel || "Limit"}:</span>
            <span>
              {charsCount} / {activeLimit} ({remaining !== null ? `${remaining} left` : ""})
            </span>
          </div>
        </>
      )}
    </div>
  );
}
