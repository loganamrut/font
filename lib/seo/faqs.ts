export interface FAQItem {
  question: string;
  answer: string;
}

export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What is a font generator?",
    answer:
      "A font generator is an online tool that converts plain keyboard text into decorative, stylized characters. FontGen specifically maps your text to standard Unicode symbols and mathematical alphanumeric characters that look like customized fonts but can be directly copied and pasted anywhere.",
  },
  {
    question: "Are these actual font files (TTF/OTF)?",
    answer:
      "No. Traditional digital fonts are software files (such as .ttf, .otf, or .woff) that must be installed on an operating system or loaded via CSS. FontGen generates standard Unicode text characters that already exist within international character encodings, allowing you to paste them into text fields without installing any files.",
  },
  {
    question: "How do Unicode fonts work?",
    answer:
      "The Unicode Consortium assigns a unique numeric code point to over 149,000 characters worldwide. Included within Unicode are specialized mathematical alphanumeric blocks (like Mathematical Bold, Script, Fraktur, and Double-Struck) originally designed for scientific formulas. FontGen algorithmically maps standard ASCII letters to these visual equivalents.",
  },
  {
    question: "Do fancy fonts work on Instagram, TikTok, and X (Twitter)?",
    answer:
      "Yes. Most modern social media apps (including Instagram, TikTok, X, Discord, and WhatsApp) support standard Unicode characters in bios, captions, and comments. However, screen readers may read mathematical Unicode characters as individual mathematical symbols, so it is recommended to use fancy text sparingly for decorative emphasis.",
  },
  {
    question: "Why do some characters show up as blank boxes (tofu) or question marks?",
    answer:
      "When a character renders as a rectangular box (often called 'tofu') or question mark, it means the operating system or browser does not have a system font containing a glyph for that specific Unicode code point. Modern devices (iOS, Android, macOS, Windows 10/11) have comprehensive font coverage, but older devices may lack newer mathematical symbols.",
  },
  {
    question: "Does FontGen upload, store, or log my text?",
    answer:
      "No. Your text never leaves your browser. All Unicode transformations are executed purely on your local device via deterministic JavaScript. FontGen does not use an external API, database, server-side processing, or tracking of your typed input.",
  },
  {
    question: "Can I use generated text commercially?",
    answer:
      "Yes. Unicode characters are open international typographic standards. You are free to copy and paste generated Unicode text into personal profiles, commercial social media posts, branding materials, YouTube titles, and marketing captions without copyright restrictions.",
  },
  {
    question: "Why are some accented letters or non-English characters unchanged?",
    answer:
      "Mathematical alphanumeric blocks in the Unicode specification only define equivalents for basic Latin letters (A–Z, a–z) and numerals (0–9). When you enter characters outside this set (such as accented vowels like é, ñ, or non-Latin scripts like Devanagari or Arabic), FontGen deliberately preserves the original character so your text remains readable without corruption.",
  },
];
