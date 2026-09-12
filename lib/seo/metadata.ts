import { Metadata } from "next";

export const SITE_URL = "https://fontgen.dev";
export const SITE_NAME = "FontGen";

interface MetadataOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogImage?: string;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = "",
  keywords = [],
  ogImage = "/og-image.png",
}: MetadataOptions): Metadata {
  const cleanPath = canonicalPath.replace(/^\/+|\/+$/g, "");
  const canonicalUrl = cleanPath ? `${SITE_URL}/${cleanPath}/` : `${SITE_URL}/`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  const defaultKeywords = [
    "font generator",
    "fancy text generator",
    "copy paste fonts",
    "cool font generator",
    "stylish text generator",
    "unicode font generator",
    "instagram fonts",
    "aesthetic fonts",
  ];

  return {
    title,
    description,
    keywords: Array.from(new Set([...keywords, ...defaultKeywords])),
    authors: [{ name: "FontGen Team" }],
    creator: "FontGen",
    publisher: "FontGen",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - FontGen.dev`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@FontGenDev",
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
