---
date: 2026-05-01
tags: [runa-systems, protocol, worker, bike-method, autonomy, deployment]
project: runa-systems-global
type: protocol
produto: [[runa-systems-hub]]
---

# Worker Deployment Protocol — Bike Method

Every worker deployed in the RUNA SYSTEMS ecosystem must pass through 4 maturity phases before operating autonomously. No worker ships at Phase 4. No worker is exempt from this protocol.

---

## The 4 Phases

### Phase 1 — Training Wheels

**Definition:** Every output is reviewed by a human before it reaches its destination (client, public, database).

**Trigger to start:** Worker is newly deployed or significantly modified.

**Review cadence:** 100% of outputs.

**Advance criteria:** N consecutive outputs approved without intervention.

| Worker type | N (advance threshold) |
|-------------|----------------------|
| Content (carousel, caption, post) | 10 consecutive approved |
| Client-facing (DM, email, proposal) | 15 consecutive approved |
| Data (database writes, migrations) | 20 consecutive approved |
| Publishing (Instagram, social) | 10 consecutive approved |

**What counts as "approved":** Output sent/published without modification or with only minor wording edits (not structural changes).

**What resets the counter:** Any output that required structural change, caused a complaint, or was rejected.

---

### Phase 2 — Guided

**Definition:** Human reviews 1 in every 5 outputs. The other 4 go directly to their destination.

**Trigger to advance from Phase 1:** Advance criteria met (see above).

**Review cadence:** Random sampling — 20% of outputs.

**Advance criteria:** 7 consecutive days with no issues found in sampled outputs.

**Issue definition:** Sampled output that would have been rejected or required significant change.

**What resets the timer:** Any sampled output with an issue — 7-day counter restarts.

---

### Phase 3 — Watched

**Definition:** Worker operates autonomously. Human reviews weekly KPI report and intervenes only on exceptions.

**Trigger to advance from Phase 2:** 7 clean days completed.

**Review cadence:** Weekly report review (automated or manual).

**KPI report must include:**
- Volume: outputs produced this week
- Success rate: % that reached destination without flags
- Errors: any failures, timeouts, or flagged outputs
- Drift: any output that felt off-brand or unexpected (subjective flag)

**Advance criteria:** 30 consecutive days with zero interventions required.

**What triggers intervention:** KPI falls below threshold (defined per worker), client complaint, or significant drift in output quality.

---

### Phase 4 — Hands-Off

**Definition:** Worker operates autonomously. Human monitors only if KPI drops. Kill Switch is active and documented.

**Trigger to advance from Phase 3:** 30 clean days completed.

**Review cadence:** On exception only (KPI alert or manual check).

**Requirements to maintain Phase 4:**
- Kill Switch documented (criteria + who can activate + what happens)
- KPI threshold defined and monitored
- Owner assigned (cannot be "nobody")
- Reviewed in quarterly protocol audit

---

## Required Fields in Worker Documentation

Every worker's `.md` documentation file MUST include this frontmatter block:

```yaml
bike-method-phase: 1         # 1=Training Wheels | 2=Guided | 3=Watched | 4=Hands-Off
phase-updated: YYYY-MM-DD    # Date of last phase change
phase-advance-criteria: "N outputs approved without intervention"
kill-switch:
  criteria: "KPI falls below X for Y days OR no owner assigned"
  activator: "@devops"
  on-activation: "stops immediately | completes current task | notifies owner"
kpi:
  metric: "success rate %"
  threshold: "≥ 95%"
  review-cadence: "weekly"
worker-owner: "@agent-name"
```

---

## Current Workers — Phase Status

| Worker | Port | Current Phase | Phase Since | Advance Criteria |
|--------|------|--------------|-------------|-----------------|
| instagram-worker | :3000 | Phase 1 — Training Wheels | 2026-04-01 | 10 consecutive approved publishes |
| content-worker | :3001 | Phase 1 — Training Wheels | 2026-04-01 | 10 consecutive approved carousel exports |

> **Note:** Both workers defaulting to Phase 1. Phase history begins from protocol adoption date (2026-05-01).

---

## Kill Switch Activation Protocol

**Criteria for activation (any of the following):**
- KPI falls below defined threshold for 3+ consecutive days
- Worker produces output that caused client complaint
- No assigned owner for 30+ days
- Cost to maintain exceeds benefit delivered (calculated quarterly)
- Technical failure rate > 10% over 7 days

**Activation process:**
1. Identify who activates: worker-owner or @devops
2. Stop worker immediately (or complete current task if mid-execution)
3. Document activation in `decisions/log.md`: date, reason, KPI at time of shutdown
4. Notify affected parties (FREYJA, HERMES, or client depending on scope)

**Reactivation process:**
1. Root cause identified and fixed
2. @devops approves reactivation
3. Worker restarts at Phase 1 (Training Wheels) — no phase carry-over after Kill Switch
4. Document reactivation in `decisions/log.md`

---

## Protocol Audit Schedule

This protocol is reviewed quarterly. On each review:

1. Check all workers in Phase 4 — confirm owner still active, KPI still tracked
2. Check workers stuck in Phase 1–2 for 60+ days — investigate why not advancing
3. Evaluate Kill Switch activations since last audit — extract learnings
4. Update worker documentation with current phase and advance criteria

Next audit: 2026-08-01

---

## Reference

- Bike Method origin: Three Ms — Machine principles (Module 00 curriculum)
- Kill Switch protocol: [[deprecation-protocol]]
- Workers directory: `tools/`
- Decisions log: `decisions/log.md`
