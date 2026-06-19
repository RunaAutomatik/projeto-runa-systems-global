import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="max-w-[1320px] mx-auto"
      style={{
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
        {/* Left — headline + CTA */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p
              className="text-accent font-outfit font-semibold text-sm uppercase"
              style={{ letterSpacing: "0.12em" }}
            >
              Mentoria de Alto Desempenho
            </p>
            <h1
              className="font-outfit font-bold text-text leading-[1.05]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Reconstrua sua operação com inteligência artificial.
            </h1>
            <p
              className="text-muted leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                maxWidth: "52ch",
              }}
            >
              21 sessões. 7 semanas. Um sistema operacional completo para seu
              negócio — com 8 agentes neurais trabalhando junto com você.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/planos"
              className="inline-flex items-center font-outfit font-bold px-7 py-3.5 bg-accent text-[#1A2219] rounded-xl hover:brightness-95 transition-all"
              style={{ fontSize: "1rem" }}
            >
              Ver planos e condições
            </Link>
            <p className="text-muted text-sm">A partir de R$&nbsp;7.000</p>
          </div>
        </div>

        {/* Right — session grid visual */}
        <div className="w-full lg:pt-2">
          <SessionGrid />
        </div>
      </div>
    </section>
  );
}

function SessionGrid() {
  return (
    <div className="bg-surface-1 border border-border rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="font-outfit font-semibold text-text text-sm">
          Jornada — 21 sessões
        </p>
        <span
          className="text-accent-tech font-mono text-xs"
          style={{ letterSpacing: "0.04em" }}
        >
          7 semanas
        </span>
      </div>

      {/* 21 session dots in 7 columns × 3 rows */}
      <div className="grid grid-cols-7 gap-2.5">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-full border border-border transition-colors"
            style={{
              backgroundColor:
                i < 3
                  ? "var(--accent)"
                  : i < 7
                    ? "var(--accent-soft)"
                    : "var(--surface-2)",
            }}
          />
        ))}
      </div>

      {/* Week labels */}
      <div className="flex justify-between">
        {["S1", "S2", "S3", "S4", "S5", "S6", "S7"].map((week) => (
          <span
            key={week}
            className="text-muted font-mono text-xs w-[calc(100%/7)] text-center"
          >
            {week}
          </span>
        ))}
      </div>

      <div className="border-t border-border pt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2.5 text-sm text-muted">
          <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
          <span>3 sessões por semana · 1h30 cada</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-muted">
          <div
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: "var(--accent-tech)" }}
          />
          <span>8 agentes neurais ativos</span>
        </div>
      </div>
    </div>
  );
}
