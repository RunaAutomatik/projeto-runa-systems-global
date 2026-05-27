import Link from "next/link";
import type { ContentItemMeta } from "@/lib/types/content";

const TYPE_LABELS: Record<string, string> = {
  skill: "Skill",
  prompt: "Prompt",
  template: "Template",
  lesson: "Aula",
  live: "Live",
  repo: "Repositório",
};

const TYPE_ACCENT: Record<string, string> = {
  lesson: "bg-[#1A2B1C]",
  live: "bg-[#1A2520]",
  skill: "bg-[#1A201E]",
  prompt: "bg-[#1E201A]",
  template: "bg-[#1A1E20]",
  repo: "bg-[#20201A]",
};

export function LockedCard({ item }: { item: ContentItemMeta }) {
  const accentBg = TYPE_ACCENT[item.type] ?? "bg-surface-2";

  return (
    <div className="relative rounded-lg overflow-hidden group h-full">
      {/* Blurred content */}
      <div className="bg-surface-1 border border-border rounded-lg overflow-hidden blur-[3px] select-none pointer-events-none h-full">
        <div className={`h-36 w-full ${accentBg}`} />
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-accent rounded text-muted">
              {TYPE_LABELS[item.type] ?? item.type}
            </span>
            {item.duration_minutes && (
              <span className="font-mono text-[10px] text-muted">
                {item.duration_minutes} min
              </span>
            )}
          </div>
          <h2 className="text-text font-medium text-sm leading-snug">
            {item.title}
          </h2>
          {item.description && (
            <p className="text-muted text-xs mt-1.5 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </div>

      {/* Upgrade overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg/70 rounded-lg">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Mentoria
        </span>
        <Link
          href="/planos?upgrade=mentee"
          className="text-sm px-4 py-2 bg-surface-1 border border-border text-text rounded hover:bg-surface-2 transition-colors group-hover:border-muted"
        >
          Upgrade para Mentoria →
        </Link>
      </div>
    </div>
  );
}
