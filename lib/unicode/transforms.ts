import {
  SCRIPT_EXCEPTIONS,
  FRAKTUR_EXCEPTIONS,
  DOUBLE_STRUCK_EXCEPTIONS,
  SMALL_CAPS_MAP,
  SUPERSCRIPT_MAP,
  SUBSCRIPT_MAP,
  UPSIDE_DOWN_MAP,
  CIRCLED_NUMBERS,
  CIRCLED_NEGATIVE_NUMBERS,
  VINTAGE_SCRIPT_MAP,
  ROUGH_MAP,
  FINE_MAP,
  LOOP_MAP,
  CURVE_MAP,
  LIGHT_MAP,
  SMOOTH_MAP,
} from "./maps";

// Helper to transform characters using base offset ranges
function mapOffset(
  text: string,
  upperBase: number,
  lowerBase: number,
  numberBase?: number,
  exceptions?: Record<string, string>
): string {
  if (!text) return "";
  const chars = Array.from(text);

  return chars
    .map((char) => {
      // Check specific exceptions first
      if (exceptions && exceptions[char]) {
        return exceptions[char];
      }

      const code = char.codePointAt(0);
      if (!code) return char;

      // Uppercase A-Z (65 - 90)
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(upperBase + (code - 65));
      }

      // Lowercase a-z (97 - 122)
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(lowerBase + (code - 97));
      }

      // Numbers 0-9 (48 - 57)
      if (numberBase !== undefined && code >= 48 && code <= 57) {
        return String.fromCodePoint(numberBase + (code - 48));
      }

      // Preserve unmapped character (emojis, punctuation, international characters)
      return char;
    })
    .join("");
}

// Helper to map using a dictionary lookup table
function mapDictionary(text: string, map: Record<string, string>): string {
  if (!text) return "";
  return Array.from(text)
    .map((char) => map[char] ?? char)
    .join("");
}

// Helper for combining marks (e.g. strikethrough, underline)
function applyCombiningMark(text: string, mark: string): string {
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      // Skip combining mark on spaces, newlines, and multi-code-unit symbols
      if (/\s/.test(char) || char === "\n") return char;
      return `${char}${mark}`;
    })
    .join("");
}

// 1. Mathematical Alphanumeric Transforms
export const toBoldSerif = (text: string) => mapOffset(text, 0x1d400, 0x1d41a, 0x1d7ce);
export const toItalicSerif = (text: string) => {
  return mapOffset(text, 0x1d434, 0x1d44e, undefined, { h: "\u210E" });
};
export const toBoldItalicSerif = (text: string) => mapOffset(text, 0x1d468, 0x1d482);
export const toSansSerif = (text: string) => mapOffset(text, 0x1d5a0, 0x1d5ba, 0x1d7e2);
export const toSansSerifBold = (text: string) => mapOffset(text, 0x1d5d4, 0x1d5ee, 0x1d7ec);
export const toSansSerifItalic = (text: string) => mapOffset(text, 0x1d608, 0x1d622);
export const toSansSerifBoldItalic = (text: string) => mapOffset(text, 0x1d63c, 0x1d656);

// Script / Cursive
export const toScript = (text: string) =>
  mapOffset(text, 0x1d49c, 0x1d4b6, undefined, SCRIPT_EXCEPTIONS);
export const toBoldScript = (text: string) => mapOffset(text, 0x1d4d0, 0x1d4ea);

// Fraktur / Gothic
export const toFraktur = (text: string) =>
  mapOffset(text, 0x1d504, 0x1d51e, undefined, FRAKTUR_EXCEPTIONS);
export const toBoldFraktur = (text: string) => mapOffset(text, 0x1d56c, 0x1d586);

// Double Struck / Blackboard Bold
export const toDoubleStruck = (text: string) =>
  mapOffset(text, 0x1d538, 0x1d552, 0x1d7d8, DOUBLE_STRUCK_EXCEPTIONS);

// Monospace
export const toMonospace = (text: string) => mapOffset(text, 0x1d670, 0x1d68a, 0x1d7f6);

// Circled (Bubble)
export const toCircled = (text: string) => {
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      if (CIRCLED_NUMBERS[char]) return CIRCLED_NUMBERS[char];
      const code = char.codePointAt(0);
      if (!code) return char;
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x24b6 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x24d0 + (code - 97));
      return char;
    })
    .join("");
};

// Circled Negative (Black Bubble)
export const toCircledNegative = (text: string) => {
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      if (CIRCLED_NEGATIVE_NUMBERS[char]) return CIRCLED_NEGATIVE_NUMBERS[char];
      const code = char.codePointAt(0);
      if (!code) return char;
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f150 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f150 + (code - 97));
      return char;
    })
    .join("");
};

// Squared
export const toSquared = (text: string) => {
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      const code = char.codePointAt(0);
      if (!code) return char;
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f130 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f130 + (code - 97));
      return char;
    })
    .join("");
};

// Squared Negative
export const toSquaredNegative = (text: string) => {
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      const code = char.codePointAt(0);
      if (!code) return char;
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f170 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f170 + (code - 97));
      return char;
    })
    .join("");
};

// Fullwidth / Vaporwave
export const toFullwidth = (text: string) => {
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      if (char === " ") return "\u3000";
      const code = char.codePointAt(0);
      if (!code) return char;
      if (code >= 33 && code <= 126) {
        return String.fromCodePoint(code + 0xfee0);
      }
      return char;
    })
    .join("");
};

// Wide Spaced Aesthetic
export const toAestheticSpaced = (text: string) => {
  if (!text) return "";
  return Array.from(text).join("  ");
};

// Small Caps
export const toSmallCaps = (text: string) => mapDictionary(text, SMALL_CAPS_MAP);

// Superscript
export const toSuperscript = (text: string) => mapDictionary(text, SUPERSCRIPT_MAP);

// Subscript
export const toSubscript = (text: string) => mapDictionary(text, SUBSCRIPT_MAP);

// Upside Down & Reversed
export const toUpsideDown = (text: string) => {
  if (!text) return "";
  return Array.from(text)
    .reverse()
    .map((char) => UPSIDE_DOWN_MAP[char] ?? char)
    .join("");
};

// Reverse / Mirror Text
export const toMirrorReverse = (text: string) => {
  if (!text) return "";
  return Array.from(text).reverse().join("");
};

// Combining Mark Styles
export const toStrikethrough = (text: string) => applyCombiningMark(text, "\u0336");
export const toSlashThrough = (text: string) => applyCombiningMark(text, "\u0338");
export const toUnderline = (text: string) => applyCombiningMark(text, "\u0332");
export const toDoubleUnderline = (text: string) => applyCombiningMark(text, "\u0333");
export const toOverline = (text: string) => applyCombiningMark(text, "\u0305");
export const toDottedBelow = (text: string) => applyCombiningMark(text, "\u0323");
export const toWaveUnderline = (text: string) => applyCombiningMark(text, "\u0330");
export const toTopDot = (text: string) => applyCombiningMark(text, "\u0307");
export const toDottedRings = (text: string) => applyCombiningMark(text, "\u030A");
export const toBreveBelow = (text: string) => applyCombiningMark(text, "\u032E");
export const toSmilingLine = (text: string) => applyCombiningMark(text, "\u035C");
export const toFloatingMarks = (text: string) => applyCombiningMark(text, "\u0311");

// Regional Indicators (Emoji Letters)
export const toRegionalIndicator = (text: string) => {
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      const code = char.codePointAt(0);
      if (!code) return char;
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f1e6 + (code - 65)) + " ";
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f1e6 + (code - 97)) + " ";
      return char;
    })
    .join("");
};

// 2. FontGen.cool Inspired Unique Alphabetic Fonts
export const toVintageScript = (text: string) => mapDictionary(text, VINTAGE_SCRIPT_MAP);
export const toRough = (text: string) => mapDictionary(text, ROUGH_MAP);
export const toFine = (text: string) => mapDictionary(text, FINE_MAP);
export const toLoop = (text: string) => mapDictionary(text, LOOP_MAP);
export const toCurve = (text: string) => mapDictionary(text, CURVE_MAP);
export const toLight = (text: string) => mapDictionary(text, LIGHT_MAP);
export const toSmooth = (text: string) => mapDictionary(text, SMOOTH_MAP);
