import type { AgentStatus } from "@/lib/types/mentee";

const STATUS_CONFIG: Record<
  AgentStatus,
  { label: string; badgeClass: string; ringClass: string }
> = {
  "not-started": {
    label: "Não iniciado",
    badgeClass: "bg-surface2 text-textMuted border border-border",
    ringClass: "",
  },
  "training-wheels": {
    label: "Training Wheels",
    badgeClass: "bg-amber-950/40 text-amber-400 border border-amber-800/50",
    ringClass: "",
  },
  assisted: {
    label: "Assistido",
    badgeClass:
      "bg-emerald-950/30 text-emerald-400 border border-emerald-800/40",
    ringClass: "",
  },
  autonomous: {
    label: "Autônomo",
    badgeClass: "bg-accent/20 text-accent border border-accent/40",
    ringClass: "ring-1 ring-accent/30 shadow-[0_0_10px_-4px_#3D4842]",
  },
};

interface Props {
  name: string;
  status: AgentStatus;
}

export function AgentCard({ name, status }: Props) {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={`bg-surface1 border border-border rounded-xl p-4 space-y-3 ${config.ringClass}`}
    >
      <p className="text-textPrimary text-sm font-medium leading-tight">
        {name}
      </p>
      <span
        className={`inline-block text-xs font-mono px-2.5 py-0.5 rounded-full ${config.badgeClass}`}
      >
        {config.label}
      </span>
    </div>
  );
}
