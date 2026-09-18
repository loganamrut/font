"use client";

import { useRef, useState } from "react";
import { Play, Clock, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Copy, Edit3, Shield } from "lucide-react";

interface KeyMoment {
  time: number;
  timeLabel: string;
  title: string;
  description: string;
}

const KEY_MOMENTS: KeyMoment[] = [
  {
    time: 0,
    timeLabel: "00:00",
    title: "Step 1: Type or Paste Text",
    description: "Type words, phrases, or names with instant real-time client-side processing.",
  },
  {
    time: 3,
    timeLabel: "00:03",
    title: "Step 2: Instant 240+ Styles",
    description: "Live conversion across Bold, Cursive Script, Gothic, Aesthetic, and Bubble fonts.",
  },
  {
    time: 7,
    timeLabel: "00:07",
    title: "Step 3: 1-Click Copy & Paste",
    description: "One click to copy directly to clipboard. Paste in Instagram, TikTok, Discord, and chat.",
  },
  {
    time: 10,
    timeLabel: "00:10",
    title: "Privacy & Compatibility",
    description: "100% private in-browser execution with zero server logs or registration.",
  },
];

export default function VideoGuide() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeMoment, setActiveMoment] = useState<number>(0);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const handleSeek = (time: number, index: number) => {
    setActiveMoment(index);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      id="video-guide"
      aria-labelledby="video-guide-heading"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100 dark:border-slate-800/80"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
          <Play className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 fill-indigo-600 dark:fill-indigo-400" />
          <span>Interactive Video Guide</span>
        </span>
        <h2
          id="video-guide-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          Watch How FontGen Works
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          See how effortlessly you can type, preview 240+ Unicode typography styles in real time, and
          copy with one click to your favorite social networks and games.
        </p>
      </div>

      {/* Video Container & Player */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-2xl">
        <div className="relative aspect-video w-full">
          <video
            ref={videoRef}
            id="how-it-works-video"
            controls
            preload="none"
            poster="/videos/how-it-works-poster.jpg"
            playsInline
            className="w-full h-full object-cover"
            aria-label="How FontGen Online Font Generator Works Video Guide"
          >
            <source src="/videos/how-font-generator-works.webm" type="video/webm" />
            <source src="/videos/how-font-generator-works.mp4" type="video/mp4" />
            <track
              kind="captions"
              src="/videos/how-it-works-captions.vtt"
              srcLang="en"
              label="English (Captions)"
              default
            />
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Video Sub-bar */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">
              High-Definition 60fps Walkthrough (12s)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Universal H.264 &amp; VP9</span>
            <span>&bull;</span>
            <span>WebVTT Captions Included</span>
          </div>
        </div>
      </div>

      {/* Key Moments / Interactive Chapter Pills (Google Video Key Moments compliance) */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            <span>Key Moments &amp; Timestamps</span>
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">Click any step to jump</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {KEY_MOMENTS.map((km, idx) => (
            <button
              key={km.timeLabel}
              type="button"
              onClick={() => handleSeek(km.time, idx)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeMoment === idx
                  ? "bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-400 dark:border-indigo-600 shadow-sm"
                  : "bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {km.timeLabel}
                </span>
                <Play className="w-3 h-3 text-slate-400" />
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                {km.title}
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                {km.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Text Transcript Accordion */}
      <div className="mt-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        <button
          type="button"
          onClick={() => setShowTranscript(!showTranscript)}
          className="w-full p-4 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          aria-expanded={showTranscript}
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Read Video Transcript (Accessible Text Alternative)</span>
          </span>
          {showTranscript ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {showTranscript && (
          <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              <strong className="text-slate-900 dark:text-slate-100">[00:00 - 00:03] Step 1: Type or Paste Plain Text</strong>
              <br />
              Open FontGen.dev in your browser. Type your text or paste words directly into the interactive input box. FontGen processes each character instantly as you type with zero latency and 100% client-side privacy.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-100">[00:03 - 00:07] Step 2: Instant 240+ Unicode Font Transformations</strong>
              <br />
              Watch your text automatically convert into hundreds of decorative Unicode styles including Bold Serif, Cursive Script, Gothic Fraktur, Aesthetic Fullwidth, Bubble Circled, and Small Capitals.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-100">[00:07 - 00:10] Step 3: One-Click Copy &amp; Paste Anywhere</strong>
              <br />
              Click the &ldquo;Copy&rdquo; button next to any font to immediately copy it to your clipboard. Paste your stylish text directly into Instagram bios, TikTok captions, Discord servers, X/Twitter posts, Roblox usernames, or WhatsApp chats.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-100">[00:10 - 00:12] Outro: Free &amp; Private Typography</strong>
              <br />
              FontGen is free forever, requires no registration or software installation, and never stores your typed text on remote servers.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
