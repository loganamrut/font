import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "TikTok Font Generator - Cool Bio & Caption Text Styles",
  description:
    "Create viral TikTok font styles with built-in 80-character bio limit tracker. Copy and paste fancy text into your TikTok profile bio and video captions.",
  canonicalPath: "/tiktok-font-generator",
  keywords: [
    "tiktok font generator",
    "tiktok fonts",
    "fonts for tiktok bio",
    "tiktok text generator",
    "tiktok font copy and paste",
    "cool fonts for tiktok",
  ],
});

const TIKTOK_FAQS: FAQItem[] = [
  {
    question: "How do I change fonts on my TikTok bio?",
    answer:
      "Type your bio text into FontGen above. Pick your favorite style, click 'Copy', open TikTok, tap 'Edit Profile', paste the text into your Bio, and tap 'Save'.",
  },
  {
    question: "What is the character limit for TikTok bios?",
    answer:
      "TikTok bios have a strict limit of only 80 characters. FontGen's built-in TikTok Bio preset automatically tracks your character count so your fancy text fits perfectly without being cut off.",
  },
  {
    question: "Which fonts perform best on TikTok video captions?",
    answer:
      "High-contrast, clean sans-serif styles like Bold Sans (𝗛𝗲𝗹𝗹𝗼) and Small Caps (ʜᴇʟʟᴏ) provide maximum readability across varied smartphone screen sizes.",
  },
];

export default function TikTokFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "TikTok Font Generator", path: "/tiktok-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(TIKTOK_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "TikTok Font Generator - FontGen",
    "Fancy text generator optimized for TikTok 80-character bios and viral captions.",
    "/tiktok-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          TikTok Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create eye-catching <strong>TikTok bio fonts</strong> and video captions optimized for mobile screens with our live 80-character counter.
        </p>
      </section>

      <FontGenerator defaultSocialPresetId="tiktok-bio" initialText="TikTok Creator 🎬" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Mastering TikTok&apos;s 80-Character Bio Limit
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          With TikTok&apos;s rapid scroll pace and compact 80-character bio constraint, every single letter matters. FontGen helps you pack maximum personality into limited space using compact Small Caps, high-impact Sans-Serif Bold, and aesthetic bracket frames.
        </p>
      </article>

      <FAQSection faqs={TIKTOK_FAQS} title="TikTok Font Generator FAQ" />
      <RelatedGenerators currentPath="/tiktok-font-generator" />
    </div>
  );
}
