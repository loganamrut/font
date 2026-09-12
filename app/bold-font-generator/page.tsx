import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";
import { Check, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Bold Font Generator - Copy & Paste Bold Text (Instant)",
  description:
    "Generate bold Unicode text you can copy and paste into Instagram, Facebook, X (Twitter), and Discord. Free online bold font maker with serif and sans-serif styles.",
  canonicalPath: "/bold-font-generator",
  keywords: [
    "bold font generator",
    "bold text generator",
    "copy and paste bold text",
    "bold text copy paste",
    "bold letters generator",
    "bold font online",
    "instagram bold text",
  ],
});

const BOLD_FAQS: FAQItem[] = [
  {
    question: "How does the bold font generator work?",
    answer:
      "Most social platforms do not offer formatting toolbars (such as Ctrl+B or <b> tags). This generator substitutes standard letters with characters from the Unicode Mathematical Bold alphanumeric block (U+1D400 for serif bold and U+1D5D4 for sans-serif bold). Because these are independent Unicode glyphs, they stay bold wherever you paste them.",
  },
  {
    question: "What is the difference between Serif Bold and Sans-Serif Bold?",
    answer:
      "Serif bold characters (such as 𝐇𝐞𝐥𝐥𝐨) feature decorative strokes or 'feet' at the ends of letters, conveying a traditional, editorial aesthetic. Sans-serif bold characters (such as 𝗛𝗲𝗹𝗹𝗼) lack serifs and offer a modern, clean, high-visibility appearance ideal for social media bios.",
  },
  {
    question: "Can I use bold text in my Instagram bio or username?",
    answer:
      "You can use bold text in your Instagram bio, post captions, and comments. However, your Instagram username (handle) must remain standard alphanumeric ASCII characters and cannot contain Unicode bold symbols.",
  },
  {
    question: "Why does bold text look different on some Android devices?",
    answer:
      "Operating systems rely on system font fallbacks to render mathematical Unicode symbols. While iOS, macOS, and modern Android versions have complete coverage, minor stylistic differences can occur based on the manufacturer's default system font (e.g., Roboto vs. San Francisco).",
  },
];

export default function BoldFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Bold Font Generator", path: "/bold-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(BOLD_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Bold Font Generator - FontGen",
    "Instant bold text generator for Instagram, X, Facebook, and Discord.",
    "/bold-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Bold Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Convert normal letters into eye-catching <strong>bold serif</strong> and <strong>bold sans-serif</strong> text styles that you can copy and paste anywhere.
        </p>
      </section>

      {/* Interactive Generator pre-filtered to Bold */}
      <FontGenerator defaultCategory="bold" initialText="Bold Typography" />

      {/* Specialized Editorial Content */}
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8 text-slate-700 dark:text-slate-300">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why Standard Bold Formatting Fails on Social Media
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            In rich text editors like Google Docs or Microsoft Word, bolding text is applied via software metadata or HTML <code>&lt;strong&gt;</code> tags. When you paste that text into an input box on Instagram, TikTok, or X, the platform strips the formatting, leaving plain text behind.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            FontGen solves this by transforming the raw character codes into <strong>Unicode Mathematical Bold symbols</strong>. These characters are inherently bold in the international Unicode standard, so they never lose their weight when copied and pasted.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Serif Bold (𝐇𝐞𝐥𝐥𝐨)</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Modeled after traditional book typography with bracketed serifs. Excellent for formal announcements, motivational quotes, book titles, and editorial bios.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Sans-Serif Bold (𝗛𝗲𝗹𝗹𝗼)</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Geometric, modern, and punchy without serifs. Provides maximum legibility on mobile screens, making it the most popular choice for Instagram captions and tweets.
            </p>
          </div>
        </section>
      </article>

      <FAQSection faqs={BOLD_FAQS} title="Bold Font Generator FAQ" />
      <RelatedGenerators currentPath="/bold-font-generator" />
    </div>
  );
}
