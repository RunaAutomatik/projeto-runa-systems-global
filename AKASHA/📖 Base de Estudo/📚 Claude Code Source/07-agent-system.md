---
date: 2026-04-02
tags: [claude-code, agents, subagents, coordinator, swarms, parallelism]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Agent System (Subagentes, Coordenador, Swarms)

## AgentTool — Como Subagentes Funcionam

```typescript
Agent({
  subagent_type: string,     // Tipo do agente
  prompt: string,            // Instrução completa (self-contained)
  run_in_background: boolean, // false = espera resultado; true = paralelo
  isolation: "worktree"?     // Opcional: worktree git isolado
})
```

**Regra crítica:** O prompt deve ser **completamente self-contained**. O sub-agente não tem acesso ao contexto da conversa principal — apenas o que você passar no prompt.

## Tipos de Agentes Built-in

### `general-purpose`
- **Modelo:** Default subagent model (Sonnet geralmente)
- **Ferramentas:** Todas (`*`)
- **Uso:** Pesquisa complexa, tarefas multi-step, execução geral
- **Sistema:** "Complete the task fully — don't gold-plate, don't leave it half-done"

### `Explore`
- **Modelo:** Haiku (para Ant: inherit do agente principal, com feature gate)
- **Ferramentas:** Sem Edit, Write, Notebook (read-only)
- **Uso:** Exploração rápida de codebase (busca de arquivos, análise de código)
- **Throughness levels:** "quick", "medium", "very thorough"
- **Omite CLAUDE.md** — agente de exploração não precisa das regras do projeto
- Mínimo de 3 queries antes de considerar a exploração "completa"

### `Plan`
- **Uso:** Planejamento de implementação antes de executar
- **Produz:** Planos detalhados, arquivos críticos, trade-offs

### `claude-code-guide`
- **Uso:** Responde perguntas sobre o próprio Claude Code
- **Ferramentas:** Glob, Grep, Read, WebFetch, WebSearch

### `verification`
- **Uso:** Verifica que implementações estão corretas

### `statusline-setup`
- **Uso:** Configura a status line do terminal
- **Ferramentas:** Read, Edit

## Worktree Isolation — O Padrão Mais Poderoso

```typescript
Agent({
  isolation: "worktree",
  run_in_background: true,
  prompt: "implement feature X, commit, push, create PR"
})
```

**O que acontece:**
1. Claude Code cria um novo git worktree (clone do estado atual do repo)
2. O agente trabalha nessa cópia isolada
3. Faz commits no branch do worktree
4. Se não fizer mudanças → worktree deletado automaticamente
5. Se fizer mudanças → retorna o path do worktree e o branch

**Garantia de isolamento:** Múltiplos agentes com `isolation: "worktree"` podem rodar em paralelo sem conflitos.

## Pattern: Batch Parallelism (`/batch`)

O `/batch` skill demonstra o pattern ideal de paralelismo:

```
1. Pesquisa + planejamento (agentes foreground para coletar resultados)
2. Decomposição em 5-30 unidades independentes
3. Um único message block com N AgentTool calls simultâneos:
   - Todos: isolation: "worktree" + run_in_background: true
   - Cada um: prompt completamente self-contained com contexto do projeto
4. Tabela de status que atualiza conforme notificações chegam
```

**O padrão de worker:**
Cada agente recebe instrução para:
1. Implementar a mudança
2. Chamar `/simplify` (skill de revisão de qualidade)
3. Rodar testes
4. Testar end-to-end
5. Commit + push + `gh pr create`
6. Retornar: `PR: <url>` ou `PR: none — <reason>`

## Coordinator Mode — Multi-Agent Nativo

Quando `CLAUDE_CODE_COORDINATOR_MODE=1`:

**Coordinator tools:**
- `AgentTool` — spawna workers
- `TaskCreateTool` — cria tarefas para workers
- `TaskStopTool`
- `SendMessageTool` — comunica com workers

**Worker tools (restritas):**
- `BashTool`, `FileReadTool`, `FileEditTool` (apenas)
- `TaskStopTool` (para reportar conclusão)
- `SendMessageTool` (para se comunicar com coordinator)

**Scratchpad compartilhado** (quando `tengu_scratch` gate ativo):
- Diretório temporário que coordinator e workers usam para comunicação via arquivos

## Memory de Agentes

Cada sub-agente tem sua própria memória isolada em:
`~/.claude/agents/<agent-id>/memory/`

O `agentMemory.ts` gerencia:
- Criação do diretório de memória do agente
- Snapshot de memória antes/depois da execução
- Escopo específico do agente (não vaza para memória principal)

## Team Agents (Agent Swarms)

Com `isAgentSwarmsEnabled()`:

```typescript
TeamCreateTool({
  // Cria uma equipe de agentes
  // Retorna team_id para gerenciamento
})

TeamDeleteTool({
  team_id: string
})
```

Workers de uma equipe:
- Têm `COORDINATOR_MODE_ALLOWED_TOOLS` restrito
- Comunicam via `SendMessageTool`
- Podem ser monitorados pelo coordinator

## Tasks System — Agentes em Background

```typescript
// Criar tarefa em background
TaskCreateTool({
  prompt: "execute esta análise longa",
  tool_config: { tools: [...] }
})
// Retorna: task_id

// Monitorar output
TaskOutputTool({
  task_id: string
})

// Parar tarefa
TaskStopTool({
  task_id: string
})
```

Tipos de tarefas:
- `LocalAgentTask` — agente local no mesmo processo
- `RemoteAgentTask` — agente em server remoto
- `DreamTask` — consolidação de memória (background)
- `InProcessTeammateTask` — worker de equipe in-process
- `LocalShellTask` — shell command em background

## Remote Agents (Teleport)

O sistema `teleport` permite executar agentes em ambientes remotos:
- Cria "ambiente" no cloud
- Transfere contexto local para remoto
- Executa lá, retorna resultado
- `fetchEnvironments()` lista ambientes disponíveis

Relacionado ao CCR (Cloud Code Runner) do UltraPlan.

## Agent Memory Snapshot

Antes de spawnar um sub-agente:
```typescript
agentMemorySnapshot.ts → captura o estado atual da memória
```

Após o agente terminar:
- Se fez mudanças no código → mudanças ficam no worktree branch
- Se mudou memória → snapshot é comparado e delta aplicado

## Melhores Práticas Para Usar Sub-Agentes

### ✅ Use sub-agentes para:
- Pesquisa paralela (3-5 buscas simultâneas)
- Tarefas independentes que podem rodar em paralelo
- Isolamento de contexto (não poluir o contexto principal)
- Operações longas que podem rodar em background
- Worktrees para mudanças com risco de conflito

### ❌ Não use sub-agentes para:
- Tarefas simples com 1-2 steps (overhead não vale)
- Quando resultado de um agente depende do outro (use sequential)
- Quando você precisa do resultado imediatamente E ele é simples

### Pattern ideal para pesquisa paralela:
```
# Em vez de:
1. Buscar arquivo A (1 turn)
2. Buscar arquivo B (1 turn)
3. Analisar A e B (1 turn)

# Faça:
1. Spawn agent(A) + agent(B) em paralelo (1 turn)
2. Recebe resultados de A e B
3. Analisa no contexto principal (1 turn)
# Economiza 1 turn inteiro + todo contexto dos searches
```
