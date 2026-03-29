---
date: 2026-03-29
tags: [skills, plugins, workflow, code-review, commits, automacao]
project: runa-systems-global
---

# Skills Plugins — Ferramentas e Workflows Avançados

> Plugins instalados globalmente em `~/.claude/plugins/`
> Ativados via `/plugin-name:comando` ou como skills automáticas

---

## commit-commands — Gestão de Commits e PRs

### /commit — Criar commit documentado
- **Comando:** `/commit`
- **Para que serve:** Cria commit seguindo Conventional Commits com co-autoria Claude, staged files corretos, mensagem estruturada
- **Caso de uso RUNA:** Commitar o briefing de Pin-03 após criação, commitar features do Command Center com histórico rastreável

### /commit-push-pr — Commit + Push + PR em sequência
- **Comando:** `/commit-push-pr`
- **Para que serve:** Executa os 3 passos em sequência — commit atômico, push para remote, abre PR com template
- **Caso de uso RUNA:** Publicar uma nova feature do instagram-worker para revisão antes de merge

### /clean_gone — Limpar branches deletadas
- **Comando:** `/clean_gone`
- **Para que serve:** Remove todas as branches locais marcadas como `[gone]` (deletadas no remote mas ainda existentes localmente)
- **Caso de uso RUNA:** Limpar branches antigas de features do Command Center após merge

---

## code-review — Revisão de Código Especializada

### /code-review:review-pr — Revisar PR completo
- **Comando:** `/code-review:review-pr`
- **Para que serve:** Revisão completa de PR com agentes especializados paralelos — bugs, segurança, qualidade, testes, tipos, falhas silenciosas
- **Caso de uso RUNA:** Revisar o PR do instagram-worker antes de mergear para produção, revisar mudanças no Command Center

---

## pr-review-toolkit — Kit Completo de Revisão de PR

### /pr-review-toolkit:review-pr — Revisão multi-dimensão
- **Comando:** `/pr-review-toolkit:review-pr`
- **Para que serve:** Orquestra múltiplos agentes em paralelo: code-reviewer, code-simplifier, comment-analyzer, test-analyzer, silent-failure-hunter, type-design-analyzer
- **Caso de uso RUNA:** Revisão completa de qualquer PR do ecossistema antes de fazer deploy

---

## hookify — Criar Hooks de Comportamento

### /hookify — Criar hooks a partir da conversa
- **Comando:** `/hookify`
- **Para que serve:** Analisa a conversa atual, identifica comportamentos indesejados que ocorreram e cria hooks automáticos para prevenir que aconteçam de novo
- **Caso de uso RUNA:** Depois de um agente fazer algo errado (escrever em inglês numa resposta ao usuário, criar arquivo fora do lugar), criar hook que bloqueia o comportamento

### /hookify:list — Listar hooks ativos
- **Comando:** `/hookify:list`
- **Para que serve:** Exibe todos os hooks configurados com suas regras
- **Caso de uso RUNA:** Verificar quais comportamentos estão sendo monitorados e prevenidos no ecossistema

### /hookify:configure — Configurar/desativar hooks
- **Comando:** `/hookify:configure`
- **Para que serve:** Ativar ou desativar hooks específicos interativamente
- **Caso de uso RUNA:** Desativar temporariamente um hook durante uma tarefa especial que requer o comportamento bloqueado

---

## feature-dev — Desenvolvimento Orientado a Features

### /feature-dev:feature-dev — Desenvolver feature completa
- **Comando:** `/feature-dev:feature-dev`
- **Para que serve:** Desenvolvimento guiado com foco em compreensão da codebase e arquitetura — explora o código existente antes de implementar
- **Caso de uso RUNA:** Implementar a feature de publicação automática do instagram-worker com pleno entendimento do código existente

---

## plugin-dev — Desenvolvimento de Plugins

### /plugin-dev:create-plugin — Criar novo plugin
- **Comando:** `/plugin-dev:create-plugin`
- **Para que serve:** Workflow guiado end-to-end para criar plugins Claude Code — design de componentes, implementação e validação
- **Caso de uso RUNA:** Criar plugin "runa-content" com comandos para FREYJA, carousel briefing e publicação integrados

### /plugin-dev:skill-development — Criar nova skill
- **Comando:** `/plugin-dev:skill-development`
- **Para que serve:** Criar SKILL.md completo com descrição, allowed-tools, exemplos e triggers
- **Caso de uso RUNA:** Criar a skill `runa-carousel` que encapsula o workflow completo de geração e publicação de carousel

### /plugin-dev:hook-development — Criar novo hook
- **Comando:** `/plugin-dev:hook-development`
- **Para que serve:** Criar hooks PreToolUse/PostToolUse/Stop para automatizar comportamentos
- **Caso de uso RUNA:** Criar hook que automaticamente salva no Obsidian toda vez que um documento importante é gerado

### /plugin-dev:agent-development — Criar novo agente
- **Comando:** `/plugin-dev:agent-development`
- **Para que serve:** Criar subagente especializado com persona, tools e workflow definidos
- **Caso de uso RUNA:** Criar o agente FREYJA como plugin formal com todos os comandos do squad de conteúdo encapsulados

---

## agent-sdk-dev — Desenvolvimento com Claude Agent SDK

### /agent-sdk-dev:new-sdk-app — Criar aplicação com Agent SDK
- **Comando:** `/agent-sdk-dev:new-sdk-app`
- **Para que serve:** Setup completo de aplicação usando o Claude Agent SDK (TypeScript ou Python) com estrutura, dependências e exemplos
- **Caso de uso RUNA:** Criar a aplicação do produto AGENT$ usando o Agent SDK, construir o núcleo técnico do $QUAD como aplicação de agentes

---

## ralph-loop — Loop de Melhoria Contínua

### /ralph-loop — Iniciar loop de refinamento
- **Comando:** `/ralph-loop`
- **Para que serve:** Executa um prompt ou slash command em loop com intervalo configurável — útil para refinamento iterativo de outputs
- **Caso de uso RUNA:** Rodar `/ralph-loop 10m /ads meta` para verificar e ajustar campanhas Meta Ads automaticamente a cada 10 minutos

---

## security-guidance — Orientação de Segurança

### Ativação automática
- **Quando ativa:** Automaticamente ao trabalhar com código que envolve autenticação, tokens, APIs, inputs de usuário
- **Para que serve:** Orienta sobre práticas seguras — evita injeção de SQL, XSS, exposição de tokens, command injection
- **Caso de uso RUNA:** Garantir que o instagram-worker, content-worker e Command Center não têm vulnerabilidades antes de colocar em produção com dados reais de clientes

---

## Resumo de Ativação

| Plugin | Ativação | Quando usar |
|--------|----------|-------------|
| `commit-commands` | `/commit`, `/commit-push-pr`, `/clean_gone` | Antes de qualquer commit ou PR |
| `code-review` | `/code-review:review-pr` | Revisar PRs de workers e features |
| `pr-review-toolkit` | `/pr-review-toolkit:review-pr` | Revisão profunda antes de prod |
| `hookify` | `/hookify` | Quando um agente fizer algo errado |
| `feature-dev` | `/feature-dev:feature-dev` | Desenvolver features novas |
| `plugin-dev` | `/plugin-dev:*` | Criar plugins, skills, agentes |
| `agent-sdk-dev` | `/agent-sdk-dev:new-sdk-app` | Criar apps com Claude Agent SDK |
| `ralph-loop` | `/ralph-loop` | Loop automático de refinamento |
| `security-guidance` | Automático | Qualquer código com auth/APIs |
