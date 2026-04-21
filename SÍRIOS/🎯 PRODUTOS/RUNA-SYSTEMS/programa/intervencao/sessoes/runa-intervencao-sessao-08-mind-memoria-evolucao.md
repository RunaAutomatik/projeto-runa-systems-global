---
date: 2026-04-21
tags: [runa-intervencao, mentoria, sessao-08, mind, memoria, evolucao, akasha, estrategista]
project: runa-systems-global
type: lesson-structure
fase: 4 — MIND$
titulo-rpg: ESTRATEGISTA 🧠
anterior: sessao-07-mind-base-conhecimento
proximo: sessao-09-especializacao
---

# Runa Intervenção — Session 08: MIND$ II — Memória e Evolução

> **Purpose:** Transformar o vault estático em uma memória viva — cada agente passa a ter seu próprio Memory.md, atualizado após cada uso relevante. O squad deixa de consultar uma biblioteca e passa a aprender com o que funciona no negócio específico do cliente.
> **Output:** Memory.md por agente + protocolo semanal de atualização KB + 5 prompts de consulta core + ESTRATEGISTA desbloqueado.
> **Template:** This structure serves ALL future Runa Intervenção clients — S08 is always MIND$ II.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Objective:** O cliente entende a diferença entre vault como biblioteca (S07) e vault como memória viva (S08).

**Key message to deliver:**

> "Em S07 você criou uma biblioteca. Um consultor novo pode ler uma biblioteca e saber o que a empresa faz. Mas um consultor experiente faz algo diferente: ele lembra do que funcionou. Lembra da objeção que apareceu na semana 3. Lembra que aquele tipo de cliente fecha mais rápido quando você faz X primeiro. Memory.md é isso — a diferença entre o agente que consulta e o agente que aprende."

**A diferença prática:**

| Vault estático (S07) | Memória viva (S08) |
|---------------------|-------------------|
| Consultado quando perguntado | Atualizado após cada uso relevante |
| Conhecimento do fundador | Conhecimento do fundador + aprendizados do squad |
| Cresce por ingestão manual | Cresce por uso |
| Igual para todos os agentes | Específico por agente |

**Framing de RPG:** "O CONSTRUTOR montou o time. O ESTRATEGISTA deu inteligência ao time em S07. Agora o time começa a acumular inteligência própria. A partir de S08, o squad aprende — não apenas consulta."

---

### BLOCK 2 — Memory.md por Agente (25 min)

**Objective:** O cliente cria o Memory.md de cada agente e entende o que deve ser registrado após cada uso.

**O que é Memory.md:**

Cada agente do squad tem seu próprio arquivo de memória — uma seção do seu `.yaml` ou um arquivo separado linkado. O Memory.md armazena:

- O que funcionou nas últimas interações
- Padrões descobertos no negócio do cliente
- Exceções encontradas na prática
- Instruções que o fundador deu e que devem persistir

**Estrutura do Memory.md:**

```markdown
# Memory — [Nome do Agente]

> Última atualização: YYYY-MM-DD
> Atualizar após: toda interação onde um padrão novo emerge ou uma instrução é dada

---

## O que aprendi sobre este negócio

- [YYYY-MM-DD] [Padrão descoberto ou instrução recebida — específico e acionável]
- [YYYY-MM-DD] [Outra entrada]

---

## O que funciona neste contexto

- [YYYY-MM-DD] [Abordagem/formato/estrutura que gerou bom resultado]

---

## O que não funciona aqui

- [YYYY-MM-DD] [O que falhou e por quê — para não repetir]

---

## Instruções permanentes do fundador

- [YYYY-MM-DD] [Instrução específica que deve sempre ser seguida neste negócio]
```

**Regras do Memory.md:**

| Regra | Por quê |
|-------|---------|
| Máximo 30 entradas ativas por seção | Acima disso, o contexto fica pesado e a qualidade cai |
| Entradas sempre com data | Permite identificar o que está desatualizado |
| Entradas específicas, nunca genéricas | "Clientes de consultoria respondem melhor a exemplos numéricos" — bom. "Ser claro" — inútil |
| Nunca deletar sem substituir | Se uma entrada está errada, corrija — não delete sem registro |

**Onde fica o Memory.md:**

Duas opções — o cliente escolhe a que faz mais sentido para o workflow dele:

**Opção A — Arquivo separado no vault:**
```
[vault]/wiki/memory/[nome-agente]-memory.md
```

**Opção B — Seção no .yaml do agente:**
```yaml
# Em [nome-agente].yaml
memory:
  - date: 2026-04-21
    learning: "Clientes de consultoria preferem exemplos com números reais de mercado"
  - date: 2026-04-21
    instruction: "Sempre mencionar o prazo de implementação antes de citar o preço"
```

**Recomendação:** Opção A para começar — mais fácil de ler e editar. Migrar para Opção B quando o workflow estiver estável.

**Live exercise:** O cliente cria o Memory.md do agente mais usado do squad. O facilitador guia as 4 primeiras entradas com base no que foi descoberto em S07 e S05.

---

### BLOCK 3 — Protocolo Semanal de Atualização (20 min)

**Objective:** O cliente aprende quando e como atualizar o vault e os Memory.md — sem que isso se torne uma tarefa pesada.

**A regra da atualização:**

> "Você não atualiza o vault quando tem tempo. Você atualiza depois de cada interação onde algo novo aconteceu. A janela é 24h — depois disso, o que foi aprendido some."

**Gatilhos de atualização — quando atualizar:**

| Gatilho | O que atualizar |
|---------|----------------|
| Agente produziu output melhor do que o esperado | Memory.md do agente — seção "o que funciona" |
| Agente produziu output pior do que o esperado | Memory.md do agente — seção "o que não funciona" |
| Você deu uma instrução específica a um agente | Memory.md — seção "instruções permanentes" |
| Descobriu um padrão de cliente novo | wiki/analyses/ — nova página ou atualização |
| Recebeu uma objeção nova | wiki/concepts/objecoes.md — atualização |
| Fechou um cliente com perfil diferente | wiki/entities/icp.md — atualização ou nova entrada |
| Um processo mudou no negócio | wiki/concepts/[processo] — atualização |

**Protocolo semanal — 15 minutos toda sexta:**

```
1. Abrir wiki/log.md
2. Listar todas as interações da semana onde algo novo aconteceu
3. Para cada item:
   a. Atualizar a wiki page relevante
   b. Atualizar o Memory.md do agente relevante
   c. Registrar em wiki/log.md
4. Atualizar wiki/hot.md com o contexto da próxima semana
```

**Template da revisão semanal:**

```markdown
# Revisão Semanal — [Semana de YYYY-MM-DD]

## Interações relevantes desta semana

| Agente | Tarefa | O que foi descoberto | Onde documentar |
|--------|--------|---------------------|----------------|
| | | | |

## wiki pages para atualizar

- [ ] [página] — [o que muda]

## Memory.md para atualizar

- [ ] [agente] — [entrada a adicionar]

## hot.md — contexto para a próxima semana

[Uma frase com o que os agentes precisam saber sobre a próxima semana]
```

**Live exercise:** O cliente faz uma revisão simulada com base no que aconteceu em S07. O facilitador demonstra como uma interação de 10 minutos vira 3 entradas de Memory.md.

---

### BLOCK 4 — 5 Prompts de Consulta Core (20 min)

**Objective:** O cliente aprende os 5 prompts mais úteis para consultar o vault — os que ele vai usar toda semana.

**Os 5 prompts:**

```
PROMPT 1 — Síntese do vault
@[orquestrador] Com base no vault, me dê uma síntese do que
o squad precisa saber sobre [tema] antes de qualquer interação
com cliente nesta semana.

→ Usa: wiki/hot.md + wiki/[tema]
→ Resposta esperada: síntese específica do negócio, não genérica
```

```
PROMPT 2 — Consulta de padrão
@[orquestrador] Com base no vault, qual é o padrão de cliente
que fecha mais rápido? O que eles têm em comum?

→ Usa: wiki/entities/icp.md + wiki/analyses/
→ Resposta esperada: padrão específico com dados reais do negócio
```

```
PROMPT 3 — Simulação de objeção
@[especialista-comercial] Um prospect acabou de dizer [objeção].
Com base no vault, como eu respondo?

→ Usa: wiki/concepts/objecoes.md + Memory.md do agente
→ Resposta esperada: resposta baseada no que funcionou antes, não genérica
```

```
PROMPT 4 — Lacuna de conhecimento
@[orquestrador] Há algo que eu perguntei nas últimas semanas
que o vault não soube responder? Qual informação está faltando?

→ Usa: wiki/log.md (entradas de query sem resultado)
→ Resposta esperada: lista de lacunas com sugestão de como preencher
```

```
PROMPT 5 — Diagnóstico semanal via vault
@[orquestrador] Com base no vault e no log desta semana,
qual é o maior risco operacional agora? O que o squad deveria
priorizar nos próximos 7 dias?

→ Usa: wiki/log.md + wiki/hot.md + Memory.md dos agentes
→ Resposta esperada: diagnóstico específico do negócio, prioridade clara
```

**Por que estes 5:**

| Prompt | Função | Frequência |
|--------|--------|-----------|
| Síntese do vault | Briefing semanal do squad | Toda semana |
| Padrão de cliente | Decisão estratégica de ICP | Quinzenal |
| Simulação de objeção | Preparação comercial | Antes de reunião |
| Lacuna de conhecimento | Manutenção do vault | Mensal |
| Diagnóstico semanal | Governança operacional | Toda semana |

**Live exercise:** O cliente executa os Prompts 1 e 3 ao vivo. O facilitador observa se o agente cita o vault corretamente ou improvisa.

---

### BLOCK 5 — Anti-Alucinação: O Vault como Âncora (10 min)

**Objective:** O cliente sabe identificar quando o agente está consultando o vault vs. quando está inventando — e sabe como corrigir.

**O problema da alucinação específica:**

Agentes com base de conhecimento criam um risco novo: **alucinação específica** — o agente menciona o nome do cliente, menciona o produto, menciona o processo — mas com detalhes inventados. É mais difícil de perceber do que alucinação genérica.

**Como identificar:**

| Sinal | Significado |
|-------|------------|
| Agente cita a fonte ao final da resposta | Consultou o vault ✅ |
| Agente responde sem citar fonte | Pode estar inventando ⚠️ |
| Agente cita fonte mas o número está errado | Wiki page com dado impreciso ⚠️ |
| Agente diz "não encontrei esta informação no vault" | Funcionando corretamente ✅ |
| Agente responde com certeza sobre tema não ingerido | Alucinação ❌ |

**Como corrigir:**

```
Quando o agente inventar (resposta sem fonte):
→ Responder: "Consulte o vault. Se não está lá, diga que não está."
→ Se acontecer sistematicamente: revisar os guardrails do CLAUDE.md do vault

Quando o agente citar fonte mas dado errado:
→ Verificar a wiki page — dado pode estar impreciso
→ Corrigir a wiki page, não o agente

Quando o agente disser "não está no vault" sobre algo que deveria estar:
→ Verificar se wiki/index.md está atualizado
→ Verificar se o CLAUDE.md do vault está sendo incluído no contexto do agente
```

**Guardrail de anti-alucinação (adicionar ao CLAUDE.md do vault):**

```markdown
## Protocolo Anti-Alucinação

Ao responder qualquer consulta sobre o negócio:

1. Busque no vault primeiro
2. Se encontrar: responda com base no vault + cite a fonte
3. Se não encontrar: diga explicitamente "Esta informação não está no vault"
4. Nunca misture informação do vault com suposições — sinalize claramente quando o vault não cobre

Formato de citação obrigatório ao final de cada resposta:
Fonte: [[wiki/[categoria]/[página]]]
```

---

### BLOCK 6 — ESTRATEGISTA + Desafio S08 (5 min)

**DESAFIO S08:**

```
Antes da próxima sessão (S09 — início da Especialização):

1. MEMORY.MD POR AGENTE: Cada agente do squad tem seu Memory.md
   com pelo menos 5 entradas reais (não exemplos genéricos)

2. PROTOCOLO SEMANAL EXECUTADO: Uma revisão semanal completa
   documentada no wiki/log.md com pelo menos 5 itens atualizados

3. 5 PROMPTS CORE TESTADOS: Cada um dos 5 prompts foi executado
   ao menos 1 vez — resultado documentado no log

4. ZERO ALUCINAÇÕES NÃO DETECTADAS: Toda resposta sem citação
   de fonte foi verificada e corrigida

5. VAULT CRESCEU: Wiki/index.md tem pelo menos 8 páginas
   (5 de S07 + 3 novas de S08)
```

🧠 **TÍTULO DESBLOQUEADO: ESTRATEGISTA**

> "O ESTRATEGISTA não apenas montou o time (CONSTRUTOR). Ele deu ao time a inteligência do negócio (S07). E agora fez o time aprender (S08). O squad que você tem agora não é mais genérico — é especialista no seu negócio específico. Em S09 começa a especialização: você escolhe o front onde quer dominar primeiro."

**O que esperar de S09:**

> "Em S09 você entra na fase de especialização. Com base no diagnóstico de S01, você escolheu o track — Criador, Consultor ou Agência. S09 começa a primeira sessão do track escolhido. O squad já está montado, calibrado, com memória e conhecimento. A partir de agora, cada sessão é sobre expandir o que o squad é capaz de fazer no seu nicho específico de operação."

---

## Facilitator Notes

### S08 é a sessão mais técnica das fases 1–4

O cliente precisa entender a distinção entre:
- Vault (base de conhecimento compartilhada)
- Memory.md (memória individual do agente)
- hot.md (contexto volátil de curto prazo)

Se ficar confuso, use esta analogia:
> "O vault é a enciclopédia da empresa. O Memory.md é o diário pessoal de cada consultor. O hot.md é o post-it na mesa — o que é urgente esta semana."

### Problema mais comum em S08

**Cliente não atualiza a memória depois de S08** — o vault para de crescer.

Causa: parece trabalhoso. Sensação de que "vou fazer depois".

Solução: no protocolo semanal, mostrar que são 15 minutos — não uma hora. Fazer ao vivo em S08 para criar o hábito de muscle memory.

**O que perguntar antes de S08:**
1. "Quais agentes você usou mais desde S07?"
2. "Teve alguma resposta que surpreendeu — boa ou ruim?"
3. "Você fez pelo menos 1 consulta ao vault esta semana?"

### Timing adjustments

| Client profile | Block 2 | Block 3 | Block 4 |
|----------------|---------|---------|---------|
| Vault ativo desde S07 | 20 min | 25 min | 20 min |
| Vault pouco usado | 30 min | 20 min | 15 min |
| Squad grande (5+ agentes) | 30 min | 20 min | 15 min |

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template Memory.md | Block 2 — criação por agente | [[template-memory-agente]] |
| Protocolo Semanal | Block 3 — rotina de atualização | [[protocolo-atualizacao-semanal-kb]] |
| 5 Prompts Core | Block 4 — referência rápida | [[cinco-prompts-consulta-vault]] |

---

## Connections

- **Anterior:** [[runa-intervencao-sessao-07-mind-base-conhecimento|S07 — MIND$ I · Base de Conhecimento]]
- **Próxima:** S09 — Especialização (track escolhido em S01)
- **Referência vault:** AKASHA (`C:/runa-systems-global/AKASHA/`) — implementação de referência
- **Artefatos:** [[]] — pasta com todos os entregáveis desta fase
