import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";
import { ShieldCheck, Zap, Type, Globe, Check } from "lucide-react";
import { SocialCommunityGrid } from "@/components/SocialLinks";

export const metadata: Metadata = constructMetadata({
  title: "About FontGen - Our Mission, Technology & Privacy Architecture",
  description:
    "Learn what FontGen is, how our deterministic Unicode transformation engine works, and why 100% client-side privacy matters for text generation.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="space-y-3 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About FontGen
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          The fast, honest, and privacy-first online Unicode text and fancy font generator.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Why We Built FontGen
        </h2>
        <p>
          For over a decade, the web has been flooded with ad-heavy, slow, and outdated &ldquo;font generator&rdquo; sites. Many of them confuse users by claiming to create actual downloadable font files, lag on mobile devices, or fail to preserve emojis, non-Latin scripts, and basic punctuation.
        </p>
        <p>
          We created <strong>FontGen</strong> to provide a modern, lightning-fast utility built on pure typographic integrity. We are transparent about what this tool does: it maps standard Latin keyboard characters to genuine <strong>Unicode mathematical and symbolic characters</strong> that can be seamlessly copied and pasted into social media, messaging apps, and games.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <Zap className="w-6 h-6 text-indigo-500" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Zero Latency</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            No API calls, no network round-trips. Every transformation calculates in microseconds within your browser as you type.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <ShieldCheck className="w-6 h-6 text-emerald-500" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Total Privacy</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Your text never leaves your device. No user input is ever uploaded, logged, saved to a database, or analyzed.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <Globe className="w-6 h-6 text-amber-500" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Unicode Safety</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Engineered to respect surrogate pairs, preserve emojis intact, and leave non-English alphabets clean without corruption.
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          How the Technology Works
        </h2>
        <p>
          FontGen contains an internal dictionary of mathematical alphanumeric symbol offsets, enclosed alphanumerics, and combining mark algorithms. When you enter a string into the input box:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
            <span>The text is decomposed into code points rather than 16-bit code units, protecting multi-byte emoji sequences.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
            <span>Eligible ASCII Latin characters are shifted to their corresponding mathematical Unicode counterparts.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
            <span>Unmapped characters (such as accented vowels, Devanagari, Arabic, or Chinese symbols) are intentionally preserved.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
            <span>The resulting string is formatted and prepared for immediate one-click copy to your system clipboard.</span>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Connect with FontGen
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Follow our official social media channels for web typography tutorials, Unicode tips, updates, and community discussions:
        </p>
        <SocialCommunityGrid />
      </section>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-all"
        >
          <Type className="w-4 h-4" />
          <span>Launch Font Generator</span>
        </Link>
        <Link
          href="/privacy"
          className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          View Privacy Guarantee →
        </Link>
      </div>
    </div>
  );
}
