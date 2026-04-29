---
date: 2026-04-20
tags: [runa-intervencao, mentoria, sessao-02, tcode, ambiente, claude-code, instalacao, rpg-card]
project: runa-systems-global
type: lesson-structure
fase: 2 — †CODE
titulo-rpg: (Ferreiro em S03)
anterior: sessao-01-mapeamento
proximo: sessao-03-tcode-fluxo
---

# Runa Intervenção — Session 02: †CODE I — Ambiente

> **Purpose:** Instalar e configurar o Claude Code. O cliente sai do chat e entra no terminal neural — a interface que conecta humano e agentes para execução real.
> **Output:** Ambiente operacional. Claude Code instalado, ferramentas core testadas com documento real do negócio.
> **Template:** Esta estrutura serve ALL future Runa Intervenção clients — S02 é sempre †CODE I.

---

## Session Structure (75–90 min)

### BLOCK 1 — Framing (10 min)

**Objective:** Instalar o conceito antes de instalar o software. O cliente já sabe usar Claude.ai — agora precisa entender por que isso não é suficiente.

**Key message to deliver:**

> "Você já sabe conversar com IA. Isso é o assistente. O que a gente vai instalar agora é o executivo — um ambiente onde a IA não só responde, mas age. Lê arquivos reais do seu computador. Cria documentos. Executa comandos. Acessa ferramentas. Orquestra outros agentes. A diferença não é só técnica é de paradigma."

**The 3-layer mental model to anchor:**

| Ambiente                   | Função                                    | Quando usar                       |
| -------------------------- | ----------------------------------------- | --------------------------------- |
| **Claude.ai chat**         | Pensamento, ideias, respostas rápidas     | Já conhece — continua usando      |
| **Claude.ai Projects**     | Contexto persistente para projetos longos | Vem na Especialização (Track A/B) |
| **Claude Code (terminal)** | Execução agêntica no mundo real           | Começa AGORA                      |

**Analogy to use:**
> "Claude.ai é como mandar mensagem para um consultor inteligente. Ele responde, dá ideias, ajuda a pensar. Mas ele não tem acesso aos seus arquivos, não executa nada no seu computador, não integra com seus sistemas. Claude Code é quando esse consultor vira funcionário com acesso ao seu escritório — ele pode ler seus contratos, criar propostas, rodar relatórios, e avisar quando algo precisa da sua atenção."

**Critical point:**
> "A interface importa mais do que parece. Um piloto de avião e um passageiro estão no mesmo avião — mas um tem os controles. Claude Code te coloca nos controles."

---

### BLOCK 2 — Os 3 Ambientes Claude (15 min)

**Core concept:**

Antes de instalar, o cliente precisa entender onde Claude Code se encaixa no ecossistema que vai construir ao longo do programa.

**Mapa completo dos ambientes:**

```
Claude.ai (cloud)
├── Chat simples → respostas pontuais, sem memória de sessão para sessão
└── Projects → contexto persistente por projeto (†COWORK — vem na especialização)

Claude Code (local terminal)
├── Ambiente de execução agêntica
├── Lê e escreve arquivos do seu computador
├── Executa comandos via terminal
├── Integra ferramentas externas (MCPs)
└── Orquestra squads de agentes (SQUAD$ — Fase 3)
```

**Por que o terminal é o centro:**

> "Tudo que você vai construir nas próximas fases — os agentes do squad, a base de conhecimento, as automações — roda aqui. O Claude Code não é uma ferramenta. É o quartel-general."

**Permission Modes — como o agente opera:**

| Mode | Comportamento | Quando usar |
|------|--------------|-------------|
| **Ask** | Pergunta antes de cada ação | Aprendizado, tarefas sensíveis |
| **Auto** | Executa sem pedir permissão | Rotina, produção, fluxos estabelecidos |
| **Explore** | Lê sem escrever nunca | Exploração segura, auditoria, análise |

**Regra prática:**
> "Começa no Ask. Você aprende o que o agente faz antes de confiar. Quando um processo estiver validado, muda para Auto. O Explore é para quando você quer entender sem risco nenhum."

---

### BLOCK 3 — Instalação (30 min)

**Live execution — Arthur instala junto com o cliente.**

#### Pré-requisitos

**Passo 1: Verificar Node.js 18+**
```bash
node --version
```
→ Deve retornar v18.x.x ou superior.

Se não estiver instalado: `https://nodejs.org` → Download LTS

**Passo 2: Verificar npm**
```bash
npm --version
```
→ Deve retornar 8.x ou superior.

#### Instalação do Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

**Verificação:**
```bash
claude --version
```
→ Deve retornar a versão instalada (ex: 1.x.x)

#### Primeiro lançamento

**Passo 1: Criar diretório de trabalho**
```bash
mkdir meu-squad
cd meu-squad
```

> "Esse será o escritório do seu squad. Tudo que você criar aqui — agentes, bases de conhecimento, automações — fica organizado neste diretório."

**Passo 2: Lançar o Claude Code**
```bash
claude
```

→ Na primeira vez: autenticação via Anthropic Console ou plano existente.

**Passo 3: Configurar permission mode inicial**

No prompt do Claude Code:
```
/permission ask
```

→ Confirmação: "Permission mode set to Ask. I'll ask before each action."

**Passo 4: Verificar que está funcionando**

Digitar no terminal:
```
Olá. Que ferramentas você tem disponíveis?
```

→ O Claude Code deve listar as ferramentas disponíveis (Read, Write, Edit, Bash, Grep, Glob, etc.)

---

### BLOCK 4 — Core Tools — Demonstração ao Vivo (25 min)

**Objective:** O cliente vê cada ferramenta em ação com um documento REAL do próprio negócio.

**Antes de começar:** Pedir ao cliente um documento real — proposta, processo, briefing, contrato. Qualquer arquivo de texto (.pdf, .docx, .md, .txt).

> "Escolha algo que você usa no dia a dia. A demonstração é mais impactante quando é com dado real."

---

#### Ferramenta 1 — Read

> "Lê qualquer arquivo do seu computador. PDF, Word, Markdown, código. O conteúdo fica disponível no contexto do agente."

**Demo ao vivo:**
```
Leia o arquivo [nome-do-documento] e me dê um resumo executivo em 5 pontos, no formato: problema abordado, solução proposta, entregáveis, prazo, valor.
```

**O que observar:** O Claude Code usa a ferramenta Read, exibe o caminho do arquivo, e retorna análise estruturada. O cliente vê que o agente leu um documento real — não uma simulação.

---

#### Ferramenta 2 — Write

> "Cria arquivos novos. Nunca modifica arquivos que já existem — para isso existe o Edit."

**Demo ao vivo:**
```
Com base no documento que você leu, crie um arquivo chamado resumo-[nome-cliente].md com o sumário executivo estruturado.
```

**O que observar:** Um novo arquivo `.md` aparece na pasta. O cliente vê o arquivo criado no explorador de arquivos ao lado do terminal.

---

#### Ferramenta 3 — Edit

> "Modifica arquivos existentes com precisão cirúrgica. Troca exatamente o que você pede — nem mais, nem menos."

**Demo ao vivo:**
```
No arquivo resumo-[nome-cliente].md, adicione uma seção chamada '## Próximos Passos' com 3 ações imediatas baseadas no documento original.
```

**O que observar:** O arquivo existente é modificado em cirurgia — o resto fica intacto. Esta é a ferramenta mais usada no dia a dia operacional.

---

#### Ferramenta 4 — Bash

> "Executa qualquer comando do terminal. É o acesso direto ao sistema operacional."

**Demo ao vivo:**
```
Liste todos os arquivos que existem na pasta atual e me diga qual foi modificado mais recentemente.
```

**O que observar:** O Bash executa um `ls -la` ou equivalente e retorna resultado interpretado.

> "Com Bash, o agente pode executar scripts, mover arquivos, consultar APIs, rodar automações. É o mais poderoso — e por isso começa no mode Ask."

---

#### Ferramenta 5 — Grep

> "Busca conteúdo dentro de arquivos. Muito mais rápido e preciso do que abrir cada arquivo manualmente."

**Demo ao vivo:**
```
Encontre em todos os arquivos desta pasta qualquer menção à palavra 'prazo' ou 'entrega'.
```

**O que observar:** O Grep usa Ripgrep internamente — retorna arquivo, linha e contexto. Extremamente útil quando o squad precisa encontrar informação específica em uma base de conhecimento.

---

#### Ferramenta 6 — Glob

> "Encontra arquivos por padrão. Útil quando o squad precisa saber 'quais arquivos existem sobre X'."

**Demo ao vivo:**
```
Quais arquivos .md existem nesta pasta?
```

**O que observar:** O Glob retorna a lista de arquivos correspondentes ao padrão. Base para automações que precisam processar múltiplos arquivos.

---

**Cheat Sheet visual para mostrar ao cliente:**

| Ferramenta | Analogia | Uso Principal |
|-----------|---------|--------------|
| Read | Abrir e ler um documento | Trazer conteúdo para contexto do agente |
| Write | Criar um novo documento do zero | Gerar artefatos, relatórios, drafts |
| Edit | Caneta sobre documento existente | Modificar, corrigir, adicionar seções |
| Bash | Terminal direto no sistema | Comandos, scripts, automações |
| Grep | Ctrl+F em todos os arquivos | Buscar informação específica em massa |
| Glob | Busca de arquivos por nome/tipo | Listar, filtrar, selecionar arquivos |

---

### BLOCK 5 — Primeiro Teste Real (10 min)

**Objective:** O cliente executa sozinho — sem Arthur fazendo. Esta é a entrega do DESAFIO ao vivo.

**Setup:** O cliente escolhe um segundo documento real do negócio (diferente do usado na demo).

**Task:**

> "Sem eu ajudar, peça ao Claude Code para ler esse documento e retornar uma análise estruturada com: o que é, para quem é, decisão-chave, e próximo passo mais urgente."

**O que observar:**
- O cliente consegue digitar o prompt sem ajuda?
- O Claude Code pergunta permissão antes de ler (mode Ask)?
- A análise retornada faz sentido para o documento?
- O cliente consegue fazer uma pergunta de follow-up sem instrução?

**Debrief rápido (2 min):**
> "O que você acabou de fazer — ler um documento real e extrair análise estruturada — levava quanto tempo antes? E agora levou quantos segundos?"

---

### BLOCK 6 — DESAFIO e Próxima Sessão (5 min)

**DESAFIO (gate para S03):**

> "Antes da próxima sessão: escolha um processo real do seu negócio — pode ser onboarding de cliente, criação de proposta, produção de conteúdo, qualquer coisa que você repete toda semana. Peça ao Claude Code para documentar esse processo de forma estruturada a partir de arquivos, anotações, ou da sua descrição. Traga o documento resultante."

**O que esse exercício prepara:**
- Familiaridade com o ambiente sem Arthur por perto
- Primeiro draft do conteúdo que vai virar a base de conhecimento (MIND$ — Fase 4)
- Material real para trabalhar em S03

**Closing message:**
> "Você instalou o terminal neural. Na próxima sessão, você vai configurar as regras — o CLAUDE.md. É o documento que diz para o Claude Code quem você é, como você trabalha, o tom certo, o que nunca fazer. Sem CLAUDE.md, o agente é genérico. Com CLAUDE.md, ele conhece o negócio. Esse é o passo que transforma o ambiente em SEU ambiente."

---

## Key Concepts Cheat Sheet (for Arthur to reference live)

| Conceito | Explicação de uma linha |
|---------|------------------------|
| Claude Code vs Claude.ai | Code age no mundo real. Chat pensa e responde. Interface muda tudo. |
| Permission Mode | Ask: aprende. Auto: produz. Explore: lê sem risco. Começa no Ask. |
| Read | Traz arquivo para contexto — o agente "vê" o documento inteiro. |
| Write | Cria arquivo novo do zero. Nunca toca arquivo existente. |
| Edit | Modifica cirurgicamente arquivo existente. Exato, não genérico. |
| Bash | Terminal direto — executa qualquer comando do sistema operacional. |
| Grep | Busca dentro de arquivos. Útil para KB e análise em massa. |
| Glob | Encontra arquivos por padrão (*.pdf, docs/*.md). |
| Diretório de trabalho | Claude Code opera a partir de onde você lançou. Crie um só para o squad. |
| CLAUDE.md | O manual operacional do agente — configurado em S03. |

---

## Session Outputs (what client delivers before Session 03)

- [ ] Claude Code instalado (`claude --version` funcionando)
- [ ] Primeiro documento real analisado via Read tool
- [ ] Um processo do negócio documentado pelo Claude Code (para usar em S03)
- [ ] Print ou log do primeiro output estruturado gerado

---

## Notes for Personalization

> Se o cliente usa Windows: verificar se Node.js instalado via nvm ou direto. No Windows, alguns clientes têm conflito com permissões de npm global — solução: instalar com `--prefix` ou usar nvm-windows.
> Se o cliente já tem Claude Code instalado: pular Blocks 1–3 e ir direto para Block 4. Foco total nas ferramentas core com documento do negócio dele.
> Se o cliente tem dificuldade com terminal: usar Explorar (Explore mode) primeiro — remove o medo de "quebrar algo". Só depois muda para Ask.

---

## RPG CARD — S02

### ⚙️ AMBIENTE ATIVO: TERMINAL NEURAL
*"O executivo está instalado. O escritório existe. Falta configurar as regras."*

> Título de fase (FERREIRO) desbloqueado em S03, após configuração completa do ambiente.

| Campo | Conteúdo |
|-------|---------|
| **DESAFIO (gate)** | Claude Code instalado e funcionando. Um documento real do negócio lido e analisado via Read. Um processo documentado estruturalmente pelo Claude Code. |
| **ARTEFATOS** | Checklist de Instalação †CODE · Guia de Permission Modes (Ask/Auto/Explore) · Cheat Sheet de Ferramentas Core (Read/Write/Edit/Bash/Grep/Glob) |
| **HABILIDADE** | Operar Claude Code via terminal. Saber qual ferramenta usar para cada tipo de tarefa. Distinguir Claude.ai e Claude Code por função. |
| **PRÓXIMA SESSÃO** | S03 — †CODE II · Fluxo — CLAUDE.md, settings e primeiro agente |

---

## Connections

- **Trilha:** [[trilha-runa-21-sessoes]] — roadmap completo das 21 sessões
- **Product:** [[runa-mentoria-prd]] — PRD completo RUNA SYSTEMS
- **Previous session:** S01 — [[runa-intervencao-sessao-01-mapeamento|Mapeamento Neural]]
- **Next session:** S03 — †CODE II — Fluxo (CLAUDE.md e primeiro agente)
- **Hub:** [[agent-hub|RUNA SYSTEMS Hub]]
- **Artefatos:** [[cheat-sheet-ferramentas-core|Cheat Sheet Ferramentas Core]] · [[guia-permission-modes|Guia de Permission Modes]]
