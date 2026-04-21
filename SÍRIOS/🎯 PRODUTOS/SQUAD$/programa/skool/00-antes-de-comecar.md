---
date: 2026-04-04
tags: [squad-dollar, skool, ferramentas, modulo-0]
project: runa-systems-global
type: course-support
produto: [[squad-dollar-prd]]
modulo: "0.3 — Ferramentas e Pré-requisitos"
---

# Antes de Começar

> Módulo 0 · Aula 0.3

Este documento é o seu mapa de largada. Antes de abrir qualquer ferramenta ou tentar construir o primeiro agente, leia tudo aqui. Vai economizar horas.

---

## O que você vai construir no $QUAD

Ao final deste programa, você terá um squad de 3 a 5 agentes de IA configurados para o seu negócio, cada um com:

- System prompt completo (a "personalidade" e as regras do agente)
- Base de conhecimento (o que o agente sabe sobre o seu negócio)
- Função definida dentro do squad
- Testes validados com casos reais do seu negócio

O orquestrador vai coordenar todos os agentes. Você vai orquestrar o orquestrador.

Todo o squad vive em um projeto local chamado **AIOX Lite Kit** — uma pasta com sete arquivos que você baixa antes de começar e vai preenchendo ao longo dos módulos.

---

## Pré-requisitos

### Obrigatório antes de começar
- [ ] **Ter clareza do seu produto ou serviço principal** — você não precisa ter tudo estruturado, mas precisa saber o que você vende e para quem
- [ ] **Claude Code instalado** — é o ambiente onde os agentes são ativados e testados (instrução nos guias da PRÉ-FASE abaixo)
- [ ] **AIOX Lite Kit baixado e configurado** — a estrutura de pasta onde os agentes vivem (link no [[09-templates-bundle]])
- [ ] **PRÉ-FASE concluída** — os três guias de setup abaixo são obrigatórios

### Recomendado mas não obrigatório
- [ ] **CREATOR$ completo** OU um storyboard de avatar em mãos — o squad vai usar esse material para configurar o agente de conteúdo
- [ ] **MIND$ completo** — a extração de IP do MIND$ é o input ideal para os agentes de oferta e conteúdo
- [ ] **Conta no Skool, Hotmart ou Kiwify** — se você já vende digitalmente
- [ ] **Conta no ManyChat** — necessário apenas para o Módulo 5 (automação Instagram)

### Se você não tem CREATOR$ e MIND$
Não tem problema começar. O Módulo 1 vai gerar o mapeamento de negócio que substitui parte do material do CREATOR$ e MIND$ para fins de configuração dos agentes. Você vai construir o squad com o que tem agora — e vai poder refiná-lo quando avançar nos outros produtos.

---

## O ambiente de trabalho: AIOX Lite Kit

Todo o $QUAD é construído dentro de uma estrutura de arquivos local chamada AIOX Lite Kit. Você baixa uma vez e vai preenchendo ao longo dos módulos.

```
meu-squad/
├── CLAUDE.md               ← tabela de roteamento do squad
└── agents/
    ├── orquestrador.md     ← criado no Módulo 2
    ├── agente-oferta.md    ← criado no Módulo 3
    ├── agente-conteudo.md  ← criado no Módulo 4
    ├── agente-automacao.md ← criado no Módulo 5
    └── agente-inteligencia.md ← criado no Módulo 6
```

O arquivo `CLAUDE.md` contém a tabela de roteamento do squad. Quando você digita `@orquestrador` no Claude Code, ele lê o `CLAUDE.md`, encontra o caminho do arquivo correspondente, carrega a persona e se apresenta. Você não precisa colar o system prompt toda vez — ele já está salvo no arquivo.

**Isso é o que faz o squad funcionar como squad:** os agentes se reconhecem pelo roteamento, e o Claude sabe como ativar cada um pelo `@nome`.

O kit está disponível para download em [[09-templates-bundle]].

---

## Ferramentas que vamos usar

### Ferramenta principal (usada em todos os módulos)

| Ferramenta | Onde acessar | Custo | Para quê |
|------------|--------------|-------|---------|
| **Claude Code** | claude.ai/code ou extensão VS Code | Incluído no plano Pro | Ativar e testar todos os agentes do squad |

> **Claude.ai** (versão web) continua útil para conversas rápidas, mas o ambiente de trabalho principal do $QUAD é o **Claude Code** — onde os agentes são ativados via `@nome` e o squad funciona de verdade.

### Ferramentas dos módulos específicos

| Ferramenta | Módulo | Custo | Para quê |
|------------|--------|-------|---------|
| **ManyChat** | Mod 5 | Grátis (limitado) / US$15/mês | Automação Instagram DMs |
| **N8N** | Mod 5 | Grátis (self-host) / ~R$80/mês | Sequências avançadas de automação |
| **Paperclip** | Mod 8 | Grátis (open-source) | Governança e org chart do squad |

---

## PRÉ-FASE — Setup obrigatório (antes do Módulo 1)

Os três guias abaixo devem ser concluídos antes de avançar para o Módulo 1. Eles configuram a infraestrutura que sustenta o squad desde a primeira linha que você escreve:

### 1. [[guia-github-conexao]] — Controle de versão dos agentes
Conecta o seu projeto AIOX Lite Kit ao GitHub. Toda versão do system prompt de cada agente fica salva no histórico. Quando você refinar um agente e ele piorar, você sabe exatamente para onde voltar.

**Tempo estimado:** ~20 min | **Obrigatório para todos**

### 2. [[guia-claude-mem-memoria]] — Memória persistente
Configura o sistema de memória do Claude Code. O seu squad vai lembrar decisões, preferências e contexto de uma sessão para a outra — sem você precisar reexplicar quem você é toda vez que abrir o Claude Code.

**Tempo estimado:** ~15 min | **Obrigatório para todos**

### 3. [[guia-obsidian-cli-instalacao]] — Vault de armazenamento
Instala o Obsidian CLI e conecta o vault local onde os outputs do squad são armazenados. Toda análise de concorrente, toda oferta estruturada, todo conteúdo gerado pelos agentes pode ser salvo direto no vault — sem copiar e colar entre ferramentas.

**Tempo estimado:** ~20 min | **Obrigatório para todos**

> **Por que os três antes do Módulo 1?** Tudo que você vai construir a partir daí se apoia neles. O GitHub salva as versões dos agentes. A memória garante continuidade entre sessões. O Obsidian armazena os outputs. Configurar no meio do caminho é mais trabalhoso do que configurar antes de começar.

---

## Como usar este curso

### O padrão de cada módulo
1. **Assista o vídeo** — é um screen recording ao vivo, com erros e iterações incluídos
2. **Leia o documento de apoio** (esse que você está lendo agora)
3. **Aplique no seu negócio** — o documento tem worksheets para você preencher com seus dados
4. **Não avance sem ter o entregável do módulo** — cada módulo termina com um `@agentname` testado e funcionando no Claude Code

### O caso de estudo: Carla, consultora financeira para MEIs
Em todos os vídeos, você vai ver Arthur construindo o squad de uma consultora financeira — um negócio real de consultoria para MEIs e pequenas empresas.

Você vai ver exatamente os prompts usados, os erros que aconteceram, e como foram corrigidos. Esse é o material bruto — sem edição que esconde a dificuldade real.

### Adaptando para o seu negócio
Depois de cada build ao vivo, tem sempre uma aula de adaptação. Ela mostra como mapear o que foi feito para o seu modelo de negócio específico (consultoria, SaaS, agência, e-commerce, etc.).

---

## Antes de avançar para o Módulo 1

Responda essas 3 perguntas no papel ou no seu bloco de notas:

1. **Qual é o meu produto principal hoje?** (o que gera mais receita, ou o que você quer que gere)

2. **Quais são as 3 coisas que mais tomam o meu tempo que não deveriam?** (operacional que te drena mas não te paga como expert)

3. **O que eu faria com 10 horas a mais por semana?** (esta resposta vai guiar quais agentes construir primeiro)

Guarde essas respostas. Você vai precisar delas no Módulo 1.

---

*Próxima aula: Módulo 1 — Mapeando Seu Negócio*
*Documento: [[01-mapeamento-negocio]]*
