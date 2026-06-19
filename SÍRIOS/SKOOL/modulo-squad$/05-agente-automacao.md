---
date: 2026-04-28
tags: [skool, squad, agente, automacao, worker, s05]
project: runa-systems-global
type: course-support
modulo: "05 — Agente de Automação (S05)"
---

# Agente de Automação

> SQUAD$ · Sessão S05

O agente de automação transforma tarefas repetitivas em workers executáveis. Ele não apenas sugere automações — ele projeta o sistema e documenta o processo para que você possa delegar implementação.

---

## Escopo do Agente de Automação

| Responsabilidade | Exemplos de Tarefas |
|-----------------|---------------------|
| Mapear automações | Identificar tarefas repetitivas que podem virar workers |
| Projetar fluxos | Desenhar o fluxo de uma automação antes de construir |
| Documentar workers | Escrever a spec técnica de cada worker |
| Integrar ferramentas | n8n, Make, Zapier, APIs, webhooks |
| Monitorar pipelines | Alertas, logs, tratamento de erros |

---

## O Que é um Worker

Um worker é um processo automatizado que executa uma tarefa específica sem intervenção humana.

**Exemplos:**
- `carousel-worker` — detecta HTML → exporta slides PNG
- `instagram-worker` — publica posts via API
- `dm-worker` — responde DMs com base em keywords
- `crm-worker` — atualiza status de lead automaticamente

→ Template para documentar: [`artefatos/template-worker.md`](artefatos/template-worker.md)

---

## Configurando o Agente

→ Template base: [`artefatos/template-agente-4.md`](artefatos/template-agente-4.md)

**Contexto crítico a incluir:**
```
{STACK_ATUAL} — ferramentas que você já usa (n8n, Zapier, etc.)
{PROCESSOS_MANUAIS} — lista das 5 tarefas mais repetitivas do seu negócio
{PLATAFORMAS} — Instagram, email, CRM, etc. que precisam se integrar
{NIVEL_TECNICO} — o quão técnico você é (para ajustar a linguagem das specs)
```

---

## Hooks — Automatizando Dentro do Claude Code

Hooks são scripts que executam automaticamente antes ou depois de ações do Claude Code.

→ Guia completo: [`artefatos/guia-hooks.md`](artefatos/guia-hooks.md)

**Tipos de hooks:**
- `PreToolUse` — executa antes de uma ferramenta (ex: validar antes de escrever)
- `PostToolUse` — executa depois de uma ferramenta (ex: formatar output)
- `Stop` — executa quando o Claude termina (ex: notificação)

---

## Primeira Automação

Após configurar o agente, identifique a tarefa mais repetitiva do seu negócio e rode:

```
Preciso automatizar [tarefa]. Faço isso [frequência] e leva [tempo].
O processo atual é: [descreva passo a passo].
Me ajude a projetar um worker para isso.
```

O agente vai produzir uma spec técnica que você pode entregar para implementação.

---

## Case de Referência — Runa Squad

O agente de automação do Runa Squad:
- Monitora 13 contas IG + 9 canais YouTube semanalmente
- Gerencia o pipeline de publicação (watcher → export → publish)
- Mantém a fila de DMs automatizada via Zernio
- Alerta no Supabase quando performance cai abaixo do threshold

---

*Próxima aula: S06 — Agente de Inteligência*
*Documento: [06-agente-inteligencia.md](06-agente-inteligencia.md)*
