import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Instagram Font Generator - Stylish Fonts for Bio & Captions",
  description:
    "Make stylish fonts for your Instagram bio, stories, and reels. Includes live 150-character bio counter and instant one-click copy and paste. 100% free.",
  canonicalPath: "/instagram-font-generator",
  keywords: [
    "instagram font generator",
    "instagram fonts",
    "fonts for instagram bio",
    "ig fonts",
    "instagram bio font maker",
    "copy and paste instagram fonts",
    "ig font copy paste",
  ],
});

const INSTAGRAM_FAQS: FAQItem[] = [
  {
    question: "How do I change the font in my Instagram bio?",
    answer:
      "Type your desired bio text into FontGen above. Pick a font style (such as Sans Bold or Small Caps) and click 'Copy'. Open Instagram, go to your profile, tap 'Edit Profile', paste the copied text into your 'Bio' field, and tap 'Done'.",
  },
  {
    question: "Can I use fancy fonts in my Instagram username (@handle)?",
    answer:
      "No. Instagram strictly limits @handles to standard alphanumeric characters (letters a–z, numbers 0–9, periods, and underscores) to protect user routing and mentions. However, you can use fancy fonts in your 'Name' field (which appears above your bio) and in the bio itself.",
  },
  {
    question: "What is the character limit for Instagram bios?",
    answer:
      "Instagram enforces a strict limit of 150 characters in profile bios. FontGen provides a live countdown tracker above so you never exceed the limit while styling your text.",
  },
  {
    question: "Do fancy fonts affect Instagram SEO and discoverability?",
    answer:
      "Your 'Name' field and bio are indexed by Instagram's internal search algorithm. To maximize search discoverability, keep key searchable keywords (e.g. 'Photographer' or 'Developer') in standard font, and use fancy fonts on decorative phrases, quotes, or your personal name.",
  },
];

export default function InstagramFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Instagram Font Generator", path: "/instagram-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(INSTAGRAM_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Instagram Font Generator - FontGen",
    "Stylish Unicode text generator optimized for Instagram bios and captions.",
    "/instagram-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Instagram Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Design high-converting, aesthetic <strong>Instagram bio fonts</strong>, reels captions, and comments with our built-in 150-character limit counter.
        </p>
      </section>

      <FontGenerator defaultSocialPresetId="ig-bio" initialText="Living my best life ✨" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Crafting an Unforgettable Instagram Bio
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Your Instagram bio is the digital storefront for your personal brand or business. With over 2 billion active users on Instagram, default system typography makes profiles look identical. Using tastefully placed <strong>bold headers</strong>, <strong>delicate small caps</strong>, or <strong>calligraphic script</strong> captures instant attention in the first three seconds a visitor lands on your page.
        </p>
      </article>

      <FAQSection faqs={INSTAGRAM_FAQS} title="Instagram Font Generator FAQ" />
      <RelatedGenerators currentPath="/instagram-font-generator" />
    </div>
  );
}
