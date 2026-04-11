---
date: 2026-04-10
tags: [claude-code, config, otimizacoes, settings, mcp]
project: runa-systems-global
type: optimization-backlog
---

# Claude Code — Optimization Backlog

Pending optimizations for the Claude Code configuration system.
Applied optimizations are moved to the history section at the bottom.

---

## Pending

### #4 — Figma MCP Pre-approvals

**Status:** Deferred — Figma not actively used as of 2026-04-10
**File:** `.claude/settings.local.json` → `permissions.allow`
**Trigger:** Apply when `@ux-design-expert` starts using Figma regularly

**What to add:**
```json
"mcp__claude_ai_Figma__get_design_context",
"mcp__claude_ai_Figma__get_screenshot",
"mcp__claude_ai_Figma__get_metadata",
"mcp__claude_ai_Figma__get_figjam",
"mcp__claude_ai_Figma__get_variable_defs",
"mcp__claude_ai_Figma__search_design_system",
"mcp__claude_ai_Figma__whoami"
```

**Why:** Each Figma tool call prompts for confirmation if not pre-approved. These 7 are read-only tools — safe to pre-approve. Write tools (`create_new_file`, `generate_diagram`, etc.) should remain requiring confirmation.

**Pre-condition:** StitchMCP must also be configured before Figma workflow is active.
See: `.claude/rules/stitch-usage.md`

---

## Applied History

### 2026-04-10 — Round 1

| Optimization | Change | Impact |
|---|---|---|
| `autoCompactWindow` | Migrated from `env.CLAUDE_CODE_AUTO_COMPACT_WINDOW` to native key in `settings.json` | Cleaner config, avoids env var parsing |
| Redundant allow entries | Removed 170+ specific entries from `settings.local.json` | Eliminated bloat; broad allows in `settings.json` already cover everything |
| code-intel hook typo | Fixed `.aios-core` → `.aiox-core` in `code-intel-pretool.cjs` | Hook was silently broken on every Write/Edit; now active |
| Stop hook async | Added `"async": true` to stop-notification hook | Prevents blocking the Stop event |

### 2026-04-10 — Round 2

| Optimization | Change | Impact |
|---|---|---|
| PreCompact hook removed | Removed dead stub from `settings.local.json` | Eliminates 10s wasted timeout on every compaction (runner never existed) |
| Calendar pre-approvals | Added 7 missing Calendar tools | No more confirmation prompts for `list_events`, `get_event`, `update`, `delete`, etc. |
| Gmail pre-approvals | Added 9 Gmail tools | All Gmail read/label/draft tools pre-approved |

### 2026-04-10 — Round 3

| Optimization | Change | Impact |
|---|---|---|
| Supabase complete | Added 13 missing Supabase tools | `get_project`, `get_logs`, `list_migrations`, `generate_typescript_types`, `search_docs`, `get_advisors`, `deploy_edge_function`, etc. |
| NotebookLM complete | Added 8 missing NotebookLM tools | `select_notebook`, `get_notebook`, `search_notebooks`, `add_notebook`, `update_notebook`, `remove_notebook`, etc. |
| Synapse hook timeout | Reduced `UserPromptSubmit` timeout `10 → 6` | Aligns with internal 5s timeout + 1s buffer; avoids wasted wait |
