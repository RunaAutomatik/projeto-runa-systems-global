# Parallel Agent Work Governance

This file records the AIOX-side reference for shared work between Codex, Claude Code, AIOX agents, and other LLM workers.

## Canonical Policy

The operational rule lives at `.claude/rules/parallel-agent-work.md` and is referenced from `AGENTS.md` and `.claude/CLAUDE.md`.

## Core Rules

- `.aiox-core` remains the canonical framework source and protected area.
- `.claude`, `.codex`, and `.agents` are consumer/synchronization layers.
- Before large edits, agents should check `git status`, identify the active story or governance task, and state the intended work area.
- Parallel workers must avoid editing the same story or source file at the same time.
- Unrelated dirty worktree changes must be preserved.
- Shared durable memory for this policy is stored at `D:\Runa\memories\runa-aiox-parallel-agent-governance.md`.
