"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export default function CopyButton({
  textToCopy,
  label = "Copy",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!textToCopy) return;

    let success = false;
    // Modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        success = true;
      } catch (err) {
        // Fallback below
      }
    }

    // Fallback for older browsers or restricted permissions
    if (!success) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        textarea.style.position = "fixed";
        textarea.style.left = "-999999px";
        textarea.style.top = "-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand("copy");
        document.body.removeChild(textarea);
      } catch (err) {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [textToCopy]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : `Copy ${label}`}
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 active:scale-95 ${
        copied
          ? "bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-500"
          : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/20 hover:shadow-indigo-600/30 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 animate-in fade-in zoom-in-75 duration-150" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 opacity-90" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
