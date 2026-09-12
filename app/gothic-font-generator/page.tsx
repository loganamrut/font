import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Gothic Font Generator - Medieval Fraktur & Blackletter Text",
  description:
    "Convert normal text into medieval gothic, Old English, and Fraktur blackletter fonts. Copy and paste gothic letters for gaming handles, bios, and heavy metal aesthetic.",
  canonicalPath: "/gothic-font-generator",
  keywords: [
    "gothic font generator",
    "medieval font generator",
    "old english text generator",
    "fraktur font copy paste",
    "blackletter font generator",
    "gothic text copy paste",
  ],
});

const GOTHIC_FAQS: FAQItem[] = [
  {
    question: "What is Fraktur text?",
    answer:
      "Fraktur is a calligraphic hand of the Latin alphabet and a typeface that originated in Germany in the 16th century. It features broken, angular brushstrokes. In Unicode, Fraktur exists within the Mathematical Alphanumeric block (e.g. 𝔄𝔅ℭ 𝔞𝔟𝔠).",
  },
  {
    question: "Why are some gothic letters like C, H, I, R, and Z unique in Unicode?",
    answer:
      "Because historical Unicode assignments placed ℭ, ℌ, ℑ, ℜ, and ℨ into the earlier 'Letterlike Symbols' block, they have distinct codepoints from the rest of the Fraktur alphabet. FontGen seamlessly stitches them together so your full words render accurately.",
  },
  {
    question: "Can I use gothic fonts in gaming usernames (Steam, Roblox, CoD)?",
    answer:
      "Yes! Gothic and Fraktur letters are heavily used in gamer tags, clan names, and Discord server titles for an imposing, legendary aesthetic.",
  },
];

export default function GothicFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Gothic Font Generator", path: "/gothic-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(GOTHIC_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Gothic Font Generator - FontGen",
    "Medieval Fraktur and Blackletter text generator to copy and paste.",
    "/gothic-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Gothic Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Transform modern letters into authentic <strong>medieval Fraktur</strong>, <strong>Blackletter</strong>, and <strong>Old English</strong> gothic styles to copy and paste.
        </p>
      </section>

      <FontGenerator defaultCategory="gothic" initialText="Medieval Legend" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Historic Blackletter Typography for Modern Gaming & Bios
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          The dramatic angles, dense vertical lines, and bold medieval presence of Blackletter gothic typography give words an aura of mystery, authority, and power. Whether you are personalizing your Steam profile, designing a Discord clan name, or writing gothic aesthetic captions, FontGen delivers authentic Fraktur glyphs instantly.
        </p>
      </article>

      <FAQSection faqs={GOTHIC_FAQS} title="Gothic Font Generator FAQ" />
      <RelatedGenerators currentPath="/gothic-font-generator" />
    </div>
  );
}
