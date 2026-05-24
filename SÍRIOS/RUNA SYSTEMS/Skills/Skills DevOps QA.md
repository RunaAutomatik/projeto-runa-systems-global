---
date: 2026-05-24
tags: [skills, devops, qa, git, code-review, hooks, security]
project: runa-systems-global
type: skill-doc
---

# Skills DevOps & QA

> Git workflow, code review, and behavior governance plugins — primary owners: @devops (Gage) and @qa (Quinn).
> Plugins path: `~/.claude/plugins/`
> Activation: `/plugin-name:command` or `/command`

---

## commit-commands — Git Workflow

**Primary agent:** @devops (Gage)

| Command | Purpose |
|---------|---------|
| `/commit` | Conventional Commits with co-authorship, staged files, structured message |
| `/commit-push-pr` | Atomic commit → push → PR in sequence |
| `/clean_gone` | Remove local branches marked `[gone]` (deleted on remote, still local) |

**Agent gate:** @dev runs `/commit` only. Only @devops runs `/commit-push-pr` and `/clean_gone`.

---

## code-review — PR Review

**Primary agent:** @qa (Quinn)

| Command | Purpose |
|---------|---------|
| `/code-review:review-pr` | Full PR review — bugs, security, quality, tests, types, silent failures |

---

## pr-review-toolkit — Multi-Dimension Review

**Primary agent:** @qa (Quinn)

| Command | Purpose |
|---------|---------|
| `/pr-review-toolkit:review-pr` | Parallel agents: code-reviewer, simplifier, comment-analyzer, test-analyzer, silent-failure-hunter, type-design-analyzer |

Use `pr-review-toolkit` over `code-review` for: any worker PR before prod deploy, Command Center changes before client-facing release.

---

## hookify — Behavior Governance

**Primary agent:** any agent after a behavioral deviation

| Command | Purpose |
|---------|---------|
| `/hookify` | Analyze current conversation, create hooks to prevent recurrence of unwanted behaviors |
| `/hookify:list` | Show all active hooks with their rules |
| `/hookify:configure` | Enable/disable specific hooks interactively |

**RUNA uses:** Lock behaviors that deviated — agent wrote Portuguese in Skills/, agent pushed without @devops, agent created file outside vault.

---

## ralph-loop — Continuous Refinement

**Primary agent:** any

| Command | Purpose |
|---------|---------|
| `/ralph-loop` | Execute a prompt or slash command in loop with configurable interval |

**Example:** `/ralph-loop 10m /ads meta` — check Meta campaigns every 10 minutes.

---

## security-guidance — Security

**Activation:** Automatic when working with auth, tokens, APIs, user inputs

**Scope:** SQL injection, XSS, token exposure, command injection prevention

**RUNA uses:** instagram-worker, content-worker, Command Center — all workers handling real client data must pass security-guidance before production deploy.

---

## Quick Reference

| Plugin | Primary Agent | Trigger |
|--------|--------------|---------|
| `commit-commands` | @devops | `/commit`, `/commit-push-pr`, `/clean_gone` |
| `code-review` | @qa | `/code-review:review-pr` |
| `pr-review-toolkit` | @qa | `/pr-review-toolkit:review-pr` |
| `hookify` | any | `/hookify` |
| `ralph-loop` | any | `/ralph-loop` |
| `security-guidance` | auto | automatic |

---

## RUNA Use Cases

| Plugin | Application |
|--------|-------------|
| `commit-commands` | Committing carousel pin briefings, worker features with traceable git history |
| `code-review` | Gate instagram-worker + content-worker PRs before merge |
| `pr-review-toolkit` | Deep review of Command Center changes before client-facing deploy |
| `hookify` | After any agent deviation, lock the behavior via hook (fastest prevention path) |
| `security-guidance` | Validate all workers handling real client data before production |

---

## `arte-final` — Pre-Press Technical Verification

**Skill:** `/arte-final` | **Owner:** @qa (Quinn)
**Trigger:** "arte final", "verificar arquivo para impressão", "preflight do arquivo", "checar PDF"
**Part of:** Agency Visual Identity Pipeline (final step — verifies files before sending to printer)

Inspects real PDF/AI files using Bash + `pdfinfo` (poppler-utils) + ImageMagick. Does NOT generate artwork — it validates print-ready files for spec compliance.

```
/arte-final ./outputs/[cliente]/logo/logo-final.pdf
# Checks: resolution (≥300 DPI), color mode (CMYK vs RGB), bleed (3mm), safe zone,
#          embedded fonts, file size, layers/overprints
# Saves: outputs/[cliente]/arte-final/ficha-tecnica.md
```

**Checks performed:**
| Check | Spec |
|-------|------|
| DPI | ≥ 300 for print, ≥ 72 for screen |
| Color mode | CMYK for offset printing, RGB for digital |
| Bleed | 3mm standard |
| Safe zone | Content ≥ 5mm from trim |
| Embedded fonts | No missing fonts |
| Transparency | Flagged (printing risk) |

**Dependencies:** `pdfinfo` (poppler-utils) + `identify` (ImageMagick) — must be installed.
```bash
sudo apt install poppler-utils imagemagick  # Linux
brew install poppler imagemagick            # macOS
```

**Output:** `ficha-tecnica.md` with pass/fail per check + corrective notes.

---

## Related

- Rule: `.claude/rules/agent-authority.md` — @devops exclusive authority over git push/PR
- Skill: `Skills Dev Plataforma.md` — plugin-dev, agent-sdk-dev, feature-dev
- Skill: `Skills gstack.md` — `/review` (gstack code review), `/cso` (security audit OWASP)
