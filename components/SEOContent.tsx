import Link from "next/link";
import { Check, Info, ShieldCheck, Smartphone, Globe, Cpu } from "lucide-react";

export default function SEOContent() {
  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-12">
      {/* 1. Definitive Explainer */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          What Is a Font Generator and How Does It Work?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          A <strong>font generator</strong> is an interactive web tool that transforms ordinary, uniform text into decorative typographic styles. While the term &ldquo;font generator&rdquo; is commonly used across search engines, what this tool actually performs is an algorithmic mapping into international <strong>Unicode symbols</strong>.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          When you type letters into FontGen, each character is converted client-side into its corresponding code point within the Unicode standard. Because these characters are already recognized by modern operating systems and web browsers, they can be immediately copied and pasted into social media profiles, chat apps, gaming nicknames, and documents without needing font installation.
        </p>
      </section>

      {/* 2. Distinction Section: Font vs Unicode Text */}
      <section className="p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 space-y-4">
        <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold text-sm">
          <Info className="w-4 h-4" />
          <span>Important Distinction: Fonts vs. Unicode Text Styles</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Is This a True Font Generator or a Text Generator?
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Traditional digital typography uses <strong>font files</strong> (such as OpenType <code>.otf</code> or TrueType <code>.ttf</code>) which contain vector bezier curves dictating how glyphs are rendered on screen. These require administrative installation on a desktop or custom <code>@font-face</code> definitions on a website.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          In contrast, <strong>FontGen is a copy-and-paste Unicode text style generator</strong>. Rather than altering software rendering files, it substitutes characters with visually distinct Unicode glyphs (such as mathematical bold <code>𝐇𝐞𝐥𝐥𝐨</code>, fraktur gothic <code>ℌ𝔢𝔩𝔩𝔬</code>, or cursive script <code>ℋℯ𝓁𝓁ℴ</code>). This is why your stylized text persists when pasted into external platforms like Instagram, TikTok, and Discord.
        </p>
      </section>

      {/* 3. Platform Compatibility Table */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <Smartphone className="w-3.5 h-3.5 text-indigo-500" />
          <span>Cross-Platform Ecosystem</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Where Can You Use Fancy Unicode Fonts?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Because Unicode is an internationally standardized encoding system, generated text works across virtually all modern software platforms:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold">
              <tr>
                <th className="p-3">Platform</th>
                <th className="p-3">Supported Areas</th>
                <th className="p-3">Compatibility Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Instagram</td>
                <td className="p-3">Bio, Captions, Comments, Story Text</td>
                <td className="p-3 text-slate-500 dark:text-slate-400">Full support. Usernames must remain alphanumeric ASCII.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">TikTok</td>
                <td className="p-3">Account Bio, Video Descriptions, Comments</td>
                <td className="p-3 text-slate-500 dark:text-slate-400">Supported across iOS and Android mobile applications.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">X (Twitter)</td>
                <td className="p-3">Display Name, Tweets, Bio, Direct Messages</td>
                <td className="p-3 text-slate-500 dark:text-slate-400">Handles must remain standard ASCII; display names support Unicode.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Discord</td>
                <td className="p-3">Server Nicknames, About Me Bio, Chat Messages</td>
                <td className="p-3 text-slate-500 dark:text-slate-400">Combines seamlessly with Discord Markdown syntax.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Gaming (Roblox, Steam)</td>
                <td className="p-3">Profile Bios, Clan Descriptions, Statuses</td>
                <td className="p-3 text-slate-500 dark:text-slate-400">Some game engines censor complex combining marks; test in chat.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Privacy & Client-Side Execution Guarantee */}
      <section className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 space-y-3">
        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
          <ShieldCheck className="w-5 h-5" />
          <span>Zero Server Uploads: Private By Architecture</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Your Text Stays Exclusively in Your Browser
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Unlike online font converters that submit your typed content to remote servers, FontGen executes 100% of text operations locally using JavaScript. Your input text is never logged, never stored in a database, never shared with artificial intelligence APIs, and never attached to analytics parameters.
        </p>
      </section>

      {/* 5. Best Practices & Accessibility Guidance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Accessibility & Screen Reader Best Practices
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          While fancy fonts look exciting, it is critical to use them responsibly. Assistive technologies and screen readers (like VoiceOver, NVDA, and TalkBack) often announce mathematical Unicode characters literally (e.g., &ldquo;Mathematical Bold Capital H, Mathematical Bold Small e...&rdquo;).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Recommended Uses</span>
            </h4>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
              <li>Decorative emphasis on 1–3 key words</li>
              <li>Short titles or aesthetic profile headers</li>
              <li>Signature quotes in Instagram or TikTok bios</li>
              <li>Gaming clan initials and creative usernames</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-500" />
              <span>Things to Avoid</span>
            </h4>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
              <li>Converting entire paragraphs or articles</li>
              <li>Using fancy text for critical contact information</li>
              <li>Overloading text with excessive Zalgo glitch marks</li>
              <li>Relying on Unicode fonts for password creation</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
