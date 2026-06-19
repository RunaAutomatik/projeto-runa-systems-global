import Link from "next/link";
import Image from "next/image";
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

export function ContentCard({ item }: { item: ContentItemMeta }) {
  const accentBg = TYPE_ACCENT[item.type] ?? "bg-surface-2";

  return (
    <Link
      href={`/biblioteca/${item.slug}`}
      className="block bg-surface-1 border border-border rounded-lg overflow-hidden hover:border-muted transition-colors h-full"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-36 w-full ${accentBg} flex items-center justify-center`}
      >
        {item.thumbnail_url ? (
          <Image
            src={item.thumbnail_url}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted opacity-40">
            {TYPE_LABELS[item.type] ?? item.type}
          </span>
        )}
      </div>

      {/* Content */}
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
    </Link>
  );
}
