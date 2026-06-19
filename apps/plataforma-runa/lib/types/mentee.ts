export type AgentStatus =
  | "not-started"
  | "training-wheels"
  | "assisted"
  | "autonomous";

export type AgentsSnapshot = {
  ceo: AgentStatus;
  designer: AgentStatus;
  copy: AgentStatus;
  ofertas: AgentStatus;
  comercial: AgentStatus;
  financeiro: AgentStatus;
  projetos: AgentStatus;
  dev: AgentStatus;
};

export const AGENT_LABELS: Record<keyof AgentsSnapshot, string> = {
  ceo: "CEO Neural",
  designer: "Designer Neural",
  copy: "Copy Neural",
  ofertas: "Ofertas Neural",
  comercial: "Comercial & Vendas Neural",
  financeiro: "Financeiro Neural",
  projetos: "Projetos & Produtos Neural",
  dev: "Dev Neural",
};

export const DEFAULT_AGENTS_SNAPSHOT: AgentsSnapshot = {
  ceo: "not-started",
  designer: "not-started",
  copy: "not-started",
  ofertas: "not-started",
  comercial: "not-started",
  financeiro: "not-started",
  projetos: "not-started",
  dev: "not-started",
};

export type VStage = "V1" | "V2" | "V3";

export type Session = {
  id: string;
  mentee_id: string;
  session_number: number;
  title: string;
  session_date: string;
  bunny_video_id: string | null;
  duration_minutes: number | null;
  summary: string | null;
  created_at: string;
};

export type Deliverable = {
  id: string;
  mentee_id: string;
  session_id: string | null;
  title: string;
  type: "prompt" | "template" | "workflow" | "agent" | "doc";
  file_url: string | null;
  description: string | null;
  created_at: string;
};

export type InfrastructureSnapshot = {
  id: string;
  mentee_id: string;
  captured_at: string;
  v_stage: VStage;
  agents: Partial<AgentsSnapshot>;
  tools_count: number;
  automations_count: number;
  notes: string | null;
};
