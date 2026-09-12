"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";
import { Sparkles } from "lucide-react";

interface ExampleItem {
  name: string;
  preview: string;
  category: string;
}

const EXAMPLES: ExampleItem[] = [
  { name: "Bold Serif", preview: "𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝", category: "Bold" },
  { name: "Italic Serif", preview: "𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑", category: "Italic" },
  { name: "Cursive Script", preview: "ℋℯ𝓁𝓁ℴ 𝒲ℴ𝓇𝓁𝒹", category: "Cursive" },
  { name: "Gothic Fraktur", preview: "𝔄𝔲𝔱𝔥𝔢𝔫𝔱𝔦𝔠 𝔊𝔬𝔱𝔥𝔦𝔠", category: "Gothic" },
  { name: "Blackboard Bold", preview: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜", category: "Fancy" },
  { name: "Monospace", preview: "𝚃𝚎𝚛𝚖𝚒𝚗𝚊𝚕 𝚃𝚎𝚡𝚝", category: "Monospace" },
  { name: "Bubble (Circled)", preview: "Ⓑⓤⓑⓑⓛⓔ Ⓣⓔⓧⓣ", category: "Bubble" },
  { name: "Small Capitals", preview: "ᴀᴇsᴛʜᴇᴛɪᴄ ʙɪᴏ", category: "Small" },
  { name: "Vaporwave Fullwidth", preview: "Ｖａｐｏｒｗａｖｅ", category: "Aesthetic" },
  { name: "Royal Wings", preview: "꧁ 𝒬𝓊𝑒𝑒𝓃 ꧂", category: "Decorative" },
  { name: "Upside Down", preview: "plɹoM ollǝH", category: "Inverted" },
  { name: "Strikethrough", preview: "S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶", category: "Strike" },
];

export default function ExamplesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10" id="examples">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Examples</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Popular Fancy Text Styles
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-lg mx-auto">
          Click any example below to instantly copy it to your clipboard.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {EXAMPLES.map((ex) => (
          <div
            key={ex.name}
            className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800 transition-all"
          >
            <div className="min-w-0 pr-3">
              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block uppercase tracking-wider">
                {ex.name}
              </span>
              <p className="text-base sm:text-lg text-slate-900 dark:text-slate-100 font-medium truncate mt-0.5">
                {ex.preview}
              </p>
            </div>
            <CopyButton textToCopy={ex.preview} label="Copy" className="shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
