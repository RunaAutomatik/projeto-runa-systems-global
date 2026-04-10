---
paths: **/*
---

# PULSE Token Efficiency Protocol — AIOX Adaptation

Source: PULSE-TOKEN-EFFICIENCY-COMPACTOR.md v1.0

## 10 Commandments (always active)

1. Don't read files already in context this session.
2. Don't read whole files when you need 5 lines — use Grep with offset/limit.
3. Don't write comments that say what the code says. Only WHY, never WHAT.
4. Don't use 10 lines when 2 do the same thing.
5. Don't repeat yourself — extract, template, configure.
6. Don't load everything at boot — lazy load agents/rules on demand.
7. Don't write prose when structured output (table, list) works.
8. Don't preamble, recap, or narrate your process.
9. Don't keep dead code — delete it. Git has history.
10. Don't sacrifice quality for brevity — same output, fewer tokens.

---

## Context Window Budget

```
15% — System prompt + CLAUDE.md + rules
10% — Memory files (read index, load files on demand)
 5% — Agent definitions (read index first, full file only when activating)
60% — ACTUAL WORK (code, analysis, output)
10% — Buffer (tool responses, conversation)
```

If 40%+ of tokens burn on reading files before doing work → protocol violation.

---

## File Reading Strategy

| Instead of | Do this |
|-----------|---------|
| Read entire file | `Grep` for the specific function/section |
| Re-read file written this session | Skip — you know what's in it |
| Read config file from memory | `Grep "^KEY=" .env` |
| Read agent definition not yet active | Read index only; load full on activation |
| `cat package.json` | `Grep` for the specific dependency |

---

## Memory File Compaction Schedule

Memory files must stay under 200 lines. Weekly compaction:

1. Any memory file exceeding 200 lines → compact to table/reference format
2. Outdated project state entries → archive or delete (stale after 30 days)
3. Duplicate information across files → consolidate or cross-reference

Current status: `reference_inferencesh_commands.md` compacted 300→100 lines (2026-04-10).

---

## Code Compaction Rules

**Comments:** Delete obvious comments. Keep only WHY, never WHAT.
```
✗ // Loop through the array
✓ // Reverse iterate — removal during forward pass shifts indices
```

**Variables:** Inline single-use variables.
```
✗ const x = getData(); return transform(x);
✓ return transform(getData());
```

**Conditionals:** Optional chaining, nullish coalescing, ternaries.
```
✗ if (obj && obj.prop) { result = obj.prop; } else { result = "default"; }
✓ const result = obj?.prop ?? "default";
```

**Objects:** Shorthand, spread, destructuring.
```
✗ const obj = { name: name, email: email };
✓ const obj = { name, email };
```

**Dead code:** Delete it. No `// removed` comments, no commented-out blocks.

---

## Output Compression

When responding to the user:
- Start doing the work, no preamble
- Use tables over paragraphs for comparisons
- Use code over descriptions for technical solutions
- One-liners for status: `DONE: X fixed, Y deployed` not prose recap
- Structured status: `BROKEN: service (down), db pool (95%)` not sentences

---

## Agent Prompt Target

Agent prompts in `.aiox-core/agents/` should be under 200 tokens.

Compressed format:
```
Role: [agent role]
Check: [what to verify]
Output: {file, line, severity, issue, fix}
Rules: [key constraints]
```

Not prose paragraphs.

---

## Anti-Patterns in this Ecosystem

❌ Reading `capability-map.md` in full when checking one agent's tools — Grep for the agent name.
❌ Reading all memory files at session start — MEMORY.md index is enough; load files on demand.
❌ Re-reading settings.local.json after writing it — you just wrote it, skip the re-read.
❌ Loading full agent definitions for agents not yet activated this session.
❌ Writing verbose commit messages that repeat what the diff shows.