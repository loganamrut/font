import { Metadata } from "next";
import FontGenerator from "@/components/FontGenerator";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Discord Font Generator - Stylish Fonts for Nicknames & Bios",
  description:
    "Generate cool fonts for Discord server nicknames, About Me profiles (190 chars), and chat messages. 100% compatible with Discord Markdown.",
  canonicalPath: "/discord-font-generator",
  keywords: [
    "discord font generator",
    "discord text generator",
    "discord nickname font",
    "fonts for discord bio",
    "discord fancy text copy paste",
    "discord fonts",
  ],
});

const DISCORD_FAQS: FAQItem[] = [
  {
    question: "How do I change my nickname font on a Discord server?",
    answer:
      "Type your desired name into FontGen above. Click 'Copy' next to your favorite style (such as Fraktur Gothic or Thunder Gaming). In Discord, right-click the server name (or tap the three dots on mobile), select 'Edit Server Profile', paste your text into the 'Server Nickname' box, and click 'Save Changes'.",
  },
  {
    question: "Can I combine FontGen fonts with Discord Markdown?",
    answer:
      "Yes! You can wrap FontGen's Unicode text inside Discord markdown syntax, such as *italic* (`*𝐇𝐞𝐥𝐥𝐨*`), spoiler tags (`||𝐇𝐞𝐥𝐥𝐨||`), or quote blocks (`> 𝐇𝐞𝐥𝐥𝐨`).",
  },
  {
    question: "What is the character limit for Discord About Me bios?",
    answer:
      "Discord allows up to 190 characters in user profile 'About Me' sections. FontGen includes a dedicated 190-character tracker so you can design your bio without exceeding the limit.",
  },
];

export default function DiscordFontGeneratorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Discord Font Generator", path: "/discord-font-generator" },
  ]);
  const faqSchema = generateFAQSchema(DISCORD_FAQS);
  const webAppSchema = generateWebApplicationSchema(
    "Discord Font Generator - FontGen",
    "Stylish font styles optimized for Discord server nicknames and About Me bios.",
    "/discord-font-generator"
  );

  return (
    <div className="w-full flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Discord Font Generator
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create bold <strong>server nicknames</strong>, About Me bios (190 chars), and <strong>role names</strong> to copy and paste into Discord.
        </p>
      </section>

      <FontGenerator defaultSocialPresetId="discord-bio" initialText="Discord Gamer ⚡" />

      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Leveling Up Your Discord Server Identity
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          In vibrant Discord communities, server nicknames and user profiles express your role, status, and gaming style. By combining authentic Unicode mathematical fonts with Discord&apos;s native markdown, you can craft server announcements, channel names, and personal bios that command attention.
        </p>
      </article>

      <FAQSection faqs={DISCORD_FAQS} title="Discord Font Generator FAQ" />
      <RelatedGenerators currentPath="/discord-font-generator" />
    </div>
  );
}
