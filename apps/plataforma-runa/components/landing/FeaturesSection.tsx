type Feature = {
  label: string;
  headline: string;
  body: string;
  visual: React.ReactNode;
  flip: boolean;
};

const AGENTS = [
  "CEO Neural",
  "Designer Neural",
  "Copy Neural",
  "Ofertas Neural",
  "Comercial Neural",
  "Financeiro Neural",
  "Projetos Neural",
  "Dev Neural",
];

const MODULES = [
  "Claude.ai — parceiro estratégico",
  "Claude.ai — modo co-criação",
  "Claude Code — orquestração terminal",
  "Anti-gravity — agentes em produção",
];

const METHOD_ITEMS = [
  "Diagnóstico e mapeamento de operação",
  "Construção dos 8 agentes neurais",
  "Integração com ferramentas existentes",
  "Entrega e autonomia total",
];

function AgentsVisual() {
  return (
    <div className="bg-surface-1 border border-border rounded-2xl p-5 flex flex-col gap-3">
      <p
        className="font-mono text-muted text-xs"
        style={{ letterSpacing: "0.06em" }}
      >
        SQUAD / 8 AGENTES
      </p>
      <div className="grid grid-cols-2 gap-2">
        {AGENTS.map((name) => (
          <div
            key={name}
            className="bg-surface-2 border border-border rounded-lg px-3 py-2 text-xs text-text font-outfit font-medium"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function ModulesVisual() {
  return (
    <div className="bg-surface-1 border border-border rounded-2xl p-5 flex flex-col gap-3">
      <p
        className="font-mono text-muted text-xs"
        style={{ letterSpacing: "0.06em" }}
      >
        MÓDULOS TÉCNICOS / 4
      </p>
      <div className="flex flex-col gap-2">
        {MODULES.map((mod, i) => (
          <div
            key={mod}
            className="flex items-center gap-3 bg-surface-2 border border-border rounded-lg px-3 py-2.5"
          >
            <span className="font-mono text-accent text-xs w-5 flex-shrink-0">{`0${i + 1}`}</span>
            <span className="text-text text-xs font-outfit">{mod}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MethodVisual() {
  return (
    <div className="bg-surface-1 border border-border rounded-2xl p-5 flex flex-col gap-3">
      <p
        className="font-mono text-muted text-xs"
        style={{ letterSpacing: "0.06em" }}
      >
        METODOLOGIA RUNA
      </p>
      <div className="flex flex-col gap-2.5">
        {METHOD_ITEMS.map((item) => (
          <div key={item} className="flex items-start gap-2.5">
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
              style={{ backgroundColor: "var(--accent-tech)" }}
            />
            <span className="text-text text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    label: "Squad neural",
    headline: "8 agentes especializados na sua operação.",
    body: "Cada agente cobre uma função crítica do negócio — de estratégia e vendas até desenvolvimento e finanças. Não são prompts. São agentes com memória, contexto e autonomia.",
    visual: <AgentsVisual />,
    flip: false,
  },
  {
    label: "Tecnologia aplicada",
    headline: "Domine as ferramentas que separam o amador do profissional.",
    body: "Claude Code, Claude.ai e Anti-gravity — o mesmo stack que a Anthropic usa internamente. Você aprende no ambiente real, não em simuladores.",
    visual: <ModulesVisual />,
    flip: true,
  },
  {
    label: "Método",
    headline: "Construção do sistema, não entrega de conteúdo.",
    body: "Cada sessão avança um bloco concreto da sua operação. Ao final das 7 semanas, você tem um sistema funcionando — não slides sobre inteligência artificial.",
    visual: <MethodVisual />,
    flip: false,
  },
];

export function FeaturesSection() {
  return (
    <section
      className="max-w-[1320px] mx-auto"
      style={{
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
    >
      <div className="flex flex-col" style={{ gap: "clamp(4rem, 8vw, 6rem)" }}>
        {FEATURES.map((f) => (
          <FeatureRow key={f.label} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ label, headline, body, visual, flip }: Feature) {
  return (
    <div
      className={`flex flex-col ${
        flip
          ? "lg:grid lg:grid-cols-[2fr_3fr]"
          : "lg:grid lg:grid-cols-[3fr_2fr]"
      } gap-10 lg:gap-16 items-center`}
    >
      <div className={`flex flex-col gap-5 ${flip ? "lg:order-2" : ""}`}>
        <p
          className="text-accent font-outfit font-semibold text-xs uppercase"
          style={{ letterSpacing: "0.12em" }}
        >
          {label}
        </p>
        <h2
          className="font-outfit font-bold text-text leading-[1.1]"
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            letterSpacing: "-0.025em",
          }}
        >
          {headline}
        </h2>
        <p className="text-muted leading-relaxed" style={{ maxWidth: "48ch" }}>
          {body}
        </p>
      </div>
      <div className={flip ? "lg:order-1" : ""}>{visual}</div>
    </div>
  );
}
