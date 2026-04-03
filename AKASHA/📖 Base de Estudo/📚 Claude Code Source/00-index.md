---
date: 2026-04-02
tags: [claude-code, source-analysis, tools, architecture]
project: runa-systems-global
type: knowledge-index
---

# Claude Code — Complete Knowledge Base (Source Analysis)

> Extracted from source snapshot exposed via npm source map on 2026-03-31.
> ~1,900 files | 512,000+ lines TypeScript | Runtime: Bun

## Document Index

| Document | Contents |
|----------|---------|
| [[01-architecture-overview]] | System architecture, startup, core engine, data flows |
| [[02-tools-complete]] | All 40+ tools — including hidden/conditional ones |
| [[03-skills-native]] | All 15 bundled skills — `/batch`, `/simplify`, `/loop`, etc. |
| [[04-hidden-features]] | Feature flags, KAIROS, PROACTIVE, COORDINATOR_MODE, etc. |
| [[05-token-optimization]] | Compact system, auto-compact, microcompact, token strategies |
| [[06-memory-system]] | Memory architecture, auto-memory, team memory, auto-dream |
| [[07-agent-system]] | Subagents, built-in agents, coordinator mode, teams, swarms |
| [[08-hooks-and-permissions]] | Hooks system, permission modes, allow/deny rules |

## Quick Reference — What We Are NOT Exploring Yet

| Capability | How to Activate | Value |
|-----------|----------------|-------|
| `/batch` skill | type `/batch <instruction>` | Paralleliza 5-30 agentes em worktrees isolados para migrações massivas |
| `/simplify` skill | type `/simplify` | 3 agentes revisam o código em paralelo: reuso, qualidade, eficiência |
| `/loop` skill | type `/loop 5m <prompt>` | Agenda execução recorrente de qualquer comando |
| `isolation: "worktree"` | AgentTool param | Agente trabalha em cópia isolada do repo sem afetar o código principal |
| `run_in_background: true` | AgentTool param | Dispara N agentes em paralelo, recebe notificação ao terminar |
| Auto-compact manual | `/compact` command | Força compactação quando contexto está grande demais |
| Plan mode | `/plan` command | Claude entra em modo de planejamento antes de executar |
| `CLAUDE_CODE_AUTO_COMPACT_WINDOW` | env var | Controla quando autocompact dispara |
| Team memory | settings.json | Memória compartilhada entre todos os devs do projeto |
| `MEMORY.md` frontmatter | files in memory dir | Tipagem de memórias: user/feedback/project/reference |

## Architecture in One Diagram

```
User input
    ↓
main.tsx (Commander.js CLI parser + React/Ink renderer init)
    ↓
QueryEngine.ts (core loop: API calls, streaming, tool loops, token counting)
    ↓
Tool dispatcher → Permission check → Tool execution → Result back to QueryEngine
    ↓
Hooks (PreToolUse / PostToolUse / Stop / UserPromptSubmit)
    ↓
Memory extraction (auto-extract on every turn end)
    ↓
Response rendered via React+Ink components in terminal
```
