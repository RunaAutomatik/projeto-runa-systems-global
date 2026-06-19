"use client";

import { useState } from "react";

interface Props {
  menteeId: string;
  initialNotes: string;
}

export default function NotesSection({ menteeId, initialNotes }: Props) {
  const [notes, setNotes] = useState(initialNotes);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");

  async function save() {
    setStatus("saving");
    await fetch(`/api/admin/mentees/${menteeId}/notes`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes }),
    });
    setStatus("saved");
    setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="space-y-2">
      <textarea
        className="w-full bg-surface-2 border border-border text-text rounded p-3 text-sm min-h-[120px] resize-y focus:outline-none focus:ring-1 focus:ring-accent"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        onBlur={save}
        placeholder="Notas internas sobre o mentorado..."
      />
      {status === "saving" && (
        <p className="text-muted text-xs">Salvando…</p>
      )}
      {status === "saved" && <p className="text-muted text-xs">Salvo.</p>}
    </div>
  );
}
