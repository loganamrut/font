export type CategoryId =
  | "all"
  | "popular"
  | "bold"
  | "italic"
  | "cursive"
  | "fancy"
  | "aesthetic"
  | "symbols"
  | "bubble"
  | "gothic"
  | "gaming"
  | "social-media"
  | "cute"
  | "small-text"
  | "unicode"
  | "decorative";

export interface CategoryDefinition {
  id: CategoryId;
  label: string;
  description: string;
}

export const CATEGORIES: CategoryDefinition[] = [
  { id: "all", label: "All Styles", description: "Every available Unicode font and fancy text style." },
  { id: "popular", label: "Popular", description: "Most widely used and universally compatible font styles." },
  { id: "bold", label: "Bold", description: "Heavyweight mathematical serif and sans-serif bold styles." },
  { id: "italic", label: "Italic", description: "Slanted, formal, and mathematical italic scripts." },
  { id: "cursive", label: "Cursive", description: "Elegant calligraphy, handwritten script, and signature styles." },
  { id: "fancy", label: "Fancy", description: "Ornate, decorative, and sparkling text transformations." },
  { id: "aesthetic", label: "Aesthetic", description: "Vaporwave, fullwidth, brackets, and clean spaced styles." },
  { id: "symbols", label: "Symbols", description: "Decorations with wings, borders, stars, and Unicode glyphs." },
  { id: "bubble", label: "Bubble", description: "Circled and enclosed bubble letter variations." },
  { id: "gothic", label: "Gothic", description: "Medieval Blackletter and Fraktur German-style calligraphy." },
  { id: "gaming", label: "Gaming", description: "Bold strikes, thunder accents, and gaming clan tag styles." },
  { id: "social-media", label: "Social Media", description: "High-engagement text styles for Instagram, TikTok, and Discord." },
  { id: "cute", label: "Cute", description: "Whimsical bubbles, hearts, small caps, and gentle frames." },
  { id: "small-text", label: "Small Text", description: "Compact small caps, superscripts, and subscripts." },
  { id: "unicode", label: "Unicode", description: "Specialized mathematical, monospace, and double-struck alphabets." },
  { id: "decorative", label: "Decorative", description: "Artistic frames, brackets, and ornamental symbols." },
];

export interface SocialPreset {
  id: string;
  platform: string;
  label: string;
  limit?: number;
  description: string;
  filterCategory?: CategoryId;
}

export const SOCIAL_PRESETS: SocialPreset[] = [
  { id: "ig-bio", platform: "Instagram", label: "Instagram Bio", limit: 150, description: "Max 150 characters for Instagram profile bios" },
  { id: "ig-caption", platform: "Instagram", label: "Instagram Caption", limit: 2200, description: "Up to 2,200 characters for Instagram posts" },
  { id: "tiktok-bio", platform: "TikTok", label: "TikTok Bio", limit: 80, description: "Max 80 characters for TikTok account bios" },
  { id: "x-post", platform: "X / Twitter", label: "X (Twitter) Post", limit: 280, description: "280 characters standard limit" },
  { id: "discord-bio", platform: "Discord", label: "Discord Bio", limit: 190, description: "190 characters for Discord profile About Me" },
  { id: "fb-post", platform: "Facebook", label: "Facebook Post", limit: 63206, description: "Long-form status updates" },
  { id: "yt-desc", platform: "YouTube", label: "YouTube Description", limit: 5000, description: "Video descriptions and channel bios" },
  { id: "wa-status", platform: "WhatsApp", label: "WhatsApp Status", limit: 139, description: "139 characters About/status limit" },
  { id: "gaming-name", platform: "Gaming", label: "Gaming Nickname", limit: 24, description: "Optimized for gamer tags and clan bios" },
];
