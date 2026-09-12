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
