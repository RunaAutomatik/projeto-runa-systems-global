# Prompt — Transferência de Memória do Claude

Use este prompt para exportar tudo que o Claude armazenou sobre você em conversas anteriores. Ideal para fazer backup das suas memórias antes de trocar de conta, ou para auditar o que o modelo sabe sobre você.

**Como usar:** copie o bloco abaixo e cole em uma nova conversa no Claude.ai (ou Claude Code). O modelo retornará um export estruturado com tudo que tem registrado.

---

```
Export all of my stored memories and any context you've learned about me from past
conversations. Preserve my words verbatim where possible, especially for instructions and
preferences.

## Categories (output in this order):

1. **Instructions**: Rules I've explicitly asked you to follow going forward — tone, format, style,
"always do X", "never do Y", and corrections to your behavior. Only include rules from stored
memories, not from conversations.

2. **Identity**: Name, age, location, education, family, relationships, languages, and personal
interests.

3. **Career**: Current and past roles, companies, and general skill areas.

4. **Projects**: Projects I meaningfully built or committed to. Ideally ONE entry per project.
Include what it does, current status, and any key decisions. Use the project name or a short
descriptor as the first words of the entry.

5. **Preferences**: Opinions, tastes, and working-style preferences that apply broadly.

## Format:

Use section headers for each category. Within each category, list one entry per line, sorted by
oldest date first. Format each line as:

[YYYY-MM-DD] - Entry content here.

If no date is known, use [unknown] instead.

## Output:
- Wrap the entire export in a single code block for easy copying.
- After the code block, state whether this is the complete set or if more remain.
```

---

**Dica:** guarde o output em um arquivo `.md` no seu computador ou no Obsidian. Quando precisar reintroduzir contexto em uma nova sessão, cole o export como primeira mensagem. O modelo vai reconhecer o formato e operar com toda a memória transferida.
