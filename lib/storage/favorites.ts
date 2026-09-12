// Privacy-first local storage for favorited font styles
const STORAGE_KEY = "fontgen_favorites_v1";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const item = window.localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch (err) {
    // localStorage might be blocked or in private mode - degrade gracefully
    return [];
  }
}

export function toggleFavorite(styleId: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getFavorites();
    const updated = current.includes(styleId)
      ? current.filter((id) => id !== styleId)
      : [...current, styleId];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    return [];
  }
}
