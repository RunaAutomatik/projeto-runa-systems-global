---
paths:
  - ".aiox-core/development/tasks/spec-gather-requirements.md"
  - "docs/stories/**"
---

# EAD Gate — Mandatory Phase 0 Before Spec Pipeline

## Rule

**Every spec pipeline execution MUST begin with an EAD Gate before Phase 1 (Context Detection).**

The EAD framework (Eliminate → Automate → Delegate) ensures that no story enters spec gathering for a process that should not exist, should be eliminated, or should be handled differently.

Automating waste is waste automated. The gate prevents this.

---

## When to Apply

This gate triggers when:
- @pm starts `*spec` or `*gather-requirements`
- A story is being created from a new feature request (not a bug fix or refactor)
- A new process, workflow, or automation is being specced

This gate does NOT apply to:
- Bug fixes (process exists, just broken)
- Refactors (process exists, just restructured)
- Infrastructure work (no process decision involved)

---

## EAD Gate Questions

Ask in sequence. Stop at the first decisive answer.

**Q1: Does this process/feature need to exist?**

Could it be eliminated entirely without impact on user or business value?

- If YES → **ELIMINATE**: Story does not advance. Document as CON-0 in requirements.json.
- If NO → continue to Q2.

**Q2: Is it repetible and measurable enough to automate?**

Does it produce consistent output from consistent input, without requiring human judgment?

- If YES → **AUTOMATE**: Continue to Phase 1. Tag story `ead:automate`.
- If NO → continue to Q3.

**Q3: Does it require human judgment, context, or relationship?**

Is the value in the judgment itself, not just the execution?

- If YES → **DELEGATE**: Continue to Phase 1. Tag story `ead:delegate`. Note: "delegate" means assign to a specific human role, not automate.

---

## Output

Add to `requirements.json` before Phase 1 output:

```json
"eadDecision": {
  "outcome": "eliminate | automate | delegate",
  "rationale": "one sentence explaining the decision",
  "decidedAt": "ISO timestamp",
  "decidedBy": "@pm"
}
```

For `eliminate` outcome, also add:

```json
"CON-0": {
  "type": "elimination",
  "description": "Process eliminated at EAD gate — does not add value",
  "rationale": "...",
  "eliminatedAt": "ISO timestamp"
}
```

---

## Agent Responsibility

| Agent | EAD Gate Role |
|-------|--------------|
| @pm (Morgan) | Applies the gate and records the decision |
| @po (Pax) | Validates the EAD decision during story validation (10-point checklist) |
| @dev (Dex) | Does NOT override EAD decisions — implementation only |
| @aiox-master | Can override EAD `eliminate` decision with documented justification |

---

## Override

If @pm determines the EAD gate should be bypassed:

```
--override-ead --override-reason "explanation"
```

Override is logged in requirements.json and reviewed by @po during story validation.

---

## Reference

- Three Ms curriculum: Module 00 — Method section (EAD principle)
- Spec pipeline: `.aiox-core/development/tasks/spec-gather-requirements.md` (Phase 1+)
- Story lifecycle: `.claude/rules/story-lifecycle.md`