---
date: 2026-03-29
tags: [skills, aiox, agentes, squad, orchestracao]
project: runa-systems-global
---

# Skills AIOX — Sistema de Agentes

> Ativação: `@nome-do-agente` ou `/AIOX:agents:nome-do-agente`
> 10 agentes especializados + 1 master. Cada agente tem persona, comandos `*` e escopo exclusivo.

---

## @dev — Dex (Implementação)

### Ativação
- **Comando:** `@dev` ou `/AIOX:agents:dev`
- **Para que serve:** Implementação de código — features, bugs, refatoração, componentes de UI, integrações, stories de desenvolvimento
- **Comandos internos:** `*develop <story>` | `*task <nome>` | `*help`
- **Autoridades exclusivas:** `git add/commit/branch/merge` (git push vai para @devops)
- **Caso de uso RUNA:** Implementar o FFmpeg compositor (Story 1.1), construir novas features do Command Center, codificar integrações com Meta Graph API

---

## @qa — Quinn (Qualidade)

### Ativação
- **Comando:** `@qa` ou `/AIOX:agents:qa`
- **Para que serve:** Testes, revisão de código, QA gate, validação de qualidade antes de merge/deploy
- **Comandos internos:** `*qa-gate <story>` | `*qa-loop <story>` | `*review`
- **Caso de uso RUNA:** Validar o instagram-worker antes de publicar automaticamente, revisar código dos workers antes de prod

---

## @architect — Aria (Arquitetura)

### Ativação
- **Comando:** `@architect` ou `/AIOX:agents:architect`
- **Para que serve:** Decisões de arquitetura, seleção de tecnologia, design de sistema, padrões de integração, complexidade técnica
- **Comandos internos:** `*design <sistema>` | `*assess <complexidade>`
- **Caso de uso RUNA:** Projetar a arquitetura do ecossistema completo RUNA SYSTEMS, decidir stack para Command Center V3, definir modelo de dados para histórico de clientes

---

## @pm — Morgan (Product Management)

### Ativação
- **Comando:** `@pm` ou `/AIOX:agents:pm`
- **Para que serve:** Orchestração de epics, levantamento de requisitos, Spec Pipeline, roadmap de produto
- **Comandos internos:** `*create-epic` | `*execute-epic` | `*spec-pipeline`
- **Autoridades exclusivas:** Epic execution, EPIC-{ID}-EXECUTION.yaml
- **Caso de uso RUNA:** Criar e executar o epic de Publicação Automática de Conteúdo, conduzir Spec Pipeline para o Command Center V3

---

## @po — Pax (Product Owner)

### Ativação
- **Comando:** `@po` ou `/AIOX:agents:po`
- **Para que serve:** Validação de stories com checklist de 10 pontos, priorização de backlog, contexto de épicos
- **Comandos internos:** `*validate-story-draft <story-id>` | `*prioritize`
- **Autoridades exclusivas:** `*validate-story-draft` (único agente que valida stories)
- **Caso de uso RUNA:** Validar Story 1.1 (FFmpeg compositor) antes de @dev começar a implementar

---

## @sm — River (Scrum Master)

### Ativação
- **Comando:** `@sm` ou `/AIOX:agents:sm`
- **Para que serve:** Criar stories a partir de epics/PRDs, selecionar templates corretos, decomposição de tarefas
- **Comandos internos:** `*draft <epic-id>` | `*create-story`
- **Autoridades exclusivas:** Criação de stories (`*draft`)
- **Caso de uso RUNA:** Criar as próximas stories do Epic 1 (Sistema de Publicação), decompor o Command Center V3 em stories executáveis

---

## @analyst — Alex (Pesquisa e Análise)

### Ativação
- **Comando:** `@analyst` ou `/AIOX:agents:analyst`
- **Para que serve:** Pesquisa de mercado, análise competitiva, benchmarks, síntese de dados, inteligência estratégica
- **Skills associadas:** `defuddle`, `seo-competitor-pages`, `ai-rag-pipeline` | MCP: `notebooklm-mcp`
- **Caso de uso RUNA:** Pesquisar concorrentes de RUNA SYSTEMS no mercado de IA, analisar benchmarks de conversão para info-products high-ticket, sintetizar dados de performance do @arthsystems_

---

## @data-engineer — Dara (Database)

### Ativação
- **Comando:** `@data-engineer` ou `/AIOX:agents:data-engineer`
- **Para que serve:** Design de schema, queries otimizadas, RLS policies, índices, migrations — delegado de @architect para trabalho detalhado de banco
- **MCPs:** Supabase, Neon
- **Caso de uso RUNA:** Projetar o schema de hook_patterns no Supabase, criar migrations para o sistema de histórico de clientes, otimizar queries do Command Center

---

## @ux-design-expert — Uma (UX/UI)

### Ativação
- **Comando:** `@ux-design-expert` ou `/AIOX:agents:ux-design-expert`
- **Para que serve:** Design de experiência do usuário, wireframes, flows de navegação, validação de usabilidade
- **Skills associadas:** `ui-ux-pro-max`, `frontend-design`
- **Caso de uso RUNA:** Projetar a UX do onboarding de clientes RUNA SYSTEMS, validar flow de compra das páginas de oferta, criar wireframes do Command Center V3

---

## @devops — Gage (DevOps — AUTORIDADE EXCLUSIVA)

### Ativação
- **Comando:** `@devops` ou `/AIOX:agents:devops`
- **Para que serve:** `git push`, criação de PRs, CI/CD, configuração de MCPs, gerenciamento de releases — **nenhum outro agente pode fazer git push**
- **Comandos internos:** `*push` | `*pr` | `*add-mcp` | `*deploy`
- **MCP:** Netlify
- **Caso de uso RUNA:** Fazer push do instagram-worker após QA, criar PR para o Command Center, configurar novos MCPs, deployar para Netlify

---

## @aiox-master — Framework Governance

### Ativação
- **Comando:** `@aiox-master`
- **Para que serve:** Governança do framework AIOX, pode executar qualquer task diretamente, resolve conflitos entre agentes, enforcement da Constitution
- **Comandos internos:** `*help` | `*status` | `*override`
- **Caso de uso RUNA:** Quando uma task está bloqueada entre agentes, quando precisa executar algo que nenhum agente específico cobre, para verificar saúde do framework

---

## Fluxo padrão de desenvolvimento (SDC)

```
@sm *draft          → cria story
@po *validate       → valida story (checklist 10 pontos)
@dev *develop       → implementa código
@qa *qa-gate        → valida qualidade
@devops *push       → publica no repositório
```

## Comandos universais de agentes

| Comando | Resultado |
|---------|-----------|
| `@agente *help` | Lista todos os comandos disponíveis |
| `@agente *exit` | Sai do modo agente |
| `@agente *task <nome>` | Executa task específica |
| `@aiox-master *status` | Visão geral do sistema |
