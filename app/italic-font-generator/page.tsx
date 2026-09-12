import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Italic Font Generator - Copy & Paste Italic Text (Instant)",
  description:
    "Convert plain text into slanted serif and sans-serif italic fonts you can copy and paste into Instagram bios, tweets, and comments. Free online italic text tool.",
  canonicalPath: "/italic-font-generator",
  keywords: [
    "italic font generator",
    "italic text generator",
    "copy and paste italics",
    "italic text copy paste",
    "slanted text generator",
    "instagram italic font",
  ],
});

const ITALIC_FAQS: FAQItem[] = [
  {
    question: "How do I make text italic on Instagram or Twitter?",
    answer:
      "Because social platforms do not support standard Markdown or HTML italic tags in comment sections and bios, you can generate Unicode Mathematical Italic text here. Simply type your text, click Copy, and paste it directly into your bio, tweet, or caption.",
  },
  {
    question: "Why does the letter 'h' have a special code point in italic serif?",
    answer:
      "In the original Unicode standard, code point U+210E was previously assigned to the Planck constant (ℎ), which visually represents an italic 'h'. To prevent duplicate code points, the Unicode Consortium left U+1D455 unassigned and references U+210E. FontGen handles this automatically so your words render without missing letters.",
  },
  {
    question: "Can I combine bold and italic styles?",
    answer:
      "Yes! FontGen includes both Bold Italic Serif (𝑨𝑩𝑪) and Bold Italic Sans-Serif (𝘼𝘽𝘾) styles for extra emphasis.",
  },
];

export default function ItalicFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Italic Font Generator", path: "/italic-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(ITALIC_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Italic Font Generator - FontGen",
    "Slanted italic text generator for Instagram, X, and social profiles.",
    "/italic-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Italic Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create elegant <em>slanted italic</em> and <em>bold-italic</em> text styles you can copy and paste anywhere online.
        </p>
      </section>

      <FontGenerator defaultCategory="italic" initialText="Italic Style" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          When to Use Italic Unicode Text
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Italics are traditionally used in typography for subtle emphasis, book and song titles, foreign phrases, or internal dialogue. On platforms like Twitter, Instagram, and TikTok where rich text is disabled, Unicode italic letters give your posts an elevated, sophisticated tone that stands out in crowded feeds.
        </p>
      </article>

      <FAQSection faqs={ITALIC_FAQS} title="Italic Font Generator FAQ" />
      <RelatedGenerators currentPath="/italic-font-generator" />
    </div>
  );
}
