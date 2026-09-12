"use client";

import { Search, X } from "lucide-react";

interface StyleSearchProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export default function StyleSearch({ query, onQueryChange }: StyleSearchProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Filter fonts (e.g. vintage, cursive, gothic, bubble)..."
        aria-label="Search font styles"
        className="w-full pl-10 pr-9 py-2 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
      />
      {query && (
        <button
          type="button"
          onClick={() => onQueryChange("")}
          aria-label="Clear style search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
