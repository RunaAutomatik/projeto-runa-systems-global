---
date: 2026-04-21
tags: [runa-intervencao, mentoria, sessao-07, mind, base-conhecimento, akasha, extração, estrategista]
project: runa-systems-global
type: lesson-structure
fase: 4 — MIND$
titulo-rpg: (Estrategista em S08)
anterior: sessao-06-squad-deploy
proximo: sessao-08-mind-memoria-evolucao
---

# Runa Intervenção — Session 07: MIND$ I — Base de Conhecimento

> **Purpose:** Criar a base de conhecimento do squad — a camada que transforma agentes genéricos em especialistas do negócio específico do cliente. O vault pessoal do cliente (estilo AKASHA) é scaffoldado e os primeiros 5 documentos estruturados são ingeridos.
> **Output:** Vault de conhecimento scaffoldado + 5 documentos estruturados ingeridos + squad consultando a base corretamente em resposta a perguntas reais.
> **Template:** This structure serves ALL future Runa Intervenção clients — S07 is always MIND$ I.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Objective:** Fazer o cliente entender por que agentes com base de conhecimento são fundamentalmente diferentes de agentes sem ela.

**Key message to deliver:**

> "O squad que você tem agora sabe o que fazer. Mas ainda não sabe *quem é você*. Não sabe qual cliente comprou mais, qual oferta converteu melhor, qual objeção aparece sempre na semana 3 do processo de venda. Quando você responde uma pergunta difícil para um cliente, você não está consultando o Claude — você está consultando 10 anos de experiência. MIND$ é o que dá essa experiência ao squad."

**The critical principle:**

Sem base de conhecimento:
```
Pergunta → Agente → Resposta genérica (baseada em treinamento do modelo)
```

Com base de conhecimento:
```
Pergunta → Agente consulta vault → Resposta específica do negócio
```

A diferença não é técnica. É a diferença entre um consultor que conhece seu setor e um consultor que está no primeiro dia.

**Framing de RPG:** "O CONSTRUTOR montou o time. O ESTRATEGISTA dá inteligência ao time. A partir de S07, o squad sabe — não apenas faz."

---

### BLOCK 2 — Framework Universal de Extração (20 min)

**Objective:** O cliente aprende o método para extrair conhecimento do formato que está (documentos, planilhas, memória, conversas) para o formato que o squad pode consultar.

**The 3 source types:**

| Tipo | O que é | Exemplos |
|------|---------|---------|
| **Documentos existentes** | Arquivos que o cliente já tem | Propostas aprovadas, e-mails de sucesso, roteiros de venda |
| **Conhecimento tácito** | Está na cabeça do cliente, não registrado | "Clientes que mencionam X geralmente fecham em 7 dias" |
| **Dados operacionais** | Números e registros do negócio | Taxas de conversão, objeções mais frequentes, perfil de cliente ideal |

**The 5-question extraction framework:**

Para qualquer fonte de conhecimento, pergunte:

```
1. O que eu sei sobre esse tema que um agente precisaria saber para agir bem?
2. Qual é a regra de ouro (the heuristic) que eu aplico inconscientemente?
3. Qual é o exemplo mais claro de "isso funcionou" e "isso não funcionou"?
4. Qual é a exceção mais importante — quando a regra não se aplica?
5. Qual seria a pergunta que um novo analista do meu negócio deveria me fazer?
```

**Structure for extraction sessions:**

Não extraia tudo de uma vez. Extraia por tema:

```
Semana 1: ICP e processo de venda
Semana 2: Objeções e contorno
Semana 3: Onboarding e entrega
Semana 4: Retenção e expansão
```

**Live exercise:** O cliente escolhe 1 tema e responde as 5 perguntas em voz alta. O facilitador documenta as respostas em tempo real no formato de conhecimento estruturado.

---

### BLOCK 3 — Scaffolding do Vault (20 min)

**Objective:** O cliente cria a estrutura do seu vault de conhecimento personalizado baseado no padrão AKASHA.

**Vault structure (personal knowledge base):**

```
[nome-do-negocio]-kb/
├── CLAUDE.md                  ← Mapa do vault: roteamento, schema, guardrails
├── raw/                       ← Documentos fonte imutáveis (drop aqui para ingerir)
└── wiki/
    ├── index.md               ← Catálogo de todas as páginas — LEIA PRIMEIRO
    ├── log.md                 ← Log de operações (append-only)
    ├── hot.md                 ← Buffer de conhecimento recente ativo (500 chars)
    ├── entities/              ← Pessoas, empresas, produtos, clientes
    ├── concepts/              ← Frameworks, métodos, princípios do negócio
    ├── sources/               ← Resumos de documentos fonte
    └── analyses/              ← Comparações, sínteses, diagnósticos
```

**CLAUDE.md do vault (mínimo para funcionar):**

```markdown
# [Nome do Negócio] — Knowledge Base

## Mapa do Vault

Esta é a base de conhecimento do squad de [nome do negócio].
Sempre leia wiki/index.md antes de responder qualquer consulta.
O conteúdo em raw/ é imutável — nunca edite arquivos em raw/.

## Roteamento

| Tipo de consulta | Onde consultar |
|-----------------|---------------|
| Quem é o ICP | wiki/entities/icp.md |
| Processo de venda | wiki/concepts/processo-venda.md |
| Objeções e respostas | wiki/concepts/objecoes.md |
| Cases de sucesso | wiki/analyses/ |
| Fontes originais | wiki/sources/ |

## Guardrails

- Nunca invente informação ausente — sinalize a lacuna
- Quando não encontrar no vault, diga explicitamente
- Fontes citadas ao final de cada resposta que usa o vault
```

**Live exercise:** O cliente cria o vault scaffolded ao vivo. O facilitador guia a criação do CLAUDE.md do vault e do index.md inicial.

---

### BLOCK 4 — Ingestão dos Primeiros 5 Documentos (25 min)

**Objective:** O cliente ingere os 5 documentos mais críticos do negócio e verifica que o squad consegue consultá-los corretamente.

**Priority order for first 5 documents:**

| # | Documento | Por que primeiro |
|---|-----------|----------------|
| 1 | Perfil do ICP (cliente ideal) | Agentes usam em toda decisão |
| 2 | Processo de venda (passo a passo real) | Base para Copy + Comercial |
| 3 | Top 5 objeções + respostas que funcionaram | Base para Comercial + Copy |
| 4 | Proposta ou oferta principal (descrição completa) | Todo agente precisa saber o que vende |
| 5 | Case de sucesso de referência (cliente real) | Prova de que o método funciona |

**Ingestion process:**

```
Para cada documento:

1. Colocar em [vault]/raw/ (nomear como YYYY-MM-DD-[tema].md)
2. Criar página wiki correspondente em wiki/[categoria]/[tema].md
3. Atualizar wiki/index.md com a nova entrada
4. Registrar em wiki/log.md
```

**Ingestion template (wiki page):**

```markdown
# [Título do Conhecimento]

> Fonte: [[../../raw/YYYY-MM-DD-[arquivo]]]
> Última atualização: [data]

## Síntese

[3–5 frases que capturam o essencial]

## Pontos-chave

- [Ponto 1 — específico o suficiente para ser acionável]
- [Ponto 2]
- [Ponto 3]

## Quando usar

[Situações específicas onde esse conhecimento deve ser consultado]

## Exceções

[Quando este conhecimento NÃO se aplica]
```

**Live exercise:** O cliente ingere ao vivo o documento do ICP. O facilitador observa, sugere síntese mais precisa onde necessário.

---

### BLOCK 5 — Teste de Consulta (10 min)

**Objective:** Verificar que o squad consegue consultar o vault e usar o conhecimento corretamente.

**3 test queries (execute ao vivo):**

```
Teste 1 — Consulta direta
@[orquestrador] Quem é o ICP principal do negócio?
→ Deve citar o vault, não improvisar

Teste 2 — Consulta aplicada
@[especialista-comercial] Qual objeção mais comum e como responder?
→ Deve consultar wiki/concepts/objecoes.md e citar o caso real

Teste 3 — Consulta de síntese
@[orquestrador] Com base no case de sucesso, qual é o padrão de cliente que fecha mais rápido?
→ Deve cruzar ICP + case, produzir insight que não é óbvio sem o vault
```

**What to verify:**

- [ ] Agente cita a fonte (não inventa)
- [ ] Agente sinaliza quando não encontra no vault
- [ ] Resposta é específica do negócio (não genérica)
- [ ] Agente não contradiz informação do vault

**If a test fails:**

| Falha | Causa provável | Ação |
|-------|---------------|------|
| Agente inventou em vez de consultar | CLAUDE.md do vault não está no contexto do agente | Adicionar `@include vault/CLAUDE.md` ao agente |
| Agente disse "não sei" mas informação existe | wiki/index.md desatualizado | Atualizar index com a página nova |
| Agente citou fonte mas resposta errada | Síntese na wiki page imprecisa | Revisar e reescrever a wiki page |

---

### BLOCK 6 — Desafio + Próxima Sessão (5 min)

**DESAFIO S07:**

```
Antes de S08:

1. VAULT COMPLETO: 5 documentos ingeridos + 5 wiki pages + index atualizado

2. 3 CONSULTAS BEM-SUCEDIDAS: Documentar 3 perguntas ao squad que foram
   respondidas usando o vault — com citação de fonte

3. 1 LACUNA IDENTIFICADA: Registrar 1 pergunta que o agente não soube responder
   porque a informação não estava no vault → planejar ingestão para S08

4. INDEX ATUALIZADO: wiki/index.md reflete todas as páginas existentes

5. LOG INICIADO: wiki/log.md com pelo menos 3 entradas de ingestão
```

**O que esperar de S08:**

> "Em S08 o vault deixa de ser uma biblioteca e vira uma memória viva. Cada agente vai ter seu próprio Memory.md — atualizado depois de cada uso. O squad vai aprender com o que funcionou no seu negócio. Não de forma genérica — de forma específica: esse cliente, esse processo, essa resposta que converteu."

---

## Facilitator Notes

### Sessão mais individual do programa

O conteúdo do vault é único para cada cliente. O facilitador não pode preparar os documentos com antecedência — depende do que o cliente traz.

**What to ask before the session:**
1. "Qual é o seu ICP mais lucrativo? Você tem isso documentado em algum lugar?"
2. "Qual proposta aprovada você mais gosta? Me manda antes da sessão."
3. "Qual objeção você ouve toda semana? Você já respondeu por escrito em algum e-mail?"

**Most common problems in S07:**

| Problema | Causa | Resolução |
|----------|-------|-----------|
| Cliente não tem documentos | Negócio novo ou nunca documentou | Fazer extração ao vivo nas 5 perguntas — criar o documento durante a sessão |
| Wiki pages muito longas | Cliente quer colocar tudo | Limitar a 500 palavras por página — sintetizar, não transcrever |
| Agente não consulta o vault | Vault não está sendo incluído no contexto | Revisar como o agente é ativado; adicionar referência ao vault no persona |
| Index desatualizado | Cliente ingeriu mas não atualizou index | Mostrar que index quebrado = vault invisível |

### Timing adjustments

| Client profile | Block 2 | Block 3 | Block 4 |
|----------------|---------|---------|---------|
| Documentação existente | 15 min | 15 min | 35 min |
| Pouca documentação | 30 min | 20 min | 20 min |
| Negócio complexo | 20 min | 15 min | 30 min |

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Framework de Extração | Block 2 — guia das 5 perguntas | [[framework-extracao-conhecimento]] |
| Template de Ingestão | Block 4 — estrutura de wiki page | [[template-ingestao-wiki]] |
| Estrutura do Vault | Block 3 — scaffold completo | [[estrutura-vault-conhecimento]] |

---

## Connections

- **Anterior:** [[runa-intervencao-sessao-06-squad-deploy|S06 — SQUAD$ III · Deploy]]
- **Próxima:** [[runa-intervencao-sessao-08-mind-memoria-evolucao|S08 — MIND$ II · Memória e Evolução]]
- **Referência vault:** AKASHA (`C:/runa-systems-global/AKASHA/`) — implementação de referência
- **Artefatos:** [[]] — pasta com todos os entregáveis desta fase
