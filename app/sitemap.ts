import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fontgen.dev";
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/bold-font-generator", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/italic-font-generator", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/cursive-font-generator", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/fancy-font-generator", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/aesthetic-font-generator", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/gothic-font-generator", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/bubble-font-generator", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/small-text-generator", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/upside-down-text-generator", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/glitch-text-generator", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/instagram-font-generator", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/tiktok-font-generator", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/discord-font-generator", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/unicode-text-generator", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
