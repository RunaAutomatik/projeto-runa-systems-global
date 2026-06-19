---
date: 2026-05-09
tags: [instalacao, designer-v3, lucas-pesto, runa-intervencao]
project: runa-systems-global
type: installation-guide
programa: RUNA INTERVENÇÃO
cliente: Lucas — Pesto
versao: V3
---

# Designer Agent V3 — Guia de Instalação

> Mapa completo: o que vai para onde, o que substitui, qual IC corrige.
> Leia antes de executar o `PROMPT-INSTALACAO.md`.

---

## Pré-requisitos (verificar antes de instalar)

| Item | Como verificar | O que fazer se falhar |
|------|---------------|----------------------|
| Higgsfield CLI instalado | `higgsfield --version` (deve mostrar v0.1.26+) | Baixar em higgsfield.ai/cli |
| Higgsfield autenticado | `higgsfield auth status` | `higgsfield auth login` (browser flow, uma vez) |
| MCP Higgsfield conectado | Abrir Claude.ai → Settings → Connectors → ver Higgsfield | Adicionar: URL `https://mcp.higgsfield.ai/mcp` |
| Pasta de brand-kit existe | `ls pesto/brand-kit/` no projeto | Criar com `mkdir -p pesto/brand-kit` |
| Pasta de grade existe | `ls pesto/grade-editorial/` | Criar com `mkdir -p pesto/grade-editorial` |
| Canva MCP conectado (opcional) | Abrir Claude.ai → Settings → Connectors → ver Canva | Conectar em canva.com/integrations/claude — permite upload automático de imagens geradas |

---

## Mapa de Instalação

### Componente 1 — Agente Principal

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `designer-agent-v2-system-prompt.md` |
| **Destino no projeto** | `agents/designer.md` (ou onde estiver seu agente de design atual) |
| **Substitui** | O system prompt atual do Designer (V1 ou V2.1) |
| **ICs corrigidos** | IC-01, IC-11, IC-12, IC-13, IC-14, IC-15, IC-16, IC-17 |
| **Personalizações obrigatórias** | Ver seção "Personalização do Agente Principal" abaixo |

**O que muda na V3 vs V2.1:**
- YAML persona completo (archetype, comunicação, vocabulário, greetings, signature)
- Protocolo de ativação com HALT explícito (agente para e espera input antes de agir)
- 7 workflow definitions por comando (o que exatamente acontece em cada `*comando`)
- Seção dependencies com hierarquia de ferramentas e schema do brand-kit
- Review gate: agente revisa antes de qualquer entrega
- `*criar-soul` adicionado como comando (estava listado mas sem task file)

---

### Componente 2 — Task: Criar Soul

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-criar-soul.md` |
| **Destino no projeto** | `tasks/designer-criar-soul.md` |
| **Substitui** | Nada — arquivo **NOVO** (não existia em V1) |
| **IC corrigido** | IC-03 (comando `*criar-soul` sem task file) |
| **Personalizações** | Nenhuma — paths genéricos `pesto/brand-kit/[cliente]/soul.json` |

**O que esse arquivo faz:**
Quando Lucas digita `*criar-soul [cliente]`, o agente usa o MCP Higgsfield para iniciar o wizard de treinamento de Soul Character, guia Lucas no upload de 8–15 fotos do cliente, monitora o progresso e salva o soul.json na pasta correta do brand-kit.

---

### Componente 3 — Task: Gerar Imagem

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-gerar-imagem.md` |
| **Destino no projeto** | `tasks/designer-gerar-imagem.md` |
| **Substitui** | `tasks/designer-gerar-imagem.md` (V1 stub com modelos errados) |
| **ICs corrigidos** | IC-01, IC-02, IC-06, IC-07 |
| **Personalizações** | Nenhuma — modelos e paths já corretos |

**Diferença V1 → V3:**
- V1: usava FLUX e Gemini Flash Image como primários (modelos purgados ou errados)
- V3: `nano_banana_flash` como padrão; `nano_banana_flash --soul-id [uuid]` para imagem com soul; `gpt_image_2` para editorial premium
- V3: carrega regras `#NN` do brand-kit silenciosamente no Step 2
- V3: 4-checkbox review gate antes de qualquer entrega

---

### Componente 4 — Task: Gerar Vídeo Curto

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-gerar-video-curto.md` |
| **Destino no projeto** | `tasks/designer-gerar-video-curto.md` |
| **Substitui** | `tasks/designer-gerar-video-curto.md` (V1 stub com Veo e Wan) |
| **ICs corrigidos** | IC-01, IC-02, IC-06 |
| **Personalizações** | Nenhuma |

**Diferença V1 → V3:**
- V1: referenciava Veo (purgado do stack) e Wan (nunca esteve no stack)
- V3: Tier 0 = `higgsfield generate create seedance_2_0 --wait`; Tier 1 = MCP async com polling de 30s; Tier 2 = `infsh app run higgsfield/seedance-2`
- Modelos disponíveis documentados: `seedance_2_0`, `cinematic_studio_2_5`, `kling3_0`

---

### Componente 5 — Task: Criar Brief de Design

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-criar-brief-design.md` |
| **Destino no projeto** | `tasks/designer-criar-brief-design.md` |
| **Substitui** | `tasks/designer-criar-brief-design.md` (V1 — destinatário errado) |
| **IC corrigido** | IC-04 (handoff para humano ao invés de Cleiton) |
| **Personalizações** | Nenhuma |

**Diferença V1 → V3:**
- V1: descrevia handoff para "designer humano OU IA" — destinatário ambíguo
- V3: output salvo como arquivo local em `pesto/briefs/[cliente]/brief-[YYYY-MM-DD].md`
- V3: brief estruturado em 6 seções; sem handoff para agente externo

---

### Componente 6 — Task: Gerar Brief de Carrossel

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-gerar-brief-carrossel.md` |
| **Destino no projeto** | `tasks/designer-gerar-brief-carrossel.md` |
| **Substitui** | `tasks/designer-gerar-brief-carrossel.md` (V1 — sem path de grade) |
| **IC corrigido** | IC-10 (modo autônomo sem path de grade editorial) |
| **Personalizações** | Nenhuma — path `pesto/grade-editorial/semana-[N].md` já hardcoded |

**Diferença V1 → V3:**
- V1: mencionava "verificar grade editorial" sem definir o path do arquivo
- V3: `pesto/grade-editorial/semana-[N].md` como primeira pré-verificação explícita
- V3: modo autônomo com 3 etapas definidas (lê grade → lê brand-kit → constrói brief)
- V3: 6-checkbox review gate (mais robusto que qualquer outro task)

---

### Componente 7 — Task: Adaptar Formato

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-adaptar-formato.md` |
| **Destino no projeto** | `tasks/designer-adaptar-formato.md` |
| **Substitui** | `tasks/designer-adaptar-formato.md` (V1 stub sem workflow) |
| **IC corrigido** | IC-06 |
| **Personalizações** | Nenhuma |

**Diferença V1 → V3:**
- V1: 23 linhas sem workflow real
- V3: 3 cenários com lógica de seleção (imagem/carrossel → geração via Higgsfield CLI; vídeo → Higgsfield; apenas texto → spec)
- V3: tabela de specs por formato (Stories 9:16, Feed quadrado, Feed vertical, LinkedIn, WhatsApp)

---

### Componente 8 — Task: Clonar Identidade de Cliente

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-clonar-identidade-cliente.md` |
| **Destino no projeto** | `tasks/designer-clonar-identidade-cliente.md` |
| **Substitui** | `tasks/designer-clonar-identidade-cliente.md` (V1 stub sem schema) |
| **IC corrigido** | IC-09 (sem schema de armazenamento formal) |
| **Personalizações** | Nenhuma |

**Diferença V1 → V3:**
- V1: declarava "configuração persistente" como output sem definir onde ou como
- V3: 3 arquivos com paths exatos, frontmatter YAML, estrutura de conteúdo
  - `pesto/brand-kit/[cliente]/identity.md` — paleta, tipografia, estilo, tom
  - `pesto/brand-kit/[cliente]/rules.md` — regras numeradas `#NN — [regra]`
  - `pesto/brand-kit/[cliente]/soul.json` — apenas se soul training foi feito
- V3: verifica se brand-kit já existe e pergunta antes de sobrescrever

---

### Componente 9 — Task: Criar Variação

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-criar-variacao.md` |
| **Destino no projeto** | `tasks/designer-criar-variacao.md` |
| **Substitui** | `tasks/designer-criar-variacao.md` (V1 stub sem workflow) |
| **IC corrigido** | IC-06 |
| **Personalizações** | Nenhuma |

**Diferença V1 → V3:**
- V1: 23 linhas sem tipo de variação definido
- V3: 5 tipos com delta table (estilo, texto, cor, a/b, serie)
- V3: A/B test enforced — exatamente 1 variável muda, tudo mais idêntico
- V3: Série: elemento visual unificador definido ANTES dos posts individuais
- V3: Geração direta via Higgsfield CLI (`nano_banana_flash --wait`) — sem handoff externo
- V3: STEP FINAL por variação — upload automático ao Canva via `mcp__claude_ai_Canva__upload-asset-from-url`

---

### Componente 10 — Skill: higgsfield-generate

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `skills/higgsfield-generate/SKILL.md` |
| **Destino na máquina** | `~/.claude/skills/higgsfield-generate/SKILL.md` |
| **Substitui** | Nada — skill **NOVA** |
| **Personalizações** | Nenhuma |

**Instalação:**
```bash
mkdir -p ~/.claude/skills/higgsfield-generate
cp artefatos/skills/higgsfield-generate/SKILL.md ~/.claude/skills/higgsfield-generate/
```

---

### Componente 11 — Skill: ensaio-fotografico

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `skills/ensaio-fotografico/SKILL.md` |
| **Destino na máquina** | `~/.claude/skills/ensaio-fotografico/SKILL.md` |
| **Substitui** | Nada — skill **NOVA** |
| **Personalizações** | Nenhuma |

**Instalação:**
```bash
mkdir -p ~/.claude/skills/ensaio-fotografico
cp artefatos/skills/ensaio-fotografico/SKILL.md ~/.claude/skills/ensaio-fotografico/
```

---

### Componente 12 — Task: Sugerir Pauta

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-sugerir-pauta.md` |
| **Destino no projeto** | `tasks/designer-sugerir-pauta.md` |
| **Substitui** | Nada — arquivo **NOVO** |
| **IC corrigido** | Novo comando sem task file na V2 |
| **Personalizações** | Nenhuma |

**O que esse arquivo faz:**
Quando Lucas digita `*sugerir-pauta [cliente]`, o agente lê o brand-kit do cliente e a grade editorial da semana atual, e gera 5 sugestões de pauta com formato, tema, hook, modelo recomendado e regras `#NN` aplicáveis. O usuário aprova ou ajusta antes de qualquer escrita na grade.

---

### Componente 13 — Task: Gerar Grade

| Campo | Valor |
|-------|-------|
| **Arquivo em artefatos/** | `tasks/designer-gerar-grade.md` |
| **Destino no projeto** | `tasks/designer-gerar-grade.md` |
| **Substitui** | Nada — arquivo **NOVO** |
| **IC corrigido** | Novo comando sem task file na V2 |
| **Personalizações** | Nenhuma |

**O que esse arquivo faz:**
Quando Lucas digita `*gerar-grade [semana-N] [clientes...]`, o agente verifica o brand-kit de cada cliente e gera `pesto/grade-editorial/semana-[N].md` com 5 slots por cliente por semana. Cada slot tem: data, formato, pauta, modelo recomendado e status (⬜ pendente). Confirma com contagem de linhas criadas.

---

## Personalizações Obrigatórias Após Instalação

### Personalização do Agente Principal (`agents/designer.md`)

Após copiar `artefatos/designer-agent-v2-system-prompt.md` → `agents/designer.md`, editar:

| Campo no arquivo | Placeholder | Substituir por |
|-----------------|-------------|---------------|
| `persona_profile.agent_name` | `[NOME_DO_AGENTE]` | Nome que Lucas quiser dar ao agente (ex: "Studio", "Canvas", etc.) |
| `persona_profile.zodiac` | opcional | Pode manter ou remover |
| `persona_profile.communication.greeting_levels` | `[NOME_DO_AGENTE]` | Mesmo nome escolhido acima |
| `dependencies.brand_kit_path` | `pesto/brand-kit/` | Confirmar que esse é o path real no projeto |
| `dependencies.grade_editorial_path` | `pesto/grade-editorial/semana-[N].md` | Confirmar path real |

> **Nota:** Os paths `pesto/brand-kit/` e `pesto/grade-editorial/` foram definidos juntos na Sessão 05 e confirmados no hub do mentorado. Não mudar sem motivo.

### Personalizações nas Tasks (nenhuma obrigatória)

Os 11 task files e o `designer-criar-soul.md` não têm personalizações obrigatórias — todos os paths já usam os valores definidos (`pesto/brand-kit/[cliente]/`, `pesto/grade-editorial/semana-[N].md`) que o agente principal resolve dinamicamente com o nome do cliente passado no comando.

---

## Resumo das ICs Corrigidas

| IC | Descrição | Corrigido em |
|----|-----------|-------------|
| IC-01 | Versão split — cérebro V2.1, mãos V1 | Todos os tasks (Higgsfield CLI Tier 0) |
| IC-02 | Modelos inexistentes (Veo, Wan, FLUX) | Tasks de imagem e vídeo |
| IC-03 | `*criar-soul` sem task file | `designer-criar-soul.md` (novo) |
| IC-04 | Brief designer destinado a humano, não Cleiton | `designer-criar-brief-design.md` |
| IC-05 | Modelo errado para soul no agente principal | `designer-agent-v2-system-prompt.md` |
| IC-06 | 6 de 7 tasks eram stubs sem workflow | Todos os 8 tasks expandidos |
| IC-07 | Regras `#NN` nunca consultadas nos tasks | Step 2 de todos os tasks |
| IC-08 | Handoff sem formato padronizado | Bloco de handoff em todos os tasks de output |
| IC-09 | `clonar-identidade` sem schema de armazenamento | `designer-clonar-identidade-cliente.md` |
| IC-10 | Grade editorial sem path definido no modo autônomo | `designer-gerar-brief-carrossel.md` |
| IC-11 | Sem persona YAML | `designer-agent-v2-system-prompt.md` |
| IC-12 | Sem protocolo de ativação com halt | `designer-agent-v2-system-prompt.md` |
| IC-13 | Sem workflow definitions por comando | `designer-agent-v2-system-prompt.md` |
| IC-14 | Sem review gate antes do handoff | `designer-agent-v2-system-prompt.md` + todos os tasks |
| IC-15 | Sem visibility tags nos comandos | `designer-agent-v2-system-prompt.md` |
| IC-16 | Sem seção dependencies | `designer-agent-v2-system-prompt.md` |
| IC-17 | Sem gestão de estado entre sessões | `designer-agent-v2-system-prompt.md` |

---

## Próximo Passo

→ Abrir o Claude Code no projeto da Pesto e colar o conteúdo de `PROMPT-INSTALACAO.md` como mensagem.
→ O agente guiará toda a instalação com verificações antes de substituir qualquer arquivo.
