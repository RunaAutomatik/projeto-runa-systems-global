"use client";

import { useState, useMemo } from "react";
import { ContentCard } from "./content-card";
import { LockedCard } from "./locked-card";
import type { ContentItemMeta } from "@/lib/types/content";

const ALL_TYPES = [
  "lesson",
  "live",
  "skill",
  "prompt",
  "template",
  "repo",
] as const;

const TYPE_LABELS: Record<string, string> = {
  lesson: "Aula",
  live: "Live",
  skill: "Skill",
  prompt: "Prompt",
  template: "Template",
  repo: "Repo",
};

export function BibliotecaClient({ items }: { items: ContentItemMeta[] }) {
  const [search, setSearch] = useState("");
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((item) => {
      if (q && !item.title.toLowerCase().includes(q)) return false;
      if (activeTypes.size > 0 && !activeTypes.has(item.type)) return false;
      return true;
    });
  }, [items, search, activeTypes]);

  function toggleType(type: string) {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  }

  const availableTypes = ALL_TYPES.filter((t) =>
    items.some((i) => i.type === t),
  );

  return (
    <div>
      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por título…"
          className="flex-1 bg-surface-1 border border-border rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-muted focus:outline-none focus:border-muted transition-colors"
        />
        {availableTypes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {availableTypes.map((type) => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`font-mono text-[11px] uppercase tracking-wider px-3 py-2 rounded border transition-colors ${
                  activeTypes.has(type)
                    ? "bg-accent border-muted text-text"
                    : "bg-surface-1 border-border text-muted hover:border-muted"
                }`}
              >
                {TYPE_LABELS[type]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <EmptyState
          hasFilters={!!search || activeTypes.size > 0}
          onClear={() => {
            setSearch("");
            setActiveTypes(new Set());
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div key={item.id} className={i === 0 ? "md:col-span-2" : ""}>
              {item.tier_required === "free" ? (
                <ContentCard item={item} />
              ) : (
                <LockedCard item={item} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({
  hasFilters,
  onClear,
}: {
  hasFilters: boolean;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="text-muted"
        aria-hidden
      >
        <rect
          x="6"
          y="10"
          width="36"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="14"
          y1="20"
          x2="34"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="27"
          x2="26"
          y2="27"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-text font-medium">
        {hasFilters ? "Nenhum resultado" : "Biblioteca vazia"}
      </p>
      <p className="text-muted text-sm max-w-xs">
        {hasFilters
          ? "Tente ajustar os filtros ou limpar a busca."
          : "Novos recursos serão adicionados em breve."}
      </p>
      {hasFilters && (
        <button
          onClick={onClear}
          className="text-sm text-muted underline underline-offset-2 hover:text-text transition-colors"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
}
