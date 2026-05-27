"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import type { Session } from "@/lib/types/mentee";
import VideoUploader from "@/components/admin/video-uploader";

interface Props {
  sessions: Session[];
  menteeSlug: string | null;
}

interface EditState {
  title: string;
  session_date: string;
  duration_minutes: string;
  summary: string;
  bunny_video_id: string;
}

function sessionToEdit(s: Session): EditState {
  return {
    title: s.title ?? "",
    session_date: s.session_date ?? "",
    duration_minutes: s.duration_minutes?.toString() ?? "",
    summary: s.summary ?? "",
    bunny_video_id: s.bunny_video_id ?? "",
  };
}

export default function SessionsSection({ sessions, menteeSlug }: Props) {
  const router = useRouter();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<EditState>({
    title: "",
    session_date: "",
    duration_minutes: "",
    summary: "",
    bunny_video_id: "",
  });
  const [saving, setSaving] = useState(false);
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  function startEdit(s: Session) {
    setEditingId(s.id);
    setForm(sessionToEdit(s));
  }

  function cancelEdit() {
    setEditingId(null);
  }

  async function save(sessionId: string) {
    setSaving(true);
    await fetch(`/api/admin/sessions/${sessionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: form.title || null,
        session_date: form.session_date || null,
        duration_minutes: form.duration_minutes
          ? parseInt(form.duration_minutes, 10)
          : null,
        summary: form.summary || null,
        bunny_video_id: form.bunny_video_id || null,
      }),
    });
    setSaving(false);
    setEditingId(null);
    router.refresh();
  }

  if (sessions.length === 0) {
    return <p className="text-muted text-sm">Nenhuma sessão registrada.</p>;
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-muted text-left">
          <th className="pb-2 font-medium w-8">#</th>
          <th className="pb-2 font-medium">Título</th>
          <th className="pb-2 font-medium">Data</th>
          <th className="pb-2 font-medium">Min</th>
          <th className="pb-2 font-medium text-center">Vídeo</th>
          <th className="pb-2 font-medium" />
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {sessions.map((s) => (
          <Fragment key={s.id}>
            <tr>
              <td className="py-2 text-muted">
                {menteeSlug ? (
                  <a
                    href={`/${menteeSlug}/sessoes/${s.session_number}`}
                    className="text-accent hover:underline"
                  >
                    {s.session_number}
                  </a>
                ) : (
                  s.session_number
                )}
              </td>
              <td className="py-2 text-text">{s.title ?? "—"}</td>
              <td className="py-2 text-muted">
                {s.session_date
                  ? new Date(s.session_date).toLocaleDateString("pt-BR")
                  : "—"}
              </td>
              <td className="py-2 text-muted">
                {s.duration_minutes ?? "—"}
              </td>
              <td className="py-2 text-center">
                {s.bunny_video_id ? (
                  <span className="text-accent">✓</span>
                ) : uploadingId === s.id ? (
                  <button
                    onClick={() => setUploadingId(null)}
                    className="text-muted text-xs hover:text-text"
                  >
                    Fechar
                  </button>
                ) : (
                  <button
                    onClick={() => setUploadingId(s.id)}
                    className="text-muted text-xs hover:text-text"
                  >
                    Upload ↑
                  </button>
                )}
              </td>
              <td className="py-2 text-right">
                <button
                  onClick={() =>
                    editingId === s.id ? cancelEdit() : startEdit(s)
                  }
                  className="text-muted text-xs hover:text-text"
                >
                  {editingId === s.id ? "Cancelar" : "Editar"}
                </button>
              </td>
            </tr>
            {uploadingId === s.id && (
              <tr>
                <td colSpan={6} className="py-3 pb-4">
                  <div className="bg-surface-2 border border-border rounded p-4">
                    <VideoUploader
                      sessionId={s.id}
                      sessionTitle={s.title ?? ""}
                      onSuccess={() => {
                        setUploadingId(null);
                        router.refresh();
                      }}
                    />
                  </div>
                </td>
              </tr>
            )}
            {editingId === s.id && (
              <tr>
                <td colSpan={6} className="py-3 pb-4">
                  <div className="bg-surface-2 border border-border rounded p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2">
                        <label className="text-muted text-xs block mb-1">
                          Título
                        </label>
                        <input
                          className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                          value={form.title}
                          onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-muted text-xs block mb-1">
                          Data
                        </label>
                        <input
                          type="date"
                          className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                          value={form.session_date}
                          onChange={(e) =>
                            setForm({ ...form, session_date: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-muted text-xs block mb-1">
                          Duração (min)
                        </label>
                        <input
                          type="number"
                          className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                          value={form.duration_minutes}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              duration_minutes: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="text-muted text-xs block mb-1">
                          Bunny Video ID
                        </label>
                        <input
                          className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                          value={form.bunny_video_id}
                          onChange={(e) =>
                            setForm({ ...form, bunny_video_id: e.target.value })
                          }
                          placeholder="uuid do vídeo no Bunny.net"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="text-muted text-xs block mb-1">
                          Resumo
                        </label>
                        <textarea
                          className="w-full bg-surface-1 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                          rows={3}
                          value={form.summary}
                          onChange={(e) =>
                            setForm({ ...form, summary: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => save(s.id)}
                      disabled={saving}
                      className="bg-accent text-text text-sm px-4 py-2 rounded disabled:opacity-50"
                    >
                      {saving ? "Salvando…" : "Salvar"}
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
