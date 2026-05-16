import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

// Load .env.local manually — tsx doesn't use Next.js loader
const envFile = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf-8").split("\n")) {
    const eq = line.indexOf("=");
    if (eq > 0 && !line.startsWith("#")) {
      const key = line.slice(0, eq).trim();
      const val = line.slice(eq + 1).trim();
      if (key && !(key in process.env)) process.env[key] = val;
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(url, key);
const contentDir = path.join(process.cwd(), "seeds", "content");

// ─── Embedded content for SÍRIOS-sourced items ───────────────────────────────

const claudeCodeGuide = `# Claude Code — Guia Completo

> Skills instaladas via repositório Claude Code. Ative manualmente conforme necessário.

---

## Configuração do Ambiente

### \`/update-config\` — Configurar hooks e permissões

Configura comportamentos automatizados do Claude Code via \`settings.json\`.
Usado para hooks do tipo "sempre que X acontecer, faça Y".

**Casos de uso:**
- Notificação Windows quando Claude termina de responder
- Hook de pre-commit automático
- Permissões por ferramenta (npm, bash, etc.)
- Variáveis de ambiente para a sessão

**Quando NÃO usar:** Preferências simples de tema → usar Config tool diretamente.

---

### \`/keybindings-help\` — Customizar atalhos de teclado

Modifica \`~/.claude/keybindings.json\` para criar chord bindings e rebindings customizados.

**Casos de uso:** Rebindar tecla de submit, criar atalho para ativar agentes com chord.

---

## Utilitários de Código

### \`/simplify\` — Simplificar código após mudanças

Revisa o delta da sessão e corrige qualidade sem refatoração desnecessária.

**Quando usar:** Após implementar qualquer feature, antes do commit.

---

### \`/loop [intervalo] [tarefa]\` — Tarefa recorrente na sessão

Executa um prompt ou skill em intervalos regulares durante a sessão atual.

\`\`\`
/loop 5m /foo        # roda /foo a cada 5 minutos
/loop                # usa intervalo padrão de 10 minutos
\`\`\`

**Casos de uso:** Monitorar build, verificar output de worker enquanto processa.

**Quando NÃO usar:** Tarefas que precisam persistir entre sessões → usar \`/schedule\`.

---

### \`/schedule\` — Agentes remotos agendados

Cria agentes com agenda cron que rodam fora da sessão atual.

**Casos de uso:** Geração semanal de briefing, relatório quinzenal de mercado via ALEX,
check diário de leads via HERMES.

---

## Integração com API Anthropic

### \`/claude-api\` — Construir apps com Claude API

Ativado automaticamente quando código importa \`anthropic\` / \`@anthropic-ai/sdk\`.

Cobre: tool use, streaming, Claude Agent SDK, padrões de integração.

**Quando NÃO usar:** Código que importa \`openai\` ou outro SDK.

---

## Extração de Conteúdo

### \`/defuddle\` — Extrair conteúdo limpo de URLs

Remove boilerplate, ads e navegação de páginas web. Retorna apenas o conteúdo essencial.

**Casos de uso:** Pesquisa de mercado, extração de artigos para análise, scraping limpo.

---

## Design (Stitch)

### \`/taste-design\` → \`/stitch-design\` → \`/stitch-loop\`

Pipeline de design UI gerado por IA:
1. \`taste-design\` — gera \`DESIGN.md\` com sistema anti-genérico
2. \`stitch-design\` — gera telas específicas (requer StitchMCP)
3. \`stitch-loop\` — build autônomo multi-página via baton system

**Agente primário:** \`@ux-design-expert\` (Uma). \`@dev\` usa \`stitch-loop\` apenas.

---

## Memória Automática

Claude Code mantém memória persistente por projeto em \`~/.claude/projects/\`.
Tipos: \`user\` | \`feedback\` | \`project\` | \`reference\`.

A memória é lida automaticamente no início de cada sessão via \`MEMORY.md\`.
`;

const aiox = `# AIOX — Orquestração de Agentes

> Ativação: \`@nome-do-agente\` ou \`/AIOX:agents:nome-do-agente\`
> 10 agentes especializados + 1 master. Cada agente tem persona, comandos \`*\` e escopo exclusivo.

---

## @aiox-master — Orion (Master)

**Ativação:** \`@aiox-master\`
**Escopo:** Executa qualquer task diretamente. Governance constitucional. Override de agent boundaries.
**Comandos:** \`*task\` | \`*workflow\` | \`*create-doc\` | \`*kb\` | \`*status\` | \`*guide\`

---

## @dev — Dex (Implementação)

**Ativação:** \`@dev\`
**Escopo:** Código — features, bugs, refatoração, UI, integrações, stories.
**Comandos:** \`*develop <story>\` | \`*task <nome>\`
**Autoridades exclusivas:** \`git add/commit/branch/merge\`
**Bloqueado:** \`git push\` (delegar para @devops)

---

## @qa — Quinn (Qualidade)

**Ativação:** \`@qa\`
**Escopo:** Testes, revisão de código, QA gate, validação antes de merge/deploy.
**Comandos:** \`*qa-gate <story>\` | \`*qa-loop <story>\` | \`*review\`

---

## @architect — Aria (Arquitetura)

**Ativação:** \`@architect\`
**Escopo:** Decisões de arquitetura, seleção de tecnologia, design de sistema, padrões.
**Comandos:** \`*design <sistema>\` | \`*assess <complexidade>\`

---

## @pm — Morgan (Product Management)

**Ativação:** \`@pm\`
**Escopo:** Orchestração de epics, levantamento de requisitos, Spec Pipeline, roadmap.
**Comandos:** \`*create-epic\` | \`*execute-epic\` | \`*spec-pipeline\`
**Autoridades exclusivas:** Epic execution, EPIC-{ID}-EXECUTION.yaml

---

## @po — Pax (Product Owner)

**Ativação:** \`@po\`
**Escopo:** Validação de stories (checklist 10 pontos), priorização de backlog.
**Comandos:** \`*validate-story-draft <story-id>\` | \`*prioritize\`
**Autoridades exclusivas:** \`*validate-story-draft\` — único agente que valida stories.

---

## @sm — River (Scrum Master)

**Ativação:** \`@sm\`
**Escopo:** Criação de stories a partir de epics/PRDs, decomposição de tarefas.
**Comandos:** \`*draft <epic-id>\` | \`*create-story\`
**Autoridades exclusivas:** Criação de stories (\`*draft\`)

---

## @analyst — Alex (Pesquisa)

**Ativação:** \`@analyst\`
**Escopo:** Pesquisa de mercado, análise de concorrentes, RAG pipeline, transcrição.
**Comandos:** \`*research <topic>\` | \`*analyze\`
**Skills:** \`ai-rag-pipeline\`, \`web-search\`, \`speech-to-text\`

---

## @data-engineer — Dara (Database)

**Ativação:** \`@data-engineer\`
**Escopo:** Schema design (DDL), queries, RLS policies, índices, migrações.
**Delegado de:** \`@architect\` (que decide a tecnologia)
**Bloqueado:** Código de aplicação, frontend, git operations

---

## @devops — Gage (CI/CD — EXCLUSIVO)

**Ativação:** \`@devops\`
**Escopo:** Git push, PRs, CI/CD, MCP management, releases.
**Autoridades exclusivas:** \`git push\`, \`gh pr create/merge\`, MCP add/remove/configure
**Regra:** Nenhum outro agente pode fazer \`git push\` ou criar PRs.

---

## @ux-design-expert — Uma (UX/UI)

**Ativação:** \`@ux-design-expert\`
**Escopo:** Design de telas, sistemas de design, audit de qualidade visual.
**Skills primárias:** \`taste-design\`, \`stitch-design\`, \`impeccable\`

---

## Fluxo Padrão de Story

\`\`\`
@sm *draft → @po *validate → @dev *develop → @qa *qa-gate → @devops *push
\`\`\`

## Fluxo de Epic

\`\`\`
@pm *create-epic → @pm *execute-epic → @sm *draft (por story)
\`\`\`
`;

const workerProtocol = `# Worker Deployment Protocol — Bike Method

> Todo worker no ecossistema RUNA SYSTEMS deve passar por 4 fases de maturidade
> antes de operar de forma autônoma. Nenhum worker nasce na Fase 4.

---

## As 4 Fases

### Fase 1 — Training Wheels

**Definição:** Cada output é revisado por um humano antes de chegar ao destino.

**Threshold para avançar:**

| Tipo de worker | N outputs aprovados |
|---------------|---------------------|
| Conteúdo (carousel, caption, post) | 10 consecutivos |
| Client-facing (DM, email, proposta) | 15 consecutivos |
| Data (database writes, migrações) | 20 consecutivos |
| Publicação (Instagram, social) | 10 consecutivos |

**O que conta como "aprovado":** Output enviado/publicado sem modificação ou com apenas
ajustes menores de redação (não mudanças estruturais).

**O que zera o contador:** Qualquer output que exigiu mudança estrutural, causou
reclamação, ou foi rejeitado.

---

### Fase 2 — Guided

**Definição:** Humano revisa 1 a cada 5 outputs. Os outros 4 vão direto ao destino.

**Cadência de revisão:** Sampling aleatório — 20% dos outputs.

**Threshold para avançar:** 7 dias consecutivos sem issues encontrados nos samples.

**O que reseta o timer:** Qualquer output amostrado com issue — contador de 7 dias reinicia.

---

### Fase 3 — Watched

**Definição:** Worker opera autonomamente. Humano revisa relatório semanal de KPIs
e intervém apenas em exceções.

**Relatório semanal deve incluir:**
- Volume: outputs produzidos na semana
- Taxa de sucesso: % que chegou ao destino sem flags
- Erros: falhas, timeouts, outputs flagados
- Drift: outputs que pareceram fora do padrão da marca

**Threshold para avançar:** 30 dias consecutivos sem intervenções.

---

### Fase 4 — Hands-Off

**Definição:** Worker opera autonomamente. Humano monitora apenas se KPI cair.
Kill Switch ativo e documentado.

**Kill Switch obrigatório:** Todo worker Fase 4 deve ter critérios de ativação documentados
e responsável definido (@devops).

---

## Kill Switch — Critérios de Ativação

Qualquer um destes critérios ativa o Kill Switch:
- Inatividade > 30 dias
- Sem KPI definido ou monitorado
- Sem owner designado
- Custo > benefício documentado
- Taxa de falha > 10%
- Supersedido por solução melhor

**Autoridade de revisão:** @devops — SLA de 48h para avaliação.

---

## Workers Ativos (status atual)

| Worker | Porta | Fase | Critério de avanço |
|--------|-------|------|-------------------|
| instagram-worker | :3000 | Fase 1 | 10 publicações aprovadas consecutivas |
| content-worker | :3001 | Fase 1 | 10 exports de carousel aprovados consecutivos |

---

## Frontmatter Obrigatório

Todo documento de worker deve incluir:

\`\`\`yaml
bike-method-phase: 1
phase-updated: YYYY-MM-DD
phase-advance-criteria: "N outputs aprovados sem intervenção"
kill-switch:
  criteria: "..."
  activator: "@devops"
\`\`\`
`;

// ─── Seed items ───────────────────────────────────────────────────────────────

const now = new Date().toISOString();

const items = [
  {
    slug: "claude-code-guia-completo",
    title: "Claude Code — Guia Completo",
    description:
      "Capacidades nativas do Claude Code: hooks, atalhos, skills e integração com API Anthropic.",
    type: "skill",
    tier_required: "free",
    content_markdown: claudeCodeGuide,
    published_at: now,
  },
  {
    slug: "mapeando-o-negocio",
    title: "Mapeando o Negócio",
    description:
      "Worksheet para mapear funções do negócio e identificar o que delegar, automatizar ou eliminar.",
    type: "prompt",
    tier_required: "free",
    content_markdown: fs.readFileSync(
      path.join(contentDir, "mapeando-o-negocio.md"),
      "utf-8",
    ),
    published_at: now,
  },
  {
    slug: "prompt-transferencia-de-memoria",
    title: "Prompt Transferência de Memória",
    description:
      "Prompt para exportar e transferir contexto entre sessões do Claude.",
    type: "prompt",
    tier_required: "free",
    content_markdown: fs.readFileSync(
      path.join(contentDir, "prompt-transferencia-de-memoria.md"),
      "utf-8",
    ),
    published_at: now,
  },
  {
    slug: "aiox-orquestracao-de-agentes",
    title: "AIOX — Orquestração de Agentes",
    description:
      "Sistema completo de 11 agentes especializados: ativação, comandos, autoridades e fluxos.",
    type: "skill",
    tier_required: "mentee",
    content_markdown: aiox,
    published_at: now,
  },
  {
    slug: "worker-deployment-protocol",
    title: "Worker Deployment Protocol",
    description:
      "Protocolo Bike Method: 4 fases de maturidade para workers autônomos no ecossistema RUNA.",
    type: "template",
    tier_required: "mentee",
    content_markdown: workerProtocol,
    published_at: now,
  },
];

async function seed() {
  console.log(`Seeding ${items.length} content items...`);

  const { data, error } = await supabase
    .from("content_items")
    .upsert(items, { onConflict: "slug" })
    .select("slug, tier_required");

  if (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }

  for (const item of data ?? []) {
    console.log(`  ✓ ${item.slug} [${item.tier_required}]`);
  }
  console.log("Done.");
}

seed();
