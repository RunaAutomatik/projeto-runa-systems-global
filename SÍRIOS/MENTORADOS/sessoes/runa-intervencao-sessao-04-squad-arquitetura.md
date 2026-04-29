---
date: 2026-04-21
tags: [runa-intervencao, mentoria, sessao-04, squad, arquitetura, agentes, yaml, rpg-card]
project: runa-systems-global
type: lesson-structure
fase: 3 — SQUAD$
titulo-rpg: (Construtor em S06)
anterior: sessao-03-tcode-fluxo
proximo: sessao-05-squad-agentes
---

# Runa Intervenção — Session 04: SQUAD$ I — Arquitetura

> **Purpose:** Projetar a arquitetura do squad neural personalizado. O cliente define quais agentes compõem seu time, escopos de autoridade, hierarquia e personas — antes de construir qualquer agente.
> **Output:** Arquitetura do squad documentada: 3–5 agentes com .yaml completo, personas distintas, escopos sem overlap, matriz de delegação no CLAUDE.md do squad.
> **Template:** Esta estrutura serve ALL future Runa Intervenção clients — S04 é sempre SQUAD$ I.

---

## Session Structure (75–90 min)

### BLOCK 1 — Framing (10 min)

**Objective:** Fazer o cliente entender por que a arquitetura vem antes da construção — e o que separa um squad eficiente de um squad caótico.

**Key message to deliver:**

> "Em S03 você criou um agente. Agora vamos criar um time. A diferença parece óbvia — mas a maioria das pessoas que tenta montar um squad erra porque começa a criar agentes sem antes definir a arquitetura. Resultado: agentes duplicando trabalho, sem saber o que é de cada um, sem hierarquia. O squad vira caos organizado."

**The critical principle:**

> "Arquitetura primeiro, construção depois. Você não contrata 5 funcionários sem saber o que cada um vai fazer. Com agentes é igual — mas pior. Funcionário humano percebe quando está duplicando trabalho e pergunta. Agente não. Ele simplesmente executa — e você só percebe o problema quando já perdeu tempo e gerou inconsistência."

**Analogia:**

> "Pensa em um escritório. Você tem um arquiteto, um financeiro, um comercial, um operacional e um criativo. Cada um tem escopo claro. O arquiteto não entra em decisão de vendas. O comercial não faz planilha financeira. Agentes funcionam igual — mas você precisa desenhar o organograma antes de contratar."

**O que o cliente vai construir hoje:**

| Entregável | O que é |
|-----------|---------|
| Mapa do Squad | Quais agentes existem e o que cada um faz |
| Escopos | O que cada agente pode e não pode fazer |
| Hierarquia | Quem orquestra, quem executa |
| .yaml de cada agente | A identidade operacional de cada um |
| CLAUDE.md do squad | As regras que governam o time inteiro |

---

### BLOCK 2 — Os 3 Tipos de Agente (15 min)

**Core concept:**

Antes de definir quais agentes criar, o cliente precisa entender que existem 3 tipos — e cada tipo cumpre uma função diferente no squad.

**Os 3 tipos:**

#### Tipo 1 — Orquestrador (1 por squad)
> "Pensa em larga escala. Não executa — delega. Seu trabalho é garantir que o time todo está alinhado com os objetivos do negócio."

| Campo | Descrição |
|-------|-----------|
| **Escopo** | Estratégia, priorização, coordenação de handoffs |
| **Autoridade** | Decide o que vai para cada agente |
| **Executa?** | Não — apenas orquestra |
| **Exemplo de persona** | CEO Neural, Estrategista, Orion |

#### Tipo 2 — Especialista (2–4 por squad)
> "Faz uma coisa bem feita. Tem escopo claro. Não sai do seu domínio."

| Campo | Descrição |
|-------|-----------|
| **Escopo** | Domínio específico (conteúdo, vendas, operação, financeiro) |
| **Autoridade** | Executa dentro do escopo — escalona para orquestrador o que está fora |
| **Executa?** | Sim — é o worker principal |
| **Exemplo de persona** | Copy Neural, Comercial Neural, Projetos Neural |

#### Tipo 3 — Especialista de Suporte (0–2 por squad)
> "Serve os especialistas. Faz tarefas de apoio que os outros precisam mas que não deveriam fazer — porque seria desperdício de especialização."

| Campo | Descrição |
|-------|-----------|
| **Escopo** | Pesquisa, formatação, organização, triagem |
| **Autoridade** | Executa sob demanda dos especialistas |
| **Executa?** | Sim — mas tarefas de suporte |
| **Exemplo de persona** | Pesquisador Neural, Organizador, Analista de Dados |

**Regra prática:**
> "Começa com 1 Orquestrador + 2 Especialistas. É o squad mínimo funcional. Você adiciona mais agentes à medida que identifica gargalos — não antes."

---

### BLOCK 3 — Mapeando o Squad do Cliente (20 min)

**Objective:** Usar o diagnóstico de S01 para definir os agentes certos para ESTE negócio.

**Antes de começar:** Abrir o Plano de Ataque da S01 (o cliente deve ter trazido). O squad nasce do diagnóstico — não da vontade.

> "Olhando o que você mapeou em S01: os processos que ficaram na Categoria 1 (Agente Completo) e Categoria 2 (Híbrido) — esses são os candidatos a virar escopo de agente. Vamos agrupá-los por área."

---

#### Exercício — Agrupamento por Domínio (10 min)

**Pedir ao cliente:**

1. Liste os processos da Categoria 1 e 2 do diagnóstico S01
2. Agrupe os processos por área natural do negócio
3. Cada grupo com 3+ processos é um candidato a virar escopo de agente

**Tabela de agrupamento (preencher ao vivo):**

| Grupo de Processos | Qtd | Candidato a Agente? |
|--------------------|-----|---------------------|
| [Grupo 1 do cliente] | | Sim / Não |
| [Grupo 2 do cliente] | | Sim / Não |
| [Grupo 3 do cliente] | | Sim / Não |

---

#### Definição Final do Squad (5 min)

Com base no agrupamento, definir:

| Agente | Tipo | Escopo |
|--------|------|--------|
| [Nome do Orquestrador] | Orquestrador | [Escopo] |
| [Nome do Especialista 1] | Especialista | [Escopo] |
| [Nome do Especialista 2] | Especialista | [Escopo] |
| [Nome do Especialista 3 — se necessário] | Especialista | [Escopo] |

**Regra anti-overlap:**
> "Antes de finalizar a lista, teste cada par de agentes: existe alguma tarefa que os dois poderiam fazer? Se sim, quem tem prioridade? A resposta precisa ser clara antes de criar os arquivos."

**Nomeação dos agentes:**

> "Nomes importam. Um agente com nome funcional (Agente-Copy) é diferente de um agente com persona (FREYJA). Nome com persona cria identidade — o agente se comporta de forma mais coerente com uma persona que com um label genérico. Use nomes míticos, arquétipos, ou referências que façam sentido para o negócio."

---

### BLOCK 4 — Criando os .yaml dos Agentes (25 min)

**Objective:** O cliente cria os arquivos .yaml de cada agente ao vivo — com o agente ajudando.

> "O .yaml é a identidade operacional do agente. É o que define quem ele é, como pensa, o que pode fazer, e o que nunca faz. Um .yaml bem escrito é a diferença entre um agente que precisa de microgestão e um que opera com autonomia confiável."

---

#### Estrutura canônica do agente (padrão AIOX)

O formato abaixo é o **padrão real** usado no AIOX — o mesmo sistema que estrutura ORION, FREYJA, ARES e todos os agentes do ecossistema Runa. O cliente aprende o formato uma vez e consegue criar, modificar e reutilizar agentes em qualquer squad.

```yaml
agent:
  name: [Nome do Agente]
  id: [nome-do-agente]          # kebab-case, único no squad
  title: "[Título completo — ex: Estrategista Neural de Conteúdo]"
  icon: "[emoji]"
  whenToUse: "Use este agente quando [cenários específicos]"

persona:
  role: "[Papel principal — ex: Especialista em copy de conversão]"
  style: "[Estilo de comunicação: direto, técnico, consultivo...]"
  identity: "[O que torna este agente único — arquétipo, voz]"
  focus: "[Domínio exclusivo de atuação]"

core_principles:
  - "[Princípio 1 — como o agente pensa e prioriza]"
  - "[Princípio 2 — o que nunca viola]"
  - "[Princípio 3 — como lida com escopo fora do domínio]"

commands:
  - name: help
    description: "Mostrar comandos disponíveis"
  - name: [comando1]
    description: "[O que faz — ação específica]"
  - name: [comando2]
    description: "[O que faz]"
  - name: [comando3]
    description: "[O que faz]"
  - name: exit
    description: "Sair do modo agente"

dependencies:
  tasks: []        # tasks que o agente executa
  templates: []    # templates que o agente usa ou produz
  tools: []        # MCPs, CLIs, serviços externos
```

> **Por que este formato?** É o mesmo padrão do AIOX — o framework de orquestração que o próprio ambiente do cliente já usa. Um agente criado neste formato é ativado com `@nome-do-agente` diretamente no Claude Code, sem configuração extra.

**Caminho do arquivo:** `squads/[nome-do-squad]/agents/[nome-do-agente].md`

---

#### Criação ao vivo — sequência

**Para cada agente (em ordem: Orquestrador → Especialistas):**

**Passo 1:** Definir a persona antes de abrir o arquivo.

> "Antes de criar o arquivo: me diga em uma frase quem é esse agente. Não o que ele faz — quem ele é. Como ele pensa. Qual é o arquétipo?"

**Passo 2:** Criar o arquivo com ajuda do agente atual.

```
Crie um arquivo chamado agente-[nome].md com a estrutura .yaml completa para um agente especializado em [escopo]. A persona é [persona]. Os 5 comandos principais são: [lista]. O negócio é [contexto do cliente].
```

> **Alternativa estruturada:** Se quiser usar o processo guiado do AIOX com quality gate automático, use `@aiox-master *create agent [nome]`. Ele conduz um processo de 7 fases — inclui pesquisa de contexto, validação de escopo e infraestrutura operacional. Para a maioria dos clientes, o prompt livre acima é suficiente em S04; o `*create agent` é recomendado quando o agente vai ser usado em produção por meses.

**Passo 3:** Revisar o escopo e os limites.

```
Leia o arquivo agente-[nome].md e me diga: existe alguma tarefa que este agente poderia fazer que conflita com o escopo do agente-[outro-nome]?
```

→ Teste anti-overlap em tempo real.

**Passo 4:** Repetir para cada agente.

---

#### Comandos mínimos por tipo de agente

**Orquestrador (mínimo 5 comandos):**
- `*status` — Relatório de status do squad e projetos ativos
- `*delegar` — Distribuir tarefa para o agente correto
- `*plano` — Criar plano de ação para objetivo dado
- `*revisar` — Revisar output de agente especialista
- `*prioridade` — Redefinir prioridades com base no contexto atual

**Especialista (mínimo 5 comandos — adaptados ao domínio):**
- Pelo menos 3 comandos de execução direta (ações que o agente faz)
- Pelo menos 1 comando de análise/diagnóstico
- Pelo menos 1 comando de relatório ou entregável estruturado

---

### BLOCK 5 — CLAUDE.md do Squad (10 min)

**Objective:** Criar o CLAUDE.md do squad — o documento que governa o time inteiro.

> "Em S03 você criou o CLAUDE.md do ambiente. Agora criamos o CLAUDE.md do squad — que define como os agentes interagem entre si, quem tem autoridade sobre o quê, e as regras que valem para todos."

**Diferença:**

| CLAUDE.md do ambiente (S03) | CLAUDE.md do squad (S04) |
|-----------------------------|--------------------------|
| Regras gerais do negócio | Regras de interação do squad |
| Tom e contexto do negócio | Hierarquia de autoridade |
| Ferramentas disponíveis | Matriz de delegação |

**Conteúdo mínimo do CLAUDE.md do squad:**

```markdown
# [Nome do Negócio] — Squad Neural

## Hierarquia

Orquestrador: @[nome-orquestrador]
Especialistas: @[nome-1], @[nome-2], @[nome-3]

## Matriz de Delegação

| Tipo de Tarefa | Agente Responsável |
|---------------|-------------------|
| [Tipo 1] | @[agente] |
| [Tipo 2] | @[agente] |
| [Tipo 3] | @[agente] |

## Regras de Handoff

1. Tarefas fora do escopo → nomear o agente correto, não executar
2. Output de especialista → pode ser revisado pelo orquestrador antes de entregar
3. Conflito de escopo → orquestrador decide

## Regras Universais do Squad

- [Regra que vale para todos os agentes]
- [Regra que vale para todos os agentes]
- [Regra que vale para todos os agentes]
```

**Criação ao vivo:**

```
Com base nos agentes que criamos ([lista]), crie o CLAUDE.md do squad com hierarquia, matriz de delegação e 3 regras universais.
```

**Estrutura de arquivos do squad:**

O squad inteiro vive numa pasta com estrutura canônica AIOX:

```
squads/
└── [nome-do-squad]/
    ├── squad.yaml          ← manifesto do pacote (nome, versão, componentes)
    ├── CLAUDE.md           ← regras do squad — o que estamos criando agora
    ├── agents/
    │   ├── [agente-1].md
    │   └── [agente-2].md
    └── workers/
        └── [worker].md     ← processos automatizados (vêm em S06)
```

O `squad.yaml` é o "pacote" do squad — declara nome, versão e quais arquivos fazem parte:

```yaml
name: [nome-do-squad]
version: "1.0.0"
aiox:
  minVersion: "2.0.0"
  type: squad
components:
  agents: "agents/*.md"
  tasks: "tasks/*.md"
  templates: "templates/*.md"
```

> Não precisa preencher o squad.yaml ao vivo agora. Ele é criado uma vez e raramente alterado. O que importa hoje é que os arquivos dos agentes e o CLAUDE.md existam na estrutura certa — o AIOX os encontra automaticamente.

---

### BLOCK 6 — Primeira Ativação de Todos os Agentes (5 min)

**Objective:** O cliente ativa cada agente e confirma que está funcionando.

**Sequência de teste rápido:**

```
@[orquestrador] *status
```
→ O orquestrador responde com visão do squad.

```
@[especialista-1] *[comando de execução]
```
→ O especialista executa dentro do escopo.

```
@[especialista-1] [tarefa que é do escopo do especialista-2]
```
→ O especialista recusa e nomeia o agente correto.

**O que observar:**
- Cada agente usa a persona correta?
- Os limites de escopo estão sendo respeitados?
- O orquestrador entende a hierarquia?

> "Se um agente fizer algo que deveria ser do outro — o .yaml precisa de ajuste. Isso é normal na primeira ativação. O squad se calibra com uso."

---

### BLOCK 7 — DESAFIO e Próxima Sessão (5 min)

**DESAFIO (gate para S05):**

> "Antes da próxima sessão: use o squad por 3 dias em situações reais do negócio. Execute pelo menos 5 tarefas reais — uma para cada agente. Documente onde cada agente teve dificuldade, onde o escopo pareceu impreciso, onde precisou ajustar o .yaml. Esse log de uso real é o material para S05."

**O que esse exercício prepara:**
- Identificação de gaps e overlaps reais (teoria vs. prática)
- Material para iterar os .yaml com dados de uso
- Familiaridade do cliente com o squad antes de trabalhar nos handoffs

**Closing message:**
> "A arquitetura está desenhada. O squad existe no papel. Na próxima sessão, o squad vai para o campo — ativamos cada agente em cenários reais, testamos os handoffs entre eles, e iteramos com base no que você descobrir nesses 3 dias. O squad que você tem hoje é o rascunho. O squad que você terá em S05 é a primeira versão funcional."

---

## Key Concepts Cheat Sheet (for Arthur to reference live)

| Conceito | Explicação de uma linha |
|---------|------------------------|
| 3 Tipos de Agente | Orquestrador (1) · Especialista (2–4) · Suporte (0–2). |
| Anti-overlap | Toda tarefa pertence a exatamente 1 agente. Teste em pares antes de criar. |
| .yaml | Identidade operacional do agente: persona, escopo, comandos, limites. |
| CLAUDE.md do squad | Governa o time: hierarquia, matriz de delegação, regras universais. |
| Handoff | Quando agente recebe tarefa fora do escopo → avisa e nomeia o correto. |
| Nome com persona | Agente com nome mítico é mais coerente que agente com label funcional. |
| Squad mínimo | Orquestrador + 2 Especialistas. Cresce com dados de uso — não por antecipação. |
| `@agente-nome` | Ativa o agente pelo nome do arquivo (sem extensão). |
| Primeiro ativação | Sempre testar com tarefa de escopo, depois com tarefa fora do escopo. |

---

## Session Outputs (what client delivers before Session 05)

- [ ] 3–5 agentes com .yaml completo (persona, escopo, comandos, limites)
- [ ] CLAUDE.md do squad com hierarquia e matriz de delegação
- [ ] Todos os agentes ativados e testados (escopo in/out confirmados)
- [ ] Log de uso real: 5 tarefas executadas com o squad em 3 dias
- [ ] Anotações de iteração: onde ajustou o .yaml e por quê

---

## Notes for Personalization

> Se o cliente tem negócio solo simples: squad de 3 agentes (orquestrador + 2 especialistas) é suficiente. Não criar agentes extras por antecipação.
> Se o cliente tem equipe humana: mapear como o squad interage com a equipe humana — quem no squad serve quem na equipe.
> Se o cliente já tem um agente criado em S03: o agente de S03 pode se tornar um dos especialistas do squad. Não recriar — reclassificar e ajustar o .yaml.
> Se o cliente tiver dificuldade em definir personas: usar arquétipos famosos (CEO, Diretor Criativo, Comercial, Analista) como ponto de partida.

---

## RPG CARD — S04

### 🏗️ AMBIENTE ATIVO: SQUAD EM CONSTRUÇÃO
*"A arquitetura existe. Os agentes têm identidade. Falta testá-los no campo."*

> Título CONSTRUTOR desbloqueado em S06, após deploy e operação real.

| Campo | Conteúdo |
|-------|---------|
| **DESAFIO (gate)** | 3–5 agentes com .yaml completo e escopos sem overlap. CLAUDE.md do squad com hierarquia e matriz de delegação. Log de 5 tarefas reais executadas. |
| **ARTEFATOS** | Templates de Agent .yaml (3 variações) · Checklist de Squad Design · Mapa de Escopos e Delegação · Template de Matriz de Autoridade |
| **HABILIDADE** | Projetar arquitetura de squad sem overlap. Criar .yaml de agente com persona, escopo e comandos. Testar limites de escopo ativamente. |
| **PRÓXIMA SESSÃO** | S05 — SQUAD$ II · Agentes — ativação real, handoffs e iteração |

---

## Connections

- **Trilha:** [[trilha-runa-21-sessoes]] — roadmap completo das 21 sessões
- **Product:** [[runa-mentoria-prd]] — PRD completo RUNA SYSTEMS
- **Previous session:** S03 — [[runa-intervencao-sessao-03-tcode-fluxo|†CODE II — Fluxo]]
- **Next session:** S05 — SQUAD$ II — Agentes (ativação e handoffs)
- **Hub:** [[agent-hub|RUNA SYSTEMS Hub]]
- **Artefatos:** [[template-agente-yaml-orquestrador|Template YAML Orquestrador]] · [[template-agente-yaml-especialista|Template YAML Especialista]] · [[template-agente-yaml-suporte|Template YAML Suporte]] · [[template-claude-md-squad|Template CLAUDE.md Squad]] · [[checklist-squad-design|Checklist Squad Design]]
