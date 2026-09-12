import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Cursive Font Generator - Copy & Paste Script Calligraphy",
  description:
    "Generate flowing cursive, script, and handwritten calligraphy fonts to copy and paste. Perfect for Instagram bios, wedding invitations, and aesthetic signatures.",
  canonicalPath: "/cursive-font-generator",
  keywords: [
    "cursive font generator",
    "cursive text generator",
    "script font generator",
    "handwriting font copy paste",
    "calligraphy text generator",
    "copy and paste cursive",
    "aesthetic cursive fonts",
  ],
});

const CURSIVE_FAQS: FAQItem[] = [
  {
    question: "How do I get cursive text to copy and paste?",
    answer:
      "Type your message into FontGen's cursive font generator above. The tool automatically maps each Latin letter to its official Unicode Mathematical Script symbol (such as ℋℯ𝓁𝓁ℴ or 𝓐𝓑𝓒). Click 'Copy' and paste it into Instagram, TikTok, WhatsApp, or Facebook.",
  },
  {
    question: "Why do some cursive letters look slightly different in size?",
    answer:
      "In the Unicode standard, certain script letters (like B, E, F, H, I, L, M, R, e, g, and o) were standardized earlier under the Letterlike Symbols block (such as ℬ and ℯ) rather than the Mathematical Alphanumeric block. Depending on your operating system's default font family, these historical glyphs may have minor stylistic variations.",
  },
  {
    question: "Is bold cursive available?",
    answer:
      "Yes! FontGen provides both standard delicate cursive script (𝒜𝒝𝒞) and thick calligraphic bold cursive (𝓐𝓑𝓒) for high-contrast headers.",
  },
];

export default function CursiveFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Cursive Font Generator", path: "/cursive-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(CURSIVE_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Cursive Font Generator - FontGen",
    "Flowing script and calligraphy text generator for bios and signatures.",
    "/cursive-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Cursive Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Transform your words into beautiful <strong>calligraphy script</strong> and flowing <strong>cursive handwriting</strong> to copy and paste.
        </p>
      </section>

      <FontGenerator defaultCategory="cursive" initialText="Lovely Signature" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          The Art of Digital Calligraphy and Script Typography
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Cursive handwriting has been an art form for centuries, from traditional copperplate calligraphy to modern brush lettering. With FontGen, you can evoke that handmade elegance in digital spaces that don&apos;t support custom font uploads. Use cursive text for bio introductions, poetic quotes, romantic dedications, and celebratory greetings.
        </p>
      </article>

      <FAQSection faqs={CURSIVE_FAQS} title="Cursive Font Generator FAQ" />
      <RelatedGenerators currentPath="/cursive-font-generator" />
    </div>
  );
}
