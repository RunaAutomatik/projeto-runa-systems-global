---
date: 2026-04-02
tags: [claude-code, commands, slash-commands, reference]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — All Slash Commands (Complete Reference)

## Comandos de Desenvolvimento

| Comando | Descrição |
|---------|-----------|
| `/commit` | Cria git commit com mensagem inteligente |
| `/commit-push-pr` | Commit + push + abre PR no GitHub |
| `/review` | Code review do código atual |
| `/diff` | Mostra mudanças no código |
| `/branch` | Cria/gerencia branches |
| `/pr_comments` | Visualiza comentários de PR |
| `/autofix-pr` | Corrige PR automaticamente baseado em comentários |
| `/files` | Lista arquivos no projeto |

## Contexto e Memória

| Comando | Descrição |
|---------|-----------|
| `/compact` | Compacta o contexto da conversa (economiza tokens) |
| `/memory` | Gerencia memória persistente (MEMORY.md) |
| `/context` | Visualiza o contexto atual |
| `/ctx_viz` | Visualização avançada do contexto |
| `/resume` | Restaura sessão anterior |
| `/rewind` | Volta para estado anterior da conversa |

## Skills e Plugins

| Comando | Descrição |
|---------|-----------|
| `/skills` | Lista e gerencia skills |
| `/plugin` | Gerencia plugins |
| `/reload-plugins` | Recarrega plugins sem reiniciar |
| `/batch <instruction>` | Executa mudança grande em paralelo (5-30 agentes) |
| `/simplify` | Revisa código com 3 agentes em paralelo |
| `/loop [interval] <prompt>` | Agenda execução recorrente |

## Configuração

| Comando | Descrição |
|---------|-----------|
| `/config` | Gerencia configurações do Claude Code |
| `/model` | Muda o modelo atual |
| `/theme` | Muda o tema visual |
| `/color` | Configuração de cor |
| `/keybindings` | Gerencia atalhos de teclado |
| `/vim` | Ativa/desativa modo Vim |
| `/output-style` | Muda o estilo de output |

## MCP e Ferramentas

| Comando | Descrição |
|---------|-----------|
| `/mcp` | Gerencia servidores MCP |
| `/permissions` | Visualiza e edita regras de permissão |
| `/hooks` | Gerencia hooks configurados |
| `/add-dir <path>` | Adiciona diretório ao contexto de trabalho |
| `/env` | Mostra/edita variáveis de ambiente |

## Diagnóstico

| Comando | Descrição |
|---------|-----------|
| `/doctor` | Diagnóstico completo do ambiente |
| `/status` | Status atual da sessão |
| `/cost` | Mostra custo e uso de tokens da sessão |
| `/usage` | Histórico de uso |
| `/extra-usage` | Métricas extras de uso |
| `/stats` | Estatísticas da sessão |

## Tarefas

| Comando | Descrição |
|---------|-----------|
| `/tasks` | Lista e gerencia tarefas em background |

## Autenticação e Conta

| Comando | Descrição |
|---------|-----------|
| `/login` | Autenticação OAuth |
| `/logout` | Sair |
| `/privacy-settings` | Configurações de privacidade |

## Sessão

| Comando | Descrição |
|---------|-----------|
| `/session` | Gerencia sessões |
| `/share` | Compartilha sessão atual |
| `/export` | Exporta conversa |
| `/copy` | Copia output para clipboard |
| `/clear` | Limpa a tela |
| `/exit` | Sai do Claude Code |

## Planejamento e Análise

| Comando | Descrição |
|---------|-----------|
| `/plan` | Entra em modo de planejamento |
| `/ultraplan <desc>` | Planejamento avançado via Claude.ai (30min, Opus 4.6) |

## Integração com IDEs e Plataformas

| Comando | Descrição |
|---------|-----------|
| `/ide` | Configura integração com IDE |
| `/desktop` | Handoff para Claude Desktop app |
| `/mobile` | Handoff para Claude mobile app |
| `/install` | Instala Claude Code em um projeto |
| `/install-github-app` | Instala GitHub app |
| `/install-slack-app` | Instala Slack app |
| `/teleport` | Teleporta sessão para ambiente remoto |

## Misc

| Comando | Descrição |
|---------|-----------|
| `/help` | Mostra ajuda |
| `/rename` | Renomeia a sessão |
| `/tag` | Adiciona tag à sessão |
| `/stickers` | Easter egg — mostra stickers 🐢 |
| `/release-notes` | Mostra notas de versão |
| `/upgrade` | Atualiza Claude Code |
| `/feedback` | Envia feedback para Anthropic |
| `/summary` | Resumo da sessão |
| `/fast` | Toggle Fast mode (output mais rápido, mesmo modelo Opus) |

## Comandos Ant-Only (Anthropic employees)

| Comando | Descrição |
|---------|-----------|
| `/agents` | Plataforma de agentes interna |
| `/ant-trace` | Tracing interno |
| `/backfill-sessions` | Retroativa de sessões |
| `/bughunter` | Caça bugs automaticamente |
| `/btw` | Comunicação interna |
| `/good-claude` | Feedback positivo interno |
| `/issue` | Cria issue interna |
| `/mock-limits` | Simula limites de rate |
| `/passes` | Gerencia passes de uso |
| `/perf-issue` | Reporta problemas de performance |
| `/reset-limits` | Reseta limites |
| `/break-cache` | Quebra prompt cache |
| `/heapdump` | Dump de heap para debugging |
| `/debug-tool-call` | Debug de tool calls |
| `/chrome` | Integração com Chrome |
| `/thinkback` | Revisita pensamentos anteriores |
| `/thinkback-play` | Reproduz thinking anterior |
| `/effort` | Controla esforço de raciocínio |
| `/sandbox-toggle` | Ativa/desativa sandbox |
| `/passes` | Gestão de passes |

## Feature-Gated

| Comando | Feature Flag | Descrição |
|---------|-------------|-----------|
| `/proactive` | `PROACTIVE\|KAIROS` | Modo proativo |
| `/brief` | `KAIROS\|KAIROS_BRIEF` | Geração de briefs |
| `/assistant` | `KAIROS` | Modo assistente persistente |
| `/bridge` | `BRIDGE_MODE` | Modo bridge IDE |
| `/voice` | `VOICE_MODE` | Entrada por voz |

## Como os Comandos Funcionam Internamente

Slash commands são implementados como skills com `userInvocable: true` ou como módulos em `src/commands/`. Quando o usuário digita `/batch`, o sistema:

1. Detecta o `/` prefix
2. Busca no registry de skills e commands
3. Chama `getPromptForCommand(args)`
4. Injeta o prompt resultante na conversa como se o usuário tivesse enviado
5. Claude executa o workflow definido no prompt

A diferença entre um skill e uma skill invocável pelo usuário (`userInvocable: true`) é exatamente essa flag.
