"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import TextInput from "./TextInput";
import CategoryFilter from "./CategoryFilter";
import StyleSearch from "./StyleSearch";
import StyleGrid from "./StyleGrid";
import { FONT_STYLES } from "@/lib/unicode/engine";
import { CategoryId } from "@/lib/unicode/categories";
import { getFavorites, toggleFavorite } from "@/lib/storage/favorites";

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

      {/* 2. Sleek Filter Toolbar: Categories on Left, Search on Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        {/* Category Pills Track (Scrollable) */}
        <div className="flex-1 min-w-0">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            favoritesCount={favorites.length}
          />
        </div>

        {/* Compact Right Control: Search */}
        <div className="w-full sm:w-60 shrink-0">
          <StyleSearch query={searchQuery} onQueryChange={setSearchQuery} />
        </div>
      </div>

      {/* 3. Generated Fonts Results: Starts IMMEDIATELY right below */}
      <StyleGrid
        styles={filteredStyles}
        inputText={inputText}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </section>
  );
}
