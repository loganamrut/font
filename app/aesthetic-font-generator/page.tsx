import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Aesthetic Font Generator - Vaporwave & Aesthetic Text (Copy & Paste)",
  description:
    "Generate vaporwave fullwidth text, spaced aesthetic headers, and Japanese corner brackets. Free online aesthetic text generator for Tumblr, TikTok, and Instagram.",
  canonicalPath: "/aesthetic-font-generator",
  keywords: [
    "aesthetic font generator",
    "aesthetic text generator",
    "vaporwave text generator",
    "vaporwave font",
    "aesthetic fonts copy and paste",
    "fullwidth text generator",
    "wide text generator",
  ],
});

const AESTHETIC_FAQS: FAQItem[] = [
  {
    question: "What is Vaporwave / Fullwidth text?",
    answer:
      "Fullwidth text (also known as Zenkaku characters in Japanese typography) originates from East Asian encoding standards where Latin characters are allocated the exact same fixed width as Kanji or Hanzi ideograms (e.g. Ａｅｓｔｈｅｔｉｃ). The internet adopted this style for vaporwave, synthwave, and chill aesthetic posts.",
  },
  {
    question: "What are Asian corner brackets (『 』)?",
    answer:
      "In East Asian punctuation, corner brackets (『』 and 【】) are used like quotation marks or title brackets. On social media, they are widely used to frame bio quotes, song titles, and aesthetic headings.",
  },
];

export default function AestheticFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Aesthetic Font Generator", path: "/aesthetic-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(AESTHETIC_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Aesthetic Font Generator - FontGen",
    "Vaporwave and aesthetic text styles for Tumblr, TikTok, and Instagram.",
    "/aesthetic-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Aesthetic Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create nostalgic <strong>vaporwave wide text</strong>, clean spaced letters, and <strong>bracketed frames</strong> to copy and paste into your aesthetic bios.
        </p>
      </section>

      <FontGenerator defaultCategory="aesthetic" initialText="Aesthetic Dreams" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Creating That Minimalist & Retro Aesthetic
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          From Tumblr moodboards to cozy TikTok bios, aesthetic typography relies on deliberate spacing, fullwidth Zenkaku forms, and delicate symbols. FontGen lets you copy and paste these iconic styles in a single click with zero software or extensions required.
        </p>
      </article>

      <FAQSection faqs={AESTHETIC_FAQS} title="Aesthetic Font Generator FAQ" />
      <RelatedGenerators currentPath="/aesthetic-font-generator" />
    </div>
  );
}
