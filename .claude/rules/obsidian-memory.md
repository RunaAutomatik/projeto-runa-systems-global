# Obsidian as Project Memory

## Core Rule

ALL documents generated in this project must be saved in Obsidian.

Vault: `C:/runa-systems-global/SÍRIOS/`
Local API: `https://localhost:27124`

---

## Requirements

- Every document, spec, decision, analysis or report generated → save as `.md` in the vault
- Always prefer `.md` over other formats to enable agent search
- Use YAML frontmatter with `date`, `tags` and `project` on every new document
- Never create documentation only outside the vault — Obsidian is the source of truth
- All documents written in English (see language-policy.md)

## Date Injection — MANDATORY

NEVER hardcode dates in documents. Always resolve the current date dynamically:

| Context | Variable |
|---------|----------|
| Obsidian template | `{{date:YYYY-MM-DD}}` |
| Bash script | `$(date +%Y-%m-%d)` |
| Agent creating via CLI | `obsidian create path="..." content="---\ndate: $(date +%Y-%m-%d)\n..."` |
| Agent writing via Write tool | Read current date from system context before writing |

Agents must always call `date +%Y-%m-%d` or read from system context before writing any document with a `date:` frontmatter field.

## Vault Structure

```
SÍRIOS/                 ← primary vault (knowledge, docs, memory)
├── 📅 Diário/          ← end-of-day session notes (user-authored, pt-BR allowed)
├── 📐 Projetos/        ← specs, PRDs, roadmaps
├── 📚 Referências/     ← research, links, external documentation
├── 📋 Agentes/         ← agent cards and documentation
├── 🔗 Templates/       ← reusable templates
├── 🛠️ Skills/          ← skills and agent documentation
└── 🧠 Orquestrador/    ← orchestrator agent memory and context

bases/                  ← AKASHA vault (knowledge bases for agents)
├── 📚 Alex Hormozi/    ← Hormozi frameworks
├── 📚 Vendas Alto Ticket/ ← RECA/RALOCA/RADOVECA
├── 🔗 Index/           ← knowledge base index
└── 🧠 Agent Knowledge Maps/ ← agent-specific knowledge (FREYJA, etc.)
```

## Work Diary

The diary (`📅 Diário/`) is the orchestrator's cognitive memory:

| Command | When to use |
|---------|-------------|
| `npm run dia:abrir` | Start of each work session |
| `npm run dia:fechar` | End of each work session |

- **`dia:abrir`** — reads previous session note, surfaces pending items and resumption context
- **`dia:fechar`** — creates the day's note with cognitive summary, conclusions, pending items, future tasks

## File Naming

- Diary: `YYYY-MM-DD.md` (e.g. `2026-03-17.md`)
- Specs/PRDs: `project-name.md`
- Decisions: `adr-NNN-title.md`
- Analysis: `analysis-YYYY-MM-DD-topic.md`

## Obsidian CLI

Always use the native CLI to create/read notes via agents:

```bash
obsidian create path="📐 Projetos/my-doc.md" content="..."
obsidian read path="📅 Diário/2026-03-17.md"
obsidian search query="pending"
```
