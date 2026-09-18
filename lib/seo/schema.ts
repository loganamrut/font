import { SITE_URL, SITE_NAME } from "./metadata";

function normalizeUrl(path: string = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

export const OFFICIAL_SOCIAL_PROFILES = [
  "https://www.youtube.com/@FontGeneratordev",
  "https://www.facebook.com/FontGeneratordev/",
  "https://github.com/fontgeneratordev",
  "https://medium.com/@fontgenerators",
  "https://www.quora.com/profile/Font-Generator-3",
  "https://www.reddit.com/user/fontgeneratordev/",
  "https://www.pinterest.com/fontgeneratordev/",
];

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
      sameAs: OFFICIAL_SOCIAL_PROFILES,
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
        url: `${SITE_URL}/icon-192x192.png`,
        width: 192,
        height: 192,
      },
      sameAs: OFFICIAL_SOCIAL_PROFILES,
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
      url: `${SITE_URL}/icon-192x192.png`,
      width: 192,
      height: 192,
    },
    description:
      "FontGen creates free, privacy-first web typography tools allowing users to convert text into Unicode typographic symbols.",
    knowsAbout: [
      "Unicode Standard",
      "Mathematical Alphanumeric Symbols",
      "Typography",
      "Text Formatting",
    ],
    sameAs: OFFICIAL_SOCIAL_PROFILES,
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

export function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use the Online Font Generator to Copy and Paste Fancy Text",
    description:
      "Step-by-step visual and interactive guide on converting standard text into fancy Unicode fonts for Instagram, TikTok, Discord, and messaging apps.",
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/how-font-generator-works.jpg`,
      width: 1376,
      height: 768,
      caption: "How FontGen Online Font Generator Works Infographic",
    },
    totalTime: "PT1M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Standard keyboard or text input",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "FontGen Online Font Generator",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Type or Paste Plain Text",
        text: "Type words, phrases, or names into the input box at the top of FontGen. The generator processes each character instantly as you type.",
        url: `${SITE_URL}/#generator`,
        image: `${SITE_URL}/images/how-font-generator-works.jpg`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Select Your Favorite Unicode Font Style",
        text: "Browse more than 240+ font styles including Bold, Cursive Script, Gothic Fraktur, Aesthetic Fullwidth, Bubble text, and Glitch Zalgo. Filter by category or search by style name.",
        url: `${SITE_URL}/#generator`,
        image: `${SITE_URL}/images/how-font-generator-works.jpg`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Copy with One Click and Paste Anywhere",
        text: "Click the 'Copy' button beside your desired font style to copy it directly to your clipboard. Paste your stylish text into Instagram bios, TikTok captions, Discord servers, gaming handles, or SMS messages.",
        url: `${SITE_URL}/#generator`,
        image: `${SITE_URL}/images/how-font-generator-works.jpg`,
      },
    ],
  };
}

export function generateVideoObjectSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "How FontGen Online Font Generator Works (3-Step Video Guide)",
    description:
      "Watch how to quickly convert plain text into fancy Unicode fonts and stylish copy-and-paste text for Instagram, TikTok, Discord, and messaging apps in this step-by-step video guide.",
    thumbnailUrl: [
      `${SITE_URL}/videos/how-it-works-poster.jpg`,
      `${SITE_URL}/images/how-font-generator-works.jpg`,
    ],
    uploadDate: "2026-09-18T00:00:00+00:00",
    duration: "PT12S",
    contentUrl: `${SITE_URL}/videos/how-font-generator-works.mp4`,
    embedUrl: `${SITE_URL}/#video-guide`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-192x192.png`,
        width: 192,
        height: 192,
      },
    },
    potentialAction: {
      "@type": "SeekToAction",
      target: `${SITE_URL}/#video-guide?t={seek_to_second_number}`,
      "startOffset-input": "required name=seek_to_second_number",
    },
    hasPart: [
      {
        "@type": "Clip",
        name: "Step 1: Type or Paste Plain Text",
        startOffset: 0,
        endOffset: 3,
        url: `${SITE_URL}/#video-step-1`,
      },
      {
        "@type": "Clip",
        name: "Step 2: Instant 240+ Unicode Font Transformations",
        startOffset: 3,
        endOffset: 7,
        url: `${SITE_URL}/#video-step-2`,
      },
      {
        "@type": "Clip",
        name: "Step 3: One-Click Copy & Paste to Social Media",
        startOffset: 7,
        endOffset: 10,
        url: `${SITE_URL}/#video-step-3`,
      },
      {
        "@type": "Clip",
        name: "Free & Private Web Typography Guarantee",
        startOffset: 10,
        endOffset: 12,
        url: `${SITE_URL}/#video-step-4`,
      },
    ],
  };
}

