import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Fancy Font Generator - Stylish Fancy Text to Copy & Paste",
  description:
    "Free fancy font generator with 45+ decorative text styles, sparkles, wings, and cool symbols. 100% private, instant copy and paste for bios, captions, and games.",
  canonicalPath: "/fancy-font-generator",
  keywords: [
    "fancy font generator",
    "fancy text generator",
    "cool font generator",
    "stylish text generator",
    "fancy letters",
    "copy and paste fancy fonts",
    "fancy text copy paste",
  ],
});

const FANCY_FAQS: FAQItem[] = [
  {
    question: "What makes fancy text different from standard fonts?",
    answer:
      "Fancy text utilizes combinations of mathematical symbols, enclosed letters, and decorative Unicode ornaments (such as sparkles ✨, royal wings ꧁ ꧂, and blackboard bold 𝔸𝔹ℂ). They can be copied and pasted directly without installing font files.",
  },
  {
    question: "Are fancy fonts free to use?",
    answer:
      "Yes! FontGen is 100% free with no sign-ups, no limitations, and no subscriptions. All generated text can be used for personal profiles and commercial projects alike.",
  },
  {
    question: "Can I use fancy fonts in Discord nicknames and channels?",
    answer:
      "Yes. Discord supports Unicode characters in server nicknames, user 'About Me' bios, and text chat. Server channel names can also incorporate certain Unicode glyphs.",
  },
];

export default function FancyFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Fancy Font Generator", path: "/fancy-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(FANCY_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Fancy Font Generator - FontGen",
    "Stylish and decorative text styles to copy and paste.",
    "/fancy-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Fancy Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create dazzling, decorative, and <strong>fancy text styles</strong> accented with stars, sparkles, and ornamental symbols to copy and paste.
        </p>
      </section>

      <FontGenerator defaultCategory="fancy" initialText="Fancy Vibes" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Level Up Your Social Media Presence with Fancy Fonts
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Whether you are designing a high-converting Instagram bio, crafting an eye-catching YouTube video title, or giving your gaming handle an unmistakable signature flair, fancy fonts help your text break through the monotony of default system typefaces.
        </p>
      </article>

      <FAQSection faqs={FANCY_FAQS} title="Fancy Font Generator FAQ" />
      <RelatedGenerators currentPath="/fancy-font-generator" />
    </div>
  );
}
