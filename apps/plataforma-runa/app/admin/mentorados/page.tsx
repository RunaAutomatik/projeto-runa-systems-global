import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export default async function AdminMentoradosPage() {
  const supabase = createAdminClient();

  const { data: mentees } = await supabase
    .from("profiles")
    .select("id, full_name, email, tier, mentee_slug")
    .eq("tier", "mentee")
    .order("full_name");

  const menteeIds = (mentees ?? []).map((m) => m.id);

  const { data: sessions } =
    menteeIds.length > 0
      ? await supabase
          .from("sessions")
          .select("mentee_id, session_number, session_date, bunny_video_id")
          .in("mentee_id", menteeIds)
      : { data: [] };

  const sessionsByMentee = (sessions ?? []).reduce<
    Record<
      string,
      {
        mentee_id: string;
        session_number: number;
        session_date: string | null;
        bunny_video_id: string | null;
      }[]
    >
  >((acc, s) => {
    if (!acc[s.mentee_id]) acc[s.mentee_id] = [];
    acc[s.mentee_id].push(s);
    return acc;
  }, {});

  const rows = (mentees ?? []).map((mentee) => {
    const mSessions = sessionsByMentee[mentee.id] ?? [];
    const completedCount = mSessions.filter(
      (s) => s.bunny_video_id !== null,
    ).length;
    const nextSession = mSessions
      .filter((s) => s.bunny_video_id === null && s.session_date !== null)
      .sort((a, b) => a.session_number - b.session_number)[0];
    return { ...mentee, completedCount, nextSession: nextSession ?? null };
  });

  if (rows.length === 0) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-text text-2xl font-semibold">Mentorados</h1>
          <p className="text-muted text-sm mt-1">0 mentorado(s) ativo(s)</p>
        </div>
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="text-center space-y-1">
            <p className="text-text text-sm font-medium">
              Nenhum mentorado ativo
            </p>
            <p className="text-muted text-xs max-w-xs">
              Configure o Stripe para começar a aceitar pagamentos e registrar
              mentorados.
            </p>
          </div>
          <Link
            href="/planos"
            className="mt-2 text-xs bg-accent text-text px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
          >
            Configurar pagamentos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-text text-2xl font-semibold">Mentorados</h1>
        <p className="text-muted text-sm mt-1">
          {rows.length} mentorado(s) ativo(s)
        </p>
      </div>

      <div className="bg-surface-1 border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-muted font-medium px-4 py-3">
                Nome
              </th>
              <th className="text-left text-muted font-medium px-4 py-3">
                Email
              </th>
              <th className="text-left text-muted font-medium px-4 py-3">
                Sessões completadas
              </th>
              <th className="text-left text-muted font-medium px-4 py-3">
                Próxima sessão
              </th>
              <th className="text-left text-muted font-medium px-4 py-3">
                Tier
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.id}
                className={`hover:bg-surface-2 transition-colors ${i < rows.length - 1 ? "border-b border-border" : ""}`}
              >
                <td className="text-text px-4 py-3">{row.full_name}</td>
                <td className="text-muted px-4 py-3">{row.email}</td>
                <td className="text-text px-4 py-3">{row.completedCount}</td>
                <td className="text-muted px-4 py-3">
                  {row.nextSession
                    ? new Date(
                        row.nextSession.session_date!,
                      ).toLocaleDateString("pt-BR")
                    : "—"}
                </td>
                <td className="px-4 py-3">
                  <span className="bg-accent text-text text-xs px-2 py-1 rounded">
                    {row.tier}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/mentorados/${row.id}`}
                    className="text-accent hover:underline text-xs"
                  >
                    Gerenciar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
