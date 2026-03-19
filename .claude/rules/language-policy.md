# Language Policy

## Rule

All internal documentation, agent definitions, rules, inter-agent communication,
code comments, YAML configs, and generated artifacts MUST be written in English.

Portuguese is used EXCLUSIVELY in direct interactions with the user.

## Scope

| Context | Language |
|---------|----------|
| Agent definitions (.md, .yaml) | English |
| Rules files (.claude/rules/) | English |
| Code comments | English |
| Inter-agent communication | English |
| Obsidian internal docs | English |
| Git commits | English |
| Direct user interaction | Portuguese (pt-BR) |

## Rationale

- Prevents translation hallucinations between agents
- Ensures consistency across all LLM operations
- Maximizes analysis accuracy on data and scenarios
- Translation happens only at the user interaction layer

## Application

When generating any document, rule, spec, story, or artifact:
- Write in English regardless of how the user described it in Portuguese
- When presenting output to the user, summarize or explain in Portuguese
- The Obsidian vault stores documents in English; daily diary notes are the exception (user-authored)
