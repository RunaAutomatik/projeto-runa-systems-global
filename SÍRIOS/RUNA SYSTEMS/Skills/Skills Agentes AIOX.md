---
date: 2026-05-24
tags: [skills, aiox, agents, orchestration]
project: runa-systems-global
type: skill-doc
---

# Skills AIOX Agents

> Synkra AIOX agent system — 11 specialized agents with defined scopes, exclusive operations, and RUNA-specific use cases.

---

## Activation Syntax

```
@agent-name        — activate inline (e.g., @dev, @qa, @architect)
/AIOX:agents:name  — activate via skill path
*command           — agent command (e.g., *help, *task, *exit)
```

---

## Agent Roster

| Agent | Persona | Primary Scope |
|-------|---------|--------------|
| `@dev` | Dex | Code implementation |
| `@qa` | Quinn | Tests and quality |
| `@architect` | Aria | Architecture and technical design |
| `@pm` | Morgan | Product Management, spec pipeline |
| `@po` | Pax | Product Owner, story/epic validation |
| `@sm` | River | Scrum Master, story creation |
| `@analyst` | Alex | Research and analysis |
| `@data-engineer` | Dara | Database design and SQL |
| `@ux-design-expert` | Uma | UX/UI design |
| `@devops` | Gage | CI/CD, git push (EXCLUSIVE) |
| `@aiox-master` | Orion | Orchestrator, framework governance |

---

## Exclusive Operations

| Agent | Exclusive Authority |
|-------|-------------------|
| **@devops** | `git push`, `gh pr create/merge`, MCP add/remove/configure, CI/CD, releases |
| **@pm** | `*execute-epic`, `*create-epic`, spec pipeline ownership, requirements gathering |
| **@po** | `*validate-story-draft` (10-point checklist), backlog prioritization |
| **@sm** | `*draft` / `*create-story` from epic/PRD |
| **FREYJA** | `*brief-maya`, `*av-review`, `*approve-output` — AV review gate for @arthsystems_ |
| **MAYA** | All AV generation (image, video, audio) |

---

## Story Development Cycle (SDC)

```
@sm *draft → @po *validate → @dev *develop → @qa *qa-gate → @devops *push
```

---

## Universal Commands (all agents)

| Command | Action |
|---------|--------|
| `*help` | Show available commands |
| `*exit` | Exit agent mode |
| `*task <name>` | Execute specific task |
| `*aiox-master *status` | Show framework status |

---

## RUNA SYSTEMS Use Cases

| Agent | RUNA Application |
|-------|-----------------|
| @dev | Build workers (instagram-worker, content-worker), implement Command Center |
| @qa | Gate all workers before production — 7-point QA checklist |
| @architect | Define squad architecture for client's 8 neural agents |
| @pm | Manage RUNA product epics (CREATOR$, $QUAD, AGENT$) |
| @po | Validate stories for each neural agent build |
| @sm | Draft stories from product PRDs |
| @analyst | Research competitive intelligence for ARES, market data for FREYJA |
| @data-engineer | Supabase schema for client data, RLS policies, migration planning |
| @ux-design-expert | DESIGN.md for client portals, Command Center UI |
| @devops | All git push + PR flows, hookify hook configuration |
| @aiox-master | Framework governance, cross-agent orchestration, constitutional enforcement |

---

## `skill-converter` — claude.ai Skill → Claude Code Converter

**Skill:** `/skill-converter` | **Owner:** @aiox-master (Orion)
**Trigger:** "converter skill para Claude Code", "skill do claude.ai para claude code", "adaptar skill para CLI"
**Part of:** Framework tooling (meta-skill — converts skill format, not a domain skill)

Converts skills written in the `claude.ai` SKILL.md single-file format into the Claude Code
folder format with `scripts/` and `references/` subdirectories. Enables skills built for the
web interface to be used directly inside Claude Code sessions.

```
/skill-converter
# Input: claude.ai SKILL.md file
# Output: ~/.claude/skills/{skill-name}/
#   ├── SKILL.md          (adapted entrypoint)
#   ├── scripts/          (executable code extracted from SKILL.md)
#   └── references/       (reference docs, model catalogs, prompt libraries)
```

**When to use:**
- A new skill is delivered as a single SKILL.md (claude.ai format) and needs Claude Code installation
- Agency skills or community skills need to be ported to the project's stack
- An existing global skill needs to be forked and adapted for a specific project context

**When NOT to use:**
- Skills already in Claude Code format — install directly with `cp -r`
- Skills that require browser interaction — Claude Code runs headless

---

## Related

- Rule: `.claude/rules/agent-authority.md` — detailed delegation matrix
- Rule: `.claude/rules/workflow-execution.md` — SDC, QA Loop, Spec Pipeline, Brownfield
- Rule: `.claude/rules/agent-handoff.md` — context compaction on agent switch
