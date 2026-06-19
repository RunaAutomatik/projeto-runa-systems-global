---
date: 2026-04-10
tags: [skills, gstack, dev, qa, browser, review, planning, workflow]
project: runa-systems-global
type: skill-doc
---

# Skills gstack — Virtual Engineering Team por Garry Tan

> **gstack** é um toolkit de 23 skills criado por Garry Tan (CEO do Y Combinator) que transforma Claude Code em um time de engenharia virtual.
> Resultado declarado: **600k+ linhas de código em 60 dias** (part-time).
> Instalado em: `~/.claude/skills/gstack/`
> Repo: https://github.com/garrytan/gstack

---

## Por que existe

Garry Tan codificou publicamente em 2026 mais do que em 2013 (quando construiu o Bookface, o sistema interno do YC). A diferença não foi habilidade — foi tooling estruturado.

O gstack organiza o desenvolvimento em um sprint de 7 fases: **Think → Plan → Build → Review → Test → Ship → Reflect**. Cada skill alimenta a próxima, criando um workflow integrado em vez de ferramentas isoladas.

**Filosofia central (ETHOS.md):**
- **Boil the Lake** — quando IA torna completude barata, faça a coisa completa
- **Search Before Building** — pesquise antes de construir (não reinvente)
- **User Sovereignty** — IA recomenda, humano decide (regra inegociável)
- **Build for Yourself** — as melhores ferramentas resolvem problemas reais

---

## As 23 Skills por Categoria

### Estratégia e Planejamento

| Skill | Comando | O que faz |
|-------|---------|-----------|
| **office-hours** | `/office-hours` | Interrogatório de produto no estilo YC — valida ideias antes de codar |
| **autoplan** | `/autoplan` | Pipeline de 4 reviews automáticos (CEO→Design→Eng→DX) sem interrupções |
| **plan-ceo-review** | `/plan-ceo-review` | Review estratégico de escopo e premissas |
| **plan-eng-review** | `/plan-eng-review` | Validação de arquitetura e debt técnico |
| **plan-design-review** | `/plan-design-review` | Revisão de design antes de implementar |
| **plan-devex-review** | `/plan-devex-review` | Revisão de developer experience |

### Desenvolvimento

| Skill | Comando | O que faz |
|-------|---------|-----------|
| **pair-agent** | `/pair-agent` | Compartilha browser entre múltiplos agentes IA (Claude + Codex + Cursor) |
| **codex** | `/codex` | Segunda opinião via OpenAI Codex em paralelo ao Claude |
| **careful** | `/careful` | Execução lenta e cuidadosa de tasks de alto risco |
| **checkpoint** | `/checkpoint` | Salva ponto de restauração antes de mudanças destrutivas |

### Design

| Skill | Comando | O que faz |
|-------|---------|-----------|
| **design** | `/design` | Workflow de design completo |
| **design-consultation** | `/design-consultation` | Consultoria de design interativa |
| **design-review** | `/design-review` | Revisão de design com checklist |
| **design-shotgun** | `/design-shotgun` | Gera múltiplas variações de design em paralelo |
| **design-html** | `/design-html` | Converte design em HTML com layout real |

### QA e Revisão

| Skill | Comando | O que faz |
|-------|---------|-----------|
| **review** | `/review` | Code review pré-PR com checklist de segurança, SQL, race conditions |
| **investigate** | `/investigate` | Debug profundo de bugs e comportamentos inesperados |
| **qa** | `/qa` | QA com browser real (Chromium via Playwright) |
| **qa-only** | `/qa-only` | Só testes, sem fixes automáticos |
| **benchmark** | `/benchmark` | Benchmarks de performance |
| **canary** | `/canary` | Testes em ambiente de produção controlado |
| **cso** | `/cso` | Security audit (OWASP Top 10 + STRIDE threat modeling) |

### Ship e Release

| Skill | Comando | O que faz |
|-------|---------|-----------|
| **ship** | `/ship` | Release management completo — verificações, PR, deploy |
| **land-and-deploy** | `/land-and-deploy` | Landing de PR + deploy automatizado |
| **document-release** | `/document-release` | Documenta o release automaticamente |

### Browser Automation

| Skill | Comando | O que faz |
|-------|---------|-----------|
| **browse** | `/browse` | Browser headless com sub-100ms latência (daemon persistente) |
| **connect-chrome** | `/connect-chrome` | Conecta ao Chrome do usuário com cookies reais |
| **open-gstack-browser** | `/open-gstack-browser` | Abre o GStack Browser com sidebar de agente |
| **setup-browser-cookies** | `/setup-browser-cookies` | Configura cookies para acesso autenticado |

---

## Skills Prioritárias para o AIOX

### `/office-hours` — Interrogatório de Produto YC

**Quando usar:** Antes de iniciar qualquer produto, feature ou campanha nova.

**Dois modos:**
- **Startup Mode** — valida demanda real. "Amor não é demanda. Alguém ofereceu pagar?"
- **Builder Mode** — brainstorming criativo. "Qual é a versão mais legal disso?"

**Por que usar no AIOX:**
O @pm (Morgan) faz isso hoje manualmente. O `/office-hours` é uma metodologia documentada e replicável. Para RUNA SYSTEMS, é um módulo de produto — ensinar clientes a rodar office-hours antes de qualquer implementação vale uma aula inteira.

**Como usar:**
```
/office-hours
# → Garry pergunta: modo Startup ou Builder?
# → Uma pergunta por vez, sem pular
# → Output: design doc salvo em ~/.gstack/projects/
```

**Caso de uso prático:**
```
Antes de criar o MIND$, rodar /office-hours para validar:
- Quem vai pagar? Não "todo empreendedor" — um nome específico
- Qual é o wedge mais estreito para lançar?
- O que existe no mercado que já resolve isso?
```

---

### `/autoplan` — Pipeline de 4 Reviews Automático

**Quando usar:** Você tem um plano de feature/produto e quer revisão completa sem interrupções de 15-30 perguntas.

**Como funciona:**
Roda 4 reviews em sequência (CEO → Design → Eng → DX), substituindo perguntas por 6 princípios de decisão:
1. Completude — entregue tudo
2. Boil the lake — corrija tudo no blast radius (≤1 dia de esforço)
3. Pragmático — se duas opções resolvem, escolha a mais limpa
4. DRY — rejeite duplicatas, reutilize o que existe
5. Explícito > inteligente — 10 linhas óbvias > 200 linhas abstratas
6. Bias para ação — sinalize preocupações mas não bloqueie

**Só para com você em 2 situações:**
- Premissas (qual problema resolver) — exige julgamento humano
- User Challenges — quando Claude E Codex concordam que sua direção deve mudar

**Mapeamento no AIOX:**
É o equivalente automatizado do `Spec Pipeline` do AIOX (6 fases → pipeline auto).

**Caso de uso prático:**
```
Após criar um plan.md para o Command Center V3:
/autoplan
# → 4 reviews rodam em paralelo
# → Output: plan revisado + TODOS.md atualizado + decisões auditadas
# → Vai para /ship direto
```

---

### `/review` — Code Review Pré-PR com IA Dupla

**Quando usar:** Antes de qualquer PR. Substitui ou complementa o `pr-review-toolkit`.

**O que revisa:**
- SQL injection e segurança
- Race conditions
- LLM output trust boundaries
- Enum completeness
- Scope drift (o diff faz o que o plano dizia?)
- Debt em documentação desatualizada

**Diferencial vs pr-review-toolkit do AIOX:**
Usa **dois modelos em paralelo** (Claude + Codex subagents) que debatem independentemente. Achados confirmados por ambos têm confiança multiplicada.

**Caso de uso prático:**
```
Antes de fazer PR do instagram-worker:
/review
# → Detecção automática do diff vs main
# → Review crítico: SQL, race conditions, segurança
# → Specialists paralelos para diffs >50 linhas
# → Fix-First: aplica autos, pede aprovação nos ASK
```

---

### `/qa` — QA com Browser Real

**Quando usar:** Testar qualquer interface web, fluxo autenticado, ou automação que precisa de browser.

**Por que é diferente:** Não é WebFetch. É Chromium real com Playwright — sub-100ms por chamada graças ao daemon persistente.

**Casos críticos para o AIOX:**
- Verificar se post foi publicado no Instagram (HERMES)
- Testar o Command Center no browser antes de mostrar para cliente
- Acessar ManyChat/n8n autenticado para verificar automações
- QA do lp-runa antes de deploy no Netlify

**Como usar:**
```
/qa
# → Abre browser headless com cookies
# → Roda testes interativos
# → Gera regression tests automáticos
# → Output: relatório de bugs + fixes aplicados
```

---

### `/cso` — Security Audit (OWASP + STRIDE)

**Quando usar:** Antes de qualquer deploy de produto que recebe dados de clientes.

**O que audita:**
- OWASP Top 10 (injection, XSS, broken auth, etc.)
- STRIDE threat modeling (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation)

**Caso de uso prático:**
```
Antes de lançar o RUNA SYSTEMS com formulário de pagamento:
/cso
# → Audit completo de segurança
# → Output: relatório de vulnerabilidades + remediações
```

---

### `/browse` — Browser Daemon Sub-100ms

**Quando usar:** Qualquer tarefa que precisa de browser real com estado persistente (cookies, login, JS).

**Arquitetura:**
- Primeira chamada: ~3s (inicia daemon Chromium)
- Todas as seguintes: ~100ms (daemon já rodando)
- Cada agente tem tab isolado
- Suporte a autenticação real via cookies do Chrome

**Caso de uso HERMES:**
```
/browse navigate https://manycat.io/dashboard
/browse screenshot
/browse click "#send-broadcast"
# → HERMES verifica status de automações sem abrir browser manualmente
```

---

## Mapping AIOX → gstack

| Quando você quiser... | Use no AIOX | Considere gstack |
|---|---|---|
| Validar uma ideia de produto | @pm *create-epic | `/office-hours` (mais estruturado) |
| Review de spec antes de codar | Spec Pipeline (6 fases) | `/autoplan` (automático) |
| Code review antes de PR | `pr-review-toolkit` | `/review` (+ Codex dual-model) |
| QA de interface web | (não tinha) | `/qa` + `/browse` |
| Security audit | @qa (parcial) | `/cso` (OWASP + STRIDE) |
| Design iterativo | @ux-design-expert | `/design-shotgun` |
| Release completo | @devops push | `/ship` |

---

## Setup e Atualização

**Instalado em:** `~/.claude/skills/gstack/`

**Atualizar:**
```bash
cd ~/.claude/skills/gstack && git fetch && git reset --hard origin/main
```

**Instalar dependências (browser automation):**
```bash
cd ~/.claude/skills/gstack && bun install
```

**Verificar versão:**
```bash
cat ~/.claude/skills/gstack/VERSION
```

---

## Limitações e Anti-Patterns

| Situação | Não use gstack | Use isso |
|---|---|---|
| Criar notas no Obsidian | `/office-hours` | `obsidian-cli` |
| Geração de imagem/vídeo | qualquer gstack skill | `infsh` (MAYA) |
| Automação n8n | `/browse` | n8n-mcp (HERMES) |
| Tasks de texto simples | qualquer gstack | Claude nativo |
| Commit e push | `/ship` diretamente | @devops *push (protocolo AIOX) |

> ⚠️ **Importante:** `/ship` do gstack inclui git push. No AIOX, git push é exclusividade do @devops (Gage). Use `/review` do gstack, mas delegue o push para @devops.

---

## Conexões no Ecossistema

- **ARES** usa `/office-hours` para validação de novos produtos
- **@qa (Quinn)** usa `/review` + `/cso` antes de quality gates
- **HERMES** usa `/browse` para verificar automações publicadas
- **@dev (Dex)** usa `/qa` + `/autoplan` no ciclo de desenvolvimento
- **@architect (Aria)** usa `/plan-eng-review` para validação de arquitetura

---

*Fonte: https://github.com/garrytan/gstack*
*Instalado em: 2026-04-10*
