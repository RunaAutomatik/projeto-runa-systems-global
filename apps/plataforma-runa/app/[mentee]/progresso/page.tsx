import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  MILESTONES,
  getCompletedMilestones,
  type VStage,
} from "@/lib/milestones";
import { VStageCard } from "@/components/progresso/VStageCard";
import { SnapshotTimeline } from "@/components/progresso/SnapshotTimeline";

interface Props {
  params: Promise<{ mentee: string }>;
}

const STAGES: VStage[] = ["V1", "V2", "V3"];

export default async function ProgressoPage({ params }: Props) {
  const { mentee } = await params;
  const supabase = createAdminClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, mentee_slug")
    .eq("mentee_slug", mentee)
    .single();

  if (!profile || profile.mentee_slug !== mentee) {
    notFound();
  }

  const { data: snapshots } = await supabase
    .from("infrastructure_snapshots")
    .select("*")
    .eq("mentee_id", profile.id)
    .order("captured_at", { ascending: true });

  const allSnapshots = snapshots ?? [];
  const latest =
    allSnapshots.length > 0 ? allSnapshots[allSnapshots.length - 1] : null;
  const currentStage: VStage = latest?.v_stage ?? "V1";
  const completed = getCompletedMilestones(latest);

  return (
    <div className="min-h-screen bg-bg text-textPrimary">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-10">
        <div className="space-y-1">
          <h1 className="text-textPrimary text-2xl font-semibold">Progresso</h1>
          {latest && (
            <p className="text-textMuted text-sm">
              {latest.tools_count} ferramenta
              {latest.tools_count !== 1 ? "s" : ""} · {latest.automations_count}{" "}
              automação
              {latest.automations_count !== 1 ? "ões" : ""}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {STAGES.map((stage) => (
            <VStageCard
              key={stage}
              stage={stage}
              completed={
                currentStage === stage ||
                STAGES.indexOf(stage) < STAGES.indexOf(currentStage)
                  ? completed
                  : new Set()
              }
              isCurrent={stage === currentStage}
            />
          ))}
        </div>

        {allSnapshots.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-textPrimary text-base font-medium">
              Histórico de snapshots
            </h2>
            <SnapshotTimeline snapshots={allSnapshots} />
          </div>
        )}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
