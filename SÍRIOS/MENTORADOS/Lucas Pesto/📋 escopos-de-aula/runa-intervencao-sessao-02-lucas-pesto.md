---
date: 2026-04-21
tags: [runa-intervencao, mentoria, sessao-02, gabriel, pesto, ambiente, squad, claude-code]
project: runa-systems-global
type: session-record
cliente: Gabriel — Pesto (agência criativa)
status: realizada
duracao: 146min
---

# Runa Intervenção — Sessão 02: Ambiente + Squad

> **Data:** 2026-04-21 | **Duração:** 146 min
> **Objetivo:** Instalar e configurar o ambiente operacional completo do Gabriel

---

## O Que Foi Construído

### Infraestrutura instalada
- Claude Code configurado na máquina do Gabriel
- Obsidian vault estruturado: operacional (framework Pesto, docs de clientes, estratégias) + base de conhecimento (migração futura)
- inference.sh instalado e configurado com API key entregue
- GWS (Google Workspace CLI) autenticado — criação de credenciais OAuth2 tipo desktop app após iteração (primeiro attempt criou tipo "web application" incorretamente)
- Instagram data export iniciado: Meta → Google Drive (formato HTML)

### Squad criado
```
@copywriter  → copy, hooks, captions, textos de feed
@designer    → imagens via inference.sh (nano-banana = Gemini Flash)
@videoeditor → edição e composição via Remotion
@planner     → grade de conteúdo, planejamento semanal
@atendimento → análise de cenários, propostas de resposta
@brand       → identidade visual, consistência de marca
```

### Conceito central ensinado
> "Claude orquestra. O inference.sh gera. Claude não gera imagens nativamente — ele escreve o prompt, o inference.sh executa."

- Claude Code = camada estratégica + orquestração
- inference.sh = camada de geração de mídia
- nano-banana (`google/gemini-flash-image`) = modelo padrão de imagens
- Squad confidence score: 94% de fidelidade à documentação

### Análise de dados
- Dados do Instagram @pestocomunicacao exportados (HTML)
- Base para análise de performance e estratégia de conteúdo

---

## Conceitos Ensinados

| Conceito | Descrição |
|---------|-----------|
| Squad = empresa | Cada agente tem escopo definido, como um funcionário |
| Claude orquestra | Claude não executa diretamente — direciona quem executa |
| L2 context | Brand kit por cliente como contexto para agentes de criação |
| nano-banana | Gemini Flash via inference.sh — modelo de imagens padrão |
| GWS CLI | Google Workspace sem MCP — via CLI autenticado |

---

## Conexões

- **Sessão anterior:** [[runa-intervencao-sessao-01-lucas-pesto]]
- **Próxima:** [[runa-intervencao-sessao-03-lucas-pesto]]
- **Base da sessão 02 (universal):** [[runa-intervencao-sessao-02-tcode-ambiente]]
