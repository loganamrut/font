import { describe, it, expect } from "vitest";
import {
  toBoldSerif,
  toItalicSerif,
  toScript,
  toFraktur,
  toDoubleStruck,
  toMonospace,
  toCircled,
  toFullwidth,
  toSmallCaps,
  toUpsideDown,
  toStrikethrough,
} from "../lib/unicode/transforms";
import { generateAllStyles } from "../lib/unicode/engine";
import { generateZalgo } from "../lib/unicode/zalgo";

describe("Unicode Transformation Engine", () => {
  it("transforms standard English: Hello World", () => {
    const bold = toBoldSerif("Hello World");
    expect(bold).toBe("𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝");

    const italic = toItalicSerif("Hello World");
    expect(italic).toBe("𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑");

    const script = toScript("Hello World");
    expect(script).toBe("ℋℯ𝓁𝓁ℴ 𝒲ℴ𝓇𝓁𝒹");

    const monospace = toMonospace("Hello World");
    expect(monospace).toBe("𝙷𝚎𝚕𝚕𝚘 𝚆𝚘𝚛𝚕𝚍");

    const doubleStruck = toDoubleStruck("Hello");
    expect(doubleStruck).toBe("ℍ𝕖𝕝𝕝𝕠");
  });

  it("transforms lowercase & uppercase independently", () => {
    const lower = toBoldSerif("hello");
    expect(lower).toBe("𝐡𝐞𝐥𝐥𝐨");

    const upper = toBoldSerif("HELLO");
    expect(upper).toBe("𝐇𝐄𝐋𝐋𝐎");
  });

  it("handles numbers 123456", () => {
    const boldNums = toBoldSerif("123456");
    expect(boldNums).toBe("𝟏𝟐𝟑𝟒𝟓𝟔");

    const circledNums = toCircled("123");
    expect(circledNums).toBe("①②③");
  });

  it("safely handles diacritics and accented characters: Café, Résumé", () => {
    const cafe = toBoldSerif("Café");
    // 'é' is unmapped in basic latin mathematical alphabet, so it remains safe 'é'
    expect(cafe).toBe("𝐂𝐚𝐟é");

    const resume = toBoldSerif("Résumé");
    expect(resume).toBe("𝐑é𝐬𝐮𝐦é");
  });

  it("preserves non-Latin international scripts without corruption", () => {
    const hindi = "नमस्ते दुनिया";
    expect(toBoldSerif(hindi)).toBe(hindi);
    expect(toDoubleStruck(hindi)).toBe(hindi);

    const marathi = "शुभ प्रभात";
    expect(toBoldSerif(marathi)).toBe(marathi);

    const arabic = "مرحبا بالعالم";
    expect(toBoldSerif(arabic)).toBe(arabic);

    const cjk = "こんにちは世界 / 你好世界";
    expect(toBoldSerif(cjk)).toBe(cjk);
  });

  it("preserves emojis and complex emoji sequences safely", () => {
    const emojis = "😀 😎 ❤️";
    expect(toBoldSerif(emojis)).toBe(emojis);

    // Composite emoji sequence: Family 👨‍👩‍👧‍👦
    const familyEmoji = "👨‍👩‍👧‍👦";
    expect(toBoldSerif(familyEmoji)).toBe(familyEmoji);

    // Mixed text and emoji
    const mixed = "Hello 😀 World!";
    expect(toBoldSerif(mixed)).toBe("𝐇𝐞𝐥𝐥𝐨 😀 𝐖𝐨𝐫𝐥𝐝!");
  });

  it("preserves punctuation, URLs, and email addresses safely", () => {
    const url = "https://fontgen.dev/test?id=123&query=bold";
    const email = "contact@fontgen.dev";

    const boldEmail = toBoldSerif(email);
    expect(boldEmail).toContain("@");
    expect(boldEmail).toContain(".");

    const boldUrl = toBoldSerif(url);
    expect(boldUrl).toContain("://");
    expect(boldUrl).toContain("?");
  });

  it("handles upside down inversion properly", () => {
    const upsideDown = toUpsideDown("Hello");
    expect(upsideDown).toBe("ollǝH");
  });

  it("handles small caps conversion", () => {
    const small = toSmallCaps("hello");
    expect(small).toBe("ʜᴇʟʟᴏ");
  });

  it("handles empty strings, whitespace, and newlines safely", () => {
    expect(toBoldSerif("")).toBe("");
    expect(toBoldSerif("   ")).toBe("   ");
    expect(toBoldSerif("Hello\nWorld")).toBe("𝐇𝐞𝐥𝐥𝐨\n𝐖𝐨𝐫𝐥𝐝");
  });

  it("generates Zalgo text without crashing and respects bounds", () => {
    const low = generateZalgo("Test", "low");
    expect(low.length).toBeGreaterThan("Test".length);

    const high = generateZalgo("Test", "high");
    expect(high.length).toBeGreaterThan(low.length);
  });

  it("performs safely on large text blocks (10,000+ characters)", () => {
    const longText = "Quick brown fox jumps over the lazy dog. ".repeat(300);
    expect(longText.length).toBeGreaterThan(12000);

    const start = performance.now();
    const result = toBoldSerif(longText);
    const duration = performance.now() - start;

    expect(result.length).toBeGreaterThan(longText.length);
    // Should process in under 100ms
    expect(duration).toBeLessThan(100);
  });

  it("executes generateAllStyles correctly for comprehensive list", () => {
    const all = generateAllStyles("FontGen");
    expect(all.length).toBeGreaterThanOrEqual(40);
    expect(all.some((s) => s.id === "bold-serif")).toBe(true);
    expect(all.some((s) => s.id === "cursive-script")).toBe(true);
    expect(all.some((s) => s.id === "bubble-text")).toBe(true);
    expect(all.some((s) => s.id === "gothic-fraktur")).toBe(true);
  });
});
