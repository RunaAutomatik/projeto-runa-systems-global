---
date: 2026-04-15
tags: [runa-systems, obsidian, segundo-cerebro, templates, claude-code, curso]
project: runa-systems-global
type: course-material
produto: [[runa-systems-hub]]
---

# Segundo Cérebro com Obsidian — Princípios e Templates para Claude Code

> **Módulo:** Arquitetura de Conhecimento — RUNA SYSTEMS
> **Nível:** Intermediário
> **Pré-requisito:** Obsidian CLI instalado e funcionando (ver guia anterior)

---

## O Problema que Este Guia Resolve

Sem memória persistente, cada sessão com o Claude Code começa do zero.

Você re-explica o contexto do projeto. Re-define os agentes. Re-toma decisões que já tomou semanas atrás. Perde tempo reconstruindo o estado mental que existia na última vez que trabalhou nisso.

Isso não é um problema do Claude — é um problema de arquitetura. A solução não é uma ferramenta melhor. É um sistema de organização que os agentes seguem.

Este guia te entrega esse sistema: princípios de estrutura + prompts prontos para o Claude Code criar e manter seu segundo cérebro.

**A lógica antes da ferramenta:** O Obsidian é apenas onde o sistema vive. O que importa é a organização que você define — e que os agentes aprendem a seguir.

---

## Parte 1 — A Arquitetura dos Dois Vaults

### Por que dois vaults?

Um vault único mistura o que é **operacional** (o que você está construindo hoje) com o que é **conhecimento** (frameworks, metodologias, referências). Isso cria ruído: o agente busca uma nota de projeto e encontra um capítulo de livro no caminho.

A separação resolve isso:

| Vault | Conteúdo | Analogia |
|-------|---------|---------|
| **Vault Principal** | Projetos, specs, agentes, diário, decisões | Mesa de trabalho |
| **Vault de Bases** | Frameworks externos, metodologias, referências | Biblioteca |

O vault principal muda todo dia. O vault de bases é construído uma vez e consultado sempre.

### Quando faz sentido ter dois vaults?

Se você está começando, comece com um vault só. A separação faz sentido quando o vault principal crescer o suficiente para o ruído virar problema — geralmente 3 a 4 meses de uso intenso, ou quando você perceber que os agentes estão encontrando coisas erradas ao buscar contexto.

---

## Parte 2 — Estrutura de Pastas

Não existe estrutura universal correta. Mas existe um princípio:

**Pastas devem descrever para onde você está indo, não de onde veio.**

Uma pasta chamada `Notas Antigas` é um cemitério. Uma pasta chamada `📐 Projetos` é um destino.

### Vault Principal — Estrutura Recomendada

```
📅 Diário/          ← notas de sessão — uma por dia de trabalho
📐 Projetos/        ← specs, PRDs, roadmaps, documentos de produto
📚 Referências/     ← links, resumos de pesquisa, documentação externa
📋 Agentes/         ← definições e instruções de cada agente do sistema
🔗 Templates/       ← templates reutilizáveis para criação de novas notas
🛠️ Skills/          ← documentação de skills e ferramentas instaladas
🧠 Orquestrador/    ← memória e contexto do agente principal
```

### Vault de Bases — Estrutura Recomendada

```
📚 [Autor ou Domínio]/
│   ├── Frameworks/    ← modelos mentais e sistemas
│   ├── Princípios/    ← verdades fundamentais do domínio
│   └── Exemplos/      ← casos concretos de aplicação
🧠 Agent Knowledge Maps/   ← qual agente usa qual conhecimento
🔗 Index/                  ← índice de tudo que existe nas bases
```

### Por que usar emojis nas pastas?

Não é decoração — é navegação visual. Quando você tem 200 notas abertas no painel lateral, o olho encontra a pasta certa 3x mais rápido com ícones do que com texto puro. Além disso, os emojis criam uma ordem de exibição consistente que independe do idioma.

---

## Parte 3 — Padrão de Frontmatter YAML

Todo documento criado pelos agentes começa com um bloco YAML no topo. Isso habilita busca semântica, filtragem por tipo e conexões automáticas entre notas.

```yaml
---
date: 2026-04-15      ← sempre dinâmico, nunca fixo
tags: [projeto, spec, produto]
project: nome-do-projeto
type: spec
---
```

### Tipos de documento — campo `type:`

| Tipo | Quando usar |
|------|-------------|
| `spec` | Especificações técnicas, PRDs, requisitos |
| `decision` | Decisões arquiteturais (ADRs) |
| `agent-card` | Definição completa de um agente |
| `session-log` | Nota do diário de fim de sessão |
| `framework` | Metodologias e modelos mentais |
| `reference` | Material externo resumido e processado |
| `course-material` | Conteúdo de produto ou curso |
| `template` | Templates reutilizáveis |
| `index` | Índice de uma seção ou projeto |

---

## Parte 4 — A Regra da Data Dinâmica

**Nunca escreva uma data diretamente em um documento.**

Quando o Claude Code cria um arquivo com `date: 2026-03-17` fixo no código, esse valor fica errado para sempre. Semanas depois você abre a nota e não sabe quando foi criada de verdade.

A solução é simples: o agente sempre lê a data do sistema antes de criar qualquer documento.

| Contexto | Como fazer |
|----------|-----------|
| Agente criando via terminal (bash) | `$(date +%Y-%m-%d)` |
| Template nativo do Obsidian | `{{date:YYYY-MM-DD}}` |
| Claude Code escrevendo diretamente | Ler a data do contexto antes de escrever |

Nos prompts abaixo, você vai ver `[DATA DE HOJE]` como placeholder. O Claude Code substitui automaticamente pela data real antes de executar.

---

## Parte 5 — O Workflow do Diário

O diário não é para você escrever. É para o agente escrever.

No final de cada sessão de trabalho, o agente orquestrador cria uma nota em `📅 Diário/` com:
- O que foi construído ou decidido
- O raciocínio por trás das decisões não-óbvias
- O que ficou pendente e com qual contexto
- Os próximos passos recomendados

No início da próxima sessão, o agente lê essa nota antes de qualquer coisa — e retoma o trabalho sem que você precise re-explicar nada.

Isso é o que torna o sistema resiliente ao limite de contexto das janelas de chat. A memória não está na conversa — está no vault.

---

## Parte 6 — Templates para o Claude Code

Os prompts abaixo são para copiar e colar diretamente no Claude Code. Cada um executa uma operação específica no vault.

**Como usar:**
1. Identifique o template que precisa
2. Substitua os placeholders em `[MAIÚSCULAS]` pelo seu contexto real
3. Cole no Claude Code e execute

---

### Template 1 — Setup Inicial do Vault

Use uma única vez para estruturar o vault do zero.

```
Vou configurar meu segundo cérebro no Obsidian.
O meu vault principal está em: [CAMINHO COMPLETO DO SEU VAULT]

Crie a seguinte estrutura de pastas usando o Obsidian CLI.
Para cada pasta, crie uma nota de índice chamada _index.md dentro dela.

Pastas para criar:
- 📅 Diário/
- 📐 Projetos/
- 📚 Referências/
- 📋 Agentes/
- 🔗 Templates/
- 🛠️ Skills/
- 🧠 Orquestrador/

Cada _index.md deve ter este frontmatter:

---
date: [DATA DE HOJE]
tags: [vault, index]
type: index
---

# [Nome da Pasta]

> Índice desta seção. Atualize conforme novos documentos forem adicionados.

---

Depois de criar todas as pastas e índices, liste o vault para confirmar.
```

---

### Template 2 — Criar Nota de Projeto

Use quando iniciar um novo projeto, produto ou iniciativa.

```
Crie uma nota de projeto no meu vault Obsidian.

Vault: [CAMINHO DO SEU VAULT]
Pasta: 📐 Projetos/
Nome do arquivo: [nome-do-projeto].md

Use exatamente esta estrutura:

---
date: [DATA DE HOJE]
tags: [projeto, [NOME DO PROJETO]]
project: [NOME DO PROJETO]
type: spec
status: em andamento
---

# [NOME DO PROJETO]

## Objetivo

[O que esse projeto entrega? Uma frase direta.]

## Contexto

[Por que isso existe? Qual problema motivou.]

## Escopo

### Incluído
- 

### Não incluído
- 

## Decisões Tomadas

| Data | Decisão | Motivo |
|------|---------|--------|
| [DATA DE HOJE] | | |

## Artefatos

- 

## Próximos Passos

- [ ] 

---
*Criado em: [DATA DE HOJE]*

Depois de criar o arquivo, abra no Obsidian com:
obsidian open path="📐 Projetos/[nome-do-projeto].md"
```

---

### Template 3 — Capturar Framework Externo

Use quando quiser que um agente processe e armazene um livro, metodologia ou framework.

```
Vou te passar conteúdo de um framework para salvar no vault de conhecimento.
Leia o conteúdo, processe, e crie uma nota estruturada.

Vault de bases: [CAMINHO DO VAULT DE BASES]
Pasta destino: 📚 [NOME DO AUTOR OU DOMÍNIO]/Frameworks/
Nome do arquivo: [nome-do-framework].md

Conteúdo para processar:

[COLE AQUI O TEXTO, TRANSCRIÇÃO OU RESUMO DO FRAMEWORK]

Estrutura da nota:

---
date: [DATA DE HOJE]
tags: [framework, [autor], [domínio]]
type: framework
source: [livro/curso/autor de origem]
---

# [Nome do Framework]

> Fonte: [origem]

## O Princípio Central

[1-2 frases que capturam a essência — o que esse framework afirma fundamentalmente]

## Como Funciona

[Mecanismo em etapas ou estrutura lógica]

## Quando Usar

[Contextos e problemas que esse framework resolve]

## Quando NÃO Usar

[Limitações e situações onde não se aplica]

## Exemplos Práticos

[Casos concretos de aplicação]

## Conexões

[Outros frameworks ou conceitos que se relacionam com este]

Importante: não copie o texto verbatim.
Extraia a lógica, os mecanismos e as aplicações práticas.
O objetivo é que qualquer agente possa ler essa nota e aplicar o framework,
sem precisar ter lido o material original.
```

---

### Template 4 — Nota de Fim de Sessão (Diário)

Use ao final de cada sessão de trabalho. O agente preenche automaticamente com base no que aconteceu.

```
A sessão de trabalho de hoje terminou.
Crie a nota do diário com tudo que foi feito.

Vault: [CAMINHO DO SEU VAULT]
Caminho da nota: 📅 Diário/[DATA DE HOJE].md

Preencha com base em tudo que fizemos nesta sessão:

---
date: [DATA DE HOJE]
tags: [diario, sessao]
type: session-log
---

# Sessão [DATA DE HOJE]

## O Que Foi Construído

[Liste os artefatos criados, decisões tomadas, implementações finalizadas]

## Decisões Importantes

[O que foi decidido e por quê — especialmente as decisões não-óbvias]

## O Que Ficou Pendente

[Tarefas iniciadas mas não concluídas — com contexto suficiente para retomar]

## Próximos Passos Recomendados

[Ordem de prioridade do que fazer na próxima sessão]

## Arquivos Criados ou Modificados

[Lista de paths dos arquivos que foram criados ou alterados hoje]

---

Após criar a nota, confirme o caminho onde foi salva.
```

---

### Template 5 — Card de Agente

Use quando for definir um novo agente para o seu sistema.

```
Vou criar um agente novo. Salve a definição no vault como documentação.

Vault: [CAMINHO DO SEU VAULT]
Pasta: 📋 Agentes/
Nome do arquivo: agente-[NOME].md

Use esta estrutura:

---
date: [DATA DE HOJE]
tags: [agente, [nome-do-agente]]
type: agent-card
status: em desenvolvimento
---

# [NOME DO AGENTE]

## Identidade

**Nome:** [nome]
**Papel:** [função principal em uma frase]
**Tom:** [como ele se comunica — direto, consultivo, analítico, etc.]

## Escopo — O Que Faz

- 

## Escopo — O Que NÃO Faz

- 

## Fontes de Conhecimento

[De onde ele extrai referências — vault de bases, frameworks específicos]

## Inputs Esperados

[O que o agente precisa receber para funcionar]

## Outputs Entregues

[O que o agente produz ao final de cada tarefa]

## Como Ativar

[Instrução de ativação — contexto necessário, como invocar]

## Exemplos de Uso

[2-3 casos concretos de quando chamar esse agente]

O conteúdo que tenho para esse agente é:

[DESCREVA O AGENTE — personalidade, função, referências que deve usar]
```

---

### Template 6 — Estruturar Base de Conhecimento por Domínio

Use quando for criar uma nova área de conhecimento no vault de bases.

```
Quero criar uma base de conhecimento sobre [DOMÍNIO OU AUTOR]
no meu vault de bases.

Vault de bases: [CAMINHO DO VAULT DE BASES]

Por favor:

1. Crie a estrutura de pastas:
   📚 [DOMÍNIO]/
   ├── Frameworks/
   ├── Princípios/
   ├── Exemplos/
   └── _index.md

2. Crie o arquivo _index.md com este conteúdo:

---
date: [DATA DE HOJE]
tags: [bases, [domínio], index]
type: index
---

# [DOMÍNIO] — Índice

## O Que Tem Aqui

[Descrição do tipo de conhecimento nesta pasta]

## Arquivos

| Arquivo | Conteúdo | Tipo |
|---------|---------|------|
| | | |

## Agentes que Usam Este Conhecimento

[Quais agentes do sistema consultam este domínio]

3. Confirme a estrutura criada listando os arquivos.

Depois que a estrutura estiver criada, vou passar o conteúdo
para popular cada subpasta.
```

---

### Template 7 — Buscar Contexto Antes de Trabalhar

Use no início de cada sessão, ou antes de qualquer tarefa que dependa de contexto anterior.

```
Antes de começarmos, preciso que você leia o contexto do vault.

Vault: [CAMINHO DO SEU VAULT]

Faça o seguinte:

1. Liste as notas do diário para encontrar a mais recente:
   obsidian files folder="📅 Diário"
   (identifique o arquivo com a data mais recente no nome)

2. Leia a nota mais recente:
   obsidian read path="📅 Diário/[arquivo mais recente]"

3. Se existir uma nota de projeto ativo, leia também:
   obsidian read path="📐 Projetos/[NOME DO PROJETO ATIVO].md"

4. Com base no que leu, me dê um briefing com:
   - O que foi feito na última sessão
   - O que ficou pendente
   - Qual é o próximo passo recomendado
   - Qualquer contexto que eu deva saber antes de começar

Só depois do briefing me pergunte o que quero trabalhar hoje.
```

---

## Como Adaptar Para Seu Contexto

Os templates usam placeholders em `[MAIÚSCULAS]` entre colchetes. Substitua antes de usar:

| Placeholder | O que colocar |
|-------------|--------------|
| `[CAMINHO DO SEU VAULT]` | Caminho completo do vault principal (ex: `C:/Users/seu-nome/vault`) |
| `[CAMINHO DO VAULT DE BASES]` | Caminho do vault de conhecimento |
| `[DATA DE HOJE]` | O Claude Code resolve automaticamente ao executar |
| `[NOME DO PROJETO]` | Nome do seu projeto atual |
| `[NOME DO AGENTE]` | Nome do agente que está criando |
| `[DOMÍNIO OU AUTOR]` | Ex: `Alex Hormozi`, `Copywriting`, `Vendas Alto Ticket` |

Os templates são genéricos por design — adaptáveis a qualquer projeto, não apenas ao RUNA SYSTEMS. A estrutura de pastas, os tipos de frontmatter e os workflows de diário funcionam independentemente do contexto.

---

## Ordem de Uso — Por Onde Começar

Se você acabou de instalar o CLI e quer estruturar o vault do zero:

1. **Template 1** — Cria a estrutura de pastas
2. **Template 2** — Cria a primeira nota de projeto
3. **Template 7** — Use antes de cada sessão de trabalho
4. **Template 4** — Use ao final de cada sessão de trabalho
5. **Templates 3, 5, 6** — Use conforme a necessidade surgir

A consistência no **Template 4** (fim de sessão) é o que faz o sistema funcionar de verdade. Sem ela, o Template 7 não tem nada para ler — e a memória não se acumula.
