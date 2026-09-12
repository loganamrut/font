import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateWebApplicationSchema, generateWebSiteSchema } from "@/lib/seo/schema";

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
    canonical: "https://fontgen.dev",
  },
  openGraph: {
    title: "Font Generator - Fancy & Stylish Text to Copy and Paste",
    description:
      "Free font generator for creating fancy, stylish and Unicode text. Generate bold, cursive, aesthetic and cool text you can copy and paste anywhere.",
    url: "https://fontgen.dev",
    siteName: "FontGen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Font Generator - Fancy & Stylish Text to Copy and Paste",
    description:
      "Free font generator for creating fancy, stylish and Unicode text. Generate bold, cursive, aesthetic and cool text you can copy and paste anywhere.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webAppSchema = generateWebApplicationSchema();
  const webSiteSchema = generateWebSiteSchema();

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
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-indigo-500 selection:text-white">
        <Header />
        <main className="flex-1 bg-white dark:bg-slate-950">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
