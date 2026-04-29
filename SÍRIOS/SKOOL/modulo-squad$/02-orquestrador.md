---
date: 2026-04-28
tags: [skool, squad, orquestrador, arquitetura, s04]
project: runa-systems-global
type: course-support
modulo: "02 — Orquestrador (S04)"
---

# Orquestrador e Arquitetura do Squad

> SQUAD$ · Sessão S04

O orquestrador é o cérebro do squad. Ele não executa — ele coordena. Entender a arquitetura do squad antes de construir cada agente evita retrabalho e garante coesão.

---

## Arquitetura do Squad

```
VOCÊ (diretor)
    ↓
ORQUESTRADOR (coordena e delega)
    ↓
[CEO] [MARKETING] [VENDAS] [PRODUTO] [CS] [FINANCEIRO] [PROJETOS] [DEV]
    ↓
WORKERS (executam tarefas automatizadas)
```

O orquestrador conhece todos os agentes, seus escopos e quando acionar cada um. Você fala com o orquestrador; ele roteia para o especialista correto.

---

## O Que Define um Bom Orquestrador

1. **Contexto do negócio** — entende quem você é, o que vende, para quem
2. **Mapa de agentes** — sabe o escopo de cada especialista
3. **Protocolo de handoff** — sabe quando e como passar o controle
4. **Memória** — mantém contexto entre conversas

---

## CLAUDE.md do Squad

O `CLAUDE.md` é a espinha dorsal do seu squad. Ele é lido por TODOS os agentes em toda sessão.

→ Use o template: [`artefatos/template-claude-md-squad.md`](artefatos/template-claude-md-squad.md)

**Seções obrigatórias:**
- Identidade do negócio (`{NOME}`, `{NEGOCIO}`, `{POSICIONAMENTO}`)
- Mapa de agentes (nome, persona, escopo de cada um)
- Regras universais (o que todos os agentes devem seguir)
- Contexto de produtos/serviços

---

## Construindo o Orquestrador

Use o template: [`artefatos/template-agente-1.md`](artefatos/template-agente-1.md)

**Variáveis a preencher:**
- `{NOME_AGENTE}` — nome mítico ou funcional que ressoa com você
- `{NEGOCIO}` — o que você faz e para quem
- `{PRODUTOS}` — lista de ofertas/serviços
- `{TOM}` — como o agente deve se comunicar

---

## Protocolo de Handoff

Quando um agente passa o controle para outro, isso deve ser registrado.

→ Template: [`artefatos/protocolo-handoff.md`](artefatos/protocolo-handoff.md)

**O handoff inclui:**
- Contexto acumulado da conversa
- Decisões tomadas
- O que o próximo agente deve fazer
- Arquivos modificados

---

## Checklist de Arquitetura

→ [`artefatos/checklist-squad-design.md`](artefatos/checklist-squad-design.md)

Valide antes de construir os demais agentes:
- [ ] CLAUDE.md escrito com contexto real do negócio
- [ ] Orquestrador configurado e testado
- [ ] Mapa de agentes definido (nomes + escopos)
- [ ] Protocolo de handoff estabelecido

---

*Próxima aula: S04 — Agente de Oferta*
*Documento: [03-agente-oferta.md](03-agente-oferta.md)*
