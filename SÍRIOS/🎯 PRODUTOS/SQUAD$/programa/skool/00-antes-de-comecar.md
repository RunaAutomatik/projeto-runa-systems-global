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

---

## Pré-requisitos

### Obrigatório antes de começar
- [ ] **Ter clareza do seu produto ou serviço principal** — você não precisa ter tudo estruturado, mas precisa saber o que você vende e para quem
- [ ] **Conta no Claude.ai** (Plano Pro recomendado — acesso a projetos e context window maior)
- [ ] **CREATOR$** completo OU um storyboard de avatar em mãos — o squad vai usar esse material para configurar o agente de conteúdo

### Recomendado mas não obrigatório
- [ ] **MIND$** completo — a extração de IP do MIND$ é o input ideal para os agentes de oferta e conteúdo
- [ ] **Conta no Skool, Hotmart ou Kiwify** — se você já vende digitalmente
- [ ] **Conta no ManyChat** — necessário apenas para o Módulo 5 (automação Instagram)

### Se você não tem CREATOR$ e MIND$
Não tem problema começar. O Módulo 1 vai gerar o mapeamento de negócio que substitui parte do material do CREATOR$ e MIND$ para fins de configuração dos agentes. Você vai construir o squad com o que tem agora — e vai poder refiná-lo quando avançar nos outros produtos.

---

## Ferramentas que vamos usar

### Ferramentas principais (usadas em todos os módulos)

| Ferramenta | Onde acessar | Custo | Para quê |
|------------|--------------|-------|---------|
| **Claude.ai** | claude.ai | US$20/mês (Pro) | Construir e testar todos os agentes |
| **Claude Projects** | claude.ai/projects | Incluído no Pro | Salvar context dos agentes |

### Ferramentas dos módulos específicos

| Ferramenta | Módulo | Custo | Para quê |
|------------|--------|-------|---------|
| **ManyChat** | Mod 5 | Grátis (limitado) / US$15/mês | Automação Instagram DMs |
| **N8N** | Mod 5 | Grátis (self-host) / ~R$80/mês | Sequências avançadas de automação |
| **Paperclip** | Mod 8 | Grátis (open-source) | Governança e org chart do squad |

### Ferramentas opcionais

| Ferramenta | Para quê |
|------------|---------|
| **Notion** | Centralizar o squad e documentação |
| **Google Docs** | Editar templates e compartilhar com equipe |
| **ChatGPT Plus** | Alternativa ao Claude para alguns agentes |

### Guias de setup complementares

Se você não tem familiaridade com Git e controle de versão, ou quer configurar memória persistente para os seus agentes, os guias abaixo cobrem esses tópicos antes de entrar no Módulo 1:

- **[[guia-github-conexao]]** — Como conectar seu projeto ao GitHub para salvar versões dos system prompts (recomendado para todos)
- **[[guia-claude-mem-memoria]]** — Como configurar memória persistente nos seus agentes com o sistema de memória do Claude Code

> **Nota sobre ferramentas:** A lógica de squad não muda com a ferramenta. Se você não tem acesso a alguma das ferramentas pagas, a maioria tem equivalentes gratuitos. O que importa é o raciocínio — as ferramentas são detalhes de implementação que vão mudar com o tempo.

---

## Como usar este curso

### O padrão de cada módulo
1. **Assista o vídeo** — é um screen recording ao vivo, com erros e iterações incluídos
2. **Leia o documento de apoio** (esse que você está lendo agora)
3. **Aplique no seu negócio** — o documento tem worksheets para você preencher com seus dados
4. **Não avance sem ter o entregável do módulo** — cada módulo tem um output concreto que é input para o próximo

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
