import type { InfrastructureSnapshot } from "@/lib/types/mentee";

const STAGE_DOT: Record<InfrastructureSnapshot["v_stage"], string> = {
  V1: "bg-muted",
  V2: "bg-amber-400",
  V3: "bg-accent",
};

interface Props {
  snapshots: InfrastructureSnapshot[];
}

export function SnapshotTimeline({ snapshots }: Props) {
  if (snapshots.length === 0) {
    return (
      <p className="text-muted text-sm py-4 text-center">
        Nenhum snapshot registrado ainda.
      </p>
    );
  }

  return (
    <ol className="relative border-l border-border ml-2 space-y-6">
      {snapshots.map((snap) => {
        const date = new Date(snap.captured_at).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        return (
          <li key={snap.id} className="ml-5">
            <span
              className={`absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-bg ${STAGE_DOT[snap.v_stage]}`}
            />
            <div className="space-y-1">
              <p className="text-xs text-muted font-mono">{date}</p>
              <p className="text-sm text-text font-medium">
                {snap.v_stage} — {snap.tools_count} ferramenta
                {snap.tools_count !== 1 ? "s" : ""}, {snap.automations_count}{" "}
                automação
                {snap.automations_count !== 1 ? "ões" : ""}
              </p>
              {snap.notes && (
                <p className="text-xs text-muted">{snap.notes}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
