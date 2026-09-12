import { Metadata } from "next";

export const SITE_URL = "https://fontgen.dev";
export const SITE_NAME = "FontGen";

interface MetadataOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description,
  canonicalPath = "",
  keywords = [],
}: MetadataOptions): Metadata {
  const url = `${SITE_URL}${canonicalPath}`;

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
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
