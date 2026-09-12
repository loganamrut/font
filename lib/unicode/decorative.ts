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
  // fontgen.cool inspired additions:
  { id: "star-border", name: "Star Border", prefix: "★·.·´¯`·.·★ ", suffix: " ★·.·´¯`·.·★", category: "decorative" },
  { id: "elegant-stars", name: "Elegant Stars", prefix: "*•.¸♡ ", suffix: " ♡¸.•*", category: "decorative" },
  { id: "simple-border", name: "Simple Border", prefix: "◦•●◉✿ ", suffix: " ✿◉●•◦", category: "decorative" },
  { id: "flower-frame", name: "Flower Frame", prefix: "✿.｡.:* ", suffix: " *.:｡.✿", category: "decorative" },
  { id: "shine-line", name: "Shine Line", prefix: "✧･ﾟ: *✧･ﾟ:* ", suffix: " *:･ﾟ✧*:･ﾟ✧", category: "fancy" },
  { id: "spark-line", name: "Spark Line", prefix: "*.:｡✿*ﾟ‘ﾟ･ ", suffix: " ･ﾟ‘ﾟ*✿｡.:*", category: "fancy" },
  { id: "crown-border", name: "Crown Border", prefix: "👑 ", suffix: " 👑", category: "decorative" },
  { id: "fitness-bar", name: "Fitness Bar", prefix: "❚█══█❚ ", suffix: " ❚█══█❚", category: "decorative" },
  { id: "struck-glow", name: "Struck Glow", prefix: "—(••÷[ ", suffix: " ]÷••)—", category: "decorative" },
  { id: "moonlight", name: "Moonlight", prefix: "☾ ", suffix: " ☽", category: "aesthetic" },
  { id: "sweet-flower", name: "Sweet Charm", prefix: "ღ ", suffix: " ღ", category: "decorative" },
  { id: "quote-style", name: "Quote Style", prefix: "❝ ", suffix: " ❞", category: "aesthetic" },
  { id: "layered-box", name: "Layered Box", prefix: "⟦ ", suffix: " ⟧", category: "aesthetic" },
  { id: "pointed-arch", name: "Pointed Arch", prefix: "⟨ ", suffix: " ⟩", category: "aesthetic" },
  { id: "twin-pillar", name: "Twin Pillar", prefix: "║ ", suffix: " ║", category: "decorative" },
  { id: "starline", name: "Starline Text", prefix: "★彡 ", suffix: " 彡★", category: "fancy" },
  { id: "ocean-crest", name: "Ocean Crest", prefix: "🌊 ", suffix: " 🌊", category: "aesthetic" },
  { id: "dark-shine", name: "Dark Shine", prefix: "🖤 ", suffix: " 🖤", category: "aesthetic" },
  { id: "starry-night", name: "Starry Night", prefix: "✦•┈๑⋅⋯ ", suffix: " ⋯⋅๑┈•✦", category: "fancy" },
  { id: "arrow-script", name: "Arrow Script", prefix: "➔ ", suffix: " ➔", category: "decorative" },
  { id: "lr-arrow", name: "Left-Right Arrow", prefix: "⇄ ", suffix: " ⇄", category: "decorative" },
];

export function applyDecorativeWrapper(text: string, prefix: string, suffix: string): string {
  if (!text) return "";
  return `${prefix}${text}${suffix}`;
}
