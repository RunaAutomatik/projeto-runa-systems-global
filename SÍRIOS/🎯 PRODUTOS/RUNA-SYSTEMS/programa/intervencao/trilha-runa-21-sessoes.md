---
date: 2026-04-20
tags: [runa-systems, trilha, roadmap, 21-sessoes, gamificacao, rpg, programa]
project: runa-systems-global
type: program-roadmap
produto: [[runa-mentoria-prd]]
status: draft — awaiting Arthur validation
---

# RUNA — Trilha das 21 Sessões
## Coluna Vertebral + Especialização Personalizada

> Aplicável a ambos os formatos:
> **INTERVENÇÃO** — 21 dias · ~1 sessão/dia · imersivo
> **MENTORIA** — 60 dias · ~1 sessão/semana · 1 call semanal
> O conteúdo é idêntico. A diferença é densidade de entrega.

---

## Estrutura Geral

```
FASE 1 — Fundação        S01          → Título: EXPLORADOR
FASE 2 — †CODE           S02–S03      → Título: FERREIRO
FASE 3 — SQUAD$          S04–S06      → Título: CONSTRUTOR
FASE 4 — MIND$           S07–S08      → Título: ESTRATEGISTA
FASE 5 — Especialização  S09–S17 (*)  → Título: ESPECIALISTA
FASE 6 — Integração      S18–S20      → Título: CONSELHEIRO
         Autonomia Total  S21          → Título: REI
```

> (*) Fase 5: pool de 12 sessões distribuídas em 3 tracks.
> O cliente seleciona 9 com base no diagnóstico S01.
> A ordem S09–S17 é personalizada — definida ao final de S01.

---

## Progressão de Títulos (Status RPG)

| Sessão | Título Desbloqueado | Significado |
|--------|--------------------|-|
| S01 | 🗺️ EXPLORADOR | Mapeou o terreno. Sabe onde está. |
| S03 | 🔨 FERREIRO | Forjou as ferramentas. Tem o ambiente. |
| S06 | 🏗️ CONSTRUTOR | Construiu o squad. Tem execução. |
| S08 | 🧠 ESTRATEGISTA | Deu inteligência ao squad. Tem memória. |
| S17 | ⚔️ ESPECIALISTA | Domina seu nicho de operação neural. |
| S20 | 🎯 CONSELHEIRO | Opera sem executar. Orienta o sistema. |
| S21 | 👑 REI | Soberania neural total. Ensina e expande. |

---

## Mapa de Névoa — Path Personalizado

```
S01 (obrigatório) → revela o mapa completo

Antes de S01: sessões S09–S17 aparecem como [???] — névoa
Após S01: o diagnóstico acende a trilha personalizada do cliente

Track A — Criador / Agência de Conteúdo
  A1 CREATOR$ I · A2 CREATOR$ II · A3 †COWORK I · A4 †COWORK II

Track B — Consultor / Mentor
  B1 †CHAT I · B2 †CHAT II · B3 POSICIONAMENTO$ I · B4 POSICIONAMENTO$ II

Track C — Agência / Operações
  C1 SITE$ · C2 Automações I · C3 Automações II · C4 ORÇAMENTO$

Cliente seleciona 9 de 12 sessões disponíveis.
Tipicamente foca em 1 track principal + 1–2 sessões de outro track.
```

---

---

# FASE 1 — FUNDAÇÃO

---

## S01 — Mapeamento Neural

> Fase 1 · Sessão obrigatória · 90–120 min

**CONCEITO**
Diagnóstico completo do negócio e definição da arquitetura de execução neural. O cliente mapeia todos os seus processos, tarefas e microtarefas — e classifica cada um na hierarquia de 3 níveis (L0–L3) e nas 4 categorias de execução. Ao final, a névoa levanta e a trilha personalizada é revelada.

**HABILIDADE ADQUIRIDA**
Enxergar o negócio como sistema neural. Distinguir e classificar qualquer tarefa nas 4 categorias: Agente Completo, Híbrido, Worker, Humano.

**IMPLEMENTAÇÃO**
- Worksheet 1A — Hierarquia de 3 Níveis (L0: objetivo → L1: pilares → L2: processos → L3: tarefas)
- Worksheet 1B — Separação Tarefas vs Microtarefas
- Worksheet 2 — Categorização nas 4 Categorias de Execução
- Plano de Ataque Personalizado (prioridades imediatas)
- Revelação do Mapa: trilha S09–S17 definida com base no diagnóstico

**DESAFIO (gate)**
> Entregar o Plano de Ataque com mínimo 10 tarefas categorizadas, 3 processos completos mapeados em L2, e identificação clara do principal bottleneck operacional.

**ARTEFATOS DESBLOQUEADOS**
- Worksheet 1A — Hierarquia Neural (L0–L3)
- Worksheet 1B — Tarefas vs Microtarefas
- Worksheet 2 — Categorização 4 Executores
- Plano de Ataque Personalizado
- Mapa da Névoa (trilha S09–S17 revelada, personalizada)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad saberá quais processos são seus domínios — base para as fases seguintes
- *Humana:* Pensar em processos, não em tarefas isoladas; ver o negócio como arquitetura

**PRÓXIMA SESSÃO:** S02 — †CODE I · Instalação do ambiente Claude Code

---

## 🏆 TÍTULO DESBLOQUEADO: EXPLORADOR
*"Mapeou o terreno. Agora sabe onde pisará."*

---
---

# FASE 2 — †CODE

---

## S02 — †CODE I — Ambiente

> Fase 2 · Sessão 2 de 3

**CONCEITO**
Instalação e configuração do Claude Code. O cliente configura o terminal neural — a interface de comando que conecta humano e agentes. Entende a diferença fundamental entre Claude.ai (chat) e Claude Code (execução agêntica).

**HABILIDADE ADQUIRIDA**
Operar Claude Code via terminal. Entender permission modes (Ask / Auto / Explore). Usar ferramentas básicas: Read, Write, Edit, Bash, Grep, Glob.

**IMPLEMENTAÇÃO**
- Instalação: Node.js 18+ → `npm install -g @anthropic-ai/claude-code`
- Primeira sessão: `claude` no terminal; leitura de arquivo real do negócio via Read tool
- Configuração de diretório de trabalho
- Criação do primeiro arquivo com Write tool

**DESAFIO (gate)**
> Fazer Claude Code ler um documento real do seu negócio (proposta, processo, briefing) e retornar análise ou resumo estruturado.

**ARTEFATOS DESBLOQUEADOS**
- Checklist de Instalação †CODE
- Guia de Permission Modes (Ask / Auto / Explore)
- Cheat Sheet de Ferramentas Core (Read / Write / Edit / Bash / Grep / Glob)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Claude Code ativo como ambiente de execução — não só chat
- *Humana:* Operar um agente via terminal; entender que a interface importa para o resultado

**PRÓXIMA SESSÃO:** S03 — †CODE II · CLAUDE.md e primeiro agente

---

## S03 — †CODE II — Fluxo

> Fase 2 · Sessão 3 de 3

**CONCEITO**
Configuração completa do ambiente: CLAUDE.md como sistema de instruções persistente, settings, rules, memory. O ferreiro aprende a forjar suas ferramentas — um agente só é tão bom quanto as instruções que recebe.

**HABILIDADE ADQUIRIDA**
Escrever CLAUDE.md eficiente com regras operacionais reais. Usar `/compact`, `/clear`, memory. Ativar e operar um agente simples via `@agent-name`.

**IMPLEMENTAÇÃO**
- Criação do CLAUDE.md do negócio do cliente (regras, contexto, tom)
- Configuração de settings.json (permission mode, hooks básicos)
- Criação do primeiro agente simples (.yaml com persona + 3 comandos)
- Ativação via `@agent-name` e execução de primeiro comando `*task`

**DESAFIO (gate)**
> Criar CLAUDE.md funcional com mínimo 3 regras operacionais reais do negócio, ativar um agente simples e completar uma tarefa real usando `*task`.

**ARTEFATOS DESBLOQUEADOS**
- Template de CLAUDE.md Base (adaptado ao negócio)
- Template de Agente Simples (.yaml)
- Guia de Comandos Essenciais †CODE
- Estrutura de settings.json Recomendada

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Primeiro agente especializado ativo com regras do negócio
- *Humana:* Escrever instruções para máquinas (não para humanos); pensar em sistemas de regras

**PRÓXIMA SESSÃO:** S04 — SQUAD$ I · Arquitetura do squad

---

## 🏆 TÍTULO DESBLOQUEADO: FERREIRO
*"Forjou as ferramentas. O ambiente está pronto para criar."*

---
---

# FASE 3 — SQUAD$

---

## S04 — SQUAD$ I — Arquitetura

> Fase 3 · Sessão 1 de 3

**CONCEITO**
Design do squad neural personalizado. O cliente define quais agentes compõem seu time, suas personas, escopos de autoridade e hierarquia. A arquitetura determina tudo — um squad mal desenhado é mais lento que trabalhar sozinho.

**HABILIDADE ADQUIRIDA**
Projetar a arquitetura de um squad de agentes para um negócio específico. Definir escopos sem overlap, hierarquia de delegação e fronteiras de autoridade.

**IMPLEMENTAÇÃO**
- Identificação dos 3–5 agentes core com base no diagnóstico S01
- Criação dos arquivos .yaml: persona, role, core_principles, commands
- Definição do CLAUDE.md do squad com matriz de delegação
- Primeira ativação de todos os agentes

**DESAFIO (gate)**
> Ter 3 agentes com .yaml completo e personas distintas, cada um com mínimo 5 comandos funcionais, sem overlap de escopo.

**ARTEFATOS DESBLOQUEADOS**
- Templates de Agent .yaml (3 variações: estratégico / operacional / especialista)
- Checklist de Squad Design
- Mapa de Escopos e Delegação
- Template de Matriz de Autoridade

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad arquitetado com escopos claros
- *Humana:* Pensar em delegação como sistema; definir fronteiras antes de começar a executar

**PRÓXIMA SESSÃO:** S05 — SQUAD$ II · Agentes operacionais

---

## S05 — SQUAD$ II — Agentes

> Fase 3 · Sessão 2 de 3

**CONCEITO**
Construção e ativação dos agentes. O cliente vai de arquitetura para execução — cada agente ganha vida, é testado em cenários reais e iterado via feedback. O handoff entre agentes é a habilidade mais crítica desta sessão.

**HABILIDADE ADQUIRIDA**
Criar agentes funcionais e testá-los em uso real. Executar handoff entre agentes. Iterar persona e comandos com base em resultados reais.

**IMPLEMENTAÇÃO**
- Ativação e teste de cada agente em cenário real do negócio
- Criação de comandos `*task` específicos para processos identificados em S01
- Primeiro handoff entre agentes (ex: estratégico → operacional)
- Documentação de feedback e iteração de .yaml

**DESAFIO (gate)**
> Completar uma tarefa real do negócio usando 2 agentes em handoff — um inicia, o outro finaliza. Entregar o artefato resultante.

**ARTEFATOS DESBLOQUEADOS**
- Guia de Ativação e Teste de Agentes
- Templates de Comandos *task por Tipo de Tarefa
- Protocolo de Handoff (estrutura de artefato entre agentes)
- Checklist de Iteração de Persona

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Agentes operacionais com handoff funcional
- *Humana:* Orquestrar agentes; dar briefs eficientes; saber quando delegar e quando reter

**PRÓXIMA SESSÃO:** S06 — SQUAD$ III · Deploy e integração

---

## S06 — SQUAD$ III — Deploy

> Fase 3 · Sessão 3 de 3

**CONCEITO**
Integração do squad no fluxo real de trabalho. Configuração de hooks, workers básicos e automações. O squad passa a operar no dia a dia — não só em sessões deliberadas de uso.

**HABILIDADE ADQUIRIDA**
Integrar agentes no fluxo operacional real. Configurar hooks (pre/post-tool). Criar primeiro worker (script ou automação básica). Monitorar sem microgerenciar.

**IMPLEMENTAÇÃO**
- Configuração de pre/post-tool hooks no settings.json
- Criação de primeiro worker (script bash, Python, ou n8n básico)
- Integração com 1–2 ferramentas externas do negócio (email, drive, CRM)
- 48h de operação real com o squad

**DESAFIO (gate)**
> Ter um processo completo do negócio rodando com apoio do squad por 48h consecutivas sem intervenção corretiva. Entregar log de operação.

**ARTEFATOS DESBLOQUEADOS**
- Template de Hook Configuration
- Guia de Workers (bash / Python / n8n)
- Checklist de Deploy e Go-Live
- Template de Log de Operação

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad integrado ao fluxo com automação básica ativa
- *Humana:* Pensar em sistemas autônomos; monitorar resultados, não atividades

**PRÓXIMA SESSÃO:** S07 — MIND$ I · Base de conhecimento

---

## 🏆 TÍTULO DESBLOQUEADO: CONSTRUTOR
*"Construiu o squad. A execução existe. Agora ela precisa de inteligência."*

---
---

# FASE 4 — MIND$

---

## S07 — MIND$ I — Base de Conhecimento

> Fase 4 · Sessão 1 de 2

**CONCEITO**
Construção da base de conhecimento do squad. Usando o Framework Universal de Extração, o cliente transforma seus processos, documentos e know-how em memória estruturada que os agentes consomem. Um squad sem base de conhecimento responde de forma genérica — não conhece o negócio.

**HABILIDADE ADQUIRIDA**
Extrair e estruturar conhecimento de qualquer fonte (PDF, transcrição, documento, código, conversa) em formato otimizado para LLM usando o Template Master.

**IMPLEMENTAÇÃO**
- Análise do material fonte: tipo de conteúdo, densidade informacional, estrutura original
- Aplicação do Template Master em 2–3 documentos core do negócio
- Criação do vault AKASHA personalizado (estrutura: raw/ + wiki/)
- Indexação e primeiro teste de consulta pelo squad

**DESAFIO (gate)**
> Ter base com mínimo 5 documentos estruturados via Template Master. O squad deve responder corretamente a 3 perguntas específicas do negócio consultando a base.

**ARTEFATOS DESBLOQUEADOS**
- Framework Universal de Extração de Conhecimento (completo)
- Template Master de Estruturação (YAML + seções padronizadas)
- Checklist de Qualidade da KB
- Template de CLAUDE.md para vault AKASHA
- Guia de Densidade Informacional (o que vale estruturar vs manter em raw)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Agentes com base de conhecimento estruturada — respostas contextualizadas ao negócio
- *Humana:* Saber o que merece ser extraído; pensar em knowledge density; curadoria ativa

**PRÓXIMA SESSÃO:** S08 — MIND$ II · Memória e evolução

---

## S08 — MIND$ II — Memória e Evolução

> Fase 4 · Sessão 2 de 2

**CONCEITO**
Configuração da memória persistente do squad e protocolos de evolução da base. O squad passa a aprender com cada interação e a base cresce organicamente. O Estrategista não só usa conhecimento — ele o governa.

**HABILIDADE ADQUIRIDA**
Configurar memory files por agente. Criar protocolo de atualização semanal da KB. Escrever prompts de consulta otimizados que exploram a base com precisão.

**IMPLEMENTAÇÃO**
- Criação de memory.md individual por agente (contexto persistente de sessão)
- Criação de workflow semanal de atualização: novos inputs → extração → estruturação → indexação
- Desenvolvimento dos 5 prompts de consulta core do negócio
- Teste de consulta complexa: squad cita fontes corretamente da base

**DESAFIO (gate)**
> O squad responder uma pergunta complexa e específica do negócio citando corretamente fontes da base de conhecimento, sem alucinação.

**ARTEFATOS DESBLOQUEADOS**
- Templates de Memory.md por Tipo de Agente
- Protocolo de Evolução Semanal da KB
- Biblioteca de Prompts de Consulta Otimizados
- Workflow de Ingestão de Novos Conhecimentos
- Guia de Anti-padrões (o que não fazer na KB)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad com memória persistente e protocolo de crescimento autônomo da base
- *Humana:* Governar conhecimento; distinguir o que merece ser preservado do que é ruído

**PRÓXIMA SESSÃO:** S09–S17 — Especialização (trilha revelada em S01)

---

## 🏆 TÍTULO DESBLOQUEADO: ESTRATEGISTA
*"Deu inteligência ao squad. A estrutura existe e sabe o que sabe."*

---
---

# FASE 5 — ESPECIALIZAÇÃO
## Pool de 12 Sessões — Cliente seleciona 9

> Sessões S09–S17 são personalizadas.
> A seleção e ordem são definidas ao final de S01 com base no diagnóstico.
> Abaixo: todas as 12 sessões disponíveis organizadas por track.

---

## TRACK A — Criador / Agência de Conteúdo

*Para quem: criadores de conteúdo, agências, consultores que constroem audiência*

---

### A1 — CREATOR$ I — Sistema de Conteúdo

> Track A · Sessão 1 de 4

**CONCEITO**
Construção do sistema de produção de conteúdo com agentes. Pipeline completo: briefing neural → geração → revisão → publicação. O cliente sai de "produzir conteúdo" para "operar um sistema de conteúdo."

**HABILIDADE ADQUIRIDA**
Operar um pipeline de conteúdo neural com produção consistente. Configurar o agente de conteúdo com tom de voz, templates e regras editoriais do negócio.

**IMPLEMENTAÇÃO**
- Configuração do agente de conteúdo: persona, tom, regras de voz, formatos
- Criação de templates: brief → rascunho → revisão → versão final
- Primeiro carousel ou post gerado e publicado com apoio neural
- Documentação do estilo e anti-padrões no CLAUDE.md do agente

**DESAFIO (gate)**
> Publicar 3 peças de conteúdo usando o pipeline neural em 7 dias. As 3 devem ter consistência de voz identificável.

**ARTEFATOS DESBLOQUEADOS**
- Template de Agente de Conteúdo (.yaml completo)
- Pipeline de Produção CREATOR$ (brief → output)
- Templates de Brief por Formato (carousel, reels, artigo, thread)
- Checklist de Consistência de Voz

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Agente de conteúdo ativo com voz calibrada ao negócio
- *Humana:* Briefar conteúdo em vez de produzir; ser editor, não redator

---

### A2 — CREATOR$ II — Pipeline de Publicação

> Track A · Sessão 2 de 4

**CONCEITO**
Automação do fluxo de publicação. De conteúdo aprovado à publicação agendada sem intervenção manual. O criador aprende a operar o calendário como sistema, não como lista de tarefas.

**HABILIDADE ADQUIRIDA**
Automatizar scheduling, repurposing e cross-posting usando workers e integrações. Gerar calendário editorial de 2 semanas automaticamente.

**IMPLEMENTAÇÃO**
- Integração com ferramenta de agendamento (Zernio / Buffer)
- Criação do worker de repurposing (1 formato → múltiplos)
- Calendário editorial neural: temas → formatos → agendamento automático
- Configuração de alerta para gaps no calendário

**DESAFIO (gate)**
> Ter calendário editorial de 2 semanas gerado automaticamente pelo pipeline neural e agendado na ferramenta de publicação.

**ARTEFATOS DESBLOQUEADOS**
- Worker de Repurposing (1-para-muitos)
- Template de Calendário Editorial Neural
- Guia de Integração com Zernio/Buffer
- Sistema de Temas → Pautas → Formatos

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Pipeline de publicação rodando de forma semi-autônoma
- *Humana:* Pensar em volume e consistência como saídas de sistema, não de esforço

---

### A3 — †COWORK I — Co-criação Profunda

> Track A · Sessão 3 de 4

**CONCEITO**
Claude.ai como parceiro de co-criação em projetos de longa duração (modo Projects). Diferente do chat — aqui o cliente trabalha com Claude como co-criador com contexto persistente. Sessões longas sem perda de coerência.

**HABILIDADE ADQUIRIDA**
Usar Projects no Claude.ai para contexto persistente. Escrever System Instructions de projeto eficientes. Co-criar entregáveis longos sem perda de voz ou contexto.

**IMPLEMENTAÇÃO**
- Criação de Project para cada produto/serviço principal
- Upload de documentos de referência (tom, exemplos, anti-padrões)
- Sessão de co-criação longa: artigo, script de vídeo, ou proposta completa
- Documentação do protocolo de retomada (como continuar onde parou)

**DESAFIO (gate)**
> Completar um entregável longo (artigo 2.000+ palavras, script de vídeo 10 min, ou proposta comercial completa) em co-criação — sem perda de contexto ou voz ao longo do processo.

**ARTEFATOS DESBLOQUEADOS**
- Template de Project Claude.ai (structure + system instructions)
- Guia de Co-criação Eficiente (o que vai em instructions vs no chat)
- Biblioteca de Prompts por Tipo de Entregável Longo
- Protocolo de Retomada de Projeto

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Claude.ai Projects configurados com contexto persistente por produto
- *Humana:* Trabalhar em projetos longos com IA sem perda de coerência; ser director, não executor

---

### A4 — †COWORK II — Fluxo Editorial Autônomo

> Track A · Sessão 4 de 4

**CONCEITO**
Integração de Claude.ai Projects com Claude Code e o squad. Os dois ambientes trabalham juntos para criar fluxo editorial semi-autônomo: pesquisa → briefing → produção → revisão → publicação em pipeline contínuo.

**HABILIDADE ADQUIRIDA**
Orquestrar Claude.ai e Claude Code para projetos editoriais complexos. Handoff entre ambientes (chat → code). Produzir sequências de conteúdo com coerência narrativa cruzada.

**IMPLEMENTAÇÃO**
- Workflow integrado: pesquisa (Claude Code / ALEX) → briefing (†COWORK) → produção (squad) → publicação (worker)
- Handoff estruturado entre ambientes (artefato de briefing padronizado)
- Produção de sequência de 5 conteúdos relacionados

**DESAFIO (gate)**
> Produzir sequência de 5 conteúdos relacionados com consistência de voz e narrativa cruzada reconhecível, usando o pipeline integrado.

**ARTEFATOS DESBLOQUEADOS**
- Workflow Editorial Integrado (†COWORK + Squad)
- Protocolo de Handoff Chat → Code (artefato padrão)
- Template de Série de Conteúdo (coerência narrativa)
- Prompt de Continuidade de Voz

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Pipeline editorial unificado com múltiplos ambientes
- *Humana:* Pensar em série e sequência; construir narrativa de marca como arco

---

## TRACK B — Consultor / Mentor

*Para quem: consultores, coaches, mentores, especialistas que vendem conhecimento e acesso*

---

### B1 — †CHAT I — Atendimento Neural

> Track B · Sessão 1 de 4

**CONCEITO**
Configuração do Claude.ai em modo chat como interface de atendimento e suporte. O consultor usa Claude para ampliar capacidade sem perder qualidade — primeiro nível neural com escalação inteligente para o humano.

**HABILIDADE ADQUIRIDA**
Configurar Claude como primeiro nível de atendimento. Escrever instructions que representem o estilo do consultor. Criar protocolo de escalação neural → humano.

**IMPLEMENTAÇÃO**
- Criação das instructions de chat (tom, limites, estilo de resposta)
- Templates de resposta para as 10 perguntas mais frequentes dos clientes
- Protocolo de escalação: quando Claude responde sozinho vs quando chama o humano
- Teste com 10 perguntas reais de clientes

**DESAFIO (gate)**
> Responder 10 perguntas reais de clientes via interface neural com qualidade equivalente ou superior ao atendimento manual — validado pelo próprio consultor.

**ARTEFATOS DESBLOQUEADOS**
- Template de Instructions de Chat (adaptado ao estilo do consultor)
- Banco das 10 FAQs Estruturadas
- Protocolo de Escalação Neural → Humano
- Checklist de Validação de Qualidade de Atendimento

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Claude como primeiro nível de atendimento com voz calibrada
- *Humana:* Delegar atendimento sem perder qualidade; entender onde o humano ainda é insubstituível

---

### B2 — †CHAT II — Qualificação e Entrega

> Track B · Sessão 2 de 4

**CONCEITO**
Claude como qualificador de leads e entregador de valor inicial. Automação da fase de descoberta: antes de qualquer conversa de venda, o prospect já passou por diagnóstico neural e recebeu análise personalizada.

**HABILIDADE ADQUIRIDA**
Usar Claude para qualificar prospects automaticamente. Gerar análises diagnósticas personalizadas como primeiro entregável de valor. Integrar com CRM básico.

**IMPLEMENTAÇÃO**
- Criação do fluxo de qualificação: formulário → análise neural → entrega de diagnóstico
- Template de análise diagnóstica personalizada por perfil de prospect
- Integração básica com CRM (Notion, Sheets, ou equivalente)
- Teste com 5 prospects reais

**DESAFIO (gate)**
> Qualificar 5 prospects reais e gerar análise diagnóstica personalizada para cada um via pipeline neural. Entregar os 5 documentos.

**ARTEFATOS DESBLOQUEADOS**
- Fluxo de Qualificação Neural (formulário → análise → entrega)
- Template de Diagnóstico Personalizado por Perfil
- Guia de Integração CRM Básico
- Checklist de Qualificação (critérios de fit)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Pipeline de qualificação rodando sem intervenção humana
- *Humana:* Valorizar o próprio tempo de venda; só entrar em conversas qualificadas

---

### B3 — POSICIONAMENTO$ I — Diferenciação

> Track B · Sessão 3 de 4

**CONCEITO**
Definição e articulação do posicionamento único de mercado. Com apoio neural para análise competitiva, o cliente define com precisão quem é, para quem é, e por que é diferente — em múltiplos formatos e com consistência.

**HABILIDADE ADQUIRIDA**
Articular posicionamento em múltiplos formatos (pitch de 30s, manifesto, tagline) com total consistência entre eles.

**IMPLEMENTAÇÃO**
- Análise competitiva neural: mapeamento dos concorrentes diretos e indiretos
- Workshop de diferenciação: o que só você entrega, para quem, por que agora
- Criação dos 3 textos core: pitch de 30s + tagline + manifesto de 1 página
- Teste de consistência cruzada entre os 3 formatos

**DESAFIO (gate)**
> Ter pitch de 30s validado (testado em voz alta), tagline finalizada e manifesto de 1 página completo — os 3 consistentes entre si e alinhados ao ICP.

**ARTEFATOS DESBLOQUEADOS**
- Framework de Análise Competitiva Neural
- Template de Pitch × Tagline × Manifesto
- Checklist de Consistência de Posicionamento
- Banco de Diferenciadores (material bruto para todos os formatos)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad com posicionamento do cliente carregado na KB — comunicação sempre alinhada
- *Humana:* Saber dizer o que faz em 30 segundos com precisão e sem hesitação

---

### B4 — POSICIONAMENTO$ II — Autoridade e Escassez

> Track B · Sessão 4 de 4

**CONCEITO**
Construção sistemática de autoridade e criação de escassez real. O consultor transforma resultados de clientes em provas de autoridade estruturadas — e aprende a criar escassez genuína através do próprio método de trabalho.

**HABILIDADE ADQUIRIDA**
Documentar casos de sucesso em formato de autoridade (antes/depois/ROI). Criar escassez genuína via estrutura de método, não via artificialidade.

**IMPLEMENTAÇÃO**
- Documentação neural de 3 casos de sucesso (coleta de dados + estruturação)
- Criação do banco de provas (depoimentos, métricas, transformações)
- Estrutura de escassez: por que não é possível atender todo mundo, e por quê isso é verdade
- Integração do banco de provas no squad (KB do agente comercial)

**DESAFIO (gate)**
> Ter banco de provas com mínimo 3 casos completos (antes / depois / ROI quantificado) em formato publicável — texto, número, transformação.

**ARTEFATOS DESBLOQUEADOS**
- Template de Caso de Sucesso Neural (estrutura antes/durante/depois)
- Framework de Prova de Autoridade (hierarquia de provas)
- Guia de Escassez Genuína (como construir, não simular)
- Banco de Provas (doc vivo, cresce com cada cliente)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Agente comercial com banco de provas carregado — apresenta casos espontaneamente
- *Humana:* Ver cada cliente como geração de autoridade; documentar enquanto entrega

---

## TRACK C — Agência / Operações

*Para quem: agências, freelancers operacionais, negócios com múltiplos clientes ou processos complexos*

---

### C1 — SITE$ — Presença Digital Neural

> Track C · Sessão 1 de 4

**CONCEITO**
Criação de site ou landing page de alta conversão com pipeline neural. Do briefing ao deploy — usando Claude Code para copy, design assistido e publicação — o cliente tem presença digital que converte sem depender de agência.

**HABILIDADE ADQUIRIDA**
Construir e publicar landing page usando pipeline neural de copy + estrutura. Entender os elementos que fazem uma página converter vs apenas informar.

**IMPLEMENTAÇÃO**
- Briefing neural: ICP, oferta, objeções, CTA
- Copy completo da página (headline, hero, benefícios, prova social, CTA)
- Build com Claude Code (HTML/CSS ou framework leve) ou integração com builder
- Deploy (Netlify / Vercel) e configuração básica de analytics

**DESAFIO (gate)**
> Ter landing page publicada com copy alinhado ao posicionamento, CTA funcional, e mínimo de velocidade de carregamento adequado.

**ARTEFATOS DESBLOQUEADOS**
- Template de Briefing Neural para Landing Page
- Framework de Copy de Conversão (estrutura que funciona)
- Checklist de Deploy e Go-Live
- Guia de Analytics Básico

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad capaz de criar e iterar páginas de vendas
- *Humana:* Entender o que faz uma página converter; briefar copy, não escrever do zero

---

### C2 — Automações I — Triggers e Fluxos

> Track C · Sessão 2 de 4

**CONCEITO**
Construção das primeiras automações de negócio com n8n. Conexão de ferramentas externas ao squad neural para eliminar trabalho manual repetitivo. O cliente passa de "usar ferramentas" para "orquestrar sistemas."

**HABILIDADE ADQUIRIDA**
Criar fluxos n8n básicos que conectam eventos externos a ações do squad. Entender triggers, nodes e outputs. Colocar automação em produção.

**IMPLEMENTAÇÃO**
- 3 automações core do negócio:
  1. Trigger externo (formulário, email, DM) → ação no squad
  2. Coleta de dados → análise neural → relatório
  3. Relatório automático semanal gerado pelo squad
- Deploy em produção por 72h

**DESAFIO (gate)**
> Ter 3 automações funcionando em produção por 72h consecutivas sem erros ou intervenção manual. Entregar log de execução.

**ARTEFATOS DESBLOQUEADOS**
- Templates de Fluxo n8n por Caso de Uso (3 básicos)
- Guia de Conexão n8n ↔ Squad Neural
- Checklist de Produção e Monitoramento
- Biblioteca de Triggers Mais Usados

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad conectado a eventos externos — reage ao mundo
- *Humana:* Pensar em automação como liberação de tempo; identificar o próximo processo a automatizar

---

### C3 — Automações II — CRM e Follow-up

> Track C · Sessão 3 de 4

**CONCEITO**
Automação do ciclo de vida do cliente — do primeiro contato ao upsell. O squad gerencia relacionamentos com personalização neural em cada touchpoint, sem intervenção humana na maioria dos estágios.

**HABILIDADE ADQUIRIDA**
Construir fluxo de CRM automatizado com personalização neural. Configurar sequências de onboarding, follow-up e alerta de risco de churn.

**IMPLEMENTAÇÃO**
- Integração: CRM / WhatsApp → n8n → squad → follow-up automático
- Sequência de onboarding neural (7 touchpoints nos primeiros 14 dias)
- Sistema de alerta: comportamento de risco de churn detectado → ação humana acionada
- 10 clientes reais passando pelo fluxo por 1 semana

**DESAFIO (gate)**
> Ter 10 clientes reais passando pelo fluxo neural de CRM durante 7 dias. Relatório de execução com touchpoints, taxas de resposta e ocorrências.

**ARTEFATOS DESBLOQUEADOS**
- Fluxo de CRM Neural Completo (n8n + squad)
- Templates de Follow-up por Estágio (awareness → compra → onboarding → expansão)
- Protocolo de Onboarding Neural Automatizado
- Sistema de Alerta de Churn

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad gerenciando relacionamentos com clientes de forma contínua
- *Humana:* Focar o tempo humano nos momentos que realmente requerem humanidade

---

### C4 — ORÇAMENTO$ — Proposta e Precificação Neural

> Track C · Sessão 4 de 4

**CONCEITO**
Automação do processo de orçamento e proposta. O squad gera propostas personalizadas de alta qualidade em minutos — com precificação baseada em valor (não em hora) e argumentação alinhada ao posicionamento.

**HABILIDADE ADQUIRIDA**
Gerar propostas comerciais de qualidade automaticamente. Precificar com base em valor entregue. Enviar proposta dentro de horas, não dias.

**IMPLEMENTAÇÃO**
- Template de proposta neural (estrutura que converte)
- Sistema de coleta de briefing → geração de proposta → envio automático
- Modelo de precificação por valor: qual resultado entrego, quanto vale esse resultado
- 3 propostas reais geradas e enviadas via pipeline

**DESAFIO (gate)**
> Gerar e enviar 3 propostas reais para prospects via sistema neural — cada uma personalizada, com precificação por valor, dentro de 2h do briefing recebido.

**ARTEFATOS DESBLOQUEADOS**
- Template de Proposta Neural (adaptável por setor)
- Sistema de Precificação por Valor (calculadora + argumentação)
- Fluxo Briefing → Proposta → Envio
- Banco de Argumentações por Objeção

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Squad gerando propostas sem esperar o humano
- *Humana:* Precificar com confiança; parar de competir por preço

---

## 🏆 TÍTULO DESBLOQUEADO: ESPECIALISTA
*"Domina o nicho de operação neural escolhido. O sistema é seu."*

---
---

# FASE 6 — INTEGRAÇÃO

---

## S18 — Integração I — Orquestração Total

> Fase 6 · Sessão 1 de 3

**CONCEITO**
Integração de todos os sistemas construídos nas fases anteriores. O cliente une squad + KB + automações + especialização em um ecossistema coeso, monitorado e sem silos. O Command Center é o painel de controle desse ecossistema.

**HABILIDADE ADQUIRIDA**
Orquestrar múltiplos agentes, bases de conhecimento e automações como sistema único. Identificar e eliminar gaps de integração. Criar visão total do ecossistema.

**IMPLEMENTAÇÃO**
- Mapeamento de gaps: o que ainda opera em silo, o que não conversa com o que
- Integração dos pontos desconexos (handoffs faltantes, bases não conectadas)
- Criação do Command Center: painel com status, métricas e saúde dos sistemas
- Primeiro relatório gerado pelo próprio ecossistema

**DESAFIO (gate)**
> Todos os sistemas operando sem silos. Command Center funcional com status em tempo real. O ecossistema gerar seu próprio relatório semanal de operação.

**ARTEFATOS DESBLOQUEADOS**
- Template de Command Center Neural
- Checklist de Integração Total (sem silos)
- Mapa de Dependências do Ecossistema
- Template de Relatório Semanal Automático

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Ecossistema integrado sem pontos cegos
- *Humana:* Gerenciar sistemas, não tarefas; tomar decisões com dados gerados pelo próprio sistema

**PRÓXIMA SESSÃO:** S19 — Integração II · Monetização neural

---

## S19 — Integração II — Monetização Neural

> Fase 6 · Sessão 2 de 3

**CONCEITO**
Estratégia e execução da monetização do ecossistema neural. O cliente transforma sua infraestrutura em oferta — para vender, licenciar ou replicar para outros negócios. O que foi construído como ferramenta vira produto.

**HABILIDADE ADQUIRIDA**
Estruturar, precificar e apresentar o ecossistema neural como proposta de valor comercial. Identificar o que pode ser replicado, vendido ou licenciado.

**IMPLEMENTAÇÃO**
- Inventário do ecossistema: o que foi construído, o que tem valor de mercado
- Criação da oferta baseada no ecossistema (para clientes ou parceiros)
- Definição da stack replicável (o que e como pode ser implementado para outros)
- Primeiro pitch do ecossistema: apresentação para cliente ou parceiro real

**DESAFIO (gate)**
> Ter uma oferta estruturada (título, promessa, deliverables, preço) e fazer o primeiro pitch para cliente ou parceiro — usando o ecossistema como diferencial.

**ARTEFATOS DESBLOQUEADOS**
- Template de Oferta Neural (estrutura de produto baseado no ecossistema)
- Framework de Precificação do Ecossistema
- Guia de Stack Replicável (o que ensinar, o que vender, o que licenciar)
- Pitch Deck Neural (template de apresentação)

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Ecossistema documentado em formato de produto vendável
- *Humana:* Ver a própria infraestrutura como ativo; monetizar o que foi construído

**PRÓXIMA SESSÃO:** S20 — Integração III · Autonomia operacional

---

## S20 — Integração III — Autonomia Operacional

> Fase 6 · Sessão 3 de 3

**CONCEITO**
Configuração da operação autônoma do ecossistema. Protocolos de manutenção, evolução e delegação total. O Conselheiro sabe que o sistema opera sem ele — ele orienta estratégia, não executa operação.

**HABILIDADE ADQUIRIDA**
Criar protocolos de health-check e evolução autônoma. Delegar monitoramento ao próprio squad. Projetar os próximos 90 dias de evolução do ecossistema.

**IMPLEMENTAÇÃO**
- Criação dos protocolos de health-check (diário / semanal / mensal)
- Configuração de alertas automáticos: o que requer atenção humana, o que o squad resolve
- Primeiro relatório de operação completo gerado pelo squad
- Plano de evolução trimestral: o que expandir, o que aprofundar, o que automatizar

**DESAFIO (gate)**
> O ecossistema operar por 72h em modo autônomo com relatório de operação gerado automaticamente pelo squad — sem intervenção corretiva.

**ARTEFATOS DESBLOQUEADOS**
- Protocolo de Health-Check Neural (3 frequências)
- Template de Relatório de Operação (gerado pelo squad)
- Sistema de Alertas Automáticos (o que chama o humano)
- Plano de Evolução Trimestral

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Ecossistema em operação autônoma com monitoramento próprio
- *Humana:* Operar como CEO do sistema — orientar evolução, não executar rotina

**PRÓXIMA SESSÃO:** S21 — Soberania Neural

---

## 🏆 TÍTULO DESBLOQUEADO: CONSELHEIRO
*"Opera sem executar. O sistema trabalha. Ele governa."*

---
---

# SESSÃO FINAL — AUTONOMIA TOTAL

---

## S21 — Soberania Neural

> Sessão final · Cerimônia de conclusão

**CONCEITO**
A última sessão não é um treinamento — é uma cerimônia de soberania. O cliente apresenta seu ecossistema completo, demonstra sua operação ao vivo, e recebe os instrumentos finais de expansão. O Rei não termina uma jornada — inicia um reinado.

**HABILIDADE ADQUIRIDA**
Ensinar o que aprendeu. Expandir o ecossistema para novos domínios. Tornar-se referência para quem está no início da jornada neural.

**IMPLEMENTAÇÃO**
- Demo ao vivo do ecossistema completo (squad operando + KB respondendo + automações rodando + presença convertendo)
- Identificação dos próximos 3 domínios de expansão (onde o ecossistema pode crescer)
- Recebimento do Manifesto do Rei e do Mapa de Expansão
- Acesso à comunidade de alumni e ao ciclo de evolução contínua

**DESAFIO (gate)**
> Demo funcional do ecossistema completo — squad respondendo perguntas reais, KB citando fontes corretas, automação executando ao vivo, presença digital com analytics visíveis.

**ARTEFATOS DESBLOQUEADOS**
- Manifesto do Rei (princípios de operação soberana)
- Mapa de Expansão (próximos 90 dias de evolução)
- Acesso à Comunidade de Alumni (Reis em operação)
- Certificado de Conclusão RUNA SYSTEMS

**HABILIDADES DESBLOQUEADAS**
- *Agêntica:* Ecossistema pronto para expansão autônoma em novos domínios
- *Humana:* Ensinar; expandir; liderar quem está no início da mesma jornada

---

## 🏆 TÍTULO DESBLOQUEADO: REI
*"Soberania neural total. O sistema é o reinado. A expansão é a missão."*

---
---

## Resumo da Trilha

| # | Sessão | Fase | Track | Título |
|---|--------|------|-------|--------|
| S01 | Mapeamento Neural | Fundação | — | 🗺️ Explorador |
| S02 | †CODE I — Ambiente | †CODE | — | — |
| S03 | †CODE II — Fluxo | †CODE | — | 🔨 Ferreiro |
| S04 | SQUAD$ I — Arquitetura | SQUAD$ | — | — |
| S05 | SQUAD$ II — Agentes | SQUAD$ | — | — |
| S06 | SQUAD$ III — Deploy | SQUAD$ | — | 🏗️ Construtor |
| S07 | MIND$ I — Base de Conhecimento | MIND$ | — | — |
| S08 | MIND$ II — Memória e Evolução | MIND$ | — | 🧠 Estrategista |
| S09 | Especialização (Track A/B/C) | Especialização | A/B/C | — |
| S10 | Especialização | Especialização | A/B/C | — |
| S11 | Especialização | Especialização | A/B/C | — |
| S12 | Especialização | Especialização | A/B/C | — |
| S13 | Especialização | Especialização | A/B/C | — |
| S14 | Especialização | Especialização | A/B/C | — |
| S15 | Especialização | Especialização | A/B/C | — |
| S16 | Especialização | Especialização | A/B/C | — |
| S17 | Especialização | Especialização | A/B/C | ⚔️ Especialista |
| S18 | Integração I — Orquestração Total | Integração | — | — |
| S19 | Integração II — Monetização Neural | Integração | — | — |
| S20 | Integração III — Autonomia Operacional | Integração | — | 🎯 Conselheiro |
| S21 | Soberania Neural | Autonomia Total | — | 👑 Rei |

---

## Connections

- **PRD:** [[runa-mentoria-prd]]
- **Sessão S01 (template):** [[runa-intervencao-sessao-01-mapeamento]]
- **Sessão S01 (exemplo real):** [[runa-intervencao-sessao-01-lucas-pesto]]
- **Framework MIND$:** [[framework-extracao-conhecimento]]
- **Hub:** [[../_hub|RUNA SYSTEMS Hub]]

---

*Trilha validada em 2026-04-20 · Versão 1.0 draft*
*Próximo passo: validação Arthur → Excalidraw visual → atualização S01 template*
