export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-textPrimary text-2xl font-semibold">Dashboard</h1>
        <p className="text-textMuted text-sm mt-1">Visão geral da plataforma</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Mentorados ativos" value="—" />
        <StatCard label="Sessões este mês" value="—" />
        <StatCard label="Receita total" value="—" />
      </div>

      <div className="bg-surface1 border border-border rounded-lg p-8 text-center">
        <p className="text-textMuted text-sm">
          Funcionalidades do admin serão construídas no Epic 04.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface1 border border-border rounded-lg p-6">
      <p className="text-textMuted text-xs uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className="text-textPrimary text-3xl font-semibold">{value}</p>
    </div>
  );
}
