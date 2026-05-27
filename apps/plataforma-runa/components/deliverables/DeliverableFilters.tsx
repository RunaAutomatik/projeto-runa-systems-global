"use client";

import type { Deliverable } from "@/lib/types/mentee";

const TYPE_OPTIONS: { value: Deliverable["type"] | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "prompt", label: "Prompt" },
  { value: "template", label: "Template" },
  { value: "workflow", label: "Workflow" },
  { value: "agent", label: "Agente" },
  { value: "doc", label: "Documento" },
];

interface SessionOption {
  number: number;
  label: string;
}

interface Props {
  typeFilter: Deliverable["type"] | "all";
  onTypeChange: (value: Deliverable["type"] | "all") => void;
  sessionFilter: number | "all";
  onSessionChange: (value: number | "all") => void;
  sessionOptions: SessionOption[];
}

export function DeliverableFilters({
  typeFilter,
  onTypeChange,
  sessionFilter,
  onSessionChange,
  sessionOptions,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex flex-wrap gap-1.5">
        {TYPE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onTypeChange(opt.value)}
            className={`text-xs px-3 py-1 rounded border transition-colors ${
              typeFilter === opt.value
                ? "bg-accent border-accent text-text"
                : "bg-surface-1 border-border text-muted hover:border-accent"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {sessionOptions.length > 0 && (
        <select
          value={sessionFilter === "all" ? "all" : String(sessionFilter)}
          onChange={(e) =>
            onSessionChange(
              e.target.value === "all" ? "all" : Number(e.target.value),
            )
          }
          className="bg-surface-1 border border-border rounded text-xs text-muted px-3 py-1 focus:outline-none focus:border-accent transition-colors"
        >
          <option value="all">Todas as sessões</option>
          {sessionOptions.map((s) => (
            <option key={s.number} value={String(s.number)}>
              {s.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
