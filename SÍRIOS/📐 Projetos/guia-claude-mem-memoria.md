---
date: 2026-04-15
tags: [squad-dollar, pre-fase, memoria, claude-mem, claude-code, curso]
project: runa-systems-global
type: course-material
produto: [[squad-dollar-prd]]
---

# Memória Persistente — Como Fazer seus Agentes Lembrarem de Tudo

> **Módulo:** Pré-Fase — $QUAD
> **Nível:** Iniciante
> **Pré-requisito:** Claude Code instalado, GitHub configurado

---

## O Problema que Este Guia Resolve

Por padrão, o Claude Code não tem memória.

Cada nova conversa começa do zero. Você acabou de explicar que é um consultor de marketing, que seu cliente principal é uma academia de ginástica, que o tom da comunicação é descontraído — e na próxima sessão, o agente não lembra de nada disso.

Você re-explica. Re-define. Re-toma decisões que já tomou semanas atrás.

Isso não é um defeito do Claude. É uma limitação de arquitetura que se resolve com um sistema de memória externo.

**Este guia configura esse sistema:** um diretório de arquivos `.md` onde seus agentes escrevem, leem e atualizam memórias entre sessões. Uma vez configurado, seus agentes acumulam contexto com o tempo — como um colaborador que fica mais útil quanto mais trabalha com você.

---

## Como funciona a memória

A memória dos agentes é organizada em cinco tipos de arquivo, cada um com uma função específica:

| Tipo | Arquivo | Para que serve |
|------|---------|---------------|
| **user** | `user_*.md` | Quem você é, seu papel, suas preferências, seu nível técnico |
| **feedback** | `feedback_*.md` | O que funcionou, o que não funcionou, como o agente deve se comportar |
| **project** | `project_*.md` | O que está sendo construído, decisões tomadas, contexto do negócio |
| **reference** | `reference_*.md` | Onde estão as informações externas (planilhas, pastas, links) |

Existe também um arquivo índice — `MEMORY.md` — que lista todas as memórias em uma linha cada. Esse índice é sempre carregado primeiro; os arquivos específicos só são lidos quando necessário.

**Por que isso importa:** O Claude tem um limite de memória ativa (a "janela de contexto"). O índice carrega rápido e pequeno. Os detalhes são buscados sob demanda. Isso permite acumular centenas de memórias sem sobrecarregar o agente.

---

## Como este guia funciona

Cada etapa tem um prompt para copiar e colar no Claude Code. Ele cria a estrutura, escreve as primeiras memórias e testa se tudo funciona.

**Seu trabalho:** copiar o prompt → colar no Claude Code → revisar o que foi criado.

---

## Pré-requisitos

1. **Claude Code rodando**
2. **GitHub configurado** (ver guia anterior) — a memória é versionada junto com o projeto
3. **Pasta do projeto definida** — onde ficam os arquivos dos seus agentes

---

## ETAPA 1 — Criar o diretório de memória

### O que vai acontecer

O Claude Code vai criar a pasta de memória no local correto e inicializar o arquivo índice vazio. A localização padrão é `~/.claude/projects/[nome-do-projeto]/memory/` — assim a memória persiste independente de onde o projeto está aberto.

### Prompt — copie e cole no seu Claude Code

```
Preciso configurar o sistema de memória persistente para meus agentes.

Por favor:
1. Identifique qual é o diretório atual de trabalho:
   pwd

2. Crie a pasta de memória:
   mkdir -p ~/.claude/projects/$(basename $(pwd))/memory

3. Crie o arquivo índice vazio dentro dela:
   touch ~/.claude/projects/$(basename $(pwd))/memory/MEMORY.md

4. Escreva o cabeçalho inicial no MEMORY.md:
   # Memory Index
   (apenas este texto, sem mais nada)

5. Confirme que a pasta foi criada listando o conteúdo:
   ls ~/.claude/projects/$(basename $(pwd))/memory/

Me diga o caminho completo onde a memória foi criada.
```

### Resultado esperado

```
/c/Users/seu-nome/.claude/projects/meu-squad/memory/
MEMORY.md
```

---

## ETAPA 2 — Escrever as primeiras memórias

### O que vai acontecer

O Claude Code vai criar os primeiros arquivos de memória com base nas informações que você fornecer. Esses arquivos são o ponto de partida — os agentes vão expandir e atualizar com o tempo.

### Prompt — copie e cole no seu Claude Code

> **Antes de colar:** substitua todos os campos em `[MAIÚSCULAS]` pelas suas informações reais.

```
Preciso criar as primeiras memórias dos meus agentes.

Caminho da memória: ~/.claude/projects/$(basename $(pwd))/memory/

Crie os seguintes arquivos:

--- ARQUIVO 1: user_perfil.md ---

---
name: Perfil do usuário
description: Quem é o usuário, seu papel e contexto de negócio
type: user
---

# Perfil

**Nome:** [SEU NOME]
**Papel:** [SUA FUNÇÃO — ex: CEO de uma consultoria, gestor de uma academia, freelancer de marketing]
**Segmento:** [SEU NICHO — ex: saúde e bem-estar, educação, serviços B2B]
**Nível técnico com IA:** [Iniciante / Intermediário]
**Objetivo principal com o squad:** [O QUE VOCÊ QUER QUE OS AGENTES FAÇAM POR VOCÊ]

--- ARQUIVO 2: project_negocio.md ---

---
name: Contexto do negócio
description: Informações sobre o negócio e o projeto atual
type: project
---

# Negócio

**Nome do negócio:** [NOME DA SUA EMPRESA OU MARCA]
**O que faz:** [DESCREVA EM 1-2 FRASES O QUE SEU NEGÓCIO ENTREGA]
**Público principal:** [QUEM SÃO SEUS CLIENTES]
**Principal desafio atual:** [O MAIOR PROBLEMA QUE VOCÊ QUER RESOLVER COM O SQUAD]

--- ARQUIVO 3: MEMORY.md (atualizar) ---

# Memory Index

- [user_perfil.md](user_perfil.md) — Perfil do usuário: nome, papel, negócio, nível técnico
- [project_negocio.md](project_negocio.md) — Contexto do negócio: o que faz, público, desafio

Crie os três arquivos com o conteúdo acima (já com minhas informações substituídas nos campos).
Depois liste o conteúdo da pasta de memória para confirmar.
```

---

## ETAPA 3 — Conectar a memória ao projeto

### O que vai acontecer

Para que o Claude Code leia a memória automaticamente a cada sessão, é preciso criar (ou atualizar) o arquivo `CLAUDE.md` na raiz do projeto. Esse arquivo é lido toda vez que o Claude Code abre o projeto.

### Prompt — copie e cole no seu Claude Code

```
Preciso que o Claude Code leia a memória automaticamente ao iniciar.

Por favor:
1. Verifique se já existe um arquivo CLAUDE.md na pasta atual:
   ls CLAUDE.md

2. Se existir, leia o conteúdo atual:
   cat CLAUDE.md

3. Adicione ao final do arquivo (ou crie se não existir) este bloco:

## Sistema de Memória

Este projeto usa memória persistente. Ao iniciar qualquer sessão:

1. Leia o índice: ~/.claude/projects/[NOME DO PROJETO]/memory/MEMORY.md
2. Para cada entrada relevante à tarefa atual, leia o arquivo correspondente
3. Use o contexto das memórias para personalizar respostas e manter continuidade

Ao final de toda sessão com aprendizados novos sobre o usuário ou o projeto:
- Atualize os arquivos de memória relevantes
- Atualize o índice MEMORY.md com novas entradas

4. Mostre o conteúdo final do CLAUDE.md

(substitua [NOME DO PROJETO] pelo nome da pasta do seu projeto)
```

---

## ETAPA 4 — Testar a memória

### O que vai acontecer

O Claude Code vai ler a memória que acabou de ser criada e fazer um briefing — exatamente como fará no início de cada sessão futura.

### Prompt — copie e cole no seu Claude Code

```
Antes de começarmos a trabalhar, leia minha memória.

Caminho: ~/.claude/projects/$(basename $(pwd))/memory/MEMORY.md

Siga estas etapas:
1. Leia o arquivo MEMORY.md para ver o índice
2. Leia cada arquivo listado no índice
3. Com base no que leu, me dê um briefing com:
   - Quem sou eu e qual é o meu negócio
   - O que você sabe sobre o meu contexto
   - O que você NÃO sabe ainda e que seria útil saber

Só depois do briefing me pergunte o que quero trabalhar hoje.
```

### Resultado esperado

```
Briefing baseado na memória:

Quem você é: [seu nome], [seu papel], trabalhando em [seu negócio].
Seu negócio: [resumo do que foi salvo].
Principal desafio: [o que você preencheu].

O que ainda não sei:
- Qual é o estágio atual do seu squad (quantos agentes já configurados)
- Qual é a próxima tarefa prioritária
- Quais ferramentas você usa no dia a dia

O que você quer trabalhar hoje?
```

Se o agente fez o briefing corretamente usando as suas informações — a memória está funcionando.

---

## Como atualizar a memória ao longo do tempo

A memória não é configurada uma vez e esquecida. Ela cresce com o uso.

### No início de cada sessão

Use sempre este prompt antes de qualquer tarefa:

```
Antes de começarmos, leia minha memória em:
~/.claude/projects/[NOME DO PROJETO]/memory/MEMORY.md

Dê um briefing do contexto e me pergunte o que quero trabalhar hoje.
```

### No final de cada sessão com aprendizados novos

```
A sessão terminou. Com base no que discutimos hoje:

1. Identifique qualquer informação nova que vale salvar na memória
   (decisões tomadas, preferências reveladas, contexto de projeto atualizado)

2. Atualize os arquivos de memória relevantes
3. Atualize o índice MEMORY.md se criou novos arquivos

Confirme o que foi salvo.
```

### Quando criar um novo arquivo de memória

| Situação | Tipo de arquivo | Exemplo de nome |
|----------|----------------|-----------------|
| Aprendeu sobre suas preferências | user | `user_preferencias_comunicacao.md` |
| Tomou uma decisão importante de negócio | project | `project_decisao_posicionamento.md` |
| Configurou uma ferramenta externa | reference | `reference_planilha_clientes.md` |
| Corrigiu um comportamento errado | feedback | `feedback_formato_respostas.md` |

---

## Estrutura final do sistema de memória

Após configurar, sua pasta de memória vai crescer assim com o uso:

```
~/.claude/projects/meu-squad/memory/
├── MEMORY.md              ← índice — sempre carregado
├── user_perfil.md         ← quem você é
├── project_negocio.md     ← contexto do negócio
├── project_squad.md       ← estado atual do squad (criado depois)
├── feedback_tom.md        ← como o agente deve se comunicar
└── reference_ferramentas.md  ← onde estão suas planilhas, pastas, etc.
```

Cada arquivo tem menos de 50 linhas. O índice tem uma linha por arquivo. O sistema inteiro carrega em segundos.

---

## Por que não usar apenas o CLAUDE.md para tudo?

Boa pergunta. O `CLAUDE.md` é fixo — é para regras do projeto que nunca mudam. A memória é dinâmica — cresce, atualiza e é específica por usuário. Se você tiver duas pessoas usando o mesmo projeto, cada uma tem sua própria pasta de memória. O `CLAUDE.md` é compartilhado, a memória é pessoal.

---

## Resumo — Sequência de Configuração

| Etapa | O que fazer | Quem executa |
|-------|-------------|--------------|
| 1 | Criar diretório de memória | Claude Code (via prompt) |
| 2 | Escrever primeiras memórias | **Você** fornece dados + Claude Code cria arquivos |
| 3 | Conectar memória ao projeto | Claude Code (via prompt) |
| 4 | Testar leitura de memória | Claude Code (via prompt) |

Com a memória configurada, seus agentes nunca começam do zero. Cada sessão é uma continuação da anterior.
