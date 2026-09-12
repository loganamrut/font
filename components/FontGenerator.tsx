"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import TextInput from "./TextInput";
import CharacterStats from "./CharacterStats";
import SocialPresets from "./SocialPresets";
import CategoryFilter from "./CategoryFilter";
import StyleSearch from "./StyleSearch";
import StyleGrid from "./StyleGrid";
import ZalgoControls from "./ZalgoControls";
import { FONT_STYLES, FontStyleDefinition } from "@/lib/unicode/engine";
import { CategoryId, SocialPreset } from "@/lib/unicode/categories";
import { ZalgoIntensity } from "@/lib/unicode/zalgo";
import { getFavorites, toggleFavorite } from "@/lib/storage/favorites";
import { Copy, Check, ShieldCheck } from "lucide-react";

interface FontGeneratorProps {
  initialText?: string;
  defaultCategory?: CategoryId;
  defaultSocialPresetId?: string;
  titleOverride?: string;
  subtitleOverride?: string;
}

export default function FontGenerator({
  initialText = "Hello World",
  defaultCategory = "popular",
  defaultSocialPresetId,
}: FontGeneratorProps) {
  const [inputText, setInputText] = useState(initialText);
  const [activeCategory, setActiveCategory] = useState<CategoryId | "favorites">(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState<SocialPreset | null>(null);
  const [zalgoIntensity, setZalgoIntensity] = useState<ZalgoIntensity>("medium");
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
        const matchesDesc = style.description.toLowerCase().includes(query);
        const matchesCats = style.categories.some((c) => c.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCats) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, favorites]);

  // Compute transformations for visible styles
  // Efficiently memoized to prevent lag during rapid typing
  const resultsMap = useMemo(() => {
    const map = new Map<string, string>();
    const textToTransform = inputText || "Hello World";

    for (const style of filteredStyles) {
      if (style.id === "zalgo-glitch") {
        map.set(style.id, style.transform(textToTransform, { intensity: zalgoIntensity }));
      } else {
        map.set(style.id, style.transform(textToTransform));
      }
    }

    return map;
  }, [inputText, filteredStyles, zalgoIntensity]);

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

  const hasZalgoVisible = useMemo(() => {
    return filteredStyles.some((s) => s.id === "zalgo-glitch");
  }, [filteredStyles]);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8" id="generator">
      {/* Top Generator Input Card */}
      <div className="flex flex-col gap-4 mb-6">
        <TextInput
          value={inputText}
          onChange={setInputText}
          placeholder="Type or paste your text here..."
          onClear={handleClear}
        />

        {/* Live Character & Word Statistics */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <CharacterStats
            text={inputText}
            activeLimit={activePreset?.limit}
            presetLabel={activePreset?.label}
          />

          {/* Privacy badge */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200/80 dark:border-emerald-900/60 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="font-medium">100% Client-Side • Text stays in your browser</span>
          </div>
        </div>

        {/* Social Presets */}
        <SocialPresets
          activePresetId={activePreset?.id ?? null}
          onSelectPreset={(preset) => {
            setActivePreset(preset);
            if (preset?.filterCategory) {
              setActiveCategory(preset.filterCategory);
            }
          }}
        />
      </div>

      {/* Category Filter & Search Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pt-2 border-t border-slate-200/80 dark:border-slate-800">
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          favoritesCount={favorites.length}
        />

        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          <StyleSearch query={searchQuery} onQueryChange={setSearchQuery} />

          {/* Copy All Button */}
          <button
            type="button"
            onClick={handleCopyAll}
            disabled={filteredStyles.length === 0}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              copiedAll
                ? "bg-emerald-600 text-white"
                : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900"
            }`}
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4" />
                <span>All Copied!</span>
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

      {/* Zalgo controls when relevant */}
      {hasZalgoVisible && (
        <ZalgoControls
          intensity={zalgoIntensity}
          onChangeIntensity={setZalgoIntensity}
        />
      )}

      {/* Results Grid */}
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
