import type { Deliverable } from "@/lib/types/mentee";

const TYPE_LABELS: Record<Deliverable["type"], string> = {
  prompt: "Prompt",
  template: "Template",
  workflow: "Workflow",
  agent: "Agente",
  doc: "Documento",
};

interface Props {
  deliverable: Deliverable;
  sessionLabel?: string;
}

export function DeliverableCard({ deliverable, sessionLabel }: Props) {
  const label = TYPE_LABELS[deliverable.type];

  const available = !!deliverable.file_url;

  const inner = (
    <div
      className={`bg-surface1 border border-border rounded-lg p-4 flex items-start justify-between gap-4 transition-colors ${available ? "hover:border-accent" : "opacity-50 cursor-default"}`}
    >
      <div className="space-y-1 min-w-0">
        {sessionLabel && (
          <p className="text-textMuted text-xs font-mono">{sessionLabel}</p>
        )}
        <p className="text-textPrimary text-sm font-medium truncate">
          {deliverable.title}
        </p>
        {deliverable.description && (
          <p className="text-textMuted text-xs line-clamp-2">
            {deliverable.description}
          </p>
        )}
        {!available && <p className="text-textMuted text-xs">Em breve</p>}
      </div>
      <span className="text-xs bg-accentSoft text-textMuted border border-border rounded px-2 py-0.5 whitespace-nowrap flex-shrink-0">
        {label}
      </span>
    </div>
  );

  if (available) {
    return (
      <a
        href={deliverable.file_url!}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}
