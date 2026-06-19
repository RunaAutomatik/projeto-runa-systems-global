---
date: 2026-04-21
tags: [runa-intervencao, artefato, checklist, deploy, squad, hooks, worker, s06]
project: runa-systems-global
type: checklist
sessao: S06 — SQUAD$ III · Deploy
produto: [[runa-intervencao-sessao-06-squad-deploy]]
---

# Checklist — Deploy do Squad

> **Quando usar:** Antes de declarar S06 concluído e desbloqueiar o título CONSTRUTOR.
> **Regra:** Cada item com ✗ é um gap de deploy. O squad não está em operação real até que todos os itens estejam marcados.

---

## FASE 1 — Hooks Ativos

- [ ] `settings.local.json` existe no diretório do squad
- [ ] Stop notification instalado e testado (a notificação apareceu na tela)
- [ ] Pelo menos 1 hook adicional ativo (log automático OU context injection)
- [ ] Nenhum hook está causando lentidão ou erro visível no terminal

**Como verificar:**
```bash
# Verificar se o arquivo de hooks existe
cat .claude/settings.local.json

# Testar o stop notification manualmente
node [caminho-do-script]/stop-notify.js
```

---

## FASE 2 — Primeiro Worker Validado

- [ ] Arquivo `workers/[nome-worker].md` criado no diretório do squad
- [ ] Worker executado manualmente pelo menos 1 vez completo
- [ ] O output foi usável sem revisão manual significativa
- [ ] Worker rodou sem intervenção do operador no meio
- [ ] Critério de sucesso do worker está marcado (todos os checkboxes ✅)
- [ ] Primeira entrada no Log de Execuções do worker preenchida

**Verificação de worker bom:**

> "Se você precisou intervir mais de 1 vez durante a execução, o worker não está pronto. Revise a sequência ou adicione mais contexto ao agente que travou."

---

## FASE 3 — Integração com Ferramenta Externa

- [ ] Pelo menos 1 ferramenta externa conectada (Google Drive, Sheets, ou equivalente)
- [ ] O squad recebe dados da ferramenta OU envia dados para a ferramenta
- [ ] A integração funcionou pelo menos 1 vez sem erro

**Exemplos de integração mínima aceita:**
- Worker salva output em Google Drive (via `gws`)
- Agente lê dados de Google Sheets antes de diagnosticar
- Output do agente exportado como arquivo .md para pasta compartilhada

---

## FASE 4 — 48h de Operação

- [ ] Squad operou pelo menos 48h (dias corridos, não necessariamente 48h contínuas)
- [ ] Log de Operação tem pelo menos 5 entradas (CLAUDE.md do squad, seção Log)
- [ ] Pelo menos 1 entrada do log é de um worker rodando (não apenas conversa manual)
- [ ] Pelo menos 1 problema foi identificado no log E o ajuste correspondente foi feito

---

## FASE 5 — Permission Mode

- [ ] Pelo menos 1 agente foi movido para modo Auto (com critério documentado)
- [ ] O critério para Auto está registrado no CLAUDE.md do squad:
  ```
  [Nome do agente] → Auto desde [data]
  Critério: executou [tarefa específica] corretamente 3x consecutivas
  ```
- [ ] Agentes ainda em calibração continuam em Ask

---

## GATE para CONSTRUTOR 🏗️

Só declare S06 concluído com todos os itens abaixo:

- [ ] 2+ hooks ativos e funcionando
- [ ] 1 worker validado (rodou sem intervenção)
- [ ] 1 integração com ferramenta externa funcionando
- [ ] Log de Operação com 5+ entradas (48h)
- [ ] 1 agente em modo Auto com critério documentado
- [ ] **Sem gaps de deploy abertos** (todos os itens das Fases 1–5 marcados)

---

## O que NÃO é necessário para concluir S06

Não é bloqueante:
- Mais de 1 worker (1 é suficiente)
- Worker rodando em modo automático/cron (manual validado é o suficiente)
- Integração complexa com API (Google Drive/Sheets simples é suficiente)
- Mais de 2 hooks (Stop + 1 é suficiente)

Esses são evoluções naturais — não requisitos de deploy.

---

*Sessão de origem: [[runa-intervencao-sessao-06-squad-deploy|S06 — SQUAD$ III · Deploy]]*
*Relacionado: [[guia-hooks-squad|Guia de Hooks]] · [[template-worker|Template Worker]]*
