import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service - FontGen",
  description: "Terms and conditions governing the use of FontGen.dev text utility services.",
  canonicalPath: "/terms",
});

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms" },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-slate-700 dark:text-slate-300 leading-relaxed space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Last Updated: September 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
        <p className="text-sm">
          By accessing and using FontGen.dev (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Permitted Use & Commercial Rights</h2>
        <p className="text-sm">
          FontGen is a free web utility that transforms text into Unicode characters. You are granted a non-exclusive, perpetual, worldwide license to use, copy, publish, and paste the generated text for both personal and commercial purposes (including social media marketing, personal branding, graphic design, and video titles) without royalty or attribution.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
        <p className="text-sm">
          The Unicode standard, character code points, and glyphs are governed by the Unicode Consortium. The FontGen interface, branding, code architecture, and original design elements are protected by copyright.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Disclaimer of Warranties</h2>
        <p className="text-sm">
          The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind. While we rigorously test character transformations, we cannot guarantee that every third-party application, game, or outdated operating system will correctly render all Unicode code points.
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
