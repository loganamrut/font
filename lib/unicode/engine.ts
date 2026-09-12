import {
  toBoldSerif,
  toItalicSerif,
  toBoldItalicSerif,
  toSansSerif,
  toSansSerifBold,
  toSansSerifItalic,
  toSansSerifBoldItalic,
  toScript,
  toBoldScript,
  toFraktur,
  toBoldFraktur,
  toDoubleStruck,
  toMonospace,
  toCircled,
  toCircledNegative,
  toSquared,
  toSquaredNegative,
  toFullwidth,
  toAestheticSpaced,
  toSmallCaps,
  toSuperscript,
  toSubscript,
  toUpsideDown,
  toMirrorReverse,
  toStrikethrough,
  toSlashThrough,
  toUnderline,
  toDoubleUnderline,
  toOverline,
  toDottedBelow,
  toWaveUnderline,
  toRegionalIndicator,
} from "./transforms";
import { generateZalgo, ZalgoIntensity } from "./zalgo";
import { applyDecorativeWrapper } from "./decorative";
import { CategoryId } from "./categories";

export interface FontStyleDefinition {
  id: string;
  name: string;
  categories: CategoryId[];
  isPopular?: boolean;
  transform: (text: string, options?: any) => string;
  description: string;
}

export const FONT_STYLES: FontStyleDefinition[] = [
  // 1. Core Mathematical Styles
  {
    id: "bold-serif",
    name: "Bold (Serif)",
    categories: ["popular", "bold", "unicode", "social-media"],
    isPopular: true,
    transform: toBoldSerif,
    description: "Classic bold serif mathematical typography.",
  },
  {
    id: "bold-sans",
    name: "Bold (Sans-Serif)",
    categories: ["popular", "bold", "gaming", "social-media"],
    isPopular: true,
    transform: toSansSerifBold,
    description: "Clean, modern sans-serif bold text.",
  },
  {
    id: "italic-serif",
    name: "Italic (Serif)",
    categories: ["popular", "italic", "unicode", "social-media"],
    isPopular: true,
    transform: toItalicSerif,
    description: "Traditional slanted serif italic typography.",
  },
  {
    id: "italic-sans",
    name: "Italic (Sans-Serif)",
    categories: ["italic", "unicode", "social-media"],
    transform: toSansSerifItalic,
    description: "Modern sans-serif italic text.",
  },
  {
    id: "bold-italic-serif",
    name: "Bold Italic (Serif)",
    categories: ["bold", "italic", "unicode"],
    transform: toBoldItalicSerif,
    description: "High-emphasis bold and slanted serif letters.",
  },
  {
    id: "bold-italic-sans",
    name: "Bold Italic (Sans-Serif)",
    categories: ["bold", "italic", "gaming"],
    transform: toSansSerifBoldItalic,
    description: "High-impact bold italic sans-serif style.",
  },
  {
    id: "sans-serif",
    name: "Sans-Serif Normal",
    categories: ["unicode", "social-media"],
    transform: toSansSerif,
    description: "Geometric clean sans-serif characters.",
  },

  // 2. Calligraphic & Script (Cursive)
  {
    id: "cursive-script",
    name: "Cursive / Script",
    categories: ["popular", "cursive", "fancy", "aesthetic", "cute"],
    isPopular: true,
    transform: toScript,
    description: "Flowing handwritten script with authentic Unicode glyphs.",
  },
  {
    id: "bold-cursive",
    name: "Bold Cursive / Calligraphy",
    categories: ["popular", "cursive", "fancy", "bold", "cute"],
    isPopular: true,
    transform: toBoldScript,
    description: "Thick calligraphic handwritten brush strokes.",
  },

  // 3. Gothic / Fraktur
  {
    id: "gothic-fraktur",
    name: "Gothic / Fraktur",
    categories: ["popular", "gothic", "gaming", "fancy"],
    isPopular: true,
    transform: toFraktur,
    description: "Historic German Fraktur and medieval blackletter.",
  },
  {
    id: "bold-gothic",
    name: "Bold Gothic / Fraktur",
    categories: ["gothic", "gaming", "bold"],
    transform: toBoldFraktur,
    description: "Heavy blackletter gothic script for gaming tags.",
  },

  // 4. Double Struck / Blackboard Bold
  {
    id: "double-struck",
    name: "Double-Struck / Blackboard",
    categories: ["popular", "unicode", "aesthetic", "fancy"],
    isPopular: true,
    transform: toDoubleStruck,
    description: "Hollow mathematical blackboard bold letters.",
  },

  // 5. Monospace
  {
    id: "monospace",
    name: "Monospace / Typewriter",
    categories: ["popular", "unicode", "gaming"],
    isPopular: true,
    transform: toMonospace,
    description: "Fixed-width terminal and typewriter font style.",
  },

  // 6. Bubble / Enclosed
  {
    id: "bubble-text",
    name: "Bubble Text (Circled)",
    categories: ["popular", "bubble", "cute", "aesthetic"],
    isPopular: true,
    transform: toCircled,
    description: "Friendly circled outline letters and numbers.",
  },
  {
    id: "bubble-inverted",
    name: "Black Bubble (Circled Inverted)",
    categories: ["bubble", "gaming", "aesthetic"],
    transform: toCircledNegative,
    description: "Solid dark circle badges with inverted text.",
  },
  {
    id: "squared",
    name: "Squared Box",
    categories: ["aesthetic", "unicode", "gaming"],
    transform: toSquared,
    description: "Letters framed in minimalist square boxes.",
  },
  {
    id: "squared-negative",
    name: "Black Squared",
    categories: ["aesthetic", "gaming", "bold"],
    transform: toSquaredNegative,
    description: "Bold inverted square badge letters.",
  },

  // 7. Small Text / Phonetic
  {
    id: "small-caps",
    name: "Small Capitals",
    categories: ["popular", "small-text", "aesthetic", "social-media"],
    isPopular: true,
    transform: toSmallCaps,
    description: "Clean small capital letters for subtle aesthetic bios.",
  },
  {
    id: "superscript",
    name: "Superscript (Tiny Elevated)",
    categories: ["small-text", "unicode"],
    transform: toSuperscript,
    description: "Tiny raised superscript letters and numerals.",
  },
  {
    id: "subscript",
    name: "Subscript (Tiny Low)",
    categories: ["small-text", "unicode"],
    transform: toSubscript,
    description: "Low miniature subscript letters.",
  },

  // 8. Aesthetic & Spaced
  {
    id: "fullwidth-vaporwave",
    name: "Fullwidth / Vaporwave",
    categories: ["popular", "aesthetic", "unicode", "fancy"],
    isPopular: true,
    transform: toFullwidth,
    description: "Wide-spaced Japanese Zenkaku fullwidth characters.",
  },
  {
    id: "aesthetic-spaced",
    name: "Aesthetic Spaced",
    categories: ["aesthetic", "cute"],
    transform: toAestheticSpaced,
    description: "Double-spaced aesthetic typography for headers.",
  },

  // 9. Playful & Inverted
  {
    id: "upside-down",
    name: "Upside Down (Inverted)",
    categories: ["popular", "fancy", "gaming"],
    isPopular: true,
    transform: toUpsideDown,
    description: "Flipped and reversed upside-down characters.",
  },
  {
    id: "mirror-reverse",
    name: "Reverse / Backwards",
    categories: ["fancy", "gaming"],
    transform: toMirrorReverse,
    description: "Reversed text sequence reading right-to-left.",
  },

  // 10. Combining Marks / Lines
  {
    id: "strikethrough",
    name: "Strikethrough",
    categories: ["gaming", "social-media", "unicode"],
    transform: toStrikethrough,
    description: "Clean horizontal line cutting through letters.",
  },
  {
    id: "slash-through",
    name: "Slash Through",
    categories: ["gaming", "unicode"],
    transform: toSlashThrough,
    description: "Diagonal slash overlay across each character.",
  },
  {
    id: "underline",
    name: "Underline",
    categories: ["unicode", "social-media"],
    transform: toUnderline,
    description: "Low continuous underline bar below each letter.",
  },
  {
    id: "double-underline",
    name: "Double Underline",
    categories: ["unicode", "fancy"],
    transform: toDoubleUnderline,
    description: "Double accent baseline underline.",
  },
  {
    id: "overline",
    name: "Overline",
    categories: ["unicode"],
    transform: toOverline,
    description: "Continuous line floating above characters.",
  },
  {
    id: "wave-underline",
    name: "Wavy Underline",
    categories: ["aesthetic", "decorative"],
    transform: toWaveUnderline,
    description: "Subtle tilde wave beneath the text.",
  },
  {
    id: "dotted-below",
    name: "Dotted Below",
    categories: ["unicode", "decorative"],
    transform: toDottedBelow,
    description: "Micro-dots beneath characters.",
  },

  // 11. Regional Indicators
  {
    id: "regional-indicator",
    name: "Regional Flag Indicators",
    categories: ["bubble", "aesthetic", "social-media"],
    transform: toRegionalIndicator,
    description: "Square emoji-style alphabet indicator blocks.",
  },

  // 12. Glitch / Zalgo
  {
    id: "zalgo-glitch",
    name: "Glitch / Zalgo Text",
    categories: ["popular", "gaming", "fancy", "gothic"],
    isPopular: true,
    transform: (text, options?: { intensity?: ZalgoIntensity }) =>
      generateZalgo(text, options?.intensity ?? "medium"),
    description: "Chaotic corrupted glitch characters using combining accents.",
  },

  // 13. Decorative Wrappers
  {
    id: "royal-wings",
    name: "Royal Wings Frame",
    categories: ["popular", "symbols", "decorative", "gaming", "fancy"],
    isPopular: true,
    transform: (text) => applyDecorativeWrapper(text, "꧁ ", " ꧂"),
    description: "Regal wing filigree ornaments.",
  },
  {
    id: "sparkle-stars",
    name: "Star Dust / Sparkles",
    categories: ["popular", "fancy", "symbols", "decorative", "cute"],
    isPopular: true,
    transform: (text) => applyDecorativeWrapper(text, "✨ ", " ✨"),
    description: "Glittering star sparkles flanking your phrase.",
  },
  {
    id: "sparkle-star",
    name: "Solid Stars",
    categories: ["fancy", "symbols", "decorative", "cute"],
    transform: (text) => applyDecorativeWrapper(text, "★ ", " ★"),
    description: "Five-pointed solid stars framing the text.",
  },
  {
    id: "diamond-spark",
    name: "Diamond Spark",
    categories: ["fancy", "symbols", "decorative"],
    transform: (text) => applyDecorativeWrapper(text, "✦ ", " ✦"),
    description: "Four-pointed geometric diamond stars.",
  },
  {
    id: "angel-wings",
    name: "Angel Wings",
    categories: ["symbols", "decorative", "cute", "fancy"],
    transform: (text) => applyDecorativeWrapper(text, "༺ ", " ༻"),
    description: "Soft curved celestial wings.",
  },
  {
    id: "asian-corner-brackets",
    name: "Asian Corner Brackets",
    categories: ["aesthetic", "symbols", "decorative"],
    transform: (text) => applyDecorativeWrapper(text, "『", "』"),
    description: "Japanese quote marks for minimalist aesthetic titles.",
  },
  {
    id: "lenticular-brackets",
    name: "Lenticular Brackets",
    categories: ["aesthetic", "symbols", "decorative"],
    transform: (text) => applyDecorativeWrapper(text, "【", "】"),
    description: "Bold curved lenticular brackets.",
  },
  {
    id: "double-angle-brackets",
    name: "Double Angle Brackets",
    categories: ["aesthetic", "symbols", "decorative"],
    transform: (text) => applyDecorativeWrapper(text, "《", "》"),
    description: "Guillemet aesthetic double brackets.",
  },
  {
    id: "mystic-aura",
    name: "Mystic Aura",
    categories: ["gothic", "gaming", "decorative", "symbols"],
    transform: (text) => applyDecorativeWrapper(text, "༒ ", " ༒"),
    description: "Tibetan vajra cross mystic symbols.",
  },
  {
    id: "floral-bloom",
    name: "Floral Bloom",
    categories: ["cute", "decorative", "symbols"],
    transform: (text) => applyDecorativeWrapper(text, "᪥ ", " ᪥"),
    description: "Delicate blossom flowers framing text.",
  },
  {
    id: "heart-accent",
    name: "Heart Accent",
    categories: ["cute", "symbols", "decorative", "social-media"],
    transform: (text) => applyDecorativeWrapper(text, "♥ ", " ♥"),
    description: "Classic bold heart symbols.",
  },
  {
    id: "thunder-gaming",
    name: "Thunder / Lightning",
    categories: ["gaming", "symbols", "decorative"],
    transform: (text) => applyDecorativeWrapper(text, "⚡ ", " ⚡"),
    description: "High-voltage lightning bolts for gaming clan names.",
  },
  {
    id: "melody-music",
    name: "Musical Notes",
    categories: ["cute", "symbols", "decorative"],
    transform: (text) => applyDecorativeWrapper(text, "♪♫ ", " ♫♪"),
    description: "Musical eighth notes and treble elements.",
  },
  {
    id: "warrior-shield",
    name: "Warrior Shield",
    categories: ["gaming", "symbols", "decorative"],
    transform: (text) => applyDecorativeWrapper(text, "☬ ", " ☬"),
    description: "Emblematic insignia for battle tags.",
  },
];

// Master transformation generator with memoization support
export function generateAllStyles(
  text: string,
  options?: { zalgoIntensity?: ZalgoIntensity }
): { id: string; name: string; result: string; style: FontStyleDefinition }[] {
  if (!text) {
    // Generate preview placeholder if empty
    text = "Hello World";
  }

  return FONT_STYLES.map((style) => {
    let result = "";
    if (style.id === "zalgo-glitch") {
      result = style.transform(text, { intensity: options?.zalgoIntensity ?? "medium" });
    } else {
      result = style.transform(text);
    }
    return {
      id: style.id,
      name: style.name,
      result,
      style,
    };
  });
}
