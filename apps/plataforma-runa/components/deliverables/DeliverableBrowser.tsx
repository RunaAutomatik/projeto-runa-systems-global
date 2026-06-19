"use client";

import { useMemo, useState } from "react";
import type { Deliverable } from "@/lib/types/mentee";
import { DeliverableCard } from "./DeliverableCard";
import { DeliverableFilters } from "./DeliverableFilters";
import { DeliverableSearch } from "./DeliverableSearch";

type DeliverableWithSession = Deliverable & {
  sessions: { session_number: number; title: string } | null;
};

interface Props {
  deliverables: DeliverableWithSession[];
}

export function DeliverableBrowser({ deliverables }: Props) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<Deliverable["type"] | "all">(
    "all",
  );
  const [sessionFilter, setSessionFilter] = useState<number | "all">("all");

  const sessionOptions = useMemo(() => {
    const seen = new Map<number, string>();
    for (const d of deliverables) {
      if (d.sessions) {
        const { session_number, title } = d.sessions;
        if (!seen.has(session_number)) {
          seen.set(session_number, title);
        }
      }
    }
    return Array.from(seen.entries())
      .sort(([a], [b]) => a - b)
      .map(([number, title]) => ({
        number,
        label: `Sessão ${String(number).padStart(2, "0")} — ${title}`,
      }));
  }, [deliverables]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return deliverables.filter((d) => {
      if (typeFilter !== "all" && d.type !== typeFilter) return false;
      if (
        sessionFilter !== "all" &&
        d.sessions?.session_number !== sessionFilter
      )
        return false;
      if (q && !d.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [deliverables, typeFilter, sessionFilter, search]);

  return (
    <div className="space-y-5">
      <DeliverableSearch value={search} onChange={setSearch} />
      <DeliverableFilters
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        sessionFilter={sessionFilter}
        onSessionChange={setSessionFilter}
        sessionOptions={sessionOptions}
      />

      {filtered.length === 0 ? (
        <p className="text-muted text-sm py-8 text-center">
          Nenhum entregável encontrado.
        </p>
      ) : (
        <div className="space-y-2">
          {filtered.map((d) => {
            const sessionLabel = d.sessions
              ? `Sessão ${String(d.sessions.session_number).padStart(2, "0")}`
              : undefined;
            return (
              <DeliverableCard
                key={d.id}
                deliverable={d}
                sessionLabel={sessionLabel}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
