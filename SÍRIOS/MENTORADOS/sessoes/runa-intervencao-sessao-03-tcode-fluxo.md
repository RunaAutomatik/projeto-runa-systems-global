---
date: 2026-04-21
tags: [runa-intervencao, mentoria, sessao-03, tcode, fluxo, claude-md, settings, agentes, rpg-card]
project: runa-systems-global
type: lesson-structure
fase: 2 — †CODE
titulo-rpg: FERREIRO (desbloqueado nesta sessão)
anterior: sessao-02-tcode-ambiente
proximo: sessao-04-squad-arquitetura
---

# Runa Intervenção — Session 03: †CODE II — Fluxo

> **Purpose:** Configurar o ambiente completo: CLAUDE.md como sistema de instruções persistente, settings, e primeiro agente operacional. O cliente passa de "ter o terminal" para "ter o terminal que conhece o negócio."
> **Output:** CLAUDE.md funcional com regras do negócio + primeiro agente simples ativo e testado.
> **Template:** Esta estrutura serve ALL future Runa Intervenção clients — S03 é sempre †CODE II.

---

## Session Structure (75–90 min)

### BLOCK 1 — Framing (10 min)

**Objective:** Fazer o cliente entender por que o ambiente genérico é o problema — e por que CLAUDE.md é a solução.

**Key message to deliver:**

> "Na última sessão você instalou o Claude Code e usou as ferramentas básicas. Mas o que você usou era um agente genérico — ele não conhecia o seu negócio, o seu tom, o que nunca fazer, quem são seus clientes. Hoje a gente muda isso. O CLAUDE.md é o manual de operação do agente — e quando ele está bem escrito, o agente para de ser genérico e passa a ser seu."

**The critical distinction:**

| Sem CLAUDE.md | Com CLAUDE.md |
|--------------|--------------|
| Agente genérico | Agente que conhece o negócio |
| Precisa de contexto em todo prompt | Contexto carregado automaticamente |
| Tom inconsistente | Tom calibrado ao negócio |
| Pode "inventar" regras | Opera dentro de regras explícitas |
| Resultado varia muito | Resultado previsível e confiável |

**Analogy to use:**
> "Um funcionário novo no primeiro dia trabalha seguindo intuição — pode ser bom, pode errar muito. Um funcionário que recebeu um manual de operações claro desde o início produz resultados consistentes desde o primeiro dia. O CLAUDE.md é o manual de operação do seu agente. Sem ele, você tem talento. Com ele, você tem sistema."

**Critical point:**
> "O CLAUDE.md não é documentação. É instrução ativa. O agente lê isso toda sessão — é o que define como ele se comporta antes de você escrever uma palavra."

---

### BLOCK 2 — Anatomia do CLAUDE.md (15 min)

**Core concept:**

O CLAUDE.md tem 5 camadas. Cada uma cumpre uma função distinta. O cliente precisa entender cada camada antes de escrever.

**As 5 camadas do CLAUDE.md:**

```
CAMADA 1 — Identidade
  Quem é o agente. Para quem trabalha. Qual é o negócio.

CAMADA 2 — Regras de Comportamento
  O que sempre fazer. O que nunca fazer. Como responder.

CAMADA 3 — Contexto do Negócio
  ICP, oferta, posicionamento, tom de voz, termos do setor.

CAMADA 4 — Comandos e Workflows
  Os atalhos — como o cliente ativa processos com uma palavra.

CAMADA 5 — Ferramentas e Ambiente
  O que o agente tem disponível. Como usar cada ferramenta.
```

**Por que a ordem importa:**
> "O agente lê o CLAUDE.md de cima para baixo. O que está no topo tem mais peso. Identidade vem primeiro porque é a base de tudo que vem depois. Regras vêm antes de contexto porque regras de comportamento se aplicam a qualquer situação — mesmo as que você não previu."

**Mostrando o CLAUDE.md do próprio ambiente:**

Abra o CLAUDE.md do projeto atual como exemplo vivo.

```
Olá. Mostre o conteúdo do arquivo CLAUDE.md desta pasta e explique a função de cada seção.
```

→ O cliente vê um CLAUDE.md real em funcionamento — não um exemplo abstrato.

---

### BLOCK 3 — Construção do CLAUDE.md do Cliente (25 min)

**Objective:** O cliente escreve o CLAUDE.md do próprio negócio — com ajuda do agente.

**Antes de começar:** Pegar o Plano de Ataque da S01 (o cliente deve ter trazido). O CLAUDE.md é informado pelo diagnóstico — não inventado do zero.

> "Você não vai criar do zero — você vai usar o que mapeou em S01 como matéria-prima. O diagnóstico vira contexto. O contexto vira instrução."

---

#### Passo 1 — Criar o arquivo

No terminal, dentro do diretório de trabalho criado em S02:

```
Crie um arquivo chamado CLAUDE.md com a estrutura de 5 camadas que vamos preencher juntos.
```

→ O agente cria o arquivo com os 5 cabeçalhos vazios.

---

#### Passo 2 — Preencher Camada 1: Identidade

**Arthur guia:**
> "Descreva para o agente: você é assistente de [nome do negócio]. Seu dono/operador é [nome do cliente]. O negócio faz [o que faz em uma frase]. O foco atual é [qual o objetivo da próxima fase]."

**Prompt de ajuda:**
```
Ajude-me a escrever a seção de identidade do meu CLAUDE.md. Meu negócio é [descrição]. Meu objetivo atual é [objetivo]. Escreva em formato que o agente entenda como instrução, não como descrição.
```

---

#### Passo 3 — Preencher Camada 2: Regras

**Arthur guia:**
> "Pense em 3 coisas que o agente NUNCA pode fazer — e 3 coisas que ele SEMPRE deve fazer. Baseie em situações reais que acontecem no seu negócio."

**Exemplos para inspirar:**
- Nunca usar jargão técnico com clientes
- Nunca comprometer prazo sem verificar disponibilidade
- Nunca criar documentos sem salvar no diretório correto
- Sempre usar o nome do cliente nas comunicações
- Sempre confirmar antes de enviar qualquer comunicação externa

**Prompt de ajuda:**
```
Com base no meu negócio ([descrição]) e nos processos que mapeei (onboarding, produção de conteúdo, atendimento), sugira 5 regras de comportamento para o meu CLAUDE.md — sendo 3 "nunca" e 2 "sempre". Escreva como instrução direta, não como sugestão.
```

---

#### Passo 4 — Preencher Camada 3: Contexto do Negócio

**Arthur guia:**
> "Aqui vai o contexto que o agente precisa para não errar. Tom de voz, quem são seus clientes, suas ofertas, terminologia do seu setor. Isso evita que o agente invente contexto."

**Prompt de ajuda:**
```
Com base nas informações do meu negócio: ICP é [perfil], oferta principal é [oferta], tom de voz é [tom], termos específicos do meu setor são [termos]. Estruture esse contexto em formato de seção para o meu CLAUDE.md.
```

---

#### Passo 5 — Preencher Camadas 4 e 5 (básico)

Camada 4 — 2 comandos simples para começar:
```markdown
## Comandos
- `briefing` — Criar um briefing estruturado para [tipo de tarefa]
- `resumo` — Resumir documento lido em 5 pontos executivos
```

Camada 5 — Ferramentas disponíveis:
```markdown
## Ferramentas
- Read — lê arquivos do computador
- Write — cria novos arquivos
- Edit — modifica arquivos existentes
- Bash — executa comandos do terminal
```

> "As camadas 4 e 5 vão crescer ao longo do programa. Por agora o mínimo funcional já é suficiente."

---

#### Verificação do CLAUDE.md criado

```
Leia o arquivo CLAUDE.md e me diga: existe alguma inconsistência? Algo que parece contraditório ou que falta para você operar bem nesse negócio?
```

→ O agente audita o próprio manual de operação. O cliente vê o agente verificando suas próprias instruções.

---

### BLOCK 4 — Configuração de Settings (10 min)

**Objective:** Configurar o settings.json para comportamento padrão do agente.

> "O settings.json controla como o Claude Code se comporta no nível do ambiente — não do agente específico. É o meta-nível: configuração antes do CLAUDE.md."

**Configurações essenciais para S03:**

```json
{
  "permissions": {
    "defaultMode": "ask"
  },
  "model": "claude-opus-4-5"
}
```

**Como configurar no terminal:**

```
/settings
```

→ Abre o editor de settings. Mostrar as opções disponíveis.

> "Por agora, o mínimo que importa é: permission mode Ask (para aprender) e o modelo. Nas próximas sessões você vai adicionar hooks — que são ações automáticas que o agente executa antes ou depois de cada ferramenta."

**Permission Mode — revisão rápida:**

| Mode | Quando usar |
|------|-------------|
| **Ask** | S01–S06 — aprendizado e validação |
| **Auto** | Processos validados e confiáveis |
| **Explore** | Auditoria e análise segura |

> "Você vai migrar processos específicos para Auto conforme ganha confiança. Nunca coloque tudo em Auto de uma vez — valide processo por processo."

---

### BLOCK 5 — Primeiro Agente Simples (20 min)

**Objective:** O cliente cria e ativa seu primeiro agente especializado.

> "Um agente é diferente do CLAUDE.md. O CLAUDE.md configura o ambiente geral. Um agente é um especialista dentro desse ambiente — com persona própria, escopo definido e comandos específicos. Você pode ter vários agentes no mesmo diretório. Cada um faz uma coisa bem feita."

**Analogia:**
> "O CLAUDE.md é a cultura da empresa. O agente é o funcionário com cargo definido. Você pode ter a mesma cultura (CLAUDE.md) para um time com 5 especialistas diferentes (5 agentes)."

---

#### Estrutura básica de um agente (.md)

```markdown
---
agent: true
name: [nome do agente]
description: [o que ele faz]
---

# [Nome do Agente]

Você é [persona]. Seu escopo é [escopo]. Você trabalha para [negócio].

## Regras
- [Regra 1]
- [Regra 2]
- [Regra 3]

## Comandos
- `*briefing` — [descrição]
- `*resumo` — [descrição]
- `*analisar` — [descrição]
```

---

#### Criação ao vivo — Arthur guia o cliente

**Passo 1:** Definir o primeiro agente com base no diagnóstico S01.

> "Olhando o que mapeamos em S01: qual é o processo que mais toma seu tempo e mais precisa de consistência? Esse é o candidato natural para o primeiro agente especializado."

**Passo 2:** Criar o arquivo do agente.

```
Crie um arquivo chamado agente-[nome].md na pasta atual. Use a estrutura de agente que discutimos. O agente vai ser especialista em [processo específico do cliente].
```

**Passo 3:** Ativar e testar.

```
@agente-[nome] *briefing [tarefa real do negócio]
```

→ O agente responde usando a persona definida no arquivo.

**Passo 4:** Verificar que o agente conhece as regras do CLAUDE.md.

```
@agente-[nome] Quais são as regras que você não pode violar neste negócio?
```

→ O agente cita as regras do CLAUDE.md. O cliente vê os dois arquivos trabalhando juntos.

---

#### Iteração rápida (5 min)

**O que observar:**
- O agente usa o tom correto?
- As respostas fazem sentido para o negócio real?
- Algo no CLAUDE.md precisa ser ajustado?

**Se precisar ajustar:**

```
Edit o arquivo CLAUDE.md: na seção de regras, adicione [ajuste específico].
```

→ Demonstra que o CLAUDE.md é vivo — se ajusta conforme o negócio evolui.

---

### BLOCK 6 — DESAFIO e Próxima Sessão (5 min)

**DESAFIO (gate para S04):**

> "Antes da próxima sessão: ajuste o CLAUDE.md com pelo menos mais 2 regras que surgirem durante o uso real. Documente os casos onde o agente errou ou foi impreciso — isso vira material para iterar. E execute pelo menos 5 tarefas reais do negócio usando o primeiro agente — qualquer processo do dia a dia."

**O que esse exercício prepara:**
- Familiaridade com o loop de iterar o CLAUDE.md
- Identificação dos processos mais valiosos para o squad (vai para S04)
- Primeiro agente real com dados de performance

**Closing message:**
> "Você tem o ambiente. Tem as regras. Tem um agente especializado. Isso é o título de FERREIRO — você forjou suas ferramentas. Na próxima sessão, você começa a montar o squad completo. Não um agente — um time. Cada um com escopo, persona e comandos próprios. A arquitetura do squad é o que separa quem tem 'uma IA' de quem tem uma empresa neural."

---

## Key Concepts Cheat Sheet (for Arthur to reference live)

| Conceito | Explicação de uma linha |
|---------|------------------------|
| CLAUDE.md | Manual de operação permanente do agente — lido toda sessão antes de qualquer prompt. |
| Settings.json | Meta-configuração do ambiente — permission mode, modelo, hooks. |
| 5 Camadas | Identidade → Regras → Contexto → Comandos → Ferramentas. |
| Agente vs CLAUDE.md | CLAUDE.md = cultura da empresa. Agente = funcionário com cargo específico. |
| `@agente-nome` | Ativa agente específico pelo nome do arquivo. |
| `*comando` | Executa workflow predefinido dentro do agente ativo. |
| Iterar o CLAUDE.md | Normal — o manual evolui conforme o negócio evolui. |
| Permission Ask | Enquanto aprende — o agente pede confirmação antes de cada ação. |
| Título FERREIRO | Desbloqueado ao concluir S03 com CLAUDE.md + agente funcional. |

---

## Session Outputs (what client delivers before Session 04)

- [ ] CLAUDE.md com mínimo 3 regras reais operacionais do negócio
- [ ] Settings configurado (permission mode Ask, modelo definido)
- [ ] Primeiro agente (.md) criado e ativado
- [ ] 5 tarefas reais executadas com o agente
- [ ] Iterações registradas: o que mudou no CLAUDE.md após uso real

---

## Notes for Personalization

> Se o cliente trabalha sozinho (sem equipe): enfatizar que os agentes substituem processos que ele faria manualmente, não processos de equipe. O squad é o time que ele não tem.
> Se o cliente tem equipe: contextualizar que o CLAUDE.md pode ter seção específica sobre como o agente interage com cada papel da equipe.
> Se o cliente é técnico: pode ir mais fundo em settings.json (hooks básicos) ainda nesta sessão — compactar Block 4.
> Se o cliente tem dificuldade com escrita de regras: usar o processo de entrevista → o Arthur pergunta cenários e o cliente responde o que o agente deveria fazer → isso vira as regras.

---

## RPG CARD — S03

### 🔨 TÍTULO DESBLOQUEADO: FERREIRO
*"Forjou as ferramentas. O ambiente está pronto para criar."*

> Título desbloqueado ao completar S03 — CLAUDE.md + settings + primeiro agente funcional.

| Campo | Conteúdo |
|-------|---------|
| **DESAFIO (gate)** | CLAUDE.md com mínimo 3 regras operacionais reais. Primeiro agente ativo com 5 tarefas executadas. Iteração documentada: o que mudou após uso real. |
| **ARTEFATOS** | CLAUDE.md Base do Negócio · Settings.json Configurado · Template de Agente Simples (.md) · Guia de Comandos Essenciais †CODE |
| **HABILIDADE** | Escrever instruções para máquinas (não para humanos). Criar agente especializado. Iterar o ambiente com base em uso real. |
| **PRÓXIMA SESSÃO** | S04 — SQUAD$ I · Arquitetura — design do squad completo |

---

## Connections

- **Trilha:** [[trilha-runa-21-sessoes]] — roadmap completo das 21 sessões
- **Product:** [[runa-mentoria-prd]] — PRD completo RUNA SYSTEMS
- **Previous session:** S02 — [[runa-intervencao-sessao-02-tcode-ambiente|†CODE I — Ambiente]]
- **Next session:** S04 — SQUAD$ I — Arquitetura
- **Hub:** [[🎯 PRODUTOS/RUNA-SYSTEMS/AGENT$/_hub|RUNA SYSTEMS Hub]]
- **Artefatos:** [[template-claude-md-base|Template CLAUDE.md Base]] · [[template-agente-simples|Template de Agente Simples]]
