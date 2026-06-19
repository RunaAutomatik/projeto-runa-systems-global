---
paths: **/*
---

# Obsidian Document Governance — Anti-Duplication Protocol

## Core Rule: Check Before Create

Before creating ANY document in SÍRIOS, run a search:

```bash
# Search by tool name, technology, or topic keyword
grep -ri "{keyword}" "SÍRIOS/RUNA SYSTEMS/Skills/" --include="*.md" -l
grep -ri "{keyword}" "SÍRIOS/RUNA SYSTEMS/Templates/" --include="*.md" -l
```

Or use the Grep tool: search for the tool/technology name across the destination folder.

**If a similar doc exists → complement it or move it. Never create a duplicate.**

---

## Document Taxonomy

Three document types. Three locations. No overlap.

| Type | Location | Language | Audience | Frontmatter `type` |
|------|----------|----------|----------|-------------------|
| **Internal reference** | `SÍRIOS/RUNA SYSTEMS/Skills/` | English | Agents, Arthur, future reference | `skill-doc` |
| **Reusable template** | `SÍRIOS/RUNA SYSTEMS/Templates/` | English (base) | Generates PT version for mentee | `template` |
| **Mentee deliverable** | `SÍRIOS/MENTORADOS/{name}/📦 entregáveis/` | Portuguese | The mentee directly | `session-deliverable` |

### Decision Tree

```
"Who will read this?"
  ├── Agent / Arthur / future session reference
  │     → Skills/ (English, type: skill-doc)
  │
  ├── Template to reuse across multiple mentees
  │     → Templates/ (English, type: template)
  │
  └── Specific mentee, specific session
        → MENTORADOS/{name}/📦 entregáveis/ (Portuguese, type: session-deliverable)
```

---

## Naming Conventions

### Skills/ (internal reference)
- Pattern: `Skills {Tool Name}.md` (PascalCase after "Skills")
- Examples: `Skills NotebookLM MCP.md`, `Skills Higgsfield MCP.md`
- Check existing files before naming — match the dominant convention in the folder

### Templates/
- Pattern: `template-{tool-name}-{purpose}.md` (lowercase-with-hyphens)
- Examples: `template-notebooklm-install-guide.md`, `template-mcp-setup.md`

### MENTORADOS/{name}/📦 entregáveis/
- Pattern: `{topic}-{context}.md` (lowercase-with-hyphens, descriptive)
- Examples: `notebooklm-fix-sessao.md`, `n8n-primeiro-workflow.md`

---

## When to Create a Subfolder in Skills/

Create a subfolder **only** when there are 3+ documents covering the same tool or topic:

```
Skills/
└── NotebookLM MCP/          ← subfolder threshold: 3+ docs
    ├── Skills NotebookLM MCP.md      (reference)
    ├── Skills NotebookLM Workflows.md (workflows)
    └── Skills NotebookLM Auth.md     (auth deep-dive)
```

At 1–2 docs: keep flat, no subfolder.

---

## Complement vs. Replace

When a doc already exists and new information is available:

| Situation | Action |
|-----------|--------|
| New troubleshooting section | Add to existing doc under new `##` heading |
| New tool version with breaking changes | Add versioned note at top + update sections |
| Doc is outdated but structure is right | Edit in place, update `date:` frontmatter |
| Doc serves wrong audience (e.g., PT internal) | Move to correct location, update frontmatter |
| Content is fully covered by existing doc | Do NOT create — link to existing instead |

---

## Language Policy Reminder

Internal docs violating the language rule (Portuguese in Skills/) must be moved to Templates/ or MENTORADOS/ on detection. Do not leave Portuguese content in Skills/.

See: `language-policy.md`
