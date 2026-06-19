---
date: 2026-05-01
tags: [runa-systems, protocol, deprecation, kill-switch, lifecycle]
project: runa-systems-global
type: protocol
produto: [[runa-systems-hub]]
---

# Deprecation Protocol — Kill Switch

Everything in the RUNA SYSTEMS ecosystem has a lifecycle. When the cost of maintaining something exceeds the benefit of operating it, it gets deprecated. This protocol defines the criteria, process, and documentation requirements for all deprecations.

---

## Kill Switch Criteria

A component is a Kill Switch candidate if ANY of the following is true:

| Criterion | Threshold | Check frequency |
|-----------|-----------|----------------|
| Inactivity | Not used/executed in 30+ days | Monthly |
| No KPI | No measurable output tracked | At any point |
| No owner | No assigned human responsible | At any point |
| Cost > benefit | Maintenance cost > value delivered | Quarterly |
| Failure rate | Technical errors > 10% over 7 days | Weekly |
| Superseded | A better solution now covers the same use case | At discovery |

**Maintenance cost includes:** human time to supervise, computational cost, time to fix errors, cognitive load of keeping the component in mind.

**Value delivered includes:** time saved, revenue enabled, errors prevented, decisions improved.

---

## Deprecation Process

### Step 1 — Proposal

Any agent or human can propose deprecation. Document in `decisions/log.md`:

```markdown
## DEPRECATION PROPOSAL — [Component Name]

Date: YYYY-MM-DD
Proposed by: @agent-name or [human]
Component: [name, type, location]
Criterion triggered: [which Kill Switch criterion applies]

Evidence:
- [Specific data supporting the criterion — usage logs, cost figures, etc.]

Impact analysis:
- Who uses this: [list of agents/humans/processes that depend on it]
- What breaks if removed: [specific downstream effects]
- Migration path: [what replaces it, if anything]
```

### Step 2 — Review

**Reviewer:** @devops (Gage)

**Review criteria:**
- Is the criterion clearly met? (not borderline)
- Is the impact analysis complete?
- Is there a migration path (or is none needed)?
- Is this the right time to deprecate? (sprint, client delivery, etc.)

**Decision options:**
- APPROVE — proceed to deprecation
- DEFER — valid but wrong timing, set a review date
- REJECT — criterion not clearly met, request more evidence

**Review SLA:** 48 hours from proposal.

### Step 3 — Deprecation

After @devops approves:

1. **Notify affected parties** — any agent or process that depends on the component
2. **Remove or archive** — delete if clearly unused, archive if historical value
3. **Update all references** — remove from capability-map, rules files, CLAUDE.md
4. **Commit** — with message format: `chore(deprecate): [component] — [reason]`
5. **Log in decisions/log.md** — final deprecation entry with date and replacement

---

## Formal Deprecation Register

### Currently Deprecated

| Component | Type | Deprecated | Reason | Replacement |
|-----------|------|-----------|--------|-------------|
| ALPHA® | GPT-based assistant | 2026-05-01 | Superseded by AIOX multi-agent stack | FREYJA + ARES + squad agents |
| MAYA® | GPT-based assistant | 2026-05-01 | Superseded by AIOX multi-agent stack | MAYA (AIOX agent) + inference.sh |
| ICARUS® | GPT-based assistant | 2026-05-01 | Superseded by AIOX multi-agent stack | AGENT$ + squad architecture |
| ManyChat | External platform | 2026-04-01 | Replaced by Zernio API integration | mcp__zernio__* tools |
| squads-v1/ | Legacy squad configs | 2026-04-01 | Replaced by AIOX framework | `.aiox-core/agents/` |
| estrategia-produtos-separados/ | Legacy product strategy | 2026-04-01 | Replaced by RUNA SYSTEMS unified hub | `runa-systems-hub.md` |

### Kill Switch Candidates (Under Review)

| Component | Criterion | Evidence | Review Date | Status |
|-----------|-----------|---------|------------|--------|
| n8n-mcp | Inactivity | Listed in disabledMcpjsonServers — not used | 2026-06-01 | Monitoring |

---

## Decision Log Entry Template

When a deprecation is complete, add to `decisions/log.md`:

```markdown
## [YYYY-MM-DD] — Deprecation: [Component Name]

**Deprecated:** [component name]
**Type:** [agent / worker / tool / MCP / strategy / protocol]
**Criterion:** [which Kill Switch criterion triggered]
**Replacement:** [what takes over the use case, or "none needed"]
**Evidence:** [specific data that confirmed the criterion]
**Impact:** [what was affected and how it was handled]
**Approved by:** @devops
**Commit:** [commit hash or reference]
```

---

## Quarterly Audit Checklist

Run this audit every quarter (next: 2026-08-01):

```
[ ] Review all Phase 4 workers — confirm owner, KPI, Kill Switch documented
[ ] Scan decisions/log.md for components deprecated 90+ days ago — verify no lingering references
[ ] Check capability-map.md for tools not used in 90+ days — add to Kill Switch candidates
[ ] Review Kill Switch candidates — advance to deprecation or reset monitoring period
[ ] Check all rules files for references to deprecated components — remove
[ ] Update this file: deprecation register + next audit date
```

---

## Reference

- Worker lifecycle: [[worker-deployment-protocol]] — Bike Method
- Three Ms origin: Kill Switch principle — Machine section, Module 00 curriculum
- Decisions log: `decisions/log.md`
- Capability map: `.claude/rules/capability-map.md`
