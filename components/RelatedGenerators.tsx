import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface RelatedTool {
  name: string;
  href: string;
  description: string;
  preview: string;
}

const ALL_TOOLS: RelatedTool[] = [
  {
    name: "Bold Font Generator",
    href: "/bold-font-generator",
    description: "Generate thick, heavy mathematical bold letters for titles and bios.",
    preview: "𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝",
  },
  {
    name: "Italic Font Generator",
    href: "/italic-font-generator",
    description: "Convert text to slanted serif and sans-serif mathematical italics.",
    preview: "𝐻𝑒𝓁𝓁𝑜 𝑊𝑜𝓇𝓁𝒹",
  },
  {
    name: "Cursive Font Generator",
    href: "/cursive-font-generator",
    description: "Elegant calligraphy and flowing handwritten script alphabets.",
    preview: "ℋℯ𝓁𝓁ℴ 𝒲ℴ𝓇𝓁𝒹",
  },
  {
    name: "Gothic Text Generator",
    href: "/gothic-font-generator",
    description: "Medieval Fraktur and historic German Blackletter typography.",
    preview: "𝔊𝔬𝔱𝔥𝔦𝔠 𝔗𝔢𝔵𝔱",
  },
  {
    name: "Bubble Font Generator",
    href: "/bubble-font-generator",
    description: "Circled and negative enclosed bubble letters and numbers.",
    preview: "Ⓑⓤⓑⓑⓛⓔ Ⓣⓔⓧⓣ",
  },
  {
    name: "Small Text Generator",
    href: "/small-text-generator",
    description: "Subtle small capitals, superscripts, and miniature subscripts.",
    preview: "ˢᵐᵃˡˡ ᴄᴀᴘs",
  },
  {
    name: "Fancy Font Generator",
    href: "/fancy-font-generator",
    description: "Decorative styles framed with stars, brackets, and ornamental wings.",
    preview: "꧁ 𝐹𝒶𝓃𝒸𝓎 ꧂",
  },
  {
    name: "Aesthetic Text Generator",
    href: "/aesthetic-font-generator",
    description: "Vaporwave fullwidth, clean spaced characters, and Japanese frames.",
    preview: "『Ａｅｓｔｈｅｔｉｃ』",
  },
  {
    name: "Upside Down Text",
    href: "/upside-down-text-generator",
    description: "Flip and invert letters backwards for playful social media comments.",
    preview: "ʇxǝ┴ uʍop ǝpᴉsd∩",
  },
  {
    name: "Glitch & Zalgo Generator",
    href: "/glitch-text-generator",
    description: "Corrupted matrix and cursed text using combining diacritical marks.",
    preview: "G̶l̶i̶t̶c̶h̶ ̶T̶e̶x̶t̶",
  },
  {
    name: "Instagram Font Generator",
    href: "/instagram-font-generator",
    description: "Tailored text styles and bio presets with 150-character limit counter.",
    preview: "ɪɴsᴛᴀɢʀᴀᴍ ʙɪᴏ ✨",
  },
  {
    name: "TikTok Font Generator",
    href: "/tiktok-font-generator",
    description: "Eye-catching font styles optimized for TikTok bios and video captions.",
    preview: "𝐓𝐢𝐤𝐓𝐨𝐤 𝐕𝐢𝐛𝐞𝐬 🔥",
  },
  {
    name: "Discord Font Generator",
    href: "/discord-font-generator",
    description: "Stylish fonts compatible with Discord server nicknames and chat.",
    preview: "⚡ 𝐷𝑖𝑠𝑐𝑜𝑟𝑑 ⚡",
  },
  {
    name: "Unicode Text Architecture",
    href: "/unicode-text-generator",
    description: "Technical deep-dive on Unicode blocks, UTF-8/UTF-16, and math symbols.",
    preview: "𝔘𝔫𝔦𝔠𝔬𝔡𝔢 𝔸𝕣𝕔𝕙",
  },
];

interface RelatedGeneratorsProps {
  currentPath?: string;
  title?: string;
  subtitle?: string;
}

export default function RelatedGenerators({
  currentPath = "/",
  title = "Explore Related Text Generators",
  subtitle = "Discover specialized Unicode typography tools for bios, titles, and social media.",
}: RelatedGeneratorsProps) {
  const tools = ALL_TOOLS.filter((t) => t.href !== currentPath).slice(0, 6);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10" id="related-tools">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Topical Directory</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group flex flex-col justify-between p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-sm hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {tool.name}
                </h3>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">
                {tool.description}
              </p>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
              {tool.preview}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
