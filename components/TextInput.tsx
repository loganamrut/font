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
  const charCount = value.length;
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

  return (
    <div className="w-full relative">
      <div className="relative rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus-within:border-indigo-500 dark:focus-within:border-indigo-500 shadow-sm transition-all">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          aria-label="Input text to transform"
          className="w-full px-5 pt-4 pb-4 text-base sm:text-lg md:text-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none resize-y min-h-[95px] font-normal leading-relaxed rounded-t-2xl"
        />

        {/* Clear Button */}
        {value.length > 0 && (
          <div className="absolute right-3 top-3">
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear input text"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white bg-slate-200/80 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        )}

        {/* Bottom bar: Stats + Sample suggestions */}
        <div className="px-4 py-2 bg-slate-50/90 dark:bg-slate-900/80 rounded-b-2xl border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
          {/* Live character and word count */}
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold shrink-0">
            <span>{charCount} chars</span>
            <span>•</span>
            <span>{wordCount} {wordCount === 1 ? "word" : "words"}</span>
          </div>

          {/* Sample quick chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-thin py-0.5">
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 shrink-0 hidden sm:inline-block">
              Try:
            </span>
            {SAMPLE_TEXTS.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => onChange(sample)}
                className="shrink-0 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
