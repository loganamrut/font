export type CategoryId =
  | "all"
  | "popular"
  | "stylish"
  | "fancy"
  | "cool"
  | "beautiful"
  | "striking"
  | "minimal"
  | "bold"
  | "italic"
  | "cursive"
  | "gothic"
  | "aesthetic"
  | "symbols"
  | "lines"
  | "wrapped"
  | "overtext"
  | "blocks"
  | "motion"
  | "framed"
  | "bubble"
  | "gaming"
  | "social-media"
  | "cute"
  | "small-text"
  | "unicode"
  | "decorative"
  | "elegant"
  | "unique"
  | "mixed"
  | "random"
  | "numbers";

export interface CategoryDefinition {
  id: CategoryId;
  label: string;
  description: string;
}

export const CATEGORIES: CategoryDefinition[] = [
  { id: "all", label: "All Styles (240+)", description: "Every single available Unicode font and fancy text style." },
  { id: "popular", label: "Popular", description: "Most widely used and universally compatible font styles." },
  { id: "stylish", label: "Stylish", description: "Vintage Script, Rough, Cursive, and high-style fonts." },
  { id: "fancy", label: "Fancy", description: "Typewriter, Bold, Curve, and ornate script transformations." },
  { id: "cool", label: "Cool Fonts", description: "Square, Bubble, Wide, Inverted, and Mirrored text." },
  { id: "beautiful", label: "Beautiful", description: "Historic script, Stone letters, Urban, and Enigma fonts." },
  { id: "striking", label: "Striking", description: "Strong, Steel, Edgy, Abstract, and Eastern fonts." },
  { id: "minimal", label: "Minimal", description: "Charm, Medieval, Academia, Reflected, and Zen fonts." },
  { id: "bold", label: "Bold", description: "Heavyweight serif and sans-serif bold typography." },
  { id: "italic", label: "Italic", description: "Slanted, formal, and mathematical italic scripts." },
  { id: "cursive", label: "Cursive", description: "Calligraphy, handwritten script, and signature styles." },
  { id: "gothic", label: "Gothic / Fraktur", description: "Medieval Blackletter and German Fraktur calligraphy." },
  { id: "aesthetic", label: "Aesthetic", description: "Vaporwave, aesthetic spaced, and sparkle line fonts." },
  { id: "symbols", label: "Symbols & Lines", description: "Underline, double overline, tildes, and strikethroughs." },
  { id: "decorative", label: "Decorated & Borders", description: "Fitness bar, flower borders, stars, and crown frames." },
  { id: "blocks", label: "Block & Frames", description: "Boxed, arc, brackets, and looped frames." },
  { id: "unique", label: "Unique Combos", description: "Alternating font combinations and hybrid scripts." },
  { id: "cute", label: "Cutesy", description: "Gentle bubbles, heart borders, and cute accents." },
  { id: "small-text", label: "Small Text", description: "Compact small capitals, superscripts, and subscripts." },
  { id: "mixed", label: "Mixed & Random", description: "Curated mixed Unicode character combinations." },
  { id: "numbers", label: "Number Fonts", description: "Roman numerals, circled digits, and Arabic numerics." },
  { id: "gaming", label: "Gaming", description: "Zalgo glitch, bold strikes, and clan tag styles." },
  { id: "social-media", label: "Social Media", description: "High-engagement fonts for Instagram, TikTok, Discord, and X." },
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
