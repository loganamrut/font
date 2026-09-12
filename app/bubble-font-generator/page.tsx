import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Bubble Font Generator - Circled & Enclosed Text (Copy & Paste)",
  description:
    "Transform plain text into cute circled bubble letters and inverted dark bubble badges. Instant copy and paste bubble font generator for bios, captions, and cute profiles.",
  canonicalPath: "/bubble-font-generator",
  keywords: [
    "bubble font generator",
    "bubble text generator",
    "circled text generator",
    "circle letters copy paste",
    "bubble letters copy and paste",
    "cute font generator",
  ],
});

const BUBBLE_FAQS: FAQItem[] = [
  {
    question: "What is bubble text in Unicode?",
    answer:
      "Bubble text comes from the 'Enclosed Alphanumerics' block in the Unicode standard (U+2460 to U+24FF). It provides both white circled letters (ⓐⓑⓒ) and inverted black circled badges (🅐🅑🅒) originally created for list numbering and technical diagrams.",
  },
  {
    question: "Do numbers work in bubble font?",
    answer:
      "Yes! Numbers 0 through 9 are fully supported in both outlined bubble format (⓪①②③) and solid inverted format (⓿➊➋➌).",
  },
  {
    question: "Can I paste bubble fonts into WhatsApp and Instagram?",
    answer:
      "Yes. Bubble fonts are fully supported across all major messaging apps and social media platforms, including WhatsApp, Instagram, TikTok, Snapchat, and iMessage.",
  },
];

export default function BubbleFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Bubble Font Generator", path: "/bubble-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(BUBBLE_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Bubble Font Generator - FontGen",
    "Circled bubble text and black circle badge generator to copy and paste.",
    "/bubble-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Bubble Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create playful <strong>circled bubble letters</strong> and dark <strong>badge text styles</strong> that you can easily copy and paste into social media.
        </p>
      </section>

      <FontGenerator defaultCategory="bubble" initialText="Bubble Letters" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Playful, Friendly & Eye-Catching Enclosed Letters
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Circled bubble letters and black badge circles add an immediate pop of friendliness and whimsy to social media captions, profile titles, and bulleted lists. They are especially popular in cute aesthetic bios, craft business branding, and Discord channels.
        </p>
      </article>

      <FAQSection faqs={BUBBLE_FAQS} title="Bubble Font Generator FAQ" />
      <RelatedGenerators currentPath="/bubble-font-generator" />
    </div>
  );
}
