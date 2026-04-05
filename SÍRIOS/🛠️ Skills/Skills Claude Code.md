---
date: 2026-04-04
tags: [skills, claude-code, configuracao, produtividade, design, paperclip, memoria]
project: runa-systems-global
---

# Skills Claude Code — Capacidades Nativas e Produtividade

> Skills instaladas via repositório Claude Code que precisam ser ativadas manualmente.
> Inclui: configuração do ambiente, extração de conteúdo, design Stitch, Paperclip, memória e utilitários.
> Complementa os outros Skills docs — não repete skills já mapeadas em Dev, AIOX, GSD ou Plugins.

---

## CONFIGURAÇÃO DO AMBIENTE

---

### update-config — Configurar Claude Code via settings.json

#### Ativação
- **Comando:** `/update-config`
- **Para que serve:** Configurar comportamentos automatizados do Claude Code (hooks). Comportamentos do tipo "sempre que X acontecer, faça Y" exigem hooks no `settings.json` — não funcionam via memória ou preferências. Também serve para permissões, variáveis de ambiente e troubleshooting de hooks.
- **Caso de uso RUNA:** Configurar hooks de auto-formatação após edições, notificação Windows quando Claude termina de responder, compaction digest automático

#### Quando usar
- "Adiciona permissão para npm"
- "Sempre que Claude parar, mostre notificação"
- "Configura hook de pre-commit"
- "Seta variável de ambiente DEBUG=true"

#### Quando NÃO usar
- Configurações simples de tema ou modelo → usar Config tool
- Preferências que não precisam de automação → apenas salvar em memória

---

### keybindings-help — Customizar Atalhos de Teclado

#### Ativação
- **Comando:** `/keybindings-help`
- **Para que serve:** Customizar atalhos de teclado, criar chord bindings, modificar o arquivo `~/.claude/keybindings.json`
- **Caso de uso RUNA:** Rebindar tecla de submit, criar atalho para ativar agentes com chord

---

## UTILITÁRIOS DE CÓDIGO

---

### simplify — Simplificar Código Após Mudanças

#### Ativação
- **Comando:** `/simplify`
- **Para que serve:** Revisar código recém-alterado para reuso, qualidade e eficiência. Foca no delta — código modificado ou escrito na sessão — e corrige o que encontrar.
- **Caso de uso RUNA:** Após implementar qualquer worker (instagram-worker, content-worker), rodar `/simplify` antes do commit para garantir qualidade sem refatoração desnecessária

---

### loop — Rodar Tarefa em Intervalo Recorrente

#### Ativação
- **Comando:** `/loop [intervalo] [tarefa]`
- **Exemplos:**
  ```
  /loop 5m /foo        — roda /foo a cada 5 minutos
  /loop                — usa intervalo padrão de 10 minutos
  ```
- **Para que serve:** Executa um prompt ou skill em intervalos regulares na sessão atual. Útil para monitoramento, polling de status ou tarefas periódicas.
- **Caso de uso RUNA:** Monitorar build de deploy a cada 2 minutos, verificar output de worker a cada 5 minutos enquanto processa

#### Quando NÃO usar
- Tarefas únicas → executar diretamente
- Tarefas recorrentes que precisam persistir entre sessões → usar `/schedule`

---

### schedule — Criar Agentes Remotos Agendados

#### Ativação
- **Comando:** `/schedule`
- **Para que serve:** Criar, atualizar, listar e executar agentes remotos com agenda cron que rodam fora da sessão atual
- **Caso de uso RUNA:** Agendar geração semanal de briefing de conteúdo, relatório quinzenal de mercado via ALEX, check diário de leads via HERMES

---

### claude-api — Construir Apps com Claude API

#### Ativação
- **Comando:** `/claude-api`
- **Trigger automático:** Quando código importa `anthropic` / `@anthropic-ai/sdk` / `claude_agent_sdk`
- **Para que serve:** Guia especializado para construir aplicações com a API da Anthropic / SDK Claude. Cobre: tool use, streaming, Claude Agent SDK, padrões de integração.
- **Caso de uso RUNA:** Construir o Command Center V3 com integração direta à API Claude, implementar o orquestrador do squad como aplicação Node.js

#### Quando NÃO usar
- Código que importa `openai` ou outro SDK → não triggelar
- Tarefas gerais de programação → usar @dev diretamente

---

## EXTRAÇÃO E CONHECIMENTO

---

### defuddle — Extrair Conteúdo Limpo de Páginas Web

#### Ativação
- **Comando:** `/defuddle [URL]`
- **Para que serve:** Extrai markdown limpo de qualquer página web via Defuddle CLI — remove navs, footers, ads, clutter. Retorna apenas o conteúdo principal.
- **Caso de uso RUNA:** Extrair artigos de blog de concorrentes para ALEX analisar, coletar documentação de ferramentas para base de conhecimento, processar conteúdo de landing pages para análise de posicionamento

#### Ordem de prioridade para web
1. Defuddle (`/defuddle`) → para extração de artigo/página única
2. `web-search` skill → para pesquisa geral
3. Playwright (MCP) → apenas para interação com JS pesado ou scraping interativo

---

### knowledge-extraction — Extrair e Estruturar Qualquer Conteúdo

#### Ativação
- **Comando:** `/knowledge-extraction`
- **Para que serve:** Extrair e estruturar conhecimento de PDFs, transcrições, podcasts, vídeos YouTube, entrevistas, apresentações. Output em markdown estruturado pronto para base de conhecimento.
- **Caso de uso RUNA:** Extrair conhecimento dos livros do Hormozi para a base AKASHA, processar transcrições das lives do Arthur para alimentar o ORION, estruturar PDFs de metodologia para o squad de RUNA SYSTEMS

#### Quando usar vs defuddle
- `defuddle` → conteúdo online já publicado (artigos, páginas)
- `knowledge-extraction` → conteúdo local (PDFs, transcrições, vídeos) ou processamento profundo

---

## DESIGN — GOOGLE STITCH

> Todos requerem configuração do StitchMCP. Status atual: ⚠️ pendente.
> Setup: `.claude/rules/stitch-usage.md`
> Owner: @ux-design-expert (Uma) para stitch-design e taste-design | @dev (Dex) para stitch-loop

---

### taste-design — Criar Design System Anti-Genérico

#### Ativação
- **Comando:** `/taste-design`
- **Para que serve:** Gera `DESIGN.md` — o "source of truth" do projeto de design. Define tipografia, cores, espaçamento e padrões visuais específicos para o projeto. Aplica regras anti-genéricas (bane Inter em contextos premium, bane gradientes neon, etc.)
- **Caso de uso RUNA:** Primeiro passo em qualquer projeto SITE$ — gerar o `DESIGN.md` do cliente antes de criar qualquer tela

#### Quando usar
- Sempre como **primeiro passo** em um novo projeto de design
- Antes de qualquer chamada a `/stitch-design`
- Quando design atual parece "genérico demais"

---

### stitch-design — Gerar ou Editar Telas com Stitch

#### Ativação
- **Comando:** `/stitch-design`
- **Para que serve:** Gera telas HTML/CSS de alta fidelidade via Google Stitch. Cria ou edita screens específicos, mantendo consistência com o `DESIGN.md` do projeto.
- **Caso de uso RUNA:** Criar mockup de landing page do SITE$ para aprovação do cliente antes de codar, iterar telas do Command Center V3

#### Fluxo padrão
```
1. taste-design → .stitch/DESIGN.md
2. stitch-design → .stitch/designs/{page}.html + screenshot
3. @dev integra HTML/CSS ao projeto
```

---

### stitch-loop — Construir Site Multi-Página Autonomamente

#### Ativação
- **Comando:** `/stitch-loop`
- **Para que serve:** Builder autônomo de sites completos via sistema de "baton" — gera uma página, passa o baton para a próxima iteração, até cobrir todas as páginas do site.
- **Owner:** @dev (Dex) — integração ao codebase
- **Caso de uso RUNA:** Construir site completo de vendas SITE$ de forma autônoma: home → sobre → produto → checkout → obrigado

---

### design-md — Analisar Projeto Stitch e Sintetizar DESIGN.md

#### Ativação
- **Comando:** `/design-md`
- **Para que serve:** Analisa projetos Stitch existentes e sintetiza um `DESIGN.md` semântico — útil quando o projeto já tem telas mas falta o design system documentado.
- **Caso de uso RUNA:** Extrair design system de um projeto Stitch de cliente para usar como base do SITE$ deles

---

### enhance-prompt — Aprimorar Prompts para Stitch

#### Ativação
- **Comando:** `/enhance-prompt`
- **Para que serve:** Transforma ideias vagas de UI em prompts otimizados para o Stitch — adiciona especificidade, atributos UI/UX, constraints de acessibilidade e contexto de design system.
- **Caso de uso RUNA:** Antes de enviar qualquer prompt para `/stitch-design`, passar por `/enhance-prompt` para garantir output de maior qualidade

---

### react-components — Stitch Designs → Componentes React/Vite

#### Ativação
- **Comando:** `/react-components`
- **Para que serve:** Converte designs gerados pelo Stitch em componentes modulares React/Vite usando networking a nível de sistema.
- **Caso de uso RUNA:** Após aprovação do design de tela via Stitch, converter para componentes React reais para o Command Center ou SITE$

---

### remotion — Gerar Vídeos de Walkthrough a partir do Stitch

#### Ativação
- **Comando:** `/remotion`
- **Para que serve:** Gera vídeos de walkthrough a partir de projetos Stitch usando Remotion — transições suaves, zoom-ins, animações entre telas.
- **Caso de uso RUNA:** Criar demo video do SITE$ mostrando o produto pronto, gerar walkthrough do Command Center para onboarding de clientes RUNA SYSTEMS

---

### shadcn-ui — Expert em Componentes shadcn/ui

#### Ativação
- **Comando:** `/shadcn-ui`
- **Para que serve:** Guia especializado para integrar e construir com componentes shadcn/ui — instalação, customização, composição, padrões de uso avançados.
- **Caso de uso RUNA:** Usar como referência ao construir o Command Center V3 com shadcn/ui + Tailwind

---

## MEMÓRIA E ORGANIZAÇÃO

---

### para-memory-files — Sistema de Memória com Método PARA

#### Ativação
- **Comando:** `/para-memory-files`
- **Para que serve:** Sistema de memória baseado em arquivos usando o método PARA de Tiago Forte (Projects, Areas, Resources, Archives). Persiste contexto entre sessões.
- **Caso de uso RUNA:** Organizar projetos ativos do ecossistema (P), áreas de responsabilidade contínua (A), referências de metodologia (R), projetos arquivados (Archives)

#### Quando usar vs sistema de memória existente
- `para-memory-files` → organização estrutural por método PARA (projetos, áreas, recursos)
- `memory/` files em `~/.claude/projects/` → memória de contexto por projeto (já em uso)

---

## PAPERCLIP — GOVERNANÇA DE SQUADS

> Skills para gerenciar squads governados pelo Paperclip.
> Contexto completo: `SÍRIOS/📦 Entregáveis/squad-dollar-skool/08-empresa-paperclip.md`

---

### paperclip — Interagir com o Control Plane do Paperclip

#### Ativação
- **Comando:** `/paperclip`
- **Para que serve:** Interface com a API do Paperclip para gerenciar tarefas, coordenar agentes, consultar status do squad, acessar heartbeats e outputs.
- **Caso de uso RUNA:** Consultar status do squad de cliente RUNA SYSTEMS, verificar output de heartbeat semanal, criar tarefa para o orquestrador via API

---

### paperclip-create-agent — Criar Novos Agentes no Paperclip

#### Ativação
- **Comando:** `/paperclip-create-agent`
- **Para que serve:** Criar novos agentes no Paperclip com awareness de governança — inspeciona agentes existentes antes de propor o novo, garante consistência com o organograma.
- **Caso de uso RUNA:** Adicionar um novo agente especializado ao squad de cliente no Paperclip sem quebrar hierarquia existente

---

### paperclip-create-plugin — Criar Plugins para Paperclip

#### Ativação
- **Comando:** `/paperclip-create-plugin`
- **Para que serve:** Scaffoldar novos plugins Paperclip com o alpha SDK/runtime atual.
- **Caso de uso RUNA:** Criar plugin customizado para integrar o Paperclip ao fluxo de Instagram do @arthsystems_

---

## SDK DE AGENTES

---

### agent-sdk-dev:new-sdk-app — Criar Nova Aplicação com Agent SDK

#### Ativação
- **Comando:** `/agent-sdk-dev:new-sdk-app`
- **Para que serve:** Setup completo de uma nova aplicação Claude Agent SDK — estrutura de projeto, configuração, boilerplate pronto.
- **Caso de uso RUNA:** Inicializar o Command Center V3 como aplicação Agent SDK, criar novos workers do ecossistema com estrutura padronizada

---

## FEATURE DEVELOPMENT

---

### feature-dev:feature-dev — Desenvolvimento Guiado de Features

#### Ativação
- **Comando:** `/feature-dev:feature-dev`
- **Para que serve:** Desenvolvimento guiado com análise do codebase existente, entendimento de padrões e arquitetura antes de implementar. Foco em consistência com o que já existe.
- **Caso de uso RUNA:** Implementar nova feature nos workers sem quebrar padrões existentes, adicionar módulo ao Command Center entendendo a arquitetura atual primeiro

---

## Quando Usar Este Skills Doc

| Precisa de | Skill |
|-----------|-------|
| Configurar hook ou permissão no Claude Code | `/update-config` |
| Criar atalho de teclado | `/keybindings-help` |
| Limpar código recém-escrito | `/simplify` |
| Monitorar algo periodicamente na sessão | `/loop` |
| Agendar agente para rodar fora da sessão | `/schedule` |
| Extrair conteúdo limpo de página web | `/defuddle` |
| Processar PDF, transcrição, YouTube | `/knowledge-extraction` |
| Primeiro passo de projeto de design (Stitch) | `/taste-design` |
| Gerar tela específica (Stitch) | `/stitch-design` |
| Construir site completo autonomamente | `/stitch-loop` |
| Gerar componentes React a partir de design Stitch | `/react-components` |
| Gerar vídeo demo de produto | `/remotion` |
| Usar componentes shadcn/ui | `/shadcn-ui` |
| Organizar projetos pelo método PARA | `/para-memory-files` |
| Gerenciar squad via Paperclip API | `/paperclip` |
| Adicionar agente ao Paperclip | `/paperclip-create-agent` |
| Inicializar app Claude Agent SDK | `/agent-sdk-dev:new-sdk-app` |
| Implementar feature com análise de codebase | `/feature-dev:feature-dev` |

---

*Última atualização: 2026-04-04*
*Ver também: [[Skills Dev]] | [[Skills AIOX]] | [[Skills GSD]] | [[Skills Plugins]]*
*Skills Index: [[Skills Index]]*
