---
date: 2026-04-02
tags: [claude-code, skills, bundled, automation]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Native Bundled Skills

Skills são workflows reutilizáveis executados via `/skill-name`. O Claude Code vem com **15 skills nativas** (mais algumas Ant-only e feature-gated).

## Skills Sempre Disponíveis

### `/simplify` ⭐ CRÍTICA
**O que faz:** Revisa TODO o código modificado usando 3 agentes em paralelo.

**Como funciona:**
1. Roda `git diff` para ver o que mudou
2. Spawna 3 sub-agentes em paralelo:
   - **Agente 1:** Code Reuse Review — busca duplicação de código, sugere utilitários existentes
   - **Agente 2:** Code Quality Review — detecta state redundante, parameter sprawl, copy-paste, abstrações vazando, stringly-typed code
   - **Agente 3:** Efficiency Review — detecta trabalho desnecessário, missed concurrency, hot-path bloat, memory leaks
3. Agrega os findings e corrige diretamente

**Por que não estamos usando:** Deveria ser chamado após TODA implementação significativa.

```
/simplify
# Opcional com foco extra:
/simplify focus on async patterns
```

---

### `/batch` ⭐ CRÍTICA PARA MIGRAÇÕES
**O que faz:** Planeja e executa grandes mudanças em paralelo, com 5-30 agentes.

**Como funciona:**
1. **Fase 1 (Plan Mode):** Pesquisa o escopo, decompõe em unidades independentes, define receita de teste e2e
2. **Fase 2:** Spawna N agentes, cada um com `isolation: "worktree"` e `run_in_background: true`, cada um cria um PR
3. **Fase 3:** Exibe tabela de progresso e atualiza conforme agentes terminam

**Casos de uso perfeitos para RUNA:**
- Migrar padrão de código em todo o projeto
- Adicionar type annotations em massa
- Renomear funções em todo o codebase
- Converter de React Class Components para Function Components

```
/batch migrate from lodash to native ES6 equivalents
/batch add error handling to all async functions
/batch refactor all console.log to use the logger utility
```

---

### `/loop` (requer `AGENT_TRIGGERS`)
**O que faz:** Agenda execução recorrente de qualquer prompt ou skill.

```
/loop 5m /babysit-prs         # Verifica PRs a cada 5 min
/loop 30m check the deploy    # Verifica deploy a cada 30 min
/loop 1h /standup 1           # Roda daily standup a cada hora
```

Converte automaticamente para cron expression e usa `CronCreateTool`.
Auto-expira após 90 dias. Pode cancelar com `CronDeleteTool`.

---

### `/update-config` (update-config skill)
**O que faz:** Configura o Claude Code via `settings.json` de forma inteligente.

Inclui schema completo de settings com exemplos de:
- Permissões (allow/deny/ask)
- Environment variables
- Hooks (PreToolUse, PostToolUse, Stop, UserPromptSubmit)
- Plugins
- Modelos
- Keybindings

**Fundamental para:** Criar hooks automatizados, configurar permissões, setup inicial.

---

### `/keybindings`
**O que faz:** Customiza atalhos de teclado do Claude Code.

---

### `/debug`
**O que faz:** Diagnóstico de problemas do próprio Claude Code.

---

### `/skillify`
**O que faz:** Cria uma nova skill a partir de uma instrução. Meta-skill para criar skills.

```
/skillify create a skill that reviews PR descriptions for clarity
```

---

### `/lorem-ipsum`
Gera Lorem Ipsum para testes de UI.

---

## Skills Feature-Gated

### `/dream` (requer `KAIROS` ou `KAIROS_DREAM`)
**O que faz:** Consolida memórias de sessões anteriores num MEMORY.md organizado.

O processo AutoDream:
- Detecta quando `lastConsolidatedAt` foi há muito tempo (horas configuraveis)
- Verifica se há N sessões não consolidadas
- Roda como agente forked em background
- Cria/atualiza MEMORY.md com as memórias destiladas dos logs

---

### `/schedule` (requer `AGENT_TRIGGERS_REMOTE`)
**O que faz:** Agenda agentes remotos para execução futura.

---

## Skills Ant-Only (Anthropic employees)

### `/remember`
**O que faz:** Revisa todas as camadas de memória e propõe reorganização.

Analisa:
- auto-memory (MEMORY.md)
- CLAUDE.md do projeto
- CLAUDE.local.md
- Team memory (se configurado)

Propõe:
- Promoções: o que deve ir para CLAUDE.md vs CLAUDE.local.md
- Limpeza: duplicatas, entradas desatualizadas, conflitos
- Itens ambíguos: pede decisão ao usuário

Antes de qualquer mudança, apresenta todas as propostas para aprovação.

---

### `/verify`
**O que faz:** Verifica se uma mudança de código realmente funciona rodando o app.

---

### `/stuck`
**O que faz:** Diagnostica sessões do Claude Code congeladas/lentas na máquina.
Posta relatório no Slack `#claude-code-feedback` se encontrar problema.

---

## Como Criar Skills Customizadas

Skills podem ser criadas em:
- `~/.claude/skills/` — skills globais (todas as sessões)
- `.claude/skills/` — skills do projeto

Formato de um skill file:
```markdown
---
name: my-skill
description: O que essa skill faz
whenToUse: Quando usar essa skill
---

# My Skill

[Instrução completa para o Claude seguir]
```

O `/skillify` automatiza a criação desse arquivo.

## Skills e o Sistema de Plugins

Skills podem ser empacotadas em plugins (`.claude/plugins/`) para distribuição. Um plugin pode incluir:
- Skills
- Hooks (PreToolUse, PostToolUse, Stop)
- Comandos customizados
- Agentes customizados
