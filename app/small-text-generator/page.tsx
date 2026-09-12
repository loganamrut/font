import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Small Text Generator - Tiny Caps, Superscript & Subscript",
  description:
    "Generate tiny small capitals, raised superscripts, and low subscripts. Copy and paste miniature fonts for subtle bio captions, aesthetic profiles, and footnotes.",
  canonicalPath: "/small-text-generator",
  keywords: [
    "small text generator",
    "tiny text generator",
    "small caps generator",
    "superscript generator",
    "subscript generator",
    "tiny letters copy and paste",
    "mini font generator",
  ],
});

const SMALL_TEXT_FAQS: FAQItem[] = [
  {
    question: "What is the difference between Small Caps, Superscript, and Subscript?",
    answer:
      "Small Capitals (ᴀʙᴄ) are scaled-down capital letterforms sitting on the baseline. Superscripts (ᵃᵇᶜ / ¹²³) are elevated miniature characters sitting above the x-height. Subscripts (ₐᵦ𝒸 / ₁₂₃) sit below the baseline, commonly used for chemical formulas or subtle footnotes.",
  },
  {
    question: "Where do Small Caps characters come from in Unicode?",
    answer:
      "Small Caps symbols were originally introduced into Unicode for the International Phonetic Alphabet (IPA) and phonetic transcriptions. On social media, they are celebrated for giving bios an understated, sophisticated, minimalist aesthetic.",
  },
  {
    question: "Why are some letters missing in standard Unicode subscript?",
    answer:
      "Unicode was created to standardize characters actually used in languages and mathematics, not as a complete decorative font engine. Consequently, several letters (like c, d, f, g) were never assigned official subscript code points. FontGen safely preserves missing letters to avoid corrupting your text.",
  },
];

export default function SmallTextGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Small Text Generator", path: "/small-text-generator" },
  ]);
  const faqSchema = generateFAQSchema(SMALL_TEXT_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Small Text Generator - FontGen",
    "Tiny small caps, superscript, and subscript text generator to copy and paste.",
    "/small-text-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Small Text Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create subtle <strong>small capitals (ᴀʙᴄ)</strong>, elevated <strong>superscripts (ᵃᵇᶜ)</strong>, and miniature text to copy and paste.
        </p>
      </section>

      <FontGenerator defaultCategory="small-text" initialText="Tiny Letters" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          The Subtle Charm of Miniature Typography
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Small caps and superscript characters are beloved for their understated elegance. Rather than screaming for attention, small text invites the reader in closer. It is the premier choice for aesthetic Instagram bios, minimalist Twitter headers, subheadings, and photo credits.
        </p>
      </article>

      <FAQSection faqs={SMALL_TEXT_FAQS} title="Small Text Generator FAQ" />
      <RelatedGenerators currentPath="/small-text-generator" />
    </div>
  );
}
