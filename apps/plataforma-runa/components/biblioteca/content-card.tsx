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

export function ContentCard({ item }: { item: ContentItemMeta }) {
  return (
    <Link
      href={`/biblioteca/${item.slug}`}
      className="block bg-surface1 border border-border rounded-lg p-5 hover:border-border/80 hover:bg-surface1/80 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
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
      </div>
    </Link>
  );
}
