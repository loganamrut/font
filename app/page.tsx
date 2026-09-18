import FontGenerator from "@/components/FontGenerator";
import ExamplesSection from "@/components/ExamplesSection";
import HowItWorks from "@/components/HowItWorks";
import VideoGuide from "@/components/VideoGuide";
import SEOContent from "@/components/SEOContent";
import FAQSection from "@/components/FAQSection";
import RelatedGenerators from "@/components/RelatedGenerators";
import { DEFAULT_FAQS } from "@/lib/seo/faqs";
import {
  generateFAQSchema,
  generateHowToSchema,
  generateVideoObjectSchema,
} from "@/lib/seo/schema";

export default function HomePage() {
  const faqSchema = generateFAQSchema(DEFAULT_FAQS);
  const howToSchema = generateHowToSchema();
  const videoSchema = generateVideoObjectSchema();

  return (
    <div className="w-full flex flex-col items-center bg-white dark:bg-slate-950">
      {/* FAQ, HowTo & VideoObject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Hero Section with H1 - Above the fold */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Font Generator — Fancy &amp; Stylish Text to Copy and Paste
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Free online font generator to turn normal text into 240+ fancy Unicode fonts.
          Copy and paste bold, cursive, aesthetic, and cool text directly into Instagram, TikTok, Discord, and more.
        </p>
      </section>

      {/* Immediate Interactive Generator with default text "Your Text Here" */}
      <FontGenerator defaultCategory="all" initialText="Your Text Here" />

      {/* Interactive Examples Gallery */}
      <ExamplesSection />

      {/* Visual Infographic & Step-by-Step How It Works Guide */}
      <HowItWorks />

      {/* Video Demonstration & Interactive Key Moments */}
      <VideoGuide />

      {/* Deep Informational SEO Content & Technical Guide */}
      <SEOContent />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Topical Silo Internal Linking Hub */}
      <RelatedGenerators currentPath="/" />
    </div>
  );
}
