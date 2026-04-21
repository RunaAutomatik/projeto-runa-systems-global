---
date: 2026-04-21
tags: [runa-intervencao, mentoria, sessao-05, squad, agentes, ativacao, handoff, rpg-card]
project: runa-systems-global
type: lesson-structure
fase: 3 — SQUAD$
titulo-rpg: (Construtor em S06)
anterior: sessao-04-squad-arquitetura
proximo: sessao-06-squad-deploy
---

# Runa Intervenção — Session 05: SQUAD$ II — Agentes

> **Purpose:** Ativar cada agente do squad em cenários reais de trabalho. O cliente executa os primeiros handoffs entre agentes, aprende a corrigir escopos com base no comportamento real e inicia o log de operação.
> **Output:** Cada agente testado em pelo menos 2 tarefas reais + primeiro handoff documentado + ajustes de escopo registrados no CLAUDE.md do squad.
> **Template:** This structure serves ALL future Runa Intervenção clients — S05 is always SQUAD$ II.

---

## Session Structure (75–90 min)

### BLOCK 1 — Framing (10 min)

**Objective:** Fazer o cliente entender a diferença entre um agente definido e um agente calibrado — e por que a calibração só acontece com uso real.

**Key message to deliver:**

> "Em S04 você projetou o squad no papel. O .yaml estava correto, os escopos faziam sentido, a lógica era clara. Agora vamos descobrir onde a realidade discorda do papel. Todo squad passa por isso — não porque foi mal projetado, mas porque nenhum design sobrevive ao primeiro contato com tarefas reais. S05 é a sessão onde o squad sai do blueprint e entra em operação."

**The critical principle:**

Um agente não está pronto quando o .yaml está salvo. Está pronto quando você:
1. Sabe exatamente qual tarefa real acionar nele
2. Já corrigiu pelo menos 1 comportamento inesperado
3. Executou um handoff completo — uma tarefa que começa em um agente e termina em outro

**Framing de RPG:** "Em S04 você recrutou o time. Em S05 você treina o time. Em S06 você lança o time em campo."

---

### BLOCK 2 — Ativação Individual (20 min)

**Objective:** Cada agente é ativado em modo Ask com uma tarefa real do negócio do cliente. O facilitador observa, diagnostica e ajusta.

**Protocol: First activation per agent**

```
Ativação padrão:
@[nome-agente] *[comando-principal]

Se o agente não tiver comando definido:
@[nome-agente] [descrição da tarefa em linguagem natural]
```

**What to watch for:**

| Sinal | O que significa | Ação imediata |
|-------|----------------|---------------|
| Agente faz tarefa de outro agente | Overlap de escopo não resolvido | Adicionar `core_principle` de recusa com indicação do agente correto |
| Agente pede informação que deveria ter | Contexto do negócio ausente | Adicionar à Camada 3 do CLAUDE.md (contexto permanente) |
| Agente toma decisão que é do operador | Princípio de escalação ausente | Adicionar `core_principle`: "Escalona para operador quando [critério]" |
| Agente entrega formato diferente do esperado | Descrição do comando vaga | Especificar formato com exemplo concreto na `description` do comando |
| Agente responde sobre escopo alheio sem recusar | `core_principles` incompleto | Adicionar princípio: "Não executa [domínio] — nomeia @[agente-correto]" |

**Live exercise: First real task**

O facilitador conduz o cliente a:
1. Escolher UMA tarefa real urgente do negócio
2. Identificar qual agente do squad deveria fazer
3. Acionar o agente com a tarefa
4. Observar o resultado junto com o facilitador
5. Registrar 1 ajuste imediato no .yaml ou CLAUDE.md

**Key rule for the client:**

> "Não corrija o agente falando com ele no chat. Corrija o agente editando o .yaml. Se você só fala 'não, assim não', o agente vai fazer certo nessa conversa e errar na próxima. A correção precisa estar no arquivo."

---

### BLOCK 3 — Primeiro Handoff Real (20 min)

**Objective:** O cliente executa um handoff completo entre 2 agentes do squad, usando o protocolo de handoff definido em S04.

**What is a handoff:**

Um handoff é quando uma tarefa começa em um agente e o resultado é entregue como input para outro agente — sem o operador reescrever tudo no meio.

**Protocol de handoff (do template-claude-md-squad):**

```
@[agente-receptor] Recebendo de @[agente-origem]:
Contexto: [o que aconteceu]
Tarefa: [o que precisa ser feito]
Critério de sucesso: [como saber se está pronto]
```

**Typical first handoff scenarios:**

| Negócio | Agente origem | Agente destino | O que passa |
|---------|--------------|----------------|-------------|
| Consultoria | CEO Neural (diagnóstico estratégico) | Copy Neural (proposta) | Brief com ICP + problema principal + oferta |
| Agência de conteúdo | CEO Neural (calendário editorial) | Copy Neural (post) | Tema + ângulo + CTA |
| Operações | CEO Neural (prioridade da semana) | Operações Neural (plano) | Lista de iniciativas rankeadas + critério de sucesso |
| Produto digital | CEO Neural (sessão de diagnóstico) | Comercial Neural (proposta) | Objeções identificadas + contexto do prospect |

**What the client learns:**

- Handoff ruim: o receptor não tem contexto suficiente para começar sem perguntas
- Handoff bom: o receptor pode começar imediatamente com o que recebeu
- Critério simples: se o receptor pergunta mais de 1 coisa antes de começar → o handoff estava incompleto

**Live exercise:**

1. Identificar uma tarefa real que naturalmente passa de um agente para outro
2. Executar a tarefa no agente origem com um comando real
3. Pegar o output e formatar como handoff para o agente destino
4. Avaliar se o receptor entregou sem precisar de mais contexto
5. Documentar o handoff bem-sucedido como exemplo no CLAUDE.md do squad

---

### BLOCK 4 — Diagnóstico e Ajustes (15 min)

**Objective:** Processar o que foi descoberto nos blocks 2 e 3. O cliente aprende a ler os sinais de um squad funcionando vs. um squad com problemas de arquitetura.

**The 3 types of adjustments:**

**Tipo 1 — Ajuste de escopo (mais comum)**
O agente fez algo que não devia, ou se recusou a fazer algo que devia.
→ Editar `core_principles` no `.md` do agente — adicionar/remover/precisar o princípio de escopo

**Tipo 2 — Ajuste de contexto**
O agente tomou uma decisão errada porque não tinha informação do negócio.
→ Adicionar à Camada 3 do CLAUDE.md (contexto do negócio — vale para todos os agentes)

**Tipo 3 — Ajuste de handoff**
O receptor não conseguiu trabalhar com o que o emissor entregou.
→ Adicionar regra de handoff no CLAUDE.md do squad (seção "Regras de Handoff") com o formato esperado pelo receptor

**Diagnostic framework (use with client):**

```
Para cada problema identificado, pergunte:
1. O agente não SOUBE fazer → problema de contexto (CLAUDE.md Camada 3)
2. O agente não DEVERIA fazer → problema de escopo (core_principles no .md do agente)
3. O agente NÃO CONSEGUIU continuar → problema de handoff (Regras de Handoff no CLAUDE.md do squad)
```

**What to avoid:**

> "Não tente corrigir todos os problemas de uma vez. Cada ajuste que você faz é uma hipótese — teste uma de cada vez para saber o que funcionou. Se você mudar 5 coisas ao mesmo tempo e o agente melhorar, você não sabe qual das 5 foi a causa."

**Log entry:**

Ao final do diagnóstico, o cliente registra no Log de Operação (seção do CLAUDE.md do squad):

```markdown
| 2026-[MM-DD] | @[agente] | [tarefa testada] | [concluído/parcial/escalado] | [1 observação] |
```

---

### BLOCK 5 — Permission Mode em Operação Real (10 min)

**Objective:** O cliente aprende a usar os 3 modos de permissão de forma consciente durante o uso do squad.

**The critical shift from S02:**

Em S02, o cliente aprendeu os modos teoricamente. Em S05, os modos ganham contexto real:

| Modo | Quando usar no squad | Risco se ignorar |
|------|---------------------|-----------------|
| **Ask** | Novo agente, tarefa nova, escopo ainda não validado | Zero — mas lento |
| **Auto** | Agente já testado em tarefa repetida (>3x sem problema) | Médio — agente age sem confirmar |
| **Explore** | Auditoria do squad, revisão de CLAUDE.md, sem executar | Baixo — read-only |

**Practical rule para S05:**

> "Durante S05, mantenha os agentes em modo Ask. Você ainda está calibrando. Auto só entra depois que cada agente executou a tarefa principal corretamente pelo menos 3 vezes consecutivas."

**Upgrade path:**

```
S05: Ask (todos os agentes) → aprendendo o comportamento real
S06: Auto (agentes validados) + Ask (agentes novos)
S07+: Auto padrão + Explore para auditorias periódicas
```

---

### BLOCK 6 — Desafio + Próxima Sessão (5 min)

**DESAFIO S05:**

```
Antes de S06:

1. TAREFA REAL: Executar cada agente do squad em pelo menos 2 tarefas reais
   (não testes — tarefas que você precisava fazer de qualquer forma)

2. HANDOFF DOCUMENTADO: Registrar 1 handoff completo (origem → destino) no CLAUDE.md do squad

3. AJUSTES REGISTRADOS: Mínimo de 3 ajustes no .yaml dos agentes ou no CLAUDE.md,
   baseados no que o comportamento real revelou

4. LOG INICIADO: Pelo menos 3 entradas no Log de Operação
   (1 por dia se Intervenção · livre se Mentoria)

5. MODO: Todos os agentes em Ask durante o desafio
```

**Gate para S06:**
- [ ] Cada agente executou pelo menos 2 tarefas reais
- [ ] 1 handoff documentado e funcionou sem retrabalho
- [ ] Log de operação com pelo menos 3 entradas
- [ ] Pelo menos 3 ajustes realizados (e documentados)

**O que esperar de S06:**

> "Em S06 a gente coloca o squad em campo de verdade. Hooks pre/post-tool — o squad passa a se comportar diferente dependendo do que você faz. Primeiro worker — uma tarefa que antes precisava de você agora roda sozinha. 48 horas de operação contínua. No final de S06 você desbloqueia o título de CONSTRUTOR."

---

## Facilitator Notes

### Sessão mais variável do programa

S05 é a sessão mais difícil de padronizar porque o comportamento real de cada squad é único. O facilitador não controla o que vai acontecer — controla como interpreta e responde.

**What to prepare:**
- Revisar os .yaml dos agentes do cliente ANTES da sessão (leva 5 min)
- Ter o Worksheet 2 (Matriz de Delegação) aberto para referência
- Ter o Log de Operação do CLAUDE.md do squad pronto para preenchimento

**Most common problems in S05:**

1. **Orquestrador executando em vez de delegar** — acontece quando o `scope.cannot` está vago
   - Fix: Pedir ao orquestrador qual especialista deve receber a tarefa, depois ajustar o `scope.cannot`

2. **Especialista tomando decisão estratégica** — acontece quando o escopo de `can` é amplo demais
   - Fix: Adicionar ao `scope.cannot` a decisão específica com indicação para o orquestrador

3. **Handoff sem contexto** — o receptor faz perguntas que o emissor já tinha respondido
   - Fix: Revisar o `handoff.delivers_to` do agente emissor; adicionar o formato exato esperado

4. **Cliente testando em vez de usando** — cria tarefas fictícias para testar
   - Correction: Redirecionar para tarefas reais pendentes. "O que você precisaria fazer hoje mesmo que não tem tempo? Bora fazer agora com o agente."

### Timing adjustments

| Client profile | Block 2 | Block 3 | Block 4 |
|----------------|---------|---------|---------|
| Técnico (já usou Claude Code) | 10 min | 25 min | 20 min |
| Não técnico (primeira semana) | 25 min | 15 min | 15 min |
| Squad grande (4+ agentes) | 25 min | 15 min | 15 min |

### Red flags that require session extension

- Cliente não conseguiu executar nenhuma tarefa real (Block 2 falhou) → Voltar ao S04, verificar se os .yaml foram criados corretamente
- Nenhum agente respondeu dentro do escopo esperado → Gap de arquitetura, revisar Worksheet 2 antes de continuar
- Cliente confuso sobre qual agente acionar → CLAUDE.md do squad está incompleto; preencher a seção Protocolo de Ativação ao vivo

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Protocolo de Handoff | Block 3 — formato exato de handoff | [[protocolo-handoff-agentes]] |
| Checklist de Calibração | Block 4 — diagnóstico por tipo de problema | [[checklist-calibracao-squad]] |
| Log de Operação (modelo) | Block 4 + Desafio | Seção no CLAUDE.md do squad ([[template-claude-md-squad]]) |
| Guia Permission Modes | Block 5 — referência rápida | [[guia-permission-modes]] |

---

## Connections

- **Anterior:** [[runa-intervencao-sessao-04-squad-arquitetura|S04 — SQUAD$ I · Arquitetura]]
- **Próxima:** [[runa-intervencao-sessao-06-squad-deploy|S06 — SQUAD$ III · Deploy]]
- **Artefatos:** [[]] — pasta com todos os entregáveis desta fase
- **Worksheet de referência:** [[worksheet-2-matriz-delegacao|Worksheet 2 — Matriz de Delegação]]
