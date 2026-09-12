import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";
import { Cpu, Globe, ShieldCheck, Check } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Unicode Text Generator - The Complete Unicode Typography Guide",
  description:
    "Convert text into authentic Unicode mathematical and enclosed character sets. Comprehensive technical guide to code points, UTF-8 encoding, and font compatibility.",
  canonicalPath: "/unicode-text-generator",
  keywords: [
    "unicode text generator",
    "unicode font generator",
    "unicode fonts copy and paste",
    "unicode converter",
    "mathematical alphanumeric symbols",
    "unicode text copy paste",
  ],
});

const UNICODE_FAQS: FAQItem[] = [
  {
    question: "What is the Unicode Standard?",
    answer:
      "Unicode is an international character encoding standard managed by the Unicode Consortium. It provides a unique numeric code point for every character, regardless of platform, device, application, or language. Currently, Unicode contains over 149,000 characters across 161 modern and historic scripts.",
  },
  {
    question: "Why do mathematical symbols look like custom fonts?",
    answer:
      "Unicode includes a dedicated block called 'Mathematical Alphanumeric Symbols' (range U+1D400 to U+1D7FF). Mathematicians and physicists needed to distinguish between variables (such as scalar x vs. vector 𝐱 vs. matrix 𝑿) in pure text files. Font generators repurpose these distinct code points to create copy-pasteable typographic styles.",
  },
  {
    question: "What are surrogate pairs and why do they matter?",
    answer:
      "Standard JavaScript uses 16-bit code units (UTF-16). Characters with code points above U+FFFF (which includes most mathematical alphanumeric symbols and modern emojis) are represented by two 16-bit code units called surrogate pairs. Naive string operations can split these pairs, corrupting the text. FontGen uses codepoint-aware iterators (like Array.from) to preserve multi-byte integrity.",
  },
];

export default function UnicodeTextGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Unicode Text Generator", path: "/unicode-text-generator" },
  ]);
  const faqSchema = generateFAQSchema(UNICODE_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Unicode Text Generator - FontGen",
    "Authentic Unicode mathematical and typographic character generator.",
    "/unicode-text-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Unicode Text Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore the international <strong>Unicode character architecture</strong>. Generate genuine mathematical alphanumeric symbols, enclosed alphabets, and phonetic forms to copy and paste.
        </p>
      </section>

      <FontGenerator defaultCategory="unicode" initialText="Unicode Architecture" />

      {/* Deep Educational Technical Article */}
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            The Technical Foundation of Online Font Generators
          </h2>
          <p className="text-sm sm:text-base">
            In computing, a TrueType or OpenType font file defines glyph outlines (bezier curves), while an encoding specifies which numerical integer (code point) corresponds to which abstract character. In normal typography, applying bold or italic formatting does not change the underlying code point of the letter &lsquo;A&rsquo; (which is integer 65 / U+0041).
          </p>
          <p className="text-sm sm:text-base">
            However, when you use a <strong>Unicode text generator</strong> like FontGen, the underlying code point is transformed into an entirely different, independent character in the Unicode standard. For instance, Latin letter &lsquo;A&rsquo; (U+0041) becomes Mathematical Bold Capital A (U+1D400), Mathematical Sans-Serif Bold Capital A (U+1D5D4), or Fraktur Capital A (U+1D504).
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-500" />
            <span>Key Unicode Blocks Used in Fancy Text Generation</span>
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Mathematical Alphanumeric Symbols (U+1D400–U+1D7FF):</strong> Contains Bold, Italic, Bold Italic, Script, Bold Script, Fraktur, Bold Fraktur, Double-Struck, Sans-Serif, and Monospace variants.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Enclosed Alphanumerics (U+2460–U+24FF & U+1F100–U+1F1FF):</strong> Houses circled numbers, circled letters (bubble text), inverted negative circled letters, and squared letter blocks.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Halfwidth and Fullwidth Forms (U+FF00–U+FFEF):</strong> Japanese Zenkaku forms mapped 1:1 with traditional fixed-width character cells (Vaporwave text).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Combining Diacritical Marks (U+0300–U+036F):</strong> Accents, lines, and modifiers that overlay directly onto the preceding base character (used for strikethrough, underline, and bounded Zalgo glitch).
              </div>
            </li>
          </ul>
        </section>
      </article>

      <FAQSection faqs={UNICODE_FAQS} title="Unicode Technical FAQ" />
      <RelatedGenerators currentPath="/unicode-text-generator" />
    </div>
  );
}
