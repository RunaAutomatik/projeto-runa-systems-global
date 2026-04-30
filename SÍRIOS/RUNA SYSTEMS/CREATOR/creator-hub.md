---
date: 2026-04-27
tags: [creator-dollar, hub, modulo-habilidade, runa-systems]
type: module-hub
aliases: [creator-dollar, creator, CREATOR$]
---

# CREATOR$ — Módulo de Habilidade

> **Parte do RUNA SYSTEMS** — não vendido separadamente via funil
> Ativado após o alicerce quando o gargalo do cliente é produção de conteúdo com identidade visual IA
> Agentes entregues: LENS (imagem) + REEL (vídeo)

## Quando Ativar

Cliente completa o alicerce (Claude Code → Sincronia → MIND$ → SQUAD$) e o principal gargalo identificado é:
- Produção de imagem IA com consistência de identidade
- Produção de vídeo IA (Reels, avatares, automação editorial)
- Ausência de avatar visual para conteúdo em escala

## PRD

- [[creator-dollar-prd]] — Product Requirements Document

## Programa (Skool)

- [[RUNA SYSTEMS/CREATOR/_index]] — Índice materiais Skool

## Entregáveis do Módulo

- **LENS** — Agente de imagem IA (flux-dev, p-image, background-removal) — via AIOX
- **REEL** — Agente de vídeo IA (veo-3, p-video, talking-head-production) — via AIOX
- [[deliverable-kit-avatar]] — Kit de avatar: persona visual, style guide, prompts mestre

## Agentes LENS e REEL

Os agentes LENS e REEL são **executáveis via Claude Code + inference.sh**, não GPTs.
Versões GPT antigas arquivadas em: `_deprecated/gpt-agents-v1/`

## Chain

- **Requer:** [[../RUNA-SYSTEMS/_hub|RUNA SYSTEMS]] (alicerce completo)
- **Hub canônico:** [[runa-systems-hub]]
- **Trilha:** Track A do programa de intervenção (Sessões A1–A4)
