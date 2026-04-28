---
date: 2026-04-27
tags: [runa-systems, alicerce, sequencia, obrigatorio, claude-code, sincronia, mind, squad]
project: runa-systems-global
type: canonical-sequence
status: active
hub: [[runa-systems-hub]]
---

# Alicerce — Sequência Obrigatória

> Todo cliente de RUNA SYSTEMS começa aqui. Sem exceção.
> A ordem não é sugestão — é arquitetura. Cada etapa é pré-requisito da próxima.

---

## A Sequência

```
1. CLAUDE CODE
       ↓
2. MAPEAMENTO DE PROCESSOS (Sincronia)
       ↓
3. MIND$ — Base de Conhecimento
       ↓
4. SQUAD$ — Squad de Agentes
```

**Por que esta ordem?**

Sem Claude Code, o cliente não tem o ambiente para operar. Sem mapeamento, o cliente não sabe o que delegar. Sem a base de conhecimento (MIND$), o squad não tem memória. Sem o squad, os módulos de habilidade não têm infraestrutura para rodar.

Cada etapa constrói sobre a anterior. Pular uma é construir em cima de areia.

---

## Etapa 1 — Claude Code

**Duração estimada:** Intervenção: Sessões 02–03 | Mentoria: Semana 1

**O que o cliente entrega ao final:**
- Anti-gravity instalado e funcionando
- Claude Code configurado (terminal + app + IDE)
- TOOLBOX completo de ferramentas ativo
- Primeiro acesso ao AIOX framework

**Sessões de referência:**
- [[runa-intervencao-sessao-02-tcode-ambiente]] — instalação e configuração
- [[runa-intervencao-sessao-03-tcode-fluxo]] — fluxo de trabalho com Claude Code

**Documentos do currículo:**
- [[claude-code-01-instalacao]] — Anti-gravity + Terminal + App
- [[claude-code-02-principios-basicos]] — Terminal, IDE, agente, tokens, permissões
- [[claude-code-03-skills-plugins-mcps-clis]] — Stack completo de ferramentas
- TOOLBOX *(a documentar — conteúdo já definido no hub)*

**TOOLBOX — visão geral:**

| Categoria | Ferramentas |
|-----------|------------|
| ALICERCE | Anti-gravity, AIOX, Anthropic native plugins, GSD |
| OPM | Sort Feed, WisprFlow, Obsidian Skills, Claude Mem, Context7, GWS |
| MCA | Zernio, ADS skill, SEO skill |
| DAV | Inference.sh, Remotion, Stitch |
| WSF | 21st (Magic), Paperclip |
| AEH | N8N, Graphify, CLI-Anything, GStack |

**Gate de saída:** Cliente consegue abrir Claude Code, executar um comando simples e entende a diferença entre chat e agente.

---

## Etapa 2 — Mapeamento de Processos (Sincronia)

**Duração estimada:** Intervenção: Sessão 01 | Mentoria: Semana 1–2

**O que o cliente entrega ao final:**
- Todos os departamentos do negócio listados e descritos
- Tarefas por departamento mapeadas (o que consome mais tempo)
- Matriz de delegação: o que vai para agente, o que fica com o humano
- Ordem de prioridade dos agentes a construir

**Metodologia:** Sincronia
- [NotebookLM — Sincronia](https://notebooklm.google.com/notebook/607cf50c-6fe6-410d-b2e5-f7d4b4f70638)
- [[modulo-01-mapeamento-processos]] — documento de referência do módulo

**Sessão de referência:**
- [[runa-intervencao-sessao-01-mapeamento]] — template da sessão
- [[runa-intervencao-sessao-01-lucas-pesto]] — caso real (Lucas Pesto, 33 clientes)

**Worksheets:**
- [[worksheet-1a-hierarquia-l0-l3]] — hierarquia de funções L0 a L3
- [[worksheet-1b-tarefas-vs-microtarefas]] — separação de tarefas e microtarefas
- [[worksheet-2-matriz-delegacao]] — matriz de delegação por departamento

**Por que Sincronia específicamente:**
A metodologia Sincronia foi desenvolvida para mapear processos de negócios no contexto de delegação para IA — ela produz o nível de granularidade exato que os agentes do SQUAD$ precisam para operar com autonomia. Metodologias genéricas de BPM geram documentos que humanos leem mas agentes não conseguem usar.

**Gate de saída:** Matriz de delegação completa. O cliente sabe exatamente quais são seus 3–5 primeiros agentes e a ordem de construção.

---

## Etapa 3 — MIND$ — Base de Conhecimento

**Duração estimada:** Intervenção: Sessões 07–08 | Mentoria: Semana 2–3

**O que o cliente entrega ao final:**
- Vault Obsidian (SÍRIOS) configurado com estrutura de pastas
- Vault AKASHA configurado como base de conhecimento dos agentes
- GitHub conectado (versionamento + acesso dos agentes)
- Templates de ingestão funcionando
- Primeiros documentos do negócio ingeridos no vault

**Sessões de referência:**
- [[runa-intervencao-sessao-07-mind-base-conhecimento]] — setup completo do segundo cérebro
- [[runa-intervencao-sessao-08-mind-memoria-evolucao]] — memória persistente e evolução

**Artefatos técnicos:**
- [[estrutura-vault-conhecimento]] — arquitetura dos dois vaults
- [[template-ingestao-wiki]] — padrão de ingestão de documentos
- [[framework-extracao-conhecimento]] — metodologia de extração do conhecimento do dono
- [[protocolo-atualizacao-semanal-kb]] — rotina de atualização da base
- [[cinco-prompts-consulta-vault]] — prompts para consultar o vault

**Guias de setup:**
- [[guia-claude-mem-memoria]] — configuração de memória persistente no Claude
- [[guia-github-conexao]] — conexão GitHub
- [[guia-obsidian-cli-instalacao]] — CLI do Obsidian

**Por que MIND$ antes do SQUAD$:**
O squad opera com contexto. Um agente sem base de conhecimento é um funcionário contratado sem manual, sem histórico, sem memória de sessão para sessão. O MIND$ é o que transforma o Claude de assistente genérico em especialista do negócio do cliente.

**Gate de saída:** Vault funcionando com pelo menos 5 documentos do negócio ingeridos. Agentes conseguem buscar informações dentro do vault via obsidian-cli.

---

## Etapa 4 — SQUAD$ — Squad de Agentes

**Duração estimada:** Intervenção: Sessões 04–06 | Mentoria: Semana 3–5

**O que o cliente entrega ao final:**
- Squad completo via AIOX: Orquestrador + 4–6 agentes especialistas
- CLAUDE.md do negócio configurado como router
- Agentes com DNA de voz calibrado
- AIOX Lite Kit instalado
- Squad rodando ao vivo (pelo menos 1 sessão de uso real)

**Sessões de referência:**
- [[runa-intervencao-sessao-04-squad-arquitetura]] — arquitetura do squad
- [[runa-intervencao-sessao-05-squad-agentes]] — construção dos agentes
- [[runa-intervencao-sessao-06-squad-deploy]] — deploy e calibração

**Currículo SQUAD$ (skool):**
- [[00-antes-de-comecar]] — pré-requisitos
- [[01-mapeamento-negocio]] — business mapping (usa o output da Etapa 2)
- [[02-orquestrador]] — orquestrador central
- [[03-agente-oferta]] — agente de oferta
- [[04-agente-conteudo]] — agente de conteúdo
- [[05-agente-automacao]] — agente de automação
- [[06-agente-inteligencia]] — agente de inteligência
- [[07-squad-ao-vivo]] — squad em operação real
- [[09-templates-bundle]] — bundle de templates
- [[10-squad-aiox]] — AIOX Lite Kit (migração para AIOX canônico)

**Templates de construção:**
- [[template-agente-yaml-especialista]] — agente especialista (padrão AIOX)
- [[template-agente-yaml-orquestrador]] — orquestrador (padrão AIOX)
- [[template-agente-yaml-suporte]] — agente de suporte
- [[template-claude-md-squad]] — CLAUDE.md do squad do cliente
- [[template-claude-md-base]] — CLAUDE.md base

**Checklists de validação:**
- [[checklist-squad-design]] — design do squad antes de construir
- [[checklist-deploy-squad]] — deploy e verificação
- [[checklist-calibracao-squad]] — calibração após deploy
- [[checklist-voz-criador]] — calibração de DNA de voz
- [[checklist-demo-ao-vivo]] — demonstração para o cliente

**Gate de saída:** Squad rodando com pelo menos 1 semana de uso real. O cliente consegue ativar um agente, delegar uma tarefa e receber output alinhado com sua voz e negócio.

---

## Após o Alicerce

Com o alicerce completo, o cliente tem:
1. **Ambiente técnico** — Claude Code + TOOLBOX
2. **Mapa do negócio** — processos documentados, matriz de delegação
3. **Memória** — vault com contexto do negócio
4. **Squad** — agentes operando com contexto e voz calibrados

A partir daí, os **módulos de habilidade** são desbloqueados conforme os gargalos específicos do cliente: CREATOR$, ORÇAMENTO$, SITE$, POSICIONAMENTO$.

Ver sequência completa: [[runa-systems-hub]]
