---
paths: **/*
---

# Parallel Agent Work

## Purpose

Codex, Claude Code, AIOX agents, and other LLM workers may operate in this project in parallel. They share the same AIOX source of truth and must coordinate through explicit workspace hygiene.

## Source of Truth

- `.aiox-core` is the canonical AIOX framework source for agents, tasks, workflows, templates, and governance.
- `.claude`, `.codex`, and `.agents` are consumer/synchronization layers. Do not treat them as independent authorities when they conflict with `.aiox-core`.
- `D:\Runa\memories\runa-aiox-parallel-agent-governance.md` is the shared durable memory for this cross-agent policy.

## Parallel Work Rules

Before large edits or multi-file changes:

1. Check `git status`.
2. Identify the active story or explicitly state that the task is governance/saneamento work.
3. Declare the intended area of work before editing.
4. Avoid editing the same story or source file another active agent is editing.
5. Preserve unrelated worktree changes. Assume they belong to the user or another agent.

## Protected Areas

- Treat `.aiox-core` as protected. Only edit it when the user explicitly asks for AIOX framework/config governance or an AIOX task requires it.
- Prefer project-level rules, data, docs, or generated consumer layers over direct framework-core edits.
- Never run destructive git cleanup or reset commands to resolve parallel-agent drift.

## Handoff

When switching agents or handing work to another LLM:

- Summarize changed files, current story, branch/status, decisions, blockers, and next action.
- Point the next worker to this rule and the shared memory in `D:\Runa`.
- If there is conflict between Codex memory and repo rules, repo rules win for this project.
