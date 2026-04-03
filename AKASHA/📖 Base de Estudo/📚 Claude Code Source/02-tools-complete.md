---
date: 2026-04-02
tags: [claude-code, tools, capabilities, hidden-tools]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — All Tools (Complete)

## Ferramentas Sempre Ativas (Default)

| Tool | Nome interno | O que faz |
|------|-------------|-----------|
| `AgentTool` | `Agent` | Spawna sub-agentes com contexto isolado |
| `BashTool` | `Bash` | Executa comandos shell |
| `FileReadTool` | `Read` | Lê arquivos (imagens, PDFs, notebooks) |
| `FileEditTool` | `Edit` | Edita partes de arquivo (string replacement) |
| `FileWriteTool` | `Write` | Cria/sobrescreve arquivos |
| `GlobTool` | `Glob` | Busca arquivos por padrão glob |
| `GrepTool` | `Grep` | Busca conteúdo em arquivos (ripgrep) |
| `WebFetchTool` | `WebFetch` | Busca conteúdo de URLs |
| `WebSearchTool` | `WebSearch` | Pesquisa na web |
| `NotebookEditTool` | `NotebookEdit` | Edita Jupyter notebooks |
| `TaskOutputTool` | `TaskOutput` | Lê output de tarefas em background |
| `TaskStopTool` | `TaskStop` | Para tarefas em background |
| `AskUserQuestionTool` | `AskUserQuestion` | Faz perguntas interativas ao usuário |
| `SkillTool` | `Skill` | Executa skills |
| `EnterPlanModeTool` | `EnterPlanMode` | Entra em modo de planejamento |
| `ExitPlanModeTool` (v2) | `ExitPlanMode` | Sai do modo de planejamento |
| `SendMessageTool` | `SendMessage` | Envia mensagens entre agentes |
| `TodoWriteTool` | `TodoWrite` | Gerencia lista de tarefas (v1) |
| `ListMcpResourcesTool` | `ListMcpResources` | Lista recursos MCP disponíveis |
| `ReadMcpResourceTool` | `ReadMcpResource` | Lê recursos MCP |
| `ToolSearchTool` | `ToolSearch` | Descobre ferramentas deferred/lazy |
| `BriefTool` | `Brief` | Gera briefs estruturados (KAIROS) |

## Ferramentas Condicionais por Feature Flag

| Tool | Feature Flag | Descrição |
|------|-------------|-----------|
| `SleepTool` | `PROACTIVE` ou `KAIROS` | Claude aguarda e age proativamente sem ser chamado |
| `CronCreateTool` | `AGENT_TRIGGERS` | Cria tarefas agendadas (cron jobs) |
| `CronDeleteTool` | `AGENT_TRIGGERS` | Remove tarefas agendadas |
| `CronListTool` | `AGENT_TRIGGERS` | Lista tarefas agendadas |
| `RemoteTriggerTool` | `AGENT_TRIGGERS_REMOTE` | Dispara agentes remotamente |
| `TeamCreateTool` | `AGENT_SWARMS` | Cria equipe de agentes paralelos |
| `TeamDeleteTool` | `AGENT_SWARMS` | Remove equipe de agentes |
| `EnterWorktreeTool` | `WORKTREE_MODE` | Entra em worktree git isolado |
| `ExitWorktreeTool` | `WORKTREE_MODE` | Sai do worktree isolado |
| `MonitorTool` | `MONITOR_TOOL` | Monitora processos/estado |
| `SendUserFileTool` | `KAIROS` | Envia arquivos ao usuário |
| `PushNotificationTool` | `KAIROS` ou `KAIROS_PUSH_NOTIFICATION` | Notificações push |
| `SubscribePRTool` | `KAIROS_GITHUB_WEBHOOKS` | Assina eventos de PR no GitHub |
| `WebBrowserTool` | `WEB_BROWSER_TOOL` | Automação de browser |
| `WorkflowTool` | `WORKFLOW_SCRIPTS` | Executa workflow scripts |
| `SnipTool` | `HISTORY_SNIP` | Remove partes do histórico |
| `ListPeersTool` | `UDS_INBOX` | Lista peers conectados via Unix socket |
| `CtxInspectTool` | `CONTEXT_COLLAPSE` | Inspeciona uso de contexto |
| `TerminalCaptureTool` | `TERMINAL_PANEL` | Captura terminal |
| `TaskCreateTool` | todoV2 enabled | Cria tarefas (v2 task system) |
| `TaskGetTool` | todoV2 enabled | Obtém detalhes de tarefa |
| `TaskUpdateTool` | todoV2 enabled | Atualiza tarefa |
| `TaskListTool` | todoV2 enabled | Lista tarefas |

## Ferramentas Exclusivas Ant (Anthropic employees)

| Tool | Descrição |
|------|-----------|
| `REPLTool` | REPL sandbox — executa código isolado em VM |
| `TungstenTool` | Ferramenta interna Anthropic |
| `ConfigTool` | Gestão avançada de configuração |
| `SuggestBackgroundPRTool` | Sugere PRs em background |
| `VerifyPlanExecutionTool` | Verifica execução de planos |

## PowerShell (Windows)

```typescript
// Habilitado quando isPowerShellToolEnabled() → true
// Funciona em Windows como alternativa ao BashTool
PowerShellTool
```

## Ferramenta LSP (Language Server Protocol)

```typescript
// Habilitado via: ENABLE_LSP_TOOL=true
LSPTool  // Integração com language servers para análise de código
```

## AgentTool — O Mais Poderoso

O `AgentTool` é a ferramenta mais crítica. Parâmetros completos:

```typescript
{
  subagent_type: "general-purpose" | "Explore" | "Plan" | "claude-code-guide",
  prompt: string,           // Instrução completa para o sub-agente
  run_in_background: boolean, // true = paralelo, notifica quando termina
  isolation: "worktree",    // Opcional: clone isolado do repo
}
```

### Agents Built-in

| Agent Type | Modelo | Propósito | Restrições |
|-----------|--------|-----------|-----------|
| `general-purpose` | Claude Opus (default) | Pesquisa, multi-step, execução geral | Sem restrições |
| `Explore` | Haiku (ou inherit para Ant) | Exploração read-only de codebase | Sem Edit/Write/Notebook |
| `Plan` | - | Planejamento de implementação | - |
| `claude-code-guide` | - | Responde perguntas sobre Claude Code | - |
| `verification` | - | Verifica implementações | - |
| `statusline-setup` | - | Configura status line | - |

### Isolation Mode (Worktree)

```typescript
// Agente trabalha em cópia git isolada — NÃO afeta o código principal
{
  isolation: "worktree",
  run_in_background: true
}
// Se agente não fizer mudanças → worktree é deletado automaticamente
// Se fizer mudanças → branch e path do worktree são retornados
```

## ToolSearchTool — Deferred Tools

Uma inovação importante: ferramentas pesadas são "deferred" — só carregam quando o Claude precisa delas. O `ToolSearchTool` permite descobrir e carregar essas ferramentas on-demand via busca semântica.

```
Claude vê: "ToolSearch" no sistema de tools
Claude usa ToolSearch com query → sistema retorna o schema completo da ferramenta
Ferramenta agora está disponível para uso
```

Isso reduz tokens de prompt significativamente quando há muitas ferramentas MCP instaladas.
