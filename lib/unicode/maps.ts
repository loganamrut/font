// Accurate Unicode mappings and code point offsets

export const SCRIPT_EXCEPTIONS: Record<string, string> = {
  B: "\u212C", // ℬ
  E: "\u2130", // ℰ
  F: "\u2131", // ℱ
  H: "\u210B", // ℋ
  I: "\u2110", // ℐ
  L: "\u2112", // ℒ
  M: "\u2133", // ℳ
  R: "\u211B", // ℛ
  e: "\u212F", // ℯ
  g: "\u210A", // ℊ
  o: "\u2134", // ℴ
};

export const FRAKTUR_EXCEPTIONS: Record<string, string> = {
  C: "\u212D", // ℭ
  H: "\u210C", // ℌ
  I: "\u2111", // ℑ
  R: "\u211C", // ℜ
  Z: "\u2128", // ℨ
};

export const DOUBLE_STRUCK_EXCEPTIONS: Record<string, string> = {
  C: "\u2102", // ℂ
  H: "\u210D", // ℍ
  N: "\u2115", // ℕ
  P: "\u2119", // ℙ
  Q: "\u211A", // ℚ
  R: "\u211D", // ℝ
  Z: "\u2124", // ℤ
};

export const SMALL_CAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
  s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ", I: "ɪ",
  J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ",
  S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
};

export const SUPERSCRIPT_MAP: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ",
  j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", r: "ʳ", s: "ˢ",
  t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", D: "ᴰ", E: "ᴱ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ", K: "ᴷ",
  L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", R: "ᴿ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ",
};

export const SUBSCRIPT_MAP: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ",
  o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
};

export const UPSIDE_DOWN_MAP: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ",
  j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ",
  s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "ᗺ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I",
  J: "ſ", K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ",
  S: "S", T: "┴", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6",
  ",": "‘", ".": "˙", "?": "¿", "!": "¡", "\"": "„", "'": "‚",
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<",
  "&": "⅋", "_": "‾",
};

export const CIRCLED_NUMBERS: Record<string, string> = {
  "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④", "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨",
};

export const CIRCLED_NEGATIVE_NUMBERS: Record<string, string> = {
  "0": "⓿", "1": "➊", "2": "➋", "3": "➌", "4": "➍", "5": "➎", "6": "➏", "7": "➐", "8": "➑", "9": "➒",
};

// 1. Vintage Script (Cherokee-styled visual characters from fontgen.cool)
export const VINTAGE_SCRIPT_MAP: Record<string, string> = {
  a: "Ꭿ", b: "Ᏸ", c: "Ꮯ", d: "Ꭰ", e: "Ꭼ", f: "Ꮀ", g: "Ꮹ", h: "Ꮋ", i: "Ꮖ",
  j: "Ꭻ", k: "Ꮶ", l: "Ꮮ", m: "Ꮇ", n: "Ꮑ", o: "Ꮎ", p: "Ꮲ", q: "Ꮔ", r: "Ꮢ",
  s: "Ꮥ", t: "Ꮦ", u: "Ꮼ", v: "Ꮙ", w: "Ꮿ", x: "Ꮂ", y: "Ᏹ", z: "Ꮓ",
  A: "Ꭿ", B: "Ᏸ", C: "Ꮯ", D: "Ꭰ", E: "Ꭼ", F: "Ꮀ", G: "Ꮹ", H: "Ꮋ", I: "Ꮖ",
  J: "Ꭻ", K: "Ꮶ", L: "Ꮮ", M: "Ꮇ", N: "Ꮑ", O: "Ꮎ", P: "Ꮲ", Q: "Ꮔ", R: "Ꮢ",
  S: "Ꮥ", T: "Ꮦ", U: "Ꮼ", V: "Ꮙ", W: "Ꮿ", X: "Ꮂ", Y: "Ᏹ", Z: "Ꮓ",
};

// 2. Rough / Tribal (Yi / Lisu characters from fontgen.cool)
export const ROUGH_MAP: Record<string, string> = {
  a: "ꋬ", b: "ꃳ", c: "ꏳ", d: "꒯", e: "ꏂ", f: "ꄟ", g: "ꍌ", h: "ꁝ", i: "꒐",
  j: "꒻", k: "ꀗ", l: "꒒", m: "ꂵ", n: "ꋊ", o: "ꄲ", p: "ꉣ", q: "ꆰ", r: "ꋪ",
  s: "ꇙ", t: "꓄", u: "꒤", v: "꒦", w: "ꅐ", x: "ꉧ", y: "ꌦ", z: "ꁴ",
  A: "ꋬ", B: "ꃳ", C: "ꏳ", D: "꒯", E: "ꏂ", F: "ꄟ", G: "ꍌ", H: "ꁝ", I: "꒐",
  J: "꒻", K: "ꀗ", L: "꒒", M: "ꂵ", N: "ꋊ", O: "ꄲ", P: "ꉣ", Q: "ꆰ", R: "ꋪ",
  S: "ꇙ", T: "꓄", U: "꒤", V: "꒦", W: "ꅐ", X: "ꉧ", Y: "ꌦ", Z: "ꁴ",
};

// 3. Fine (Phonetic / cursive fine)
export const FINE_MAP: Record<string, string> = {
  a: "α", b: "Ⴆ", c: "ƈ", d: "ԃ", e: "ҽ", f: "ϝ", g: "ɠ", h: "ɦ", i: "ι",
  j: "ʝ", k: "ƙ", l: "ʅ", m: "ɱ", n: "ɳ", o: "ơ", p: "ρ", q: "ϙ", r: "ɽ",
  s: "ʂ", t: "ȶ", u: "υ", v: "᭘", w: "ɯ", x: "᥊", y: "ƴ", z: "ƹ",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I",
  J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R",
  S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
};

// 4. Loop (Tai Viet / decorative loops)
export const LOOP_MAP: Record<string, string> = {
  a: "ꪖ", b: "ᖯ", c: "ᥴ", d: "ᦔ", e: "ꫀ", f: "ᠻ", g: "ᧁ", h: "ꫝ", i: "ⅈ",
  j: "𝑗", k: "𝕜", l: "ꪶ", m: "ꪑ", n: "ꪀ", o: "ꪮ", p: "ρ", q: "𝘲", r: "ꪹ",
  s: "ꪡ", t: "ȶ", u: "ꪊ", v: "ꪜ", w: "᭙", x: "᥊", y: "ꪗ", z: "ɀ",
  A: "ꪖ", B: "ᖯ", C: "ᥴ", D: "ᦔ", E: "ꫀ", F: "ᠻ", G: "ᧁ", H: "ꫝ", I: "ⅈ",
  J: "𝑗", K: "𝕜", L: "ꪶ", M: "ꪑ", N: "ꪀ", O: "ꪮ", P: "ρ", Q: "𝘲", R: "ꪹ",
  S: "ꪡ", T: "ȶ", U: "ꪊ", V: "ꪜ", W: "᭙", X: "᥊", Y: "ꪗ", Z: "ɀ",
};

// 5. Curve (Canadian Aboriginal syllabics)
export const CURVE_MAP: Record<string, string> = {
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "E", f: "ᖴ", g: "G", h: "ᕼ", i: "I",
  j: "ᒍ", k: "K", l: "ᒪ", m: "ᗰ", n: "ᑎ", o: "O", p: "ᑭ", q: "ᑫ", r: "ᖇ",
  s: "ᔕ", t: "T", u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Y", z: "ᘔ",
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "E", F: "ᖴ", G: "G", H: "ᕼ", I: "I",
  J: "ᒍ", K: "K", L: "ᒪ", M: "ᗰ", N: "ᑎ", O: "O", P: "ᑭ", Q: "ᑫ", R: "ᖇ",
  S: "ᔕ", T: "T", U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Y", Z: "ᘔ",
};

// 6. Light (Coptic / Greek)
export const LIGHT_MAP: Record<string, string> = {
  a: "ⲁ", b: "ⲃ", c: "ⲥ", d: "ⲇ", e: "ⲉ", f: "ϥ", g: "ⲅ", h: "ⲏ", i: "ⲓ",
  j: "ϫ", k: "ⲕ", l: "ⲗ", m: "ⲙ", n: "ⲛ", o: "ⲟ", p: "ⲡ", q: "ϥ", r: "ⲅ",
  s: "ⲥ", t: "ⲧ", u: "υ", v: "ⲩ", w: "ⲱ", x: "ⲭ", y: "ⲩ", z: "ⲍ",
  A: "Ⲁ", B: "Ⲃ", C: "Ⲥ", D: "Ⲇ", E: "Ⲉ", F: "Ϥ", G: "Ⲅ", H: "Ⲏ", I: "Ⲓ",
  J: "Ϫ", K: "Ⲕ", L: "Ⲗ", M: "Ⲙ", N: "Ⲛ", O: "Ⲟ", P: "Ⲡ", Q: "Ϥ", R: "Ⲣ",
  S: "Ⲥ", T: "Ⲧ", U: "Ⲩ", V: "Ⲩ", W: "Ⲱ", X: "Ⲭ", Y: "Ⲩ", Z: "Ⲍ",
};

// 7. Smooth
export const SMOOTH_MAP: Record<string, string> = {
  a: "α", b: "ь", c: "ᴄ", d: "ԃ", e: "ɛ", f: "ғ", g: "ɢ", h: "Һ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ɾ",
  s: "s", t: "ꞇ", u: "ᤙ", v: "ᴠ", w: "ᴡ", x: "᥊", y: "ƴ", z: "ᴢ",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I",
  J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R",
  S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
};
