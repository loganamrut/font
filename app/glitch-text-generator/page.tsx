import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Glitch Text Generator - Zalgo & Corrupted Text Maker",
  description:
    "Create cursed, corrupted, and glitchy Zalgo text with safe intensity controls. Copy and paste scary, chaotic text for Discord, gaming, creepypastas, and memes.",
  canonicalPath: "/glitch-text-generator",
  keywords: [
    "glitch text generator",
    "zalgo text generator",
    "corrupted text generator",
    "cursed text generator",
    "zalgo font copy paste",
    "scary text generator",
  ],
});

const GLITCH_FAQS: FAQItem[] = [
  {
    question: "What is Zalgo or Glitch text?",
    answer:
      "Zalgo text (also called corrupted or cursed text) is created by stacking multiple Unicode combining diacritical marks (accents, dots, and lines) on top of and below standard letters. Because Unicode allows combining marks to stack indefinitely, they overflow their normal line height, creating a chaotic 'corrupted' appearance.",
  },
  {
    question: "Why does FontGen have intensity limits on Glitch text?",
    answer:
      "Unbounded Zalgo text can contain hundreds of combining marks per character, which can cause mobile web browsers and apps to freeze, crash, or lag. FontGen implements strictly bounded Low, Medium, and High presets to ensure your text looks intensely glitched while remaining safe for all devices.",
  },
  {
    question: "Can I copy and paste glitch text into Discord and TikTok?",
    answer:
      "Yes! Discord, TikTok comments, and Reddit support combining diacritics. However, some games and strict comment filters may strip or truncate excessive accents.",
  },
];

export default function GlitchTextGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Glitch Text Generator", path: "/glitch-text-generator" },
  ]);
  const faqSchema = generateFAQSchema(GLITCH_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Glitch Text Generator - FontGen",
    "Zalgo and corrupted glitch text generator with safe intensity controls.",
    "/glitch-text-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Glitch Text Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create chaotic <strong>Zalgo text</strong>, corrupted matrices, and <strong>cursed glitch fonts</strong> with safe browser intensity controls.
        </p>
      </section>

      <FontGenerator initialText="Corrupted Soul" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          The Science Behind Unicode Combining Diacritical Marks
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Languages around the world require diacritical marks (such as accents, umlauts, cedillas, and macrons) to modify pronunciations. Unicode standardizes these as combining marks (code points U+0300 to U+036F). By programmatically appending multiple top, middle, and bottom marks to a single letter, FontGen simulates a haunting digital malfunction without corrupting the underlying text.
        </p>
      </article>

      <FAQSection faqs={GLITCH_FAQS} title="Glitch Text Generator FAQ" />
      <RelatedGenerators currentPath="/glitch-text-generator" />
    </div>
  );
}
