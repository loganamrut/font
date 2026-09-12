import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";
import { ShieldCheck, Lock, EyeOff, ServerOff } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy - 100% Client-Side Processing Guarantee | FontGen",
  description:
    "FontGen's privacy policy: Your text never leaves your browser. Zero server processing, zero text storage, no AI API submission, and no account required.",
  canonicalPath: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Privacy-First Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
          Last Updated: September 2026 • Effective Immediately
        </p>
      </header>

      <section className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>The Core Privacy Commitment: Your Text Stays in Your Browser</span>
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          FontGen is built with privacy by design. When you type or paste text into our generator, all Unicode transformations occur <strong>exclusively inside your device&apos;s local web browser</strong> using JavaScript. Your text is <strong>never</strong> transmitted over the network, never sent to an external server, never stored in a database, and never processed by artificial intelligence models.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          1. Data We Do NOT Collect
        </h2>
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li><strong>No User Text:</strong> We do not log, inspect, transmit, or record what you type.</li>
          <li><strong>No Account Information:</strong> FontGen requires no registration, password, email address, or social login.</li>
          <li><strong>No Personal Identifiers:</strong> We do not ask for or collect names, addresses, or telephone numbers.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          2. Local Storage & Cookies
        </h2>
        <p className="text-sm">
          FontGen utilizes your browser&apos;s native <code>localStorage</code> API for essential client preferences:
        </p>
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li><strong>Color Theme (<code>fontgen_theme</code>):</strong> Remembers whether you selected Light Mode or Dark Mode.</li>
          <li><strong>Favorite Styles (<code>fontgen_favorites_v1</code>):</strong> Remembers which style cards you marked with a heart so they appear in your Favorites tab.</li>
          <li><strong>Cookie & Privacy Choice (<code>fontgen_cookie_consent</code>):</strong> Remembers your consent decision (Essential Only vs. Accepted) to respect your privacy preferences.</li>
        </ul>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          This preference data remains stored locally on your device and is never synchronized to any server. If you clear your browser cookies or storage, these preferences will reset to default.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          3. Analytics & Google Consent Mode v2
        </h2>
        <p className="text-sm">
          We use Google Analytics 4 (GA4) with <strong>Google Consent Mode v2</strong> to analyze overall aggregate site performance and visitor trends. By default:
        </p>
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li>Analytics storage and advertising cookies remain <strong>strictly disabled (denied)</strong> until you explicitly grant permission via our cookie banner.</li>
          <li>Advertising data, ad personalization, and user tracking across 3rd-party sites are permanently turned off.</li>
          <li><strong>User-generated font inputs and typed text are strictly excluded</strong> from all analytics reporting. Keystrokes never leave your browser.</li>
        </ul>
        <p className="text-sm">
          You can change your consent choices at any time by clearing your browser cookies or local storage.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          4. Contact Information
        </h2>
        <p className="text-sm">
          If you have questions regarding our privacy architecture, please contact us at <code>privacy@fontgen.dev</code>.
        </p>
      </section>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <Link href="/" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
          ← Return to Font Generator
        </Link>
      </div>
    </div>
  );
}
