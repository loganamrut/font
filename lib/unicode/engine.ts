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
  toTopDot,
  toDottedRings,
  toBreveBelow,
  toSmilingLine,
  toFloatingMarks,
  toRegionalIndicator,
  toVintageScript,
  toRough,
  toFine,
  toLoop,
  toCurve,
  toLight,
  toSmooth,
} from "./transforms";
import { generateZalgo, ZalgoIntensity } from "./zalgo";
import { DECORATIVE_STYLES, applyDecorativeWrapper } from "./decorative";
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

  // 3. Vintage, Rough, Curve, Loop & Smooth (fontgen.cool inspired)
  {
    id: "vintage-script",
    name: "Vintage Script",
    categories: ["popular", "fancy", "aesthetic", "cute"],
    isPopular: true,
    transform: toVintageScript,
    description: "Archaic typographic glyphs with rich historic charm.",
  },
  {
    id: "curve",
    name: "Curve Text",
    categories: ["popular", "bubble", "aesthetic", "cute"],
    isPopular: true,
    transform: toCurve,
    description: "Rounded curved letterforms with soft geometric curves.",
  },
  {
    id: "rough-tribal",
    name: "Rough / Tribal",
    categories: ["gaming", "fancy", "aesthetic"],
    transform: toRough,
    description: "Angular geometric runes and tribal glyphs.",
  },
  {
    id: "fine-script",
    name: "Fine Script",
    categories: ["aesthetic", "cursive", "cute"],
    transform: toFine,
    description: "Delicate thin script with graceful flourishes.",
  },
  {
    id: "loop-text",
    name: "Loop Text",
    categories: ["aesthetic", "cursive", "cute"],
    transform: toLoop,
    description: "Playful looping swirls and soft flourishes.",
  },
  {
    id: "light-coptic",
    name: "Light Coptic",
    categories: ["aesthetic", "unicode"],
    transform: toLight,
    description: "Classical Mediterranean and Coptic light glyphs.",
  },
  {
    id: "smooth-text",
    name: "Smooth Script",
    categories: ["aesthetic", "cute"],
    transform: toSmooth,
    description: "Silky, smooth lowercase lettering.",
  },

  // 4. Gothic / Fraktur
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

  // 5. Double Struck / Blackboard Bold
  {
    id: "double-struck",
    name: "Double-Struck / Blackboard",
    categories: ["popular", "unicode", "aesthetic", "fancy"],
    isPopular: true,
    transform: toDoubleStruck,
    description: "Hollow mathematical blackboard bold letters.",
  },

  // 6. Monospace
  {
    id: "monospace",
    name: "Monospace / Typewriter",
    categories: ["popular", "unicode", "gaming"],
    isPopular: true,
    transform: toMonospace,
    description: "Fixed-width terminal and typewriter font style.",
  },

  // 7. Bubble / Enclosed
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

  // 8. Small Text / Phonetic
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

  // 9. Aesthetic & Spaced
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

  // 10. Playful & Inverted
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

  // 11. Overtext & Combining Marks
  {
    id: "top-dot",
    name: "Top Dot / Dotted Above",
    categories: ["aesthetic", "unicode"],
    transform: toTopDot,
    description: "Delicate dots positioned directly above each letter.",
  },
  {
    id: "dotted-rings",
    name: "Dotted Rings",
    categories: ["aesthetic", "decorative"],
    transform: toDottedRings,
    description: "Floating halo rings over characters.",
  },
  {
    id: "smiling-line",
    name: "Smiling Line",
    categories: ["cute", "decorative"],
    transform: toSmilingLine,
    description: "Connecting smile curve under characters.",
  },
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
    id: "breve-below",
    name: "Breve Below",
    categories: ["unicode", "decorative"],
    transform: toBreveBelow,
    description: "Curved breve markings beneath each glyph.",
  },
  {
    id: "dotted-below",
    name: "Dotted Below",
    categories: ["unicode", "decorative"],
    transform: toDottedBelow,
    description: "Micro-dots beneath characters.",
  },
  {
    id: "floating-marks",
    name: "Floating Marks",
    categories: ["aesthetic", "decorative"],
    transform: toFloatingMarks,
    description: "Floating inverted breves above each letter.",
  },

  // 12. Regional Indicators
  {
    id: "regional-indicator",
    name: "Regional Flag Indicators",
    categories: ["bubble", "aesthetic", "social-media"],
    transform: toRegionalIndicator,
    description: "Square emoji-style alphabet indicator blocks.",
  },

  // 13. Glitch / Zalgo
  {
    id: "zalgo-glitch",
    name: "Glitch / Zalgo Text",
    categories: ["popular", "gaming", "fancy", "gothic"],
    isPopular: true,
    transform: (text, options?: { intensity?: ZalgoIntensity }) =>
      generateZalgo(text, options?.intensity ?? "medium"),
    description: "Chaotic corrupted glitch characters using combining accents.",
  },

  // 14. Decorative Frames (including fontgen.cool borders)
  ...DECORATIVE_STYLES.map((d) => ({
    id: `dec-${d.id}`,
    name: d.name,
    categories: [d.category, "symbols"] as CategoryId[],
    isPopular: ["royal-wings", "sparkle-stars", "star-border", "elegant-stars", "simple-border"].includes(d.id),
    transform: (text: string) => applyDecorativeWrapper(text, d.prefix, d.suffix),
    description: `Text framed with ${d.name.toLowerCase()} ornaments.`,
  })),
];

// Master transformation generator with memoization support
export function generateAllStyles(
  text: string,
  options?: { zalgoIntensity?: ZalgoIntensity }
): { id: string; name: string; result: string; style: FontStyleDefinition }[] {
  if (!text) {
    text = "Your Text Here";
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
