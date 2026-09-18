import Link from "next/link";
import { ShieldCheck, Sparkles, Heart, Share2 } from "lucide-react";
import { SocialIconsRow } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block text-xl font-black tracking-tight text-slate-900 dark:text-white">
              FontGen<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Free online font and text generator for stylish, fancy, and Unicode copy-and-paste text across social media, apps, and games.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Client-Side Privacy</span>
            </div>
            {/* Social Media Handles Row */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-2">
                Follow FontGen
              </p>
              <SocialIconsRow />
            </div>
          </div>

          {/* Popular Text Styles */}
          <div>
            <p role="heading" aria-level={2} className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Popular Styles
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/bold-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Bold Text Generator
                </Link>
              </li>
              <li>
                <Link href="/cursive-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Cursive Font Generator
                </Link>
              </li>
              <li>
                <Link href="/gothic-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Gothic Text Generator
                </Link>
              </li>
              <li>
                <Link href="/fancy-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Fancy Text Generator
                </Link>
              </li>
              <li>
                <Link href="/small-text-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Small Text Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Aesthetic & Fun Text */}
          <div>
            <p role="heading" aria-level={2} className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Aesthetic & Social
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/fancy-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Fancy Font Generator
                </Link>
              </li>
              <li>
                <Link href="/aesthetic-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Aesthetic Text Generator
                </Link>
              </li>
              <li>
                <Link href="/instagram-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Instagram Font Generator
                </Link>
              </li>
              <li>
                <Link href="/tiktok-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  TikTok Font Generator
                </Link>
              </li>
              <li>
                <Link href="/discord-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Discord Font Generator
                </Link>
              </li>
              <li>
                <Link href="/glitch-text-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Glitch & Zalgo Generator
                </Link>
              </li>
              <li>
                <Link href="/upside-down-text-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Upside Down Text
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical & Legal */}
          <div>
            <p role="heading" aria-level={2} className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Information & Privacy
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/unicode-text-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Unicode Text Architecture
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About FontGen
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Privacy Policy (Client-Only)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Community Bar */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Official Social Profiles:
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Join our community across YouTube, Facebook, GitHub, Medium, Quora, Reddit &amp; Pinterest
            </span>
          </div>
          <SocialIconsRow />
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} FontGen.dev. All rights reserved. Unicode™ is a trademark of Unicode, Inc.</p>
          <p className="flex items-center gap-1">
            Built with pure Unicode mathematical typography
          </p>
        </div>
      </div>
    </footer>
  );
}
