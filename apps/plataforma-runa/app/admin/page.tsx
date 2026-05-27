import { createAdminClient } from "@/lib/supabase/admin";

export default async function AdminDashboard() {
  const supabase = createAdminClient();

  const now = new Date();
  const monthStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
  ).toISOString();
  const monthEnd = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1,
  ).toISOString();

  const [{ count: mentoradosCount }, { count: sessoesCount }] =
    await Promise.all([
      supabase
        .from("profiles")
        .select("*", { count: "exact", head: true })
        .eq("tier", "mentee"),
      supabase
        .from("sessions")
        .select("*", { count: "exact", head: true })
        .gte("session_date", monthStart)
        .lt("session_date", monthEnd),
    ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-text text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted text-sm mt-1">Visão geral da plataforma</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard
          label="Mentorados ativos"
          value={String(mentoradosCount ?? 0)}
        />
        <StatCard label="Sessões este mês" value={String(sessoesCount ?? 0)} />
        <StatCard
          label="Receita total"
          value="R$ —"
          note="integração Stripe — Story 04-7"
        />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="bg-surface-1 border border-border rounded-lg p-6">
      <p className="text-muted text-xs uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className="text-text text-3xl font-semibold">{value}</p>
      {note && <p className="text-muted text-xs mt-2 opacity-60">{note}</p>}
    </div>
  );
}
