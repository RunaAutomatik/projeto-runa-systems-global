import CheckoutButton from "./_components/CheckoutButton";

export const dynamic = "force-dynamic";

export default async function PlanosPage({
  searchParams,
}: {
  searchParams: Promise<{ upgrade?: string }>;
}) {
  const { upgrade } = await searchParams;
  const isUpgradeFlow = upgrade === "mentee";

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {isUpgradeFlow && (
          <div className="mb-8 p-4 bg-surface-1 border border-border rounded-lg text-sm text-muted">
            Este conteúdo é exclusivo para mentorados RUNA.
          </div>
        )}

        <div className="text-center mb-12">
          <h1 className="text-text text-3xl font-semibold mb-3">
            RUNA Mentoria
          </h1>
          <p className="text-muted">
            Reestruturação completa do seu negócio com IA — em 7 semanas.
          </p>
        </div>

        <div className="bg-surface-1 border border-border rounded-xl p-8 mb-8">
          <div className="mb-6">
            <p className="text-muted text-sm mb-1">Investimento</p>
            <p className="text-text text-4xl font-semibold">R$ 7.000</p>
            <p className="text-muted text-sm mt-1">pagamento único</p>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "21 sessões ao longo de 7 semanas",
              "3 encontros por semana, 1h30 cada",
              "8 Agentes Neurais configurados no seu negócio",
              "Acesso completo à Biblioteca RUNA",
              "Suporte via WhatsApp durante a mentoria",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted text-sm"
              >
                <span className="text-text mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>

          <CheckoutButton />
        </div>

        <div className="bg-surface-1 border border-border rounded-xl p-6">
          <p className="text-muted text-xs uppercase tracking-wide mb-4">
            O que mentorados têm acesso
          </p>
          <div className="space-y-2">
            {[
              { label: "Sessões registradas", value: "21" },
              { label: "Agentes configurados", value: "8" },
              { label: "Recursos na biblioteca", value: "Todos" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between text-sm">
                <span className="text-muted">{item.label}</span>
                <span className="text-text font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
