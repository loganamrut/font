import Link from "next/link";
import { Edit3, Sparkles, Copy, ArrowUp } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100 dark:border-slate-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>Simple 3-Step Process</span>
        </span>
        <h2
          id="how-it-works-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          How the Online Font Generator Works
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Convert plain words into decorative, stylish Unicode text in seconds.
          Our client-side engine maps standard ASCII characters into mathematical and aesthetic
          symbols that you can copy and paste anywhere on the web.
        </p>
      </div>

      {/* Wide Responsive Infographic Graphic */}
      <figure className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl mb-10">
        <picture>
          <source srcSet="/images/how-font-generator-works.webp" type="image/webp" />
          <img
            src="/images/how-font-generator-works.jpg"
            alt="How FontGen Online Font Generator Works - Step-by-step visual infographic showing text input, Unicode font conversion into bold, cursive, and gothic styles, and one-click copy and paste for Instagram, TikTok, and Discord"
            width={1376}
            height={768}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </picture>
        <figcaption className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              Infographic Workflow:
            </strong>{" "}
            Type any plain text, watch FontGen convert characters into 240+ international Unicode
            typographic variations, and copy with a single tap for instant pasting into social apps and bios.
          </p>
          <a
            href="#generator"
            className="inline-flex items-center gap-1.5 shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            <span>Try Generator</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </figcaption>
      </figure>

      {/* 3 Step Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 text-xs font-extrabold">
                01
              </span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Edit3 className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Type or Paste Text
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Enter any message, username, or quote into the input box above. FontGen analyzes your
              text on the fly with <strong>100% client-side privacy</strong> — your words are never
              sent to any remote server or database.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            Real-time keystroke processing &bull; Zero latency
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 text-xs font-extrabold">
                02
              </span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Choose from 240+ Styles
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Browse live previews across mathematical bold, elegant{" "}
              <Link
                href="/cursive-font-generator/"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                cursive script
              </Link>
              , historic{" "}
              <Link
                href="/gothic-font-generator/"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                gothic fraktur
              </Link>
              ,{" "}
              <Link
                href="/aesthetic-font-generator/"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                aesthetic fullwidth
              </Link>
              , bubble text, and glitch zalgo effects.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            Categorized &amp; searchable &bull; Pure Unicode standard
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 text-xs font-extrabold">
                03
              </span>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Copy className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              1-Click Copy &amp; Paste
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Click the instant copy button to grab your stylized text. Paste it directly into your{" "}
              <Link
                href="/instagram-font-generator/"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Instagram bio
              </Link>
              ,{" "}
              <Link
                href="/tiktok-font-generator/"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                TikTok caption
              </Link>
              ,{" "}
              <Link
                href="/discord-font-generator/"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Discord channel
              </Link>
              , X/Twitter, Roblox, or WhatsApp.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            Universal OS support &bull; No app installation needed
          </div>
        </div>
      </div>
    </section>
  );
}
