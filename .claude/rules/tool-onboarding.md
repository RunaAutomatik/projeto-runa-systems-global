# Tool Onboarding Protocol

## Principle

A capability added to the ecosystem without documentation is a liability, not an asset.
The team cannot use what it does not know exists. The agent cannot use with skill what
it has not been taught to use correctly.

Every new tool, skill, MCP, CLI, framework, worker, or workflow MUST pass through this
protocol before its installation or creation is considered complete.

**"Installed" ≠ "Ready." Ready = Installed + Documented + Team Knows.**

---

## When This Applies

Trigger this protocol any time you:

| Action | Examples |
|--------|---------|
| Install a global or project skill | `npx skills add ...` |
| Configure a new MCP server | Add entry to `~/.claude.json` |
| Install a new CLI tool | `npm install -g`, `pip install`, `brew install` |
| Create a new agent | New `.yaml` in agents/ |
| Build a new worker | n8n workflow, automation script, Python worker |
| Add a new framework to the stack | New library with non-obvious usage patterns |
| Configure a new external API/integration | New API key, new service |

**Does NOT apply to:**
- Internal utility functions within a feature
- Package dependencies with no agent-facing API
- Upgrades to already-documented tools (update capability-map version only)

---

## Onboarding Tiers

Classify the new capability before proceeding:

| Tier | Complexity | Examples | Required |
|------|-----------|---------|---------|
| **T1 — Simple** | Single-purpose, self-evident usage | npm package, simple CLI flag | capability-map entry (1-2 lines) |
| **T2 — Standard** | Multiple use cases or non-obvious trigger | New global skill, new API integration | capability-map section + agent assignment |
| **T3 — Complex** | Multiple workflows, agents, anti-patterns | New MCP, new agent, multi-skill framework | capability-map + dedicated rule file + CLAUDE.md entry |

When in doubt, go **one tier up**.

---

## T1 Checklist — Simple

- [ ] Add 1-2 line entry to `capability-map.md` under the correct agent
- [ ] Specify: tool name, agent owner, when to use

**Example:**
```
| `lefthook` | @devops | Pre-commit hook runner — replaces manual pre-push checks |
```

---

## T2 Checklist — Standard

- [ ] Add section to `capability-map.md` with:
  - Agent owner
  - When to use / when NOT to use
  - CLI pattern or invocation example
  - Any known limitations
- [ ] Verify agent in `capability-map.md` quick-lookup table includes the new skill

**Example: new inference.sh skill added to MAYA**
```markdown
### `p-image` (new)
**Owner:** MAYA | **When:** Fast draft images | **App ID:** `pruna/p-image`
**When NOT:** Final deliverables (use flux-dev instead)
```

---

## T3 Checklist — Complex

- [ ] Create `.claude/rules/{tool-name}-usage.md` with:
  - [ ] What it is (1 paragraph, link to docs)
  - [ ] Current status (configured / pending setup)
  - [ ] Agent assignment table (who owns it, who can use it)
  - [ ] When to use / when NOT to use
  - [ ] Decision tree (if multiple similar tools exist)
  - [ ] Workflow(s) — step-by-step execution pattern
  - [ ] Anti-patterns (what breaks, what to avoid)
  - [ ] Product application (which RUNA product benefits)
- [ ] Update `capability-map.md`:
  - [ ] Add to Quick Lookup table (agent row)
  - [ ] Add dedicated section if tool has 3+ use cases
  - [ ] Update "Last updated" date
- [ ] Update `CLAUDE.md`:
  - [ ] Add row in Rules System table pointing to new rule file
- [ ] Commit with message: `docs({tool}): T3 onboarding — rule + capability-map + CLAUDE.md`

---

## Enforcement

### Who enforces:
- **Any agent** that installs or creates a new capability is responsible for onboarding it
- **@devops (Gage)** gates commits: if a capability was added (new file, new config, new dependency) without a corresponding capability-map update, flag before pushing
- **@aiox-master (Orion)** enforces at framework level

### Commit convention:
```
docs({tool-name}): T{tier} onboarding — {what was documented}
```

Examples:
```
docs(stitch): T3 onboarding — rule + capability-map + CLAUDE.md
docs(lefthook): T1 onboarding — capability-map entry
docs(elevenlabs-stt): T2 onboarding — capability-map section + MAYA assignment
```

### Gate rule:
If a commit adds any of the following without a corresponding `docs(...)` commit or
inline documentation update, it is **incomplete** and should be flagged:

- New entry in `~/.claude.json` (mcpServers)
- New global skill (`~/.agents/skills/` or `~/.claude/skills/`)
- New project skill (`.claude/skills/`)
- New CLI binary (confirmed by `which {tool}` returning a path)
- New n8n workflow saved
- New agent `.yaml` file

---

## Onboarding Debt Register

Capabilities that are installed but NOT yet fully onboarded:

| Tool | Tier | Status | Missing |
|------|------|--------|---------|
| `StitchMCP` | T3 | ⚠️ MCP not configured | Setup at labs.google.com/stitch |
| `@21st-dev/magic` | T3 | ⚠️ API key missing | Get key at 21st.dev console |

> When an item is resolved, move it out of this table and ensure its rule file exists.

---

## Reference Files

| What | Where |
|------|-------|
| Agent → tool matrix | `.claude/rules/capability-map.md` |
| Example T3 rule file | `.claude/rules/stitch-usage.md` |
| inference.sh skills | `.claude/rules/inference-sh-usage.md` |
| MCP config rules | `.claude/rules/mcp-usage.md` |
