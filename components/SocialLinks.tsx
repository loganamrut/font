import React from "react";

export interface SocialItem {
  id: string;
  name: string;
  url: string;
  handle: string;
  ariaLabel: string;
  color: string;
  hoverColor: string;
  hoverBorder: string;
  hoverBg: string;
  svgPath: string;
}

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/@FontGeneratordev",
    handle: "@FontGeneratordev",
    ariaLabel: "FontGen official YouTube channel (@FontGeneratordev)",
    color: "#ff0000",
    hoverColor: "hover:text-[#ff0000]",
    hoverBorder: "hover:border-[#ff0000]/40",
    hoverBg: "hover:bg-[#ff0000]/10",
    svgPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/FontGeneratordev/",
    handle: "FontGeneratordev",
    ariaLabel: "FontGen official Facebook page (/FontGeneratordev/)",
    color: "#1877f2",
    hoverColor: "hover:text-[#1877f2]",
    hoverBorder: "hover:border-[#1877f2]/40",
    hoverBg: "hover:bg-[#1877f2]/10",
    svgPath:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/fontgeneratordev",
    handle: "fontgeneratordev",
    ariaLabel: "FontGen on GitHub (@fontgeneratordev)",
    color: "#24292f",
    hoverColor: "hover:text-slate-900 dark:hover:text-white",
    hoverBorder: "hover:border-slate-400 dark:hover:border-slate-600",
    hoverBg: "hover:bg-slate-200 dark:hover:bg-slate-800",
    svgPath:
      "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    id: "medium",
    name: "Medium",
    url: "https://medium.com/@fontgenerators",
    handle: "@fontgenerators",
    ariaLabel: "FontGen articles and publications on Medium (@fontgenerators)",
    color: "#00ab6c",
    hoverColor: "hover:text-[#00ab6c]",
    hoverBorder: "hover:border-[#00ab6c]/40",
    hoverBg: "hover:bg-[#00ab6c]/10",
    svgPath:
      "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
  },
  {
    id: "quora",
    name: "Quora",
    url: "https://www.quora.com/profile/Font-Generator-3",
    handle: "Font-Generator-3",
    ariaLabel: "FontGen profile and answers on Quora (Font-Generator-3)",
    color: "#b92b27",
    hoverColor: "hover:text-[#b92b27]",
    hoverBorder: "hover:border-[#b92b27]/40",
    hoverBg: "hover:bg-[#b92b27]/10",
    svgPath:
      "M12.75 0C5.7 0 0 5.48 0 12.24c0 6.42 5.1 11.7 11.66 12.21.14.77.41 1.76.99 2.58.69.96 1.62 1.47 2.68 1.47 1.77 0 2.92-1.39 3.44-2.18.5-.78.89-1.77 1.05-2.28 2.5-1.92 4.18-5.32 4.18-9.04C24 5.48 18.3 0 12.75 0zm1.74 20.37c-.15.42-.45 1.14-.8 1.63-.3.42-.72.84-1.28.84-.45 0-.74-.29-.98-.67-.3-.49-.44-1.12-.52-1.74-.01-.06-.02-.12-.03-.18 1.25-.13 2.45-.49 3.53-1.03-.02.39.08.75.08 1.15zm-1.84-4.27c-3.79 0-6.88-3.07-6.88-6.83 0-3.77 3.09-6.83 6.88-6.83 3.8 0 6.89 3.06 6.89 6.83 0 3.76-3.09 6.83-6.89 6.83z",
  },
  {
    id: "reddit",
    name: "Reddit",
    url: "https://www.reddit.com/user/fontgeneratordev/",
    handle: "u/fontgeneratordev",
    ariaLabel: "FontGen official profile on Reddit (u/fontgeneratordev)",
    color: "#ff4500",
    hoverColor: "hover:text-[#ff4500]",
    hoverBorder: "hover:border-[#ff4500]/40",
    hoverBg: "hover:bg-[#ff4500]/10",
    svgPath:
      "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.702zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    url: "https://www.pinterest.com/fontgeneratordev/",
    handle: "fontgeneratordev",
    ariaLabel: "FontGen aesthetic typography pins on Pinterest (@fontgeneratordev)",
    color: "#e60023",
    hoverColor: "hover:text-[#e60023]",
    hoverBorder: "hover:border-[#e60023]/40",
    hoverBg: "hover:bg-[#e60023]/10",
    svgPath:
      "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z",
  },
];

/**
 * Compact icon row for Footer, Header, or cards
 */
export function SocialIconsRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center flex-wrap gap-2 ${className}`}>
      {SOCIAL_ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label={item.ariaLabel}
          title={`${item.name} (${item.handle})`}
          className={`p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-all shadow-sm ${item.hoverColor} ${item.hoverBorder} ${item.hoverBg} hover:scale-105`}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d={item.svgPath} />
          </svg>
          <span className="sr-only">{item.name}</span>
        </a>
      ))}
    </div>
  );
}

/**
 * Full card grid for About page and Community sections
 */
export function SocialCommunityGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 ${className}`}>
      {SOCIAL_ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label={item.ariaLabel}
          className={`p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-all flex items-center justify-between shadow-sm group ${item.hoverBorder}`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors group-${item.hoverColor} group-${item.hoverBg}`}
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d={item.svgPath} />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-slate-900 dark:text-white block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">
                {item.handle}
              </span>
            </div>
          </div>
          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Visit &rarr;
          </span>
        </a>
      ))}
    </div>
  );
}
