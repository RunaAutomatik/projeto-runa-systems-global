---
date: 2026-04-15
tags: [squad-dollar, modulo-01, mapeamento, processos, departamentos, curso]
project: runa-systems-global
type: course-material
produto: [[squad-dollar-prd]]
---

# Módulo 1 — Mapeando seu Negócio Antes de Construir os Agentes

> **Módulo:** 1 de 8 — $QUAD
> **Nível:** Iniciante
> **Pré-requisito:** Pré-Fase completa (Claude Code + GitHub + Memória configurados)

---

## Por que este módulo existe

A maioria das pessoas que tenta montar um squad de IA começa pelo lugar errado.

Elas abrem o Claude Code, criam um agente chamado "assistente de marketing" e ficam pedindo coisas para ele. Funciona um pouco. Mas o agente não tem foco, não tem limite claro de responsabilidade, não tem ferramentas adequadas — e em três semanas está abandonado.

O erro não foi o agente. Foi a ausência de um mapa.

**Um squad funciona como uma empresa bem organizada.** Cada departamento tem uma função clara, sabe o que é seu e o que é do departamento ao lado. Um agente sem mapeamento é como contratar um funcionário sem descrever o cargo.

Este módulo resolve isso antes que você escreva uma linha de instrução.

---

## O que você vai construir neste módulo

Ao final, você terá:

1. **Lista dos departamentos do seu negócio** — o que cada área faz, quais são suas responsabilidades e quais tarefas consomem mais tempo
2. **Matriz de delegação** — para cada departamento, o que pode ser delegado a um agente e o que deve ficar com você
3. **Ordem de prioridade** — qual agente construir primeiro, segundo e terceiro

Esses três documentos vão guiar os Módulos 2 a 7.

---

## Parte 1 — O raciocínio por trás do mapeamento

### Todo negócio tem departamentos, mesmo que você não os veja assim

Se você trabalha sozinho, ainda assim faz marketing, vende, entrega, administra finanças e gere projetos. São funções diferentes, mesmo que a mesma pessoa as execute.

O mapeamento não é sobre criar uma empresa com organograma. É sobre **identificar as funções que existem no seu negócio** — e então decidir quais delas podem ser amplificadas por um agente.

### A pergunta certa não é "que agente vou criar?"

A pergunta certa é: **"Qual função do meu negócio está mais lenta, mais cara ou mais inconsistente do que deveria?"**

Essa é a função que mais se beneficia de um agente. Não a função que você acha mais interessante tecnicamente. A que resolve um problema real.

### Granularidade certa: um agente por departamento

Um agente por tarefa → impossível de gerenciar. Você vai ter 30 agentes que ninguém usa.

Um agente por departamento → manutenível, focado, escalável.

Se o departamento de Marketing tem 15 tarefas, o Agente de Marketing faz as 15. Ele é especialista daquele departamento — não de uma tarefa específica.

---

## Parte 2 — Identificando os departamentos do seu negócio

Antes de abrir qualquer ferramenta, faça este exercício em papel ou num documento simples.

### Exercício — 20 minutos

**Passo 1: Liste tudo que você faz na semana**

Pegue os últimos 7 dias e liste todas as atividades que você (e sua equipe, se tiver) executaram. Sem filtro — tudo que tomou tempo.

Exemplos:
- Respondi mensagens de clientes no WhatsApp
- Escrevi um post para o Instagram
- Preparei uma proposta comercial
- Fiz uma planilha de fluxo de caixa
- Gravei um vídeo de conteúdo
- Agendei reuniões
- Revisou entregável de cliente
- Pesquisei concorrentes

**Passo 2: Agrupe por função**

Olhe para a lista e pergunte: "estas atividades pertencem à mesma área?" Agrupe as similares.

Os grupos que vão surgir costumam ser variações de:

| Função | O que inclui |
|--------|-------------|
| **Marketing e Conteúdo** | Posts, vídeos, copy, campanhas, SEO |
| **Vendas e Ofertas** | Propostas, follow-up, scripts, precificação |
| **Atendimento e Clientes** | Onboarding, suporte, comunicação pós-venda |
| **Operações e Projetos** | Planejamento, entregas, gestão de tarefas |
| **Financeiro e Administrativo** | Fluxo de caixa, cobranças, relatórios |
| **Conhecimento e Pesquisa** | Análise de mercado, benchmarks, curadoria |

**Nota:** Seu negócio pode ter funções que não estão nessa lista — e pode não ter todas as que estão. Isso é esperado. O mapa é do *seu* negócio, não de um modelo genérico.

**Passo 3: Identifique a dor de cada área**

Para cada grupo, responda:
- Qual tarefa desta área consome mais tempo?
- Qual tarefa desta área é mais inconsistente (resultado varia muito)?
- Qual tarefa desta área você mais procrastina?

Essas respostas indicam onde um agente vai ter maior impacto.

---

## Parte 3 — Matriz de Delegação

Com os departamentos mapeados, defina o que vai para o agente e o que fica com você.

### Template — preencha para cada departamento

Copie este template quantas vezes precisar — um bloco por departamento:

```
## Departamento: [NOME DO DEPARTAMENTO]

**Função principal:** [O que esta área faz em uma frase]

**Tarefas que VÃO para o agente (alta frequência, processo repetível):**
- [ ] ...
- [ ] ...
- [ ] ...

**Tarefas que FICAM comigo (decisão estratégica, relacionamento pessoal):**
- [ ] ...
- [ ] ...

**Dor principal desta área:**
[A tarefa mais lenta, cara ou inconsistente]

**Prioridade para construção do agente:** Alta / Média / Baixa
```

### Critério para decidir o que vai ao agente

**Vai ao agente se:**
- A tarefa se repete mais de 3x por semana
- Existe um padrão claro de como fazer (processo definível)
- O resultado não depende de julgamento humano único
- Erros do agente são recuperáveis sem dano grave

**Fica com você se:**
- É uma decisão que muda a direção do negócio
- Envolve relacionamento pessoal que você não quer intermediar
- Requer contexto emocional ou político que um agente não tem
- Um erro pode danificar relacionamentos importantes

---

## Parte 4 — Definindo a ordem de construção

Com a matriz preenchida, você tem material para decidir qual agente construir primeiro.

### Critérios de priorização (some os pontos)

Para cada departamento, pontue:

| Critério | Pontuação |
|----------|----------|
| Alta frequência (5+ tarefas/semana) | +3 pontos |
| Processo bem definido (você sabe exatamente como fazer) | +2 pontos |
| Você mais procrastina nessa área | +2 pontos |
| Impacto direto em receita | +2 pontos |
| Já tem exemplos/referências de como quer o resultado | +1 ponto |
| Você tem mais de um agente atuando nessa área hoje | -1 ponto |

**O departamento com maior pontuação = primeiro agente a construir.**

---

## Parte 5 — Validando o mapa com o Claude Code

Depois de preencher a matriz no papel ou documento, use este prompt para validar e estruturar o resultado.

### Prompt — copie e cole no seu Claude Code

```
Acabei de mapear os departamentos do meu negócio e preciso que você me ajude a validar.

Meu negócio: [DESCREVA EM 2-3 FRASES O QUE SEU NEGÓCIO FAZ]

Os departamentos que identifiquei foram:
[LISTE SEUS DEPARTAMENTOS E A FUNÇÃO PRINCIPAL DE CADA UM]

Para cada departamento, defini o que vai ao agente:
[COLE SUA MATRIZ DE DELEGAÇÃO AQUI]

Por favor:
1. Analise o mapeamento e me diga:
   - Tem alguma função óbvia que eu não identifiquei?
   - Tem algum departamento que parece ter granularidade errada (muito amplo ou muito específico)?
   - As tarefas que defini para os agentes fazem sentido como processo repetível?

2. Com base na matriz, qual departamento você sugere priorizar para o primeiro agente e por quê?

3. Salve este mapeamento na memória do projeto:
   Caminho: ~/.claude/projects/[NOME DO PROJETO]/memory/project_mapeamento.md
   Com frontmatter:
   ---
   name: Mapeamento de departamentos
   description: Departamentos do negócio, funções, delegação e ordem de construção do squad
   type: project
   ---
   
   E atualize o MEMORY.md com a entrada:
   - [project_mapeamento.md](project_mapeamento.md) — Mapeamento do negócio: departamentos, delegação, ordem de construção

4. Confirme o arquivo foi criado.
```

---

## Parte 6 — Exemplo de mapeamento (negócio fictício)

Para ter uma referência concreta, veja como fica um mapeamento de um negócio de consultoria de gestão financeira para pequenos negócios:

---

**Negócio:** Consultoria de finanças para MEIs e pequenas empresas. Presta serviços de organização financeira, orientação tributária e planejamento.

---

### Departamento: Marketing e Conteúdo
**Função:** Criar presença online e educar clientes em potencial sobre organização financeira.

**Vai ao agente:**
- Criar posts educativos sobre finanças para Instagram
- Escrever newsletter mensal para base de leads
- Pesquisar e resumir mudanças tributárias relevantes

**Fica comigo:**
- Definir posicionamento e mensagem principal da marca
- Gravar vídeos com minha voz e rosto

**Dor principal:** Criar conteúdo toda semana leva 4-5 horas e muitas vezes não acontece.
**Prioridade:** Alta (frequência alta, processo definível, impacto em aquisição)

---

### Departamento: Vendas e Atendimento
**Função:** Converter leads em clientes, onboardar novos clientes, manter relacionamento.

**Vai ao agente:**
- Preparar propostas iniciais baseadas em briefing do cliente
- Criar sequências de follow-up para leads que não responderam
- Montar checklist de onboarding para cada novo cliente

**Fica comigo:**
- Reuniões de diagnóstico com novos clientes
- Negociação de contratos
- Relacionamento com clientes estratégicos

**Dor principal:** Propostas demoram 2h para preparar e seguem sempre a mesma estrutura.
**Prioridade:** Alta (alto impacto em receita, processo repetível)

---

### Departamento: Operações e Entrega
**Função:** Executar as análises e entregar relatórios para clientes.

**Vai ao agente:**
- Estruturar modelos de análise de fluxo de caixa
- Criar templates de relatórios mensais
- Formatar e revisar entregáveis antes de enviar

**Fica comigo:**
- Análise real dos dados financeiros de cada cliente
- Identificar problemas e recomendações estratégicas

**Dor principal:** Formatação e padronização de relatórios toma tempo que poderia ser de análise.
**Prioridade:** Média (melhora qualidade, mas impacto indireto em receita)

---

**Ordem de construção:**
1. Agente de Marketing (maior gargalo, processo mais definível)
2. Agente de Vendas (maior impacto em receita)
3. Agente de Operações (qualidade de entrega)

---

## Checklist de conclusão do Módulo 1

Antes de avançar para o Módulo 2, confirme:

- [ ] Listei todas as atividades da semana passada
- [ ] Agrupei em departamentos com nome e função clara
- [ ] Preenchi a matriz de delegação para cada departamento
- [ ] Identifiquei a dor principal de cada área
- [ ] Defini a ordem de prioridade dos agentes
- [ ] Rodei o prompt de validação com o Claude Code
- [ ] O mapeamento foi salvo na memória do projeto

Com tudo marcado, avance para o Módulo 2 — onde você vai configurar o Agente Orquestrador.

---

## O que vem a seguir

**Módulo 2 — O Agente Orquestrador**

O primeiro agente a construir não é o de Marketing nem o de Vendas. É o Orquestrador — o agente que conhece o negócio todo, coordena os outros e é o ponto de entrada de todas as suas interações com o squad.

Você vai construir esse agente com a sua voz, o seu contexto e as suas regras — antes de construir qualquer especialista.
