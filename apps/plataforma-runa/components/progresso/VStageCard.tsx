import { MILESTONES, type VStage, type MilestoneId } from "@/lib/milestones";
import { MilestoneChecklist } from "./MilestoneChecklist";

const STAGE_CONFIG: Record<
  VStage,
  { label: string; badgeClass: string; cardClass: string }
> = {
  V1: {
    label: "V1 — Infra Manual",
    badgeClass: "bg-surface2 text-textMuted border border-border",
    cardClass: "border-border",
  },
  V2: {
    label: "V2 — Automações",
    badgeClass: "bg-amber-950/40 text-amber-400 border border-amber-800/50",
    cardClass: "border-amber-800/30",
  },
  V3: {
    label: "V3 — Sistema Autônomo",
    badgeClass: "bg-accent/20 text-accent border border-accent/40",
    cardClass: "border-accent/30 shadow-[0_0_12px_-4px_#3D4842]",
  },
};

interface Props {
  stage: VStage;
  completed: Set<MilestoneId>;
  isCurrent: boolean;
}

export function VStageCard({ stage, completed, isCurrent }: Props) {
  const config = STAGE_CONFIG[stage];
  const milestones = MILESTONES[stage];
  const doneCount = milestones.filter((m) => completed.has(m.id)).length;

  return (
    <div
      className={`bg-surface1 border rounded-xl p-5 space-y-4 ${config.cardClass} ${
        isCurrent ? "ring-1 ring-accent/20" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${config.badgeClass}`}
        >
          {config.label}
        </span>
        {isCurrent && (
          <span className="text-xs text-accent font-mono">atual</span>
        )}
      </div>

      <MilestoneChecklist milestones={milestones} completed={completed} />

      <p className="text-xs text-textMuted font-mono">
        {doneCount}/{milestones.length} concluídos
      </p>
    </div>
  );
}
