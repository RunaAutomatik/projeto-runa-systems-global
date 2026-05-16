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

export function LockedCard({ item }: { item: ContentItemMeta }) {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <div className="bg-surface1 border border-border rounded-lg p-5 blur-[3px] select-none pointer-events-none">
        <span className="text-textMuted text-xs uppercase tracking-wide">
          {TYPE_LABELS[item.type] ?? item.type}
        </span>
        <h2 className="text-textPrimary font-medium mt-1">{item.title}</h2>
        {item.description && (
          <p className="text-textMuted text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg/60 rounded-lg">
        <span className="text-textMuted text-xs uppercase tracking-widest">
          Mentoria
        </span>
        <Link
          href="/planos?upgrade=mentee"
          className="text-sm px-4 py-2 bg-surface1 border border-border text-textPrimary rounded hover:bg-surface2 transition-colors group-hover:border-textMuted"
        >
          Upgrade para Mentoria →
        </Link>
      </div>
    </div>
  );
}
