import {
  AGENT_LABELS,
  type AgentsSnapshot,
  type AgentStatus,
} from "@/lib/types/mentee";
import { AgentCard } from "./AgentCard";

interface Props {
  agents: Partial<AgentsSnapshot>;
}

const AGENT_KEYS = Object.keys(AGENT_LABELS) as (keyof AgentsSnapshot)[];

const VALID_STATUSES = new Set<AgentStatus>([
  "not-started",
  "training-wheels",
  "assisted",
  "autonomous",
]);

function toAgentStatus(raw: unknown): AgentStatus {
  return typeof raw === "string" && VALID_STATUSES.has(raw as AgentStatus)
    ? (raw as AgentStatus)
    : "not-started";
}

export function SquadGrid({ agents }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {AGENT_KEYS.map((key) => (
        <AgentCard
          key={key}
          name={AGENT_LABELS[key]}
          status={toAgentStatus(agents[key])}
        />
      ))}
    </div>
  );
}
