import { SITE_URL, SITE_NAME } from "./metadata";

function normalizeUrl(path: string = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

export function generateWebApplicationSchema(
  name: string = "FontGen - Online Font & Fancy Text Generator",
  description: string = "Free online Unicode font generator to convert normal text into stylish bold, cursive, aesthetic, and cool text to copy and paste.",
  path: string = ""
) {
  const pageUrl = normalizeUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: pageUrl,
    description,
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "DesignApplication",
    operatingSystem: "All (Windows, macOS, Linux, iOS, Android)",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "2.0.0",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "240+ Unicode fancy text styles",
      "Instant real-time copy and paste conversion",
      "100% client-side privacy (zero server uploads)",
      "Cross-platform compatibility (Instagram, TikTok, Discord, Roblox, X)",
      "Zero installation required",
    ],
    author: {
      "@type": "Organization",
      name: "FontGen Team",
      url: `${SITE_URL}/`,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["FontGen.dev", "Font Generator", "Fancy Font Generator"],
    url: `${SITE_URL}/`,
    description:
      "Free online font and text generator for stylish, fancy, and Unicode copy-and-paste text across social media, games, and messaging apps.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon`,
        width: 32,
        height: 32,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon`,
      width: 32,
      height: 32,
    },
    description:
      "FontGen creates free, privacy-first web typography tools allowing users to convert text into Unicode typographic symbols.",
    knowsAbout: [
      "Unicode Standard",
      "Mathematical Alphanumeric Symbols",
      "Typography",
      "Text Formatting",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: normalizeUrl(item.path),
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
