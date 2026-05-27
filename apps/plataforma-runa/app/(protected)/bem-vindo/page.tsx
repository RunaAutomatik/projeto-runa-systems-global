import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Verifique seu calendário",
    description:
      "Sua primeira sessão já está agendada. Abra seu e-mail e confirme o horário — você receberá o link de videochamada 24h antes.",
  },
  {
    number: "02",
    title: "Baixe o pré-requisito",
    description:
      "Instale o Claude Code antes da primeira sessão. O link e o guia de instalação estão na aba Biblioteca.",
  },
  {
    number: "03",
    title: "Entre no grupo WhatsApp",
    description:
      "O grupo é o canal de suporte entre sessões. Arthur responde dúvidas técnicas lá. O link de convite está no seu e-mail de boas-vindas.",
  },
];

export default function BemVindoPage() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="mb-10">
          <p className="text-muted text-sm font-mono uppercase tracking-widest mb-3">
            RUNA — Bem-vindo
          </p>
          <h1 className="text-3xl font-bold text-text leading-tight">
            Sua jornada começa agora.
          </h1>
          <p className="text-muted mt-3 text-base leading-relaxed">
            Três passos para garantir que sua primeira sessão aconteça sem
            atrito.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-surface-1 border border-border rounded-xl p-5 flex gap-5"
            >
              <span className="text-muted font-mono text-sm shrink-0 pt-0.5">
                {step.number}
              </span>
              <div>
                <p className="text-text font-medium mb-1">{step.title}</p>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/biblioteca"
          className="block w-full text-center bg-accent text-text font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
        >
          Ir para a plataforma
        </Link>
      </div>
    </div>
  );
}
