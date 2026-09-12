"use client";

import { ZalgoIntensity } from "@/lib/unicode/zalgo";
import { AlertCircle, Sliders } from "lucide-react";

interface ZalgoControlsProps {
  intensity: ZalgoIntensity;
  onChangeIntensity: (intensity: ZalgoIntensity) => void;
}

export default function ZalgoControls({
  intensity,
  onChangeIntensity,
}: ZalgoControlsProps) {
  return (
    <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200/80 dark:border-amber-800/50 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
            Glitch / Zalgo Corruption Intensity:
          </span>
          <div className="inline-flex rounded-lg p-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            {(["low", "medium", "high"] as ZalgoIntensity[]).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => onChangeIntensity(level)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md capitalize transition-all ${
                  intensity === level
                    ? "bg-amber-500 text-white shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-amber-800 dark:text-amber-300">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Excessive combining marks may render differently across mobile browsers.</span>
        </div>
      </div>
    </div>
  );
}
