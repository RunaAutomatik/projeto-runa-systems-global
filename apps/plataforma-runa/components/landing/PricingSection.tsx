import Link from "next/link";

const STATS = [
  { value: "21", label: "sessões" },
  { value: "7", label: "semanas" },
  { value: "8", label: "agentes neurais" },
  { value: "4", label: "módulos técnicos" },
];

const INCLUDES = [
  "3 sessões semanais de 1h30 com Arthur",
  "8 agentes neurais configurados para sua operação",
  "Acesso ao stack completo: Claude Code, Claude.ai, Anti-gravity",
  "Suporte via WhatsApp durante toda a mentoria",
];

export function PricingSection() {
  return (
    <section
      className="bg-surface-2"
      style={{
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
        {/* Left — details */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p
              className="text-accent font-outfit font-semibold text-xs uppercase"
              style={{ letterSpacing: "0.12em" }}
            >
              Investimento
            </p>
            <div className="flex items-baseline gap-3">
              <span
                className="font-mono font-bold text-text leading-none"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
              >
                R$&nbsp;7.000
              </span>
              <span className="text-muted text-sm">pagamento único</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {INCLUDES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span className="text-text text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/planos"
            className="inline-flex items-center self-start font-outfit font-bold px-7 py-3.5 bg-accent text-[#1A2219] rounded-xl hover:brightness-95 transition-all"
            style={{ fontSize: "1rem" }}
          >
            Quero começar
          </Link>
        </div>

        {/* Right — stats grid */}
        <div className="w-full grid grid-cols-2 gap-3">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-surface-1 border border-border rounded-2xl p-5 flex flex-col gap-1"
            >
              <span
                className="font-mono font-bold text-text"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
              >
                {value}
              </span>
              <span className="text-muted text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
