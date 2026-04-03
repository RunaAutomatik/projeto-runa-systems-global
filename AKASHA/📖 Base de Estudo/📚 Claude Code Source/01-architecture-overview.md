---
date: 2026-04-02
tags: [claude-code, architecture, runtime, startup]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Architecture Overview

## Stack

| Layer | Technology |
|-------|-----------|
| Runtime | **Bun** (faster than Node, native TypeScript, feature flags via `bun:bundle`) |
| Language | TypeScript strict |
| Terminal UI | **React + Ink** (componentes React renderizam texto no terminal) |
| CLI Parser | Commander.js |
| Schema validation | Zod v4 |
| Code search | ripgrep (embedded em builds Ant) |
| Protocol | MCP SDK + LSP |
| API | @anthropic-ai/sdk |
| Telemetry | OpenTelemetry + gRPC |
| Feature flags | GrowthBook (A/B testing + feature gates) |
| Auth | OAuth 2.0, JWT, macOS Keychain |

## Startup Sequence (`main.tsx`)

O boot do Claude Code é **altamente otimizado** para velocidade:

```
1. ANTES dos imports pesados (paralelo):
   - startMdmRawRead()     → lê políticas MDM de segurança
   - startKeychainPrefetch() → pré-carrega credenciais do keychain

2. Commander.js parseia o CLI

3. GrowthBook inicializa (feature flags A/B)

4. React/Ink renderer inicia

5. Ferramentas carregadas lazy (apenas quando necessárias)
```

**Insight:** Isso explica por que o Claude Code inicia em ~0.3s mesmo sendo enorme. Os módulos pesados (OpenTelemetry, gRPC, analytics) são `import()` dinâmicos — só carregam quando usados.

## QueryEngine.ts — O Coração

É o loop principal que:
1. Envia mensagens para a API Anthropic com streaming
2. Recebe tool calls da IA
3. Despacha para o tool correto
4. Verifica permissões (ask/auto/explore)
5. Retorna resultado para a IA
6. Repete até não haver mais tool calls
7. Executa hooks de Stop (memória, auto-compact, etc.)

## Módulos Principais

```
src/
├── main.tsx              → Entry point, CLI parser, React/Ink init
├── QueryEngine.ts        → Core loop de conversa com a API
├── Tool.ts               → Base types para todas as ferramentas
├── tools.ts              → Registry de todas as ferramentas disponíveis
├── commands.ts           → Registry de todos os slash commands
│
├── tools/                → 40+ ferramentas individuais
├── commands/             → 80+ slash commands
├── components/           → ~140 componentes React para terminal UI
├── services/             → Serviços externos (API, MCP, LSP, compact, memória)
├── hooks/                → Lifecycle hooks (permissões, ferramentas)
├── coordinator/          → Modo coordenador multi-agente
├── memdir/               → Sistema de memória persistente
├── skills/               → Sistema de skills (bundled + user-defined)
├── tasks/                → Gerenciamento de tarefas assíncronas
├── state/                → Estado global da aplicação
├── bridge/               → Comunicação com IDEs (VSCode, JetBrains)
├── plugins/              → Sistema de plugins
├── keybindings/          → Atalhos de teclado customizáveis
├── vim/                  → Modo Vim
├── voice/                → Entrada por voz (feature-gated)
├── remote/               → Sessões remotas
├── server/               → Modo servidor
└── utils/                → Utilitários (permissions, git, bash, etc.)
```

## Diferenciação de Builds

O código tem comportamentos diferentes por tipo de usuário:

```typescript
// Ferramentas exclusivas Anthropic employees
if (process.env.USER_TYPE === 'ant') {
  // REPLTool, TungstenTool, ConfigTool, remember skill, verify skill, stuck skill
}

// Feature flags via bun:bundle (dead code elimination em build)
const SleepTool = feature('PROACTIVE') || feature('KAIROS')
  ? require('./tools/SleepTool/SleepTool.js').SleepTool
  : null
```

## Modo Simples vs Completo

```typescript
// Modo simples (CLAUDE_CODE_SIMPLE=true)
// Só: BashTool + FileReadTool + FileEditTool

// Modo completo: todos os 40+ tools ativos
```
