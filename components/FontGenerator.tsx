"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import TextInput from "./TextInput";
import CategoryFilter from "./CategoryFilter";
import StyleSearch from "./StyleSearch";
import StyleGrid from "./StyleGrid";
import { FONT_STYLES } from "@/lib/unicode/engine";
import { CategoryId } from "@/lib/unicode/categories";
import { getFavorites, toggleFavorite } from "@/lib/storage/favorites";
import { Copy, Check } from "lucide-react";

interface FontGeneratorProps {
  initialText?: string;
  defaultCategory?: CategoryId;
  defaultSocialPresetId?: string;
}

export default function FontGenerator({
  initialText = "Your Text Here",
  defaultCategory = "all",
  defaultSocialPresetId,
}: FontGeneratorProps) {
  const [inputText, setInputText] = useState(initialText);
  const [activeCategory, setActiveCategory] = useState<CategoryId | "favorites">(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedAll, setCopiedAll] = useState(false);

  // Load favorites from local storage on client mount
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleToggleFavorite = useCallback((id: string) => {
    const updated = toggleFavorite(id);
    setFavorites(updated);
  }, []);

  const handleClear = useCallback(() => {
    setInputText("");
  }, []);

  // Filter styles based on category, search query, and favorites
  const filteredStyles = useMemo(() => {
    return FONT_STYLES.filter((style) => {
      // 1. Check favorites tab
      if (activeCategory === "favorites") {
        if (!favorites.includes(style.id)) return false;
      } else if (activeCategory !== "all") {
        if (!style.categories.includes(activeCategory)) return false;
      }

      // 2. Check search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = style.name.toLowerCase().includes(query);
        const matchesCat = style.cat ? style.cat.toLowerCase().includes(query) : false;
        const matchesDesc = style.description.toLowerCase().includes(query);
        const matchesCats = style.categories.some((c) => c.toLowerCase().includes(query));
        if (!matchesName && !matchesCat && !matchesDesc && !matchesCats) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, favorites]);

  // Compute transformations for visible styles
  const resultsMap = useMemo(() => {
    const map = new Map<string, string>();
    const textToTransform = inputText || "Your Text Here";

    for (const style of filteredStyles) {
      if (style.id === "zalgo-glitch") {
        map.set(style.id, style.transform(textToTransform, { intensity: "medium" }));
      } else {
        map.set(style.id, style.transform(textToTransform));
      }
    }

    return map;
  }, [inputText, filteredStyles]);

  // "Copy All" implementation
  const handleCopyAll = useCallback(async () => {
    if (filteredStyles.length === 0) return;

    const formatted = filteredStyles
      .map((style) => {
        const result = resultsMap.get(style.id) || "";
        return `${style.name}:\n${result}`;
      })
      .join("\n\n");

    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = formatted;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  }, [filteredStyles, resultsMap]);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4" id="generator">
      {/* 1. Big Clean Input Box with built-in stats & quick samples */}
      <div className="mb-4">
        <TextInput
          value={inputText}
          onChange={setInputText}
          placeholder="Your Text Here..."
          onClear={handleClear}
        />
      </div>

      {/* 2. Unified, Ultra-Sleek Action Toolbar: Categories + Search + Copy All */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        {/* Category Pills Track (Scrollable) */}
        <div className="flex-1 min-w-0">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            favoritesCount={favorites.length}
          />
        </div>

        {/* Compact Right Controls: Search & Copy All */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto w-full md:w-auto">
          <div className="w-full md:w-52">
            <StyleSearch query={searchQuery} onQueryChange={setSearchQuery} />
          </div>

          <button
            type="button"
            onClick={handleCopyAll}
            disabled={filteredStyles.length === 0}
            aria-label="Copy all generated font styles"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 shrink-0 ${
              copiedAll
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-sm"
            }`}
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy All</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Generated Fonts Results: Starts IMMEDIATELY right below */}
      <StyleGrid
        styles={filteredStyles}
        inputText={inputText}
        resultsMap={resultsMap}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </section>
  );
}
