"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Deliverable, Session } from "@/lib/types/mentee";

const DELIVERABLE_TYPES = [
  "prompt",
  "template",
  "workflow",
  "agent",
  "doc",
] as const;

type DeliverableWithSession = Deliverable & {
  sessions: { session_number: number; title: string } | null;
};

interface Props {
  deliverables: DeliverableWithSession[];
  sessions: Session[];
  menteeId: string;
}

interface FormState {
  title: string;
  type: string;
  session_id: string;
  file_url: string;
  description: string;
}

const emptyForm: FormState = {
  title: "",
  type: "doc",
  session_id: "",
  file_url: "",
  description: "",
};

export default function DeliverablesSection({
  deliverables,
  sessions,
  menteeId,
}: Props) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/admin/deliverables", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mentee_id: menteeId,
        title: form.title,
        type: form.type,
        session_id: form.session_id || null,
        file_url: form.file_url || null,
        description: form.description || null,
      }),
    });
    setSaving(false);
    setForm(emptyForm);
    setShowForm(false);
    router.refresh();
  }

  return (
    <div className="space-y-3">
      {deliverables.length === 0 ? (
        <p className="text-muted text-sm">Nenhum entregável ainda.</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted text-left">
              <th className="pb-2 font-medium">Título</th>
              <th className="pb-2 font-medium">Tipo</th>
              <th className="pb-2 font-medium">Sessão</th>
              <th className="pb-2 font-medium">Arquivo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {deliverables.map((d) => (
              <tr key={d.id}>
                <td className="py-2 text-text">{d.title}</td>
                <td className="py-2 text-muted">{d.type}</td>
                <td className="py-2 text-muted">
                  {d.sessions ? `S${d.sessions.session_number}` : "—"}
                </td>
                <td className="py-2">
                  {d.file_url ? (
                    <a
                      href={d.file_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:underline"
                    >
                      Link
                    </a>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showForm ? (
        <form
          onSubmit={submit}
          className="bg-surface-2 border border-border rounded p-4 space-y-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="text-muted text-xs block mb-1">
                Título *
              </label>
              <input
                required
                className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div>
              <label className="text-muted text-xs block mb-1">Tipo</label>
              <select
                className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                {DELIVERABLE_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-muted text-xs block mb-1">
                Sessão (opcional)
              </label>
              <select
                className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none"
                value={form.session_id}
                onChange={(e) =>
                  setForm({ ...form, session_id: e.target.value })
                }
              >
                <option value="">—</option>
                {sessions.map((s) => (
                  <option key={s.id} value={s.id}>
                    S{s.session_number} — {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="text-muted text-xs block mb-1">
                URL do arquivo (opcional)
              </label>
              <input
                className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={form.file_url}
                onChange={(e) => setForm({ ...form, file_url: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div className="col-span-2">
              <label className="text-muted text-xs block mb-1">
                Descrição (opcional)
              </label>
              <input
                className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-accent text-text text-sm px-4 py-2 rounded disabled:opacity-50"
            >
              {saving ? "Salvando…" : "Adicionar"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setForm(emptyForm);
              }}
              className="text-muted text-sm px-4 py-2 rounded hover:text-text"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="text-accent text-sm hover:underline"
        >
          + Adicionar entregável
        </button>
      )}
    </div>
  );
}
