"use client";

import { CATEGORIES, CategoryId } from "@/lib/unicode/categories";
import { Heart } from "lucide-react";

interface CategoryFilterProps {
  activeCategory: CategoryId | "favorites";
  onSelectCategory: (category: CategoryId | "favorites") => void;
  favoritesCount: number;
}

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  favoritesCount,
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        {/* Favorites button */}
        <button
          type="button"
          onClick={() => onSelectCategory("favorites")}
          className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
            activeCategory === "favorites"
              ? "bg-rose-500 text-white shadow-sm ring-2 ring-rose-400/30"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-700"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${activeCategory === "favorites" ? "fill-white" : "fill-rose-500 text-rose-500"}`} />
          <span>Favorites</span>
          {favoritesCount > 0 && (
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                activeCategory === "favorites"
                  ? "bg-rose-700 text-white"
                  : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
              }`}
            >
              {favoritesCount}
            </span>
          )}
        </button>

        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400/30 dark:bg-indigo-500"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
