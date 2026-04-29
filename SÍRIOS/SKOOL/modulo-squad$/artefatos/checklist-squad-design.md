---
date: 2026-04-21
tags: [runa-intervencao, artefato, checklist, squad, arquitetura, s04]
project: runa-systems-global
type: checklist
sessao: S04 — SQUAD$ I Arquitetura
produto: [[runa-intervencao-sessao-04-squad-arquitetura]]
---

# Checklist — Design do Squad Neural

> **Quando usar:** Antes de criar os arquivos .yaml dos agentes. Use para verificar que a arquitetura está sólida antes da construção.
> **Regra:** Cada item marcado com ✗ é um problema de arquitetura que vai gerar confusão em S05 (ativação).

---

## FASE 1 — Diagnóstico (baseado em S01)

- [ ] O Worksheet 2 (Matriz de Delegação) está preenchido com todas as categorias de tarefa
- [ ] O setor prioritário foi escolhido com critério explícito (não por preferência pessoal)
- [ ] As categorias D e C do Worksheet 1B estão mapeadas na matriz
- [ ] Pelo menos 5 processos L2 estão categorizados (D/C/B/A)

---

## FASE 2 — Estrutura do Squad

### Quantidade de agentes
- [ ] Existe exatamente 1 orquestrador
- [ ] Existem 2–4 especialistas (não mais — squad cresce conforme o negócio, não de uma vez)
- [ ] Agentes de suporte (se houver) têm justificativa clara de por que existem separados

### Nomenclatura e identidade
- [ ] Cada agente tem um nome único e não ambíguo
- [ ] O título de cada agente comunica a função claramente (não é decorativo)
- [ ] Os nomes dos arquivos seguem o padrão: `agente-[nome-simples].yaml`

---

## FASE 3 — Escopos e Overlap

Para cada par de agentes, responda:

**Orquestrador ↔ Especialista 1**
- [ ] O orquestrador não faz tarefas que são escopo do Especialista 1
- [ ] O Especialista 1 não toma decisões estratégicas que são do orquestrador

**Orquestrador ↔ Especialista 2**
- [ ] Mesmos critérios acima

**Especialista 1 ↔ Especialista 2**
- [ ] Não existe nenhuma tarefa que os dois poderiam reivindicar como sua
- [ ] Se existe ambiguidade, ela está resolvida com critério explícito na matriz

**Especialista 1 ↔ Especialista 3 (se houver)**
- [ ] Sem overlap

**Especialista 2 ↔ Especialista 3 (se houver)**
- [ ] Sem overlap

**Qualquer Especialista ↔ Suporte (se houver)**
- [ ] O suporte faz apoio, não entregável final

---

## FASE 4 — Completude dos .yaml

Para cada agente, confirme:

**Orquestrador**
- [ ] `scope.can` tem pelo menos 5 itens específicos
- [ ] `scope.cannot` tem pelo menos 3 itens com indicação de para quem vai
- [ ] `commands` tem pelo menos 3 comandos úteis
- [ ] `handoff.escalate_to_human` define QUANDO o orquestrador para de decidir e chama o operador

**Especialista 1**
- [ ] `scope.can` é específico o suficiente para não se sobrepor a outros
- [ ] `scope.cannot` referencia os outros agentes por nome
- [ ] `handoff.receives_from` está preenchido
- [ ] `handoff.delivers_to` está preenchido

**Especialista 2** (mesmos critérios)
- [ ] scope.can específico
- [ ] scope.cannot com referências
- [ ] handoff preenchido

**Especialista 3** (se houver, mesmos critérios)
- [ ] scope.can específico
- [ ] scope.cannot com referências
- [ ] handoff preenchido

---

## FASE 5 — CLAUDE.md do Squad

- [ ] A seção SQUAD foi adicionada ao CLAUDE.md (não criou um arquivo separado)
- [ ] A hierarquia lista todos os agentes com nome e escopo em uma linha
- [ ] A matriz de delegação cobre todas as categorias do Worksheet 2
- [ ] As regras universais estão presentes (hierarquia, handoff, output, conflito, segurança)
- [ ] O protocolo de ativação está documentado (como acionar cada agente)

---

## FASE 6 — Teste Anti-Overlap (obrigatório antes de criar os arquivos)

Execute este teste antes de criar qualquer .yaml:

```
@[nome-do-futuro-orquestrador] Qual agente do squad deve criar uma proposta comercial?
```
→ Deve nomear o especialista correto, não ele mesmo.

```
@[especialista-1] Realize uma análise estratégica do negócio.
```
→ Deve recusar e indicar o orquestrador.

```
@[especialista-1] Execute a tarefa principal do [especialista-2].
```
→ Deve recusar e indicar o agente correto.

**Se algum teste falhar:**
- Revise o escopo do agente que responder errado
- Adicione a tarefa problemática na seção `scope.cannot` com indicação explícita

---

## GATE para S05 (Ativação)

Só avance para S05 com todos os itens abaixo marcados:

- [ ] Todos os .yaml criados e salvos no diretório
- [ ] CLAUDE.md do squad atualizado com a seção SQUAD
- [ ] Teste anti-overlap executado sem falhas
- [ ] Pelo menos 1 tarefa real executada por cada agente em modo Ask
- [ ] Log de operação iniciado no CLAUDE.md do squad

---

*Sessão de origem: [[runa-intervencao-sessao-04-squad-arquitetura|S04 — SQUAD$ I · Arquitetura]]*
*Relacionado: [[worksheet-2-matriz-delegacao|Worksheet 2]] · [[template-claude-md-squad|CLAUDE.md do Squad]]*
