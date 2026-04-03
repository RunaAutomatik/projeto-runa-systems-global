---
date: 2026-04-02
tags: [claude-code, tokens, optimization, compact, cost]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Token Optimization (Como Economizar Tokens)

## Como o Contexto Cresce e Por Que É Um Problema

A cada turn, o Claude recebe:
- Todo o histórico de mensagens
- System prompt (ferramentas, CLAUDE.md, memória)
- Tool results (podem ser enormes: git diff, file contents, bash output)

Quando o contexto fica grande demais → auto-compact dispara.

## Auto-Compact — O Sistema Automático

### Quando Dispara

```
Threshold = (Context Window - 20,000 tokens reservados para output) - 13,000 buffer
Para Sonnet 4.6 (~200K): threshold ≈ 200,000 - 20,000 - 13,000 = 167,000 tokens
```

Variáveis de controle:
```bash
CLAUDE_CODE_AUTO_COMPACT_WINDOW=100000  # Limita janela artificial
CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80       # Dispara em 80% da janela
```

### Circuit Breaker

Após **3 falhas consecutivas** de auto-compact, o sistema para de tentar.
Isso evita wasted ~250K API calls/dia que a Anthropic observou em sessões problemáticas.

### O Que a Compactação Preserva

O prompt de compactação tem 9 seções obrigatórias:
1. Primary Request and Intent
2. Key Technical Concepts
3. Files and Code Sections (com snippets completos)
4. Errors and fixes
5. Problem Solving
6. All user messages
7. Pending Tasks
8. Current Work (foco especial nas mensagens mais recentes)
9. Optional Next Step (com quote verbatim do que estava sendo feito)

Reserva 20,000 tokens para o output da compactação (baseado no p99.99 observado de 17,387 tokens).

## MicroCompact — Compactação Inteligente de Tool Results

O sistema limpa resultados de ferramentas antigas para liberar contexto:

**Ferramentas cujos RESULTS são limpos:**
- BashTool, PowerShellTool (output de comandos)
- GlobTool, GrepTool (resultados de busca)
- FileReadTool (conteúdo de arquivo lido)
- WebFetchTool, WebSearchTool (conteúdo web)

**Ferramentas cujos USOs são limpos:**
- FileEditTool (edições feitas)
- FileWriteTool (arquivos criados)
- NotebookEditTool

**Estratégia:** Mantém os últimos 40,000 tokens de contexto ativo, remove resultados antigos de ferramentas que podem ser re-executadas se necessário.

## FILE_UNCHANGED_STUB

Quando um arquivo é lido e não foi modificado desde a última leitura, o sistema substitui o conteúdo por um stub:
```
[File unchanged since last read — content omitted to save tokens]
```

Isso é automático e transparente para o Claude.

## Prompt Cache — Como Funciona

O Claude Code usa prompt caching agressivamente:
- O system prompt (ferramentas + CLAUDE.md + memória) é **cacheado**
- Cache break é detectado e notificado via `notifyCompaction`
- Tools são ordenadas por nome **para estabilidade de cache** (mesmo hash = cache hit)
- Built-in tools são mantidas como prefixo contíguo antes das MCP tools, para não invalidar o cache quando MCP tools mudam

### Cache e Thinking Blocks

```
clearAllThinking: true → quando sessão ficou idle >1h (cache miss de qualquer forma)
→ mantém apenas o último thinking turn (API exige value >= 1)
→ limpa todos os outros thinking blocks para economizar tokens
```

## Tool Results de Arquivos — Deduplicação

O sistema tem um cache de estado de arquivos (`fileStateCache`):
- Rastreia o hash/conteúdo de cada arquivo lido
- Se arquivo não mudou → usa stub em vez de re-incluir conteúdo completo
- Reduz drasticamente tokens em sessões longas com muitas leituras

## Lazy Loading de Tools Pesadas

Ferramentas são carregadas dinamicamente apenas quando necessárias:
```typescript
// Em vez de importar no topo (carrega tudo na inicialização)
const TeamCreateTool = () => require('./tools/TeamCreateTool/...')
// Só carrega quando primeiro uso ocorre
```

## ToolSearch — Deferred Tools

Quando há muitas ferramentas MCP instaladas, todas elas inflam o system prompt com seus schemas. Com `ToolSearch` ativo:
- Ferramentas pesadas são "deferred" — só nome + descrição curta no system prompt
- Claude usa `ToolSearchTool` para carregar o schema completo quando precisar
- **Redução de 50-80% nos tokens de system prompt** em instalações com muitos MCPs

```
isToolSearchEnabledOptimistic() → verifica se deve usar deferred loading
```

## Estratégias Práticas Para Economizar Tokens

### 1. Use `/compact` manualmente antes de tarefas grandes
```
/compact
```
Força compactação antes de começar algo novo. A compactação preserva o contexto essencial em muito menos tokens.

### 2. Configure CLAUDE_CODE_AUTO_COMPACT_WINDOW
Para projetos com context window grande, pode forçar compactação mais cedo:
```bash
CLAUDE_CODE_AUTO_COMPACT_WINDOW=80000  # Compact quando atingir 80K tokens
```

### 3. Separe tarefas em sessões distintas
Cada sessão começa com contexto limpo. Para tarefas independentes, abrir nova sessão economiza tokens vs continuar a mesma sessão inflada.

### 4. Use sub-agentes para pesquisa
Sub-agentes (Explore) não poluem o contexto principal:
```
# Em vez de fazer 10 leituras de arquivo no contexto principal
# Use um Explore agent que retorna apenas o resultado relevante
```

### 5. Use `run_in_background: true`
Agentes em background não bloqueiam o contexto principal nem adicionam ao histórico imediato.

### 6. FileEditTool > FileWriteTool
`Edit` envia apenas o diff (old_string → new_string).
`Write` envia o arquivo completo.
Para arquivos grandes, sempre prefira Edit quando possível.

### 7. Avoid `/memory` de itens deriváveis do código
O sistema explicitamente diz: **não salve** em memória o que pode ser derivado lendo o código. Apenas salve insights não-óbvios.

## Token Counting — Como o Sistema Estima

```typescript
// Estimativa rápida (antes de API response)
roughTokenCountEstimation(text) // ~4 chars/token

// Count exato (da response da API)
tokenCountFromLastAPIResponse()

// Count com estimativa se API não retornou ainda
tokenCountWithEstimation()
```

## Custo — Tracking Nativo

```
/cost    → mostra custo total da sessão
```

Internamente: `getTotalCost()`, `getTotalInputTokens()`, `getTotalOutputTokens()`, `getTotalCacheReadInputTokens()`, `getTotalCacheCreationInputTokens()`
