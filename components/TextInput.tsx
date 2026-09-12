"use client";

import { X, Sparkles } from "lucide-react";

interface TextInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  onClear: () => void;
}

const SAMPLE_TEXTS = [
  "Your Text Here",
  "Aesthetic Vibes",
  "Vintage Script",
  "GamerTag_99",
  "Living my best life ✨",
];

export default function TextInput({
  value,
  onChange,
  placeholder = "Your Text Here...",
  onClear,
}: TextInputProps) {
  return (
    <div className="w-full relative">
      <div className="relative rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus-within:border-indigo-500 dark:focus-within:border-indigo-500 shadow-sm transition-all">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          aria-label="Input text to transform"
          className="w-full px-5 pt-4 pb-12 sm:pb-4 text-base sm:text-lg md:text-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none resize-y min-h-[95px] font-normal leading-relaxed rounded-t-2xl"
        />

        {/* Clear Button */}
        {value.length > 0 && (
          <div className="absolute right-3 top-3">
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear input text"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        )}

        {/* Sample text suggestions below input */}
        <div className="px-4 py-2.5 bg-white dark:bg-slate-900 rounded-b-2xl border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-thin">
          <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Try sample:</span>
          </span>
          {SAMPLE_TEXTS.map((sample) => (
            <button
              key={sample}
              type="button"
              onClick={() => onChange(sample)}
              className="shrink-0 text-xs px-3 py-1 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
