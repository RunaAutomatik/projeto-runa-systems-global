---
date: 2026-04-02
tags: [claude-code, runa-systems, action-plan, optimization]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Plano de Ação para RUNA SYSTEMS

> Baseado na análise completa do source code. Estas são as capacidades que NÃO estamos explorando e deveríamos explorar imediatamente.

## Prioridade ALTA — Implementar Agora

### 1. `/simplify` após cada implementação

**Hoje fazemos:** Implementamos e entregamos.
**O que falta:** Rodar `/simplify` que dispara 3 agentes revisores em paralelo.

```
Fluxo correto:
@dev implementa → /simplify → 3 agentes revisam (reuso, qualidade, eficiência) → corrigir findings → commit
```

**Impacto:** Código consistentemente mais limpo sem custo extra de atenção humana.

---

### 2. `run_in_background: true` para buscas paralelas

**Hoje fazemos:** Buscas sequenciais que inflam o contexto.
**O que falta:** Disparar múltiplos `Explore` agents em paralelo.

```
Em vez de:
1. Explore: buscar arquivo A → resultado A (1 turn, inflou contexto)
2. Explore: buscar arquivo B → resultado B (1 turn, inflou contexto)

Faça:
1. Agent(A, background) + Agent(B, background) em paralelo → esperar → resultado A e B juntos
→ Economiza turns + contexto
```

---

### 3. `isolation: "worktree"` para mudanças de risco

**Hoje fazemos:** @dev faz tudo direto no branch principal.
**O que falta:** Usar worktree para mudanças grandes/arriscadas.

```typescript
Agent({
  isolation: "worktree",
  run_in_background: true,
  prompt: "refatorar o carousel-worker, commit, push, criar PR"
})
```

**Quando usar:** Refatorações grandes, experimentos, mudanças que podem quebrar coisas.

---

### 4. `/compact` antes de tarefas longas

**Hoje fazemos:** Contexto cresce ilimitado até autocompact forçar.
**O que falta:** Compact manual antes de começar uma epic nova.

```
Antes de começar Story X: /compact
→ Contexto essencial preservado, tokens limpos para nova tarefa
```

---

### 5. Hooks para automação de workflows

**Hoje fazemos:** Steps manuais (lint, format, etc.)
**O que falta:** Hooks no `settings.json` que disparam automaticamente.

**Hooks recomendados para configurar:**

```json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "echo 'Claude terminou' && [notificação]"
      }]
    }],
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "cd C:/runa-systems-global && npx prettier --write $CLAUDE_FILE_PATH 2>/dev/null || true"
      }]
    }]
  }
}
```

---

## Prioridade MÉDIA — Implementar Em Breve

### 6. `/batch` para migrações e refatorações massivas

**Quando usar no Runa:**
- Migrar padrão de imports em todo o projeto
- Adicionar error handling em múltiplos arquivos
- Converter/padronizar código legado

```
/batch add proper TypeScript types to all JavaScript files in apps/
/batch add error handling to all Express route handlers
```

---

### 7. MEMORY.md optimization — Descriptions mais precisas

**Hoje fazemos:** Descriptions genéricas nos topic files.
**O que falta:** O relevance matching usa `description` para decidir O QUE carregar.

Regra: description deve descrever o CONTEÚDO específico, não apenas o tema.

```markdown
# Ruim:
description: Informações sobre o projeto

# Bom:
description: Arquitetura do pipeline Instagram: FREYJA brief → content-worker Puppeteer → Supabase → instagram-worker Meta API → DM automation via keyword triggers
```

---

### 8. ToolSearch para MCPs — Aproveitar deferred loading

Quando temos muitos MCPs (Supabase, n8n, Figma, Gmail, etc.), o system prompt fica enorme.

**Configurar:** Verificar se `isToolSearchEnabled` está ativo no nosso setup. Se não estiver, cada MCP tool adiciona ~100-500 tokens ao system prompt.

---

### 9. Agentes built-in específicos

**Hoje fazemos:** Usamos só `general-purpose`.
**O que explorar:**
- `Explore` para buscas de código (mais rápido, Haiku, read-only)
- `Plan` antes de implementações complexas

```typescript
Agent({
  subagent_type: "Explore",
  prompt: "find all files that handle Instagram DM webhooks, very thorough",
  run_in_background: false
})
```

---

## Prioridade BAIXA — Futuramente

### 10. `/loop` para monitoramento recorrente

```
/loop 5m check if content-worker on Railway is responding
/loop 1h review any new commits in main
```

Requer que `AGENT_TRIGGERS` feature gate esteja ativo.

### 11. CLAUDE.md como Knowledge Base de Convenções

Hoje usamos o CLAUDE.md extensivamente. Mas a skill `/remember` (Ant-only) pode auditar e reorganizar o que está em auto-memory vs CLAUDE.md vs CLAUDE.local.md.

Equivalente manual: periodicamente revisar se o MEMORY.md tem coisas que deveriam estar no CLAUDE.md.

## O Que NÃO Está Disponível Para Nós

| Feature | Por quê não disponível |
|---------|----------------------|
| `KAIROS` / proactive mode | Ant-only, não liberado publicamente |
| REPLTool (sandbox) | Ant-only |
| `/remember` skill | Ant-only |
| `/verify` skill | Ant-only |
| `/ultraplan` | Requer Claude.ai Pro + CCR (cloud runner) |
| Team memory | Requer configuração específica de org |
| COORDINATOR_MODE | Feature gate — pode estar disponível via env var |

## Capacidades Subestimadas Que Já Temos

1. **ToolSearch** — deferred loading de MCPs já pode estar ativo
2. **Worktree isolation** — disponível, só precisamos usar
3. **AgentTool `run_in_background`** — já usamos, mas podemos usar mais
4. **Prompt cache** — o Claude Code já otimiza automaticamente via sort de tool names
5. **Auto-compact** — já funciona, mas podemos otimizar o threshold
6. **MEMORY.md taxonomy** — já usamos, mas podemos melhorar as descriptions
