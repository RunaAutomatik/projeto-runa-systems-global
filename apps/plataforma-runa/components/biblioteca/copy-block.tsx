"use client";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  function handleCopy() {
    const text = preRef.current?.innerText ?? "";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group">
      <pre ref={preRef}>{children}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded text-textMuted hover:text-textPrimary hover:bg-surface2 transition-opacity"
        aria-label="Copiar"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}
