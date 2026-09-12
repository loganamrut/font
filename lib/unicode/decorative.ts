// Decorative and bracketed typographic styles

export interface DecorativeStyle {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  category: "decorative" | "fancy" | "aesthetic";
}

export const DECORATIVE_STYLES: DecorativeStyle[] = [
  { id: "sparkle", name: "Sparkle Text", prefix: "★ ", suffix: " ★", category: "fancy" },
  { id: "sparkle-stars", name: "Star Dust", prefix: "✨ ", suffix: " ✨", category: "fancy" },
  { id: "diamond-sparkle", name: "Diamond Spark", prefix: "✦ ", suffix: " ✦", category: "fancy" },
  { id: "royal-wings", name: "Royal Wings", prefix: "꧁ ", suffix: " ꧂", category: "decorative" },
  { id: "angel-wings", name: "Angel Wings", prefix: "༺ ", suffix: " ༻", category: "decorative" },
  { id: "asian-brackets", name: "Asian Corner Brackets", prefix: "『", suffix: "』", category: "aesthetic" },
  { id: "thick-brackets", name: "Lenticular Brackets", prefix: "【", suffix: "】", category: "aesthetic" },
  { id: "double-brackets", name: "Double Angle Brackets", prefix: "《", suffix: "》", category: "aesthetic" },
  { id: "tortoise-brackets", name: "Tortoise Shell", prefix: "〔", suffix: "〕", category: "aesthetic" },
  { id: "mystic-symbol", name: "Mystic Aura", prefix: "༒ ", suffix: " ༒", category: "decorative" },
  { id: "floral-bloom", name: "Floral Frame", prefix: "᪥ ", suffix: " ᪥", category: "decorative" },
  { id: "heart-frame", name: "Heart Accent", prefix: "♥ ", suffix: " ♥", category: "decorative" },
  { id: "bolt-accent", name: "Thunder / Gaming", prefix: "⚡ ", suffix: " ⚡", category: "decorative" },
  { id: "music-notes", name: "Melody / Music", prefix: "♪♫ ", suffix: " ♫♪", category: "decorative" },
  { id: "warrior-shield", name: "Khanda / Warrior", prefix: "☬ ", suffix: " ☬", category: "decorative" },
];

export function applyDecorativeWrapper(text: string, prefix: string, suffix: string): string {
  if (!text) return "";
  return `${prefix}${text}${suffix}`;
}
