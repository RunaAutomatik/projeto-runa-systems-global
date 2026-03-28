# Capability Map — Tool & Skill Assignment

## Reference

Full map: `SÍRIOS/📐 Projetos/capability-map.md`

Before executing ANY task, check the capability map to identify the correct tool, skill, or MCP.
Never guess or reinvent — if the capability exists, use it.

## Quick Lookup by Agent

| Agent | Primary Skills | Primary MCPs |
|-------|---------------|-------------|
| FREYJA | ads-generate, ads-photoshoot, ads-dna, seo-content, ui-ux-pro-max, obsidian-markdown | Supabase |
| HERMES | (none — uses MCPs) | n8n-mcp, Gmail, Google Calendar |
| ARES | ads-*, ads-plan, ads-competitor, ads-meta, ads-google, spec-writing | — |
| HELIOS | seo-* (all 13 sub-skills) | — |
| ALEX | defuddle, seo-competitor-pages | notebooklm-mcp |
| ORION | obsidian-cli, obsidian-markdown, json-canvas, obsidian-bases, agent-workflows | Gmail, Google Calendar, Netlify |
| @dev | ui-ux-pro-max, frontend-design, agent-sdk-dev, video-to-website | Figma, Supabase, Neon |
| @qa | code-review, testing-strategy, pr-review-toolkit | — |
| @devops | devops-automation, commit-commands, hookify | Netlify |
| @architect | architecture-design, agent-workflows | — |
| @data-engineer | (code tools) | Supabase, Neon |

## Tool Selection Priority (always follow this order)

1. **Native Claude Code tools** (Read, Write, Edit, Bash, Grep, Glob) — fastest, local
2. **Project skills** (`.claude/skills/`) — workflow-specific
3. **Global skills** (`~/.claude/skills/`) — ads, seo, obsidian, ui-ux
4. **MCPs** — only for external services (n8n, Supabase, Figma, etc.)
5. **Plugins** — for structured workflows (code-review, commit-commands, etc.)

## Gaps (not yet covered)

Video generation, TTS/voice cloning, Twitter automation, AI image upscaling, RAG over vault.
→ Pending: inference.sh account (user evaluating)
