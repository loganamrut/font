import { f as COOL_FONTS } from "./coolEngine";
import { generateZalgo, ZalgoIntensity } from "./zalgo";
import { CategoryId } from "./categories";
import {
  toBoldSerif,
  toVintageScript,
  toRough,
} from "./transforms";

export interface FontStyleDefinition {
  id: string;
  name: string;
  cat: string;
  categories: CategoryId[];
  isPopular?: boolean;
  transform: (text: string, options?: any) => string;
  description: string;
}

const POPULAR_IDS = new Set([
  "vintageScript",
  "rough",
  "cursiveFont",
  "boldScriptFont",
  "boldFont",
  "doubleStruckOutlined",
  "frakturGothicFont",
  "oldEnglishBold",
  "fine",
  "loop",
  "light",
  "smooth",
  "monospaceTypewriter",
  "curve",
  "sansSerifBoldItalic",
  "italicText",
  "boldItalic",
  "sansSerif",
  "smallCaps",
  "bubbleText",
  "blackBubbleFont",
  "dec_fitness_bar",
  "dec_flower_border",
  "dec_star_border",
  "elg_spark_shine",
  "elg_elegant_stars",
  "zalgo-glitch",
  "bold-serif",
  "vintage-script",
  "rough-tribal",
]);

function getCategoriesForStyle(id: string, cat: string, label: string): CategoryId[] {
  const cats = new Set<CategoryId>(["all"]);
  const idLower = id.toLowerCase();
  const labelLower = label.toLowerCase();

  // Category mapping matching fontgen.cool
  if (cat === "Stylish Fonts") {
    cats.add("stylish");
    cats.add("popular");
    cats.add("social-media");
  } else if (cat === "Fancy Text Styles") {
    cats.add("fancy");
    cats.add("unicode");
  } else if (cat === "Cool Fonts") {
    cats.add("cool");
    cats.add("bubble");
  } else if (cat === "Beautiful Fonts") {
    cats.add("beautiful");
    cats.add("cursive");
  } else if (cat === "Striking Fonts") {
    cats.add("striking");
    cats.add("gaming");
  } else if (cat === "Minimal Fonts") {
    cats.add("minimal");
    cats.add("small-text");
  } else if (cat === "Line Fonts") {
    cats.add("symbols");
    cats.add("lines");
  } else if (cat === "Wrapped Fonts") {
    cats.add("decorative");
    cats.add("wrapped");
  } else if (cat === "Overtext Styles") {
    cats.add("symbols");
    cats.add("overtext");
  } else if (cat === "Symbolic Fonts") {
    cats.add("symbols");
  } else if (cat === "Dynamic Text Styles") {
    cats.add("symbols");
    cats.add("motion");
  } else if (cat === "Block Fonts") {
    cats.add("blocks");
    cats.add("bubble");
  } else if (cat === "Motion Text Styles") {
    cats.add("motion");
    cats.add("symbols");
  } else if (cat === "Framed Letters") {
    cats.add("framed");
    cats.add("decorative");
  } else if (cat === "Decorated Text Styles") {
    cats.add("decorative");
  } else if (cat === "Elegant Decorated Text") {
    cats.add("decorative");
    cats.add("elegant");
  } else if (cat === "Aesthetic Fonts") {
    cats.add("aesthetic");
  } else if (cat === "Cutesy Fonts") {
    cats.add("cute");
  } else if (cat === "Unique Fonts") {
    cats.add("unique");
  } else if (cat === "Random Fonts") {
    cats.add("random");
    cats.add("cool");
  } else if (cat === "Random Decorated Styles") {
    cats.add("random");
    cats.add("decorative");
  } else if (cat === "Mixed Fonts") {
    cats.add("mixed");
    cats.add("cool");
  } else if (cat === "Number Fonts") {
    cats.add("numbers");
    cats.add("unicode");
  }

  // Keyword-based classification for SEO landing pages
  if (idLower.includes("bold") || labelLower.includes("bold")) {
    cats.add("bold");
  }
  if (idLower.includes("italic") || labelLower.includes("italic")) {
    cats.add("italic");
  }
  if (
    idLower.includes("script") ||
    labelLower.includes("script") ||
    idLower.includes("cursive") ||
    labelLower.includes("cursive")
  ) {
    cats.add("cursive");
  }
  if (
    idLower.includes("fraktur") ||
    labelLower.includes("fraktur") ||
    idLower.includes("gothic") ||
    labelLower.includes("gothic") ||
    idLower.includes("oldenglish")
  ) {
    cats.add("gothic");
  }
  if (
    idLower.includes("bubble") ||
    labelLower.includes("bubble") ||
    idLower.includes("square") ||
    idLower.includes("circle")
  ) {
    cats.add("bubble");
  }
  if (
    idLower.includes("small") ||
    labelLower.includes("small") ||
    idLower.includes("tiny") ||
    idLower.includes("subscript")
  ) {
    cats.add("small-text");
  }
  if (
    idLower.includes("upsidedown") ||
    idLower.includes("flip") ||
    idLower.includes("reverse")
  ) {
    cats.add("cool");
  }

  return Array.from(cats);
}

// Convert all 245 fonts from fontgen.cool into FontStyleDefinition objects
const COOL_FONT_STYLES: FontStyleDefinition[] = COOL_FONTS.map((cf) => ({
  id: cf.id,
  name: cf.label,
  cat: cf.cat,
  categories: getCategoriesForStyle(cf.id, cf.cat, cf.label),
  isPopular: POPULAR_IDS.has(cf.id),
  transform: (text: string) => cf.fn(text),
  description: `${cf.label} Unicode font style from ${cf.cat}.`,
}));

// Master list: All 245 fontgen.cool fonts + Zalgo Glitch + backward-compatible test aliases
export const FONT_STYLES: FontStyleDefinition[] = [
  // 1. Core backward-compatible aliases for Vitest suite
  {
    id: "bold-serif",
    name: "Bold (Serif)",
    cat: "Fancy Text Styles",
    categories: ["all", "popular", "bold", "unicode", "social-media"],
    isPopular: true,
    transform: (text: string) => toBoldSerif(text),
    description: "Mathematical bold serif letters for high visibility.",
  },
  {
    id: "vintage-script",
    name: "Vintage Script",
    cat: "Stylish Fonts",
    categories: ["all", "popular", "stylish", "cursive"],
    isPopular: true,
    transform: (text: string) => toVintageScript(text),
    description: "Historical Cherokee and archaic script typography.",
  },
  {
    id: "rough-tribal",
    name: "Rough / Tribal",
    cat: "Stylish Fonts",
    categories: ["all", "popular", "stylish", "striking", "gaming"],
    isPopular: true,
    transform: (text: string) => toRough(text),
    description: "Syllabic geometric Unicode letterforms.",
  },

  // 2. Glitch / Zalgo
  {
    id: "zalgo-glitch",
    name: "Glitch / Zalgo Text",
    cat: "Striking Fonts",
    categories: ["all", "popular", "gaming", "striking", "fancy", "gothic"],
    isPopular: true,
    transform: (text: string, options?: { intensity?: ZalgoIntensity }) =>
      generateZalgo(text, options?.intensity ?? "medium"),
    description: "Chaotic corrupted glitch characters using combining accents.",
  },

  // 3. All 245 fontgen.cool styles
  ...COOL_FONT_STYLES,
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
