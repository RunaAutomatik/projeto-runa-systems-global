"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ContentItem {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  bunny_video_id: string | null;
  tier_required: string;
  category: string | null;
  created_at: string;
}

interface FormState {
  title: string;
  slug: string;
  description: string;
  bunny_video_id: string;
  tier_required: string;
  category: string;
}

const EMPTY_FORM: FormState = {
  title: "",
  slug: "",
  description: "",
  bunny_video_id: "",
  tier_required: "free",
  category: "",
};

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const TIER_BADGE: Record<string, string> = {
  free: "bg-surface-2 text-muted",
  member: "bg-accent/20 text-accent",
  mentee: "bg-accent text-text",
};

export default function ContentList({ items }: { items: ContentItem[] }) {
  const router = useRouter();
  const [mode, setMode] = useState<"list" | "add" | "edit">("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [slugError, setSlugError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function openAdd() {
    setForm(EMPTY_FORM);
    setSlugError(null);
    setEditingId(null);
    setMode("add");
  }

  function openEdit(item: ContentItem) {
    setForm({
      title: item.title,
      slug: item.slug,
      description: item.description ?? "",
      bunny_video_id: item.bunny_video_id ?? "",
      tier_required: item.tier_required,
      category: item.category ?? "",
    });
    setSlugError(null);
    setEditingId(item.id);
    setMode("edit");
  }

  function closeForm() {
    setMode("list");
    setEditingId(null);
    setSlugError(null);
  }

  function handleTitleChange(value: string) {
    setForm((f) => ({
      ...f,
      title: value,
      slug: mode === "add" ? toSlug(value) : f.slug,
    }));
    setSlugError(null);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSlugError(null);

    const body = {
      title: form.title,
      slug: form.slug,
      description: form.description || null,
      bunny_video_id: form.bunny_video_id || null,
      tier_required: form.tier_required,
      category: form.category || null,
    };

    const url =
      mode === "edit"
        ? `/api/admin/content/${editingId}`
        : "/api/admin/content";

    const res = await fetch(url, {
      method: mode === "edit" ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setSubmitting(false);

    if (res.status === 409) {
      setSlugError("Slug já existe");
      return;
    }

    if (res.ok) {
      closeForm();
      router.refresh();
    }
  }

  async function deleteItem(id: string) {
    setDeletingId(id);
    await fetch(`/api/admin/content/${id}`, { method: "DELETE" });
    setDeletingId(null);
    router.refresh();
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        {mode === "list" ? (
          <button
            onClick={openAdd}
            className="bg-accent text-text text-sm px-4 py-2 rounded"
          >
            + Adicionar conteúdo
          </button>
        ) : (
          <button
            onClick={closeForm}
            className="text-muted text-sm hover:text-text"
          >
            ← Cancelar
          </button>
        )}
      </div>

      {mode !== "list" && (
        <form
          onSubmit={submit}
          className="bg-surface-1 border border-border rounded-lg p-6 space-y-4"
        >
          <h2 className="text-text text-sm font-semibold">
            {mode === "add" ? "Novo conteúdo" : "Editar conteúdo"}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-muted text-xs">
                Título <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="w-full bg-surface-2 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-muted text-xs">
                Slug <span className="text-red-500">*</span>
              </label>
              <input
                required
                className={`w-full bg-surface-2 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent text-text ${
                  slugError ? "border-red-500" : "border-border"
                }`}
                value={form.slug}
                onChange={(e) => {
                  setForm((f) => ({ ...f, slug: e.target.value }));
                  setSlugError(null);
                }}
              />
              {slugError && <p className="text-red-500 text-xs">{slugError}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-muted text-xs">Descrição</label>
            <textarea
              rows={3}
              className="w-full bg-surface-2 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-muted text-xs">Bunny Video ID</label>
              <input
                className="w-full bg-surface-2 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={form.bunny_video_id}
                onChange={(e) =>
                  setForm((f) => ({ ...f, bunny_video_id: e.target.value }))
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-muted text-xs">Tier</label>
              <select
                className="w-full bg-surface-2 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={form.tier_required}
                onChange={(e) =>
                  setForm((f) => ({ ...f, tier_required: e.target.value }))
                }
              >
                <option value="free">Free</option>
                <option value="member">Member</option>
                <option value="mentee">Mentee</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-muted text-xs">Categoria</label>
              <input
                className="w-full bg-surface-2 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                value={form.category}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="bg-accent text-text text-sm px-4 py-2 rounded disabled:opacity-50"
            >
              {submitting ? "Salvando…" : mode === "add" ? "Criar" : "Salvar"}
            </button>
          </div>
        </form>
      )}

      {items.length === 0 && mode === "list" ? (
        <div className="bg-surface-1 border border-border rounded-lg p-16 flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center">
            <svg
              className="w-5 h-5 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.069A1 1 0 0121 8.871v6.258a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-center space-y-1">
            <p className="text-text text-sm font-medium">
              Nenhum conteúdo cadastrado
            </p>
            <p className="text-muted text-xs max-w-xs">
              Adicione vídeos, documentos ou materiais para disponibilizar na
              biblioteca dos mentorados.
            </p>
          </div>
          <button
            onClick={() => setMode("add")}
            className="mt-2 text-xs bg-accent text-text px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
          >
            Adicionar conteúdo
          </button>
        </div>
      ) : items.length > 0 ? (
        <div className="bg-surface-1 border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-muted font-medium px-4 py-3">
                  Título
                </th>
                <th className="text-left text-muted font-medium px-4 py-3">
                  Slug
                </th>
                <th className="text-left text-muted font-medium px-4 py-3">
                  Tier
                </th>
                <th className="text-left text-muted font-medium px-4 py-3">
                  Categoria
                </th>
                <th className="text-left text-muted font-medium px-4 py-3">
                  Status
                </th>
                <th className="text-left text-muted font-medium px-4 py-3">
                  Data
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr
                  key={item.id}
                  className={`hover:bg-surface-2 transition-colors ${i < items.length - 1 ? "border-b border-border" : ""}`}
                >
                  <td className="text-text px-4 py-3 font-medium">
                    {item.title}
                  </td>
                  <td className="text-muted px-4 py-3 font-mono text-xs">
                    {item.slug}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-1 rounded ${TIER_BADGE[item.tier_required] ?? TIER_BADGE.free}`}
                    >
                      {item.tier_required}
                    </span>
                  </td>
                  <td className="text-muted px-4 py-3">
                    {item.category ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    {item.bunny_video_id ? (
                      <span className="text-xs px-2 py-1 rounded bg-green-900/40 text-green-400">
                        published
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-1 rounded bg-surface-2 text-muted">
                        draft
                      </span>
                    )}
                  </td>
                  <td className="text-muted px-4 py-3 text-xs">
                    {new Date(item.created_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openEdit(item)}
                        className="text-accent text-xs hover:underline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              `Excluir "${item.title}"? Esta ação não pode ser desfeita.`,
                            )
                          ) {
                            deleteItem(item.id);
                          }
                        }}
                        disabled={deletingId === item.id}
                        className="text-red-500 text-xs hover:underline disabled:opacity-50"
                      >
                        {deletingId === item.id ? "…" : "Excluir"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
