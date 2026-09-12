import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FontGen - Online Font & Fancy Text Generator",
    short_name: "FontGen",
    description:
      "Free online font generator for creating fancy, stylish and Unicode copy-and-paste text.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
