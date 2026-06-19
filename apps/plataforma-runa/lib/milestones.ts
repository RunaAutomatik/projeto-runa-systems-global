import type { InfrastructureSnapshot, VStage } from "@/lib/types/mentee";

export type { VStage };

export const MILESTONES = {
  V1: [
    { id: "claude-ai-configured", label: "Claude AI configurado" },
    { id: "first-agent-created", label: "Primeiro agente criado" },
    { id: "first-workflow", label: "Primeiro workflow documentado" },
    { id: "claude-code-installed", label: "Claude Code instalado" },
  ],
  V2: [
    { id: "squad-training-wheels", label: "Squad em Training Wheels" },
    { id: "n8n-connected", label: "n8n conectado" },
    { id: "first-automation", label: "Primeira automação ativa" },
    { id: "content-pipeline", label: "Pipeline de conteúdo configurado" },
  ],
  V3: [
    { id: "squad-autonomous", label: "Squad operando autonomamente" },
    { id: "full-automation", label: "Automações cobrindo 80%+ das operações" },
    { id: "client-revenue", label: "Primeira receita gerada com o sistema" },
    { id: "runa-method-applied", label: "Método RUNA aplicado integralmente" },
  ],
} as const;

export type MilestoneId =
  | (typeof MILESTONES.V1)[number]["id"]
  | (typeof MILESTONES.V2)[number]["id"]
  | (typeof MILESTONES.V3)[number]["id"];

function activeAgentsCount(agents: InfrastructureSnapshot["agents"]): number {
  return Object.values(agents ?? {}).filter((s) => s !== "not-started").length;
}

function autonomousAgentsCount(
  agents: InfrastructureSnapshot["agents"],
): number {
  return Object.values(agents ?? {}).filter((s) => s === "autonomous").length;
}

export function getCompletedMilestones(
  snapshot: InfrastructureSnapshot | null,
): Set<MilestoneId> {
  const done = new Set<MilestoneId>();
  if (!snapshot) return done;

  const { tools_count, automations_count, agents } = snapshot;
  const active = activeAgentsCount(agents);
  const autonomous = autonomousAgentsCount(agents);

  // V1: tools and first agents
  if (tools_count > 0) done.add("claude-ai-configured");
  if (active >= 1) done.add("first-agent-created");
  if (tools_count >= 2) done.add("first-workflow");
  if (tools_count >= 3) done.add("claude-code-installed");

  // V2: automations and squad activation
  if (active >= 3) done.add("squad-training-wheels");
  if (automations_count > 0) done.add("n8n-connected");
  if (automations_count >= 2) done.add("first-automation");
  if (automations_count >= 3) done.add("content-pipeline");

  // V3: full autonomy
  if (autonomous >= 6) done.add("squad-autonomous");
  if (automations_count >= 5) done.add("full-automation");
  if (snapshot.v_stage === "V3") done.add("client-revenue");
  if (snapshot.v_stage === "V3" && autonomous >= 8)
    done.add("runa-method-applied");

  return done;
}
