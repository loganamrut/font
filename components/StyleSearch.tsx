"use client";

import { Search, X } from "lucide-react";

interface StyleSearchProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export default function StyleSearch({ query, onQueryChange }: StyleSearchProps) {
  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Filter styles (e.g. cursive, gothic)..."
        aria-label="Search font styles"
        className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 placeholder-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
      />
      {query && (
        <button
          type="button"
          onClick={() => onQueryChange("")}
          aria-label="Clear style search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
