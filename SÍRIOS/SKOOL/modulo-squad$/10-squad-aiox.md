---
date: 2026-04-28
tags: [skool, squad, aiox, avancado, orquestracao]
project: runa-systems-global
type: course-support
modulo: "10 — SQUAD AIOX (Avançado)"
---

# SQUAD AIOX — Orquestração Avançada

> SQUAD$ · Módulo Avançado (pós S06)

Para quem já tem o squad operacional e quer dar o próximo nível: orquestração avançada com o padrão AIOX — o mesmo sistema que o Arthur usa para operar o ecossistema Runa Systems.

---

## O Que é AIOX

AIOX (AI-Orchestrated Experience) é uma meta-camada de orquestração que estrutura como agentes colaboram, delegam, documentam e evoluem dentro de um ecossistema.

**Diferença do squad básico:**
| Squad Básico | AIOX |
|-------------|------|
| Agentes individuais | Agentes com hierarquia e autoridade |
| Handoff manual | Handoff protocolar com artefato |
| Sem histórico | Log de decisões e contexto acumulado |
| Tasks ad hoc | Tasks tipadas e reutilizáveis |
| Sem gates | Gates de qualidade entre fases |

---

## Os 4 Elementos do AIOX Lite Kit

### 1. Constitution (Regras Inegociáveis)
Um documento que define o que os agentes NUNCA podem fazer — independente de qualquer instrução.

**Exemplos de regras:**
- Nunca publicar sem revisão humana
- Nunca modificar dados do cliente sem confirmação
- Sempre documentar decisões relevantes

### 2. Agent Authority (Quem Pode Fazer O Quê)
Uma matriz clara de autoridade: quais operações são exclusivas de cada agente.

**Exemplos:**
- Push de código → somente Dev Neural
- Publicação → somente Comercial Neural após aprovação
- Precificação → somente Financeiro Neural

### 3. Story-Driven Development (Trabalho Baseado em Stories)
Antes de qualquer tarefa complexa, uma "story" é criada com:
- O que precisa ser feito (escopo)
- Critérios de aceitação (como saber que está pronto)
- Arquivos a criar/modificar
- Quem executa

### 4. Handoff Protocol (Contexto Sempre Preservado)
Ao trocar de agente, um artefato compacto é gerado com o contexto essencial. O novo agente não precisa re-ler tudo — recebe o handoff e continua.

---

## Implementando o AIOX Lite Kit

**Passo 1 — Constitution:**
Crie um arquivo `constitution.md` na raiz do seu projeto com as regras inegociáveis do seu squad.

**Passo 2 — Agent Authority:**
Adicione uma seção no seu CLAUDE.md com a matriz de autoridade por agente.

**Passo 3 — Story Template:**
Crie um template de story que você usa antes de qualquer tarefa importante.

**Passo 4 — Handoff Format:**
Defina o formato padrão de handoff entre os seus agentes.

---

## Quando Usar o Padrão Completo

O padrão AIOX completo é para squads que:
- Executam tarefas complexas com múltiplos agentes em sequência
- Têm histórico de contexto perdido entre sessões
- Precisam de rastreabilidade (quem decidiu o quê e quando)
- Escalam para múltiplos projetos ou clientes em paralelo

Se o seu squad é simples (1–2 agentes, tarefas isoladas), o squad básico é suficiente.

---

## Case de Referência — Runa Systems

O Arthur opera o ecossistema Runa Systems com AIOX completo:
- Constitution com 6 artigos inegociáveis
- 10 agentes com escopos exclusivos (FREYJA, MAYA, HERMES, ARES, ORION, etc.)
- Story lifecycle: Draft → Validate → Implement → QA → Deploy
- Handoff protocol com artefato de ~379 tokens

O resultado: um ecossistema que gera conteúdo, vende, entrega e aprende — com Arthur na direção estratégica, não na execução.

---

*Módulo concluído. Próxima etapa: [MIND$ — Base de Conhecimento](../modulo-mind$/_index.md)*
