import Link from "next/link";
import { Type, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 border border-indigo-100 dark:border-indigo-900/50">
        <Type className="w-8 h-8" />
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
        404 - Page Not Found
      </h1>

      <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
        The font style or page you are looking for doesn&apos;t exist or has moved. Return to the font generator to create stylish text.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Font Generator</span>
        </Link>
        <Link
          href="/fancy-font-generator"
          className="px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 font-semibold text-sm transition-all"
        >
          Browse Fancy Fonts
        </Link>
      </div>
    </div>
  );
}
