---
date: 2026-04-02
tags: [claude-code, hidden-features, feature-flags, kairos, proactive]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Hidden Features & Feature Flags

Funcionalidades ativas apenas para certos usuários ou via flags de build. Estas são as capacidades que a maioria dos usuários não sabe que existem.

## Feature Flags Identificados no Código

| Flag | Status Estimado | Descrição |
|------|----------------|-----------|
| `PROACTIVE` | Testado (Ant+) | Claude age sozinho sem ser chamado, usando SleepTool |
| `KAIROS` | Testado (Ant+) | Sistema completo de assistente persistente + notificações + briefs |
| `KAIROS_BRIEF` | Testado (Ant+) | Sistema de briefs automáticos |
| `KAIROS_DREAM` | Testado (Ant+) | Consolidação automática de memórias |
| `KAIROS_PUSH_NOTIFICATION` | Testado | Notificações push para mobile/desktop |
| `KAIROS_GITHUB_WEBHOOKS` | Testado | Assina eventos de PR GitHub |
| `AGENT_TRIGGERS` | Ativo (usuários) | Cron jobs para agentes (`/loop`) |
| `AGENT_TRIGGERS_REMOTE` | Testado | Agentes remotos agendados |
| `COORDINATOR_MODE` | Testado | Modo coordenador multi-agente |
| `BRIDGE_MODE` | Ativo (IDEs) | Comunicação bidirecional com VSCode/JetBrains |
| `DAEMON` | Testado | Modo daemon/servidor de controle remoto |
| `VOICE_MODE` | Testado | Entrada por voz |
| `TEAMMEM` | Testado | Memória compartilhada entre devs do projeto |
| `WORKTREE_MODE` | Ativo | Suporte a worktrees git isolados |
| `WEB_BROWSER_TOOL` | Testado | Automação de browser via WebBrowserTool |
| `WORKFLOW_SCRIPTS` | Testado | Scripts de workflow personalizados |
| `MONITOR_TOOL` | Testado | MonitorTool para monitoramento de processos |
| `TRANSCRIPT_CLASSIFIER` | Testado | Classificador automático de permissões |
| `BUILDING_CLAUDE_APPS` | Testado (Ant+) | Skill para build de apps Claude |
| `OVERFLOW_TEST_TOOL` | Dev/test | Testa comportamento em overflow de contexto |
| `CONTEXT_COLLAPSE` | Testado | CtxInspectTool para análise de contexto |
| `TERMINAL_PANEL` | Testado | Captura de terminal |
| `REVIEW_ARTIFACT` | Testado (Ant+) | `/hunter` skill para revisão |
| `RUN_SKILL_GENERATOR` | Testado | Gerador automático de skills |
| `HISTORY_SNIP` | Testado | SnipTool para remover partes do histórico |
| `UDS_INBOX` | Testado | Unix socket inbox para peer communication |
| `MEMORY_SHAPE_TELEMETRY` | Testado | Telemetria de uso de memória |

## KAIROS — O Sistema de Assistente Persistente

KAIROS é a versão mais avançada do Claude Code: um assistente que **não precisa ser invocado** — ele monitora, age proativamente e mantém contexto entre sessões de forma diferente.

### Como KAIROS diferencia do Claude Code normal:

**Memória no modo KAIROS:**
- Em vez de MEMORY.md como índice ativo, o Claude **escreve logs diários** em `~/.claude/projects/<path>/memory/logs/YYYY/MM/YYYY-MM-DD.md`
- Cada entrada é um bullet timestamped (append-only)
- Um processo `/dream` consolida esses logs periodicamente em MEMORY.md

**SleepTool + PROACTIVE:**
```typescript
// Claude pode "dormir" e acordar
// Ex: "monitore o deploy a cada 2 minutos por 30 minutos"
SleepTool → aguarda N segundos → acorda → executa → dorme novamente
```

**BriefTool (KAIROS_BRIEF):**
- Gera briefs estruturados automaticamente

**PushNotificationTool:**
- Claude notifica o usuário no mobile/desktop quando tarefa longa termina

**SubscribePRTool (KAIROS_GITHUB_WEBHOOKS):**
- Claude assina webhook de PR no GitHub
- Recebe notificação quando PR muda
- Age automaticamente (review, comentar, etc.)

## COORDINATOR_MODE — Multi-Agent Real

```bash
CLAUDE_CODE_COORDINATOR_MODE=1 claude
```

Ativa modo de coordenador onde:
- O Claude principal age como **orquestrador**
- Spawna múltiplos **worker agents** via TeamCreateTool
- Workers têm ferramentas limitadas (BashTool, FileReadTool, FileEditTool)
- Coordenador distribui trabalho via TaskCreateTool/SendMessageTool
- Workers reportam via TaskStopTool

Ferramentas internas do worker (não visíveis ao usuário):
- TeamCreateTool, TeamDeleteTool
- SendMessageTool
- SyntheticOutputTool

## BRIDGE_MODE — Controle Remoto via IDE

```bash
CLAUDE_CODE_BRIDGE_MODE=1 claude
```

Ativa ponte bidirecional com IDEs:
- VSCode extension ↔ Claude Code CLI
- JetBrains plugin ↔ Claude Code CLI
- JWT-based auth
- Sessões REPL bridge para execução isolada

## WORKTREE_MODE — Isolamento Git

```bash
WORKTREE_MODE=true claude
```

Habilita EnterWorktreeTool/ExitWorktreeTool.
Claude pode entrar em um worktree git isolado, fazer mudanças, e sair — sem afetar o branch principal.

Usado automaticamente por `/batch` e AgentTool com `isolation: "worktree"`.

## UltraPlan — Planejamento Avançado com Claude.ai

```
/ultraplan <descrição>
```

Envia o planejamento para o **Claude.ai na web** (CCR — Cloud Code Runner) usando Claude Opus 4.6.
O Claude na web faz exploração multi-agente por até 30 minutos.
Retorna um plano refinado que você aprova localmente.

Modelo padrão: `claude-opus-4-6` (first-party, não Bedrock/Vertex)

## Env Vars Úteis (Não Documentadas Publicamente)

```bash
# Desativa auto-memory
CLAUDE_CODE_DISABLE_AUTO_MEMORY=true

# Controla quando autocompact dispara (tokens)
CLAUDE_CODE_AUTO_COMPACT_WINDOW=100000

# Override de percentual para autocompact
CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80

# Modo simples (só Bash + Read + Edit)
CLAUDE_CODE_SIMPLE=true

# Habilita LSP tool
ENABLE_LSP_TOOL=true

# Força coordinator mode
CLAUDE_CODE_COORDINATOR_MODE=1

# Prompt do UltraPlan customizado (Ant only)
ULTRAPLAN_PROMPT_FILE=/path/to/prompt.txt

# Memória extra para co-work
CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES="..."

# Verificação de plano
CLAUDE_CODE_VERIFY_PLAN=true
```

## YOLO Mode (Explore Permission Mode)

O Claude Code tem 3 modos de permissão:
- `default` (Ask) — pergunta antes de cada ação potencialmente destrutiva
- `acceptEdits` — aceita edições automaticamente, pergunta para bash
- `dontAsk` (Explore/YOLO) — executa tudo sem perguntar

Ativar: `/yolo` ou `--dangerously-skip-permissions` na CLI

O código tem um `yoloClassifier.ts` que usa um modelo de linguagem para classificar automaticamente se uma ação em yolo mode é segura ou requer confirmação mesmo assim.

## Coordinator Mode Scratchpad

Quando `tengu_scratch` feature gate está ativo + coordinator mode:
- Claude tem acesso a um diretório de rascunho temporário
- Usado para comunicação entre coordinator e workers via arquivos

## REPL Mode (Ant Only)

REPLTool cria uma VM Node.js isolada onde:
- BashTool, FileReadTool, FileEditTool ficam disponíveis DENTRO da VM
- O Claude escreve scripts Node/JS que são executados nessa sandbox
- Maior segurança para operações sensíveis
