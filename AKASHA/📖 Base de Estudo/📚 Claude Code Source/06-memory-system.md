---
date: 2026-04-02
tags: [claude-code, memory, auto-memory, team-memory, dream]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Memory System (Arquitetura Completa)

## Camadas de Memória (4 Níveis)

```
Camada 1: MEMORY.md          → ~/.claude/projects/<slug>/memory/MEMORY.md
           (índice auto-memory, sempre carregado no context)

Camada 2: Topic files         → ~/.claude/projects/<slug>/memory/*.md
           (arquivos temáticos: user_role.md, feedback_testing.md, etc.)

Camada 3: CLAUDE.md           → .claude/CLAUDE.md (projeto)
           (instruções para Claude que TODOS os devs devem seguir)

Camada 4: CLAUDE.local.md     → .claude/CLAUDE.local.md (pessoal, gitignored)
           (preferências pessoais do dev, não sobe pro git)

Camada 5 (TEAMMEM): Team memory → ~/.claude/projects/<slug>/memory/team/
           (memória compartilhada entre todos os devs do projeto)
```

## MEMORY.md — O Índice

Limites hard-coded:
- **200 linhas** máximo carregadas no context (linhas após 200 são truncadas)
- **25,000 bytes** máximo
- Cada entrada deve ter **~150 chars** no máximo

Formato correto de uma entrada:
```markdown
- [Topic Title](topic-file.md) — one-line hook describing what's inside
```

**Regra crítica:** MEMORY.md é um ÍNDICE, não onde o conteúdo fica. O conteúdo fica nos topic files. Escrever conteúdo diretamente no MEMORY.md é um anti-pattern.

## Tipos de Memória (Taxonomy Formal)

O sistema impõe 4 tipos:

| Tipo | O que guarda | Quando salvar |
|------|-------------|--------------|
| `user` | Perfil do usuário: cargo, expertise, preferências | Ao aprender sobre o usuário |
| `feedback` | Correções e validações do usuário | Quando usuário corrige ou confirma abordagem |
| `project` | Estado do projeto, decisões, deadlines | Quando aprender contexto não-derivável do código |
| `reference` | Ponteiros para sistemas externos (Linear, Grafana, Slack) | Quando aprender onde encontrar informação externa |

Frontmatter obrigatório em cada topic file:
```markdown
---
name: Topic name
description: One-line description (usado para relevance matching)
type: user | feedback | project | reference
---
```

## Auto-Extraction — Como o Claude Salva Memórias Automaticamente

Ao final de CADA turn (quando não há mais tool calls):
1. `extractMemories.ts` roda como **forked agent** (cópia do contexto atual)
2. Analisa a conversa completa
3. Identifica o que vale salvar
4. Escreve nos topic files E atualiza MEMORY.md

O fork usa o **mesmo prompt cache** do agente principal — zero custo adicional de cache.

## Relevance Matching — Claude Haiku Seleciona Memórias

Antes de cada turn, o sistema:
1. Escaneia os topic files na pasta memory
2. Extrai o frontmatter de cada um (name + description)
3. Envia para **Claude Sonnet** (sideQuery, não o modelo principal)
4. Sonnet seleciona até **5 arquivos mais relevantes** para a query atual
5. Esses arquivos são incluídos no contexto do turn

Isso significa: memórias não relevantes NÃO inflam o contexto.

`alreadySurfaced` evita re-selecionar arquivos já incluídos em turns anteriores.

## AutoDream — Consolidação em Background

Quando `KAIROS` ou `KAIROS_DREAM` está ativo:

**Trigger conditions (em ordem de custo):**
1. Tempo: horas desde `lastConsolidatedAt` >= `minHours`
2. Sessões: número de transcripts com `mtime > lastConsolidatedAt` >= `minSessions`
3. Lock: nenhum outro processo consolidando

**Processo:**
- Roda como DreamTask em background
- Não bloqueia o usuário
- Lê todos os logs diários desde a última consolidação
- Distila em MEMORY.md e topic files
- Atualiza `lastConsolidatedAt`

**Modo KAIROS:** Escrita de memória muda para append-only em logs diários:
```
~/.claude/projects/<slug>/memory/logs/YYYY/MM/YYYY-MM-DD.md
```

## Team Memory (TEAMMEM feature)

Quando ativo:
- Existe um diretório `team/` dentro do diretório de memory
- Ambos (auto memory + team memory) têm seu próprio MEMORY.md
- O prompt descreve claramente o que vai em cada lugar
- Team memory é sincronizado entre devs (mecanismo não detalhado no código)

Team memory path: `~/.claude/projects/<slug>/memory/team/`

## Pesquisa em Memórias Antigas

O sistema tem uma seção "Searching past context":

```bash
# Busca em topic files de memória
grep -rn "<termo>" ~/.claude/projects/<slug>/memory/ --include="*.md"

# Busca em transcripts de sessões (último recurso — arquivos grandes)
grep -rn "<termo>" ~/.claude/projects/<slug>/ --include="*.jsonl"
```

## O Que NÃO Salvar em Memória

O sistema explicitamente instrui:
- ❌ Code patterns, conventions, file paths, project structure → derivável do código
- ❌ Git history, recent changes → `git log`/`git blame` são autoritativos
- ❌ Debugging solutions → a correção está no código, o contexto no commit
- ❌ Anything in CLAUDE.md already
- ❌ Ephemeral task details: in-progress work, temporary state, current session

## Desabilitar Auto-Memory

```bash
# Via env var
CLAUDE_CODE_DISABLE_AUTO_MEMORY=true

# Via settings.json
{
  "autoMemoryEnabled": false
}
```

## Verificar se Auto-Memory Está Ativo

```
/doctor    → inclui status de auto-memory
```

## Implicações Para o Projeto Runa Systems

Nossa memória atual está em:
`C:\Users\user\.claude\projects\c--runa-systems-global\memory\`

O MEMORY.md dessa pasta é o que temos no projeto. As categorias `user`, `feedback`, `project`, `reference` mapeiam exatamente para o que já usamos — mas agora sabemos que:
1. O relevance matching usa o `description` do frontmatter para decidir o que carregar
2. Manter descriptions precisas e específicas = melhor recall
3. Entradas no MEMORY.md devem ser curtas (~150 chars) — apenas hooks para os topic files
