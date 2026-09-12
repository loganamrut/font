import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import {
  generateWebApplicationSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://fontgen.dev"),
  title: {
    default: "Font Generator - Fancy & Stylish Text to Copy and Paste",
    template: "%s | FontGen",
  },
  description:
    "Free online font generator for creating fancy, stylish and Unicode text. Generate bold, cursive, aesthetic and cool text you can copy and paste anywhere.",
  keywords: [
    "font generator",
    "font generator online",
    "fancy font generator",
    "fancy text generator",
    "cool font generator",
    "stylish font generator",
    "copy paste fonts",
    "aesthetic fonts",
    "instagram fonts",
    "unicode font generator",
    "bold text generator",
    "cursive text generator",
  ],
  authors: [{ name: "FontGen Team" }],
  creator: "FontGen",
  publisher: "FontGen",
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
  alternates: {
    canonical: "https://fontgen.dev/",
  },
  openGraph: {
    title: "Font Generator - Fancy & Stylish Text to Copy and Paste",
    description:
      "Free font generator for creating fancy, stylish and Unicode text. Generate bold, cursive, aesthetic and cool text you can copy and paste anywhere.",
    url: "https://fontgen.dev/",
    siteName: "FontGen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://fontgen.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "FontGen - Online Font & Fancy Text Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Font Generator - Fancy & Stylish Text to Copy and Paste",
    description:
      "Free font generator for creating fancy, stylish and Unicode text. Generate bold, cursive, aesthetic and cool text you can copy and paste anywhere.",
    images: ["https://fontgen.dev/og-image.png"],
    creator: "@FontGenDev",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webAppSchema = generateWebApplicationSchema();
  const webSiteSchema = generateWebSiteSchema();
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('fontgen_theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-indigo-500 selection:text-white">
        {/* Google Analytics 4 (GA4) with Consent Mode v2 loaded non-blockingly */}
        <Script
          id="google-consent-mode"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              let savedConsent = null;
              try {
                savedConsent = localStorage.getItem('fontgen_cookie_consent');
              } catch (e) {}

              gtag('consent', 'default', {
                'analytics_storage': savedConsent === 'accepted' ? 'granted' : 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });

              gtag('js', new Date());
              gtag('config', 'G-HT87NWEHNT', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HT87NWEHNT"
        />

        <Header />
        <main className="flex-1 bg-white dark:bg-slate-950">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-HT87NWEHNT" />
        <CookieConsent />
      </body>
    </html>
  );
}
