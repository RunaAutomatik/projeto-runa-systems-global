---
date: 2026-04-28
tags: [skool, squad, demo, deploy, s06]
project: runa-systems-global
type: course-support
modulo: "07 — Squad Ao Vivo (S06)"
---

# Squad Ao Vivo

> SQUAD$ · Sessão S06

Esta é a sessão de integração. Os agentes estão configurados individualmente — agora você vai rodá-los juntos, testar os handoffs e garantir que o squad opera como um sistema coeso.

---

## O Que é um Squad Operacional

Um squad operacional significa:
- Todos os agentes têm CLAUDE.md compartilhado
- O orquestrador sabe acionar cada especialista
- Os handoffs funcionam (contexto passa de um agente para outro)
- Há pelo menos 1 worker rodando de forma autônoma
- Você consegue pedir qualquer tarefa e o orquestrador roteia corretamente

---

## Checklist de Demo

→ [`artefatos/checklist-demo.md`](artefatos/checklist-demo.md)

Execute cada item na ordem. Se algum falhar, corrija antes de avançar:

- [ ] Agente orquestrador recebe tarefa e aciona especialista correto
- [ ] Agente de oferta gera proposta com dados reais do negócio
- [ ] Agente de conteúdo produz post com a sua voz (sem soar como IA)
- [ ] Agente de automação documenta um worker
- [ ] Agente de inteligência produz relatório com dados reais
- [ ] Handoff entre 2 agentes funciona sem perda de contexto
- [ ] 1 worker executa uma tarefa real de forma autônoma

---

## Checklist de Deploy

→ [`artefatos/checklist-deploy.md`](artefatos/checklist-deploy.md)

Antes de declarar o squad em produção:

- [ ] CLAUDE.md atualizado com todos os agentes e escopos
- [ ] Memória de cada agente inicializada
- [ ] Workers documentados e funcionando
- [ ] Hooks configurados (pre/post tool + stop)
- [ ] Sessão de revisão agendada para 7 dias após o deploy

---

## Calibração Pós-Deploy

O squad não está pronto no deploy — está pronto depois de 2–3 semanas de uso real.

**Semana 1:** Use o squad para tarefas reais. Note o que funciona e o que falha.
**Semana 2:** Ajuste os system prompts com base nos erros da semana 1.
**Semana 3:** Adicione memória (o que o agente aprendeu sobre você).

→ Checklist de calibração: [`artefatos/checklist-calibracao.md`](artefatos/checklist-calibracao.md)

---

## Você Completou o Núcleo

Ao terminar esta sessão, você tem:
- Squad de 8 agentes configurados e testados
- CLAUDE.md personalizado com o seu negócio
- Pelo menos 1 worker rodando de forma autônoma
- Protocolo de handoff funcionando

**Próximo passo:** MIND$ (S07–S08) — dar memória e base de conhecimento ao seu squad.

---

*Próxima aula: S07 — Vault e Base de Conhecimento*
*Documento: [../modulo-mind$/01-vault-obsidian.md](../modulo-mind$/01-vault-obsidian.md)*
