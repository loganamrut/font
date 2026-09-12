import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Upside Down Text Generator - Flip & Invert Text Backwards",
  description:
    "Flip text upside down and backwards using inverted Unicode characters. Copy and paste flipped text for puzzles, riddles, and funny social media comments.",
  canonicalPath: "/upside-down-text-generator",
  keywords: [
    "upside down text generator",
    "flip text generator",
    "upside down text copy and paste",
    "upside down font",
    "reverse text generator",
    "backwards text generator",
  ],
});

const UPSIDE_DOWN_FAQS: FAQItem[] = [
  {
    question: "How does the upside-down text generator work?",
    answer:
      "To produce upside-down text, two operations happen simultaneously: first, each letter is replaced with its 180-degree inverted Unicode equivalent (e.g. 'e' becomes 'ǝ', 't' becomes 'ʇ'). Second, the entire character sequence is reversed so that it reads logically from left to right when viewed upside down.",
  },
  {
    question: "Does punctuation flip upside down too?",
    answer:
      "Yes! Common punctuation marks are also flipped: '?' becomes '¿', '!' becomes '¡', '.' becomes '˙', and brackets are mirrored.",
  },
  {
    question: "Can I use upside-down text on Facebook, Instagram, and Twitter?",
    answer:
      "Yes. Upside-down Unicode characters are widely supported across all social media networks, comment sections, messaging apps, and gaming bios.",
  },
];

export default function UpsideDownTextGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Upside Down Text Generator", path: "/upside-down-text-generator" },
  ]);
  const faqSchema = generateFAQSchema(UPSIDE_DOWN_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Upside Down Text Generator - FontGen",
    "Flip text upside down and backwards to copy and paste.",
    "/upside-down-text-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Upside Down Text Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Flip your words <strong>uʍop ǝpᴉsdn</strong> and backwards to copy and paste into social media comments, jokes, and games.
        </p>
      </section>

      <FontGenerator initialText="Flip This Text" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Surprise Your Friends with Inverted Text
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Upside-down text is one of the most popular interactive text transformations online. Whether you want to post a spoiler that requires turning a phone upside down, hide the punchline of a joke, or create a mind-bending social media username, flipped text never fails to turn heads.
        </p>
      </article>

      <FAQSection faqs={UPSIDE_DOWN_FAQS} title="Upside Down Text FAQ" />
      <RelatedGenerators currentPath="/upside-down-text-generator" />
    </div>
  );
}
