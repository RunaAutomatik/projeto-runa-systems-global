---
date: 2026-04-10
tags: [runa-systems, skool, claude-code, core-modules, acesso, browser, terminal, antigravity]
project: runa-systems-global
type: course-support
produto: [[runa-systems-prd]]
modulo: "Módulo Core · Aula 1.0 — Os 4 Modos de Acesso ao Claude"
---

# Os 4 Modos de Acesso ao Claude

> Módulo Core · Aula 1.0

A primeira coisa que a maioria das pessoas faz é abrir o Claude.ai, digitar uma pergunta e achar que está usando a ferramenta. Está. Mas está usando 20% da ferramenta.

Claude tem **4 modos de acesso** com capacidades radicalmente diferentes. A diferença entre eles não é preferência pessoal — é a diferença entre um copiloto de texto e um agente que executa, automatiza e opera sistemas reais.

Esta aula mapeia os 4 modos, o que cada um acessa, o que cada um produz, e quando usar cada um dentro do ecossistema RUNA.

---

## Os 4 Modos — Visão Geral

| Modo | Como acessar | Acessa arquivos? | Executa código? | Controla browser? | Usa MCPs? |
|------|-------------|:---:|:---:|:---:|:---:|
| **1. App Claude.ai** | claude.ai / App Desktop | ❌ | ❌ | ❌ | ❌ |
| **2. Terminal (Claude Code)** | `claude` no terminal | ✅ | ✅ | ❌ | ✅ |
| **3. Extensão IDE (Antigravity)** | VS Code / Antigravity | ✅ | ✅ | ❌ | ✅ |
| **4. Chrome Extension** | `claude --chrome` | ✅ | ✅ | ✅ | ✅ |

---

## Modo 1 — Claude.ai (App)

### O que é

A interface de chat no navegador (`claude.ai`) ou o app desktop. É o que a maioria das pessoas conhece. Você digita, ele responde.

### O que acessa

- Apenas o que você cola no chat
- Arquivos que você faz upload manualmente (imagens, PDFs, documentos)
- Projetos (Project Knowledge) — textos fixos que você define como contexto

### O que produz

- Texto, código (mas não executado — só escrito)
- Análises, resumos, ideias, rascunhos
- Blocos de código que você copia e roda manualmente

### Limitações reais

- Não vê seu sistema de arquivos
- Não executa nada
- Não tem MCPs (sem Supabase, sem n8n, sem Figma, sem Gmail)
- Memória reinicia a cada sessão (a menos que Projects)
- Não sabe o que está acontecendo no seu computador

### Quando usar

- Ideação inicial de produto, copy, estratégia
- Análise de documentos que você cola no chat
- Aprendizado de conceitos
- Quando você está no celular ou fora do ambiente de trabalho
- Brainstorm rápido antes de executar no Terminal

### Analogia

É como contratar um consultor por telefone. Ele é inteligente, mas depende de tudo que você falar. Não pode acessar seu servidor, não pode mexer nos seus arquivos, não pode enviar email por você.

---

## Modo 2 — Terminal (Claude Code CLI)

### O que é

Claude Code rodando no terminal via comando `claude`. Este é o modo base de operação real. Aqui o Claude deixa de ser um chatbot e vira um **agente operacional**.

### Como ativar

```bash
# Qualquer terminal (PowerShell, Bash, WSL)
claude

# Ou numa pasta específica do projeto
cd C:\runa-systems-global
claude
```

### O que acessa

- **Sistema de arquivos completo** — lê, cria, edita, deleta arquivos
- **Bash / PowerShell** — executa qualquer comando do sistema
- **Git** — status, commits, branches, diffs
- **MCPs configurados** — Supabase, Figma, Gmail, Google Calendar, n8n, Neon, NotebookLM, Netlify, Zernio
- **Skills e plugins** — ads-*, seo-*, obsidian-cli, commit-commands, hookify, gsd, etc.
- **Hooks** — executa código automático em resposta a eventos (PreToolUse, PostToolUse, Stop)
- **AIOX Framework** — todos os agentes, tasks, workflows, regras

### O que produz

- Código real escrito e salvo nos arquivos
- Comandos executados (npm install, git commit, scripts Python, etc.)
- Arquivos criados, editados, organizados
- Dados lidos/escritos em banco de dados (via MCP Supabase/Neon)
- Deployments disparados (Netlify via MCP)
- Workflows n8n criados e ativados
- Emails enviados (Gmail MCP)

### Limitações

- Não vê o DOM de páginas web
- Não interage com interfaces gráficas de sites
- Não captura screenshots de páginas ao vivo
- Não acessa conteúdo por trás de login (sem browser)

### Quando usar

- Desenvolvimento de código (features, bugs, refatoração)
- Automações e scripts
- Operações de banco de dados
- Criação de documentos no Obsidian
- Commits e PRs (via @devops)
- Deploys
- Qualquer task que envolva o sistema de arquivos

### Analogia

É como ter um engenheiro sênior com acesso total ao seu servidor. Ele pode abrir qualquer arquivo, rodar qualquer script, commitar código, fazer deploy, chamar APIs. Mas se você perguntar "como está esse site visualmente?", ele não consegue abrir um browser.

---

## Modo 3 — Extensão IDE (Antigravity / VS Code)

### O que é

Claude Code integrado dentro do editor de código. O **Antigravity** é a versão customizada do VS Code que Arthur usa — a extensão do Claude Code já vem pré-configurada. Mas qualquer VS Code ou JetBrains com a extensão instalada funciona da mesma forma.

### Como ativar

No VS Code / Antigravity:
- Atalho padrão: `Ctrl+Shift+C` (ou configurável)
- Sidebar do Claude Code
- Terminal integrado com `claude` já rodando

### O que acessa (tudo do Terminal +)

- **Arquivo aberto no editor** — Claude vê qual arquivo está ativo, qual linha, qual texto está selecionado
- **Contexto do cursor** — sabe onde você está no código
- **Diagnósticos do linter** — erros de TypeScript, ESLint, warnings em tempo real
- **Git inline** — vê blame, histórico do arquivo aberto
- **IDE Selection** — texto que você destacou vira contexto automático para o Claude

No sistema: vê exatamente a mesma coisa que o Modo 2 (arquivos, bash, MCPs, hooks). A diferença é o **contexto extra do IDE**.

### O que produz (igual ao Terminal +)

- Edições inline direto no arquivo aberto
- Refatorações com contexto do arquivo inteiro visível
- Fixes de bug com leitura dos erros do linter
- Code review com visibilidade do que está em staging

### Quando usar (em vez do Terminal puro)

- Quando você está editando código ativamente
- Quando quer que Claude veja qual arquivo está aberto e qual linha
- Quando está trabalhando numa feature e quer feedback contextual
- Quando quer edições inline sem ficar colando código

### Antigravity especificamente

O Antigravity é o ambiente "native" do RUNA SYSTEMS. Já vem com:
- Claude Code configurado
- AIOX Framework disponível
- Atalhos personalizados
- Skills e plugins pré-instalados

Quando Arthur (ou um cliente avançado) trabalha no Antigravity, ele tem todos os 4 módulos Core do RUNA SYSTEMS disponíveis num único ambiente.

### Analogia

É como o engenheiro sênior do Modo 2, mas agora ele está sentado do seu lado olhando para a mesma tela. Ele vê o que você vê, sabe em qual arquivo você está, qual linha deu erro. A comunicação fica 10x mais eficiente.

---

## Modo 4 — Chrome Extension (`claude --chrome`)

### O que é

Claude Code com acesso real ao Chrome. Você instala uma extensão no Chrome, e quando roda `claude --chrome` no terminal, o Claude ganha **controle total do seu navegador**.

Este é o modo que transforma Claude num **operador de browser** — capaz de navegar, clicar, preencher formulários, ler o DOM, capturar screenshots e interagir com qualquer site que você consegue acessar.

### Como ativar

**Setup (uma vez):**
1. Instalar a extensão no Chrome Web Store
   - Extension ID: `fcoeoabgfenejglbffodgkkbkcdhcgfn`
2. Fixar a extensão na toolbar
3. Fazer login com sua conta Anthropic na extensão
4. Permitir Native Messaging quando o dialog aparecer
5. **REINICIAR O CHROME COMPLETAMENTE** ← passo mais crítico, erro #1 se pulado
6. Verificar: `claude --chrome` no terminal → `/mcp` → deve aparecer `claude-in-chrome`

**Uso diário:**
```bash
# Iniciar sessão com browser tools
claude --chrome

# Ou ativar dentro de uma sessão já aberta
/chrome

# Verificar ferramentas carregadas
/mcp

# Ativar permanentemente (aumenta uso de contexto por sessão)
# Settings → "Enabled by default"
```

### O que acessa (tudo do Terminal +)

**17 ferramentas de browser:**

| Categoria | Ferramentas |
|-----------|-------------|
| **Navegação** | `navigate` (URLs, histórico), `tabs_create_mcp`, `tabs_context_mcp` |
| **Interação** | `computer` (Click, Type, Scroll, Drag), `form_input`, `find` (busca por linguagem natural) |
| **Leitura** | `read_page` (Accessibility Tree / DOM), `read_console_messages` (erros JS), `read_network_requests` (XHR/Fetch), `javascript_tool` (executa JS no contexto da página) |
| **Mídia** | `screenshot`, `gif_creator`, `upload_image`, `resize_window` |

**Superpoderes específicos:**

- **Sem APIs necessárias** — acessa qualquer site pelo DOM diretamente
- **Sem bot detection** — usa sua sessão real do Chrome (cookies, cookies de login, cookies de sessão)
- **Estado contínuo** — não precisa re-autenticar. Se você está logado no Stripe, Claude acessa seu dashboard
- **Debugging full-stack** — lê erros do console + requisições de rede com falha ao mesmo tempo que olha o código

### O que produz

- Screenshots de qualquer página (incluindo autenticadas)
- Interação real com formulários, dashboards, interfaces
- Dados extraídos de dashboards por trás de login (sem API)
- QA visual de aplicações locais (localhost:3000)
- GIFs de fluxos de automação
- Debugging de erros de runtime com acesso ao console

### Limitações (hard limits — Claude não pode)

- ❌ Digitar senhas
- ❌ Inserir dados de cartão de crédito
- ❌ Criar novas contas (verificação de identidade)
- ❌ Bypass de CAPTCHAs

### Requisitos

| Requisito | Detalhe |
|-----------|---------|
| Browser | Google Chrome ou Microsoft Edge (Chromium) |
| Versão da extensão | 1.0.36+ |
| Versão do Claude Code | 2.0.73+ |
| Plano Anthropic | Pro, Max, Team ou Enterprise (Free não suporta) |
| Ambiente | Windows ou macOS nativo (WSL não funciona) |

> **Conflito conhecido:** Claude Desktop App e Claude Code CLI competem pelo mesmo socket.
> Se der erro, feche o Claude Desktop App antes de rodar `claude --chrome`.

### Quando usar

- QA e testes visuais de aplicações (localhost:3000 → screenshot → bug → fix → verify)
- Scraping de dashboards autenticados (Stripe, Meta Ads, Analytics, Hotmart)
- Automação de formulários e fluxos em plataformas sem API
- Outreach tipo LinkedIn (visitar perfis, enviar convites via sessão real)
- Debugging: ver erros de console + requisições de rede + código ao mesmo tempo
- Pesquisa web que precisa de interação (rolar página, clicar em abas, expandir seções)

### Analogia

É como o engenheiro sênior do Modo 2, mas agora ele também tem acesso ao seu computador com tela, mouse e teclado. Ele pode abrir qualquer site que você abre, fazer login onde você está logado, e agir como se fosse você — mas mais rápido e sem erros manuais.

---

## Comparativo Completo

| Capacidade | App | Terminal | IDE | Chrome |
|-----------|:---:|:---:|:---:|:---:|
| Responde perguntas | ✅ | ✅ | ✅ | ✅ |
| Escreve código | ✅ | ✅ | ✅ | ✅ |
| Executa código real | ❌ | ✅ | ✅ | ✅ |
| Lê/edita arquivos | ❌ | ✅ | ✅ | ✅ |
| Roda comandos bash | ❌ | ✅ | ✅ | ✅ |
| MCPs (Supabase, n8n...) | ❌ | ✅ | ✅ | ✅ |
| Skills e plugins | ❌ | ✅ | ✅ | ✅ |
| Vê arquivo aberto no IDE | ❌ | ❌ | ✅ | ❌ |
| Vê erros do linter | ❌ | ❌ | ✅ | ❌ |
| Navega em URLs | ❌ | ❌ | ❌ | ✅ |
| Faz screenshot de páginas | ❌ | ❌ | ❌ | ✅ |
| Clica, digita, scrolla | ❌ | ❌ | ❌ | ✅ |
| Lê DOM / console / network | ❌ | ❌ | ❌ | ✅ |
| Acessa sites com login | ❌ | ❌ | ❌ | ✅ |
| Executa JavaScript na página | ❌ | ❌ | ❌ | ✅ |

---

## Fluxo Típico no RUNA SYSTEMS

Na prática, um dia de trabalho combina os modos:

```
Manhã: App Claude.ai
→ Ideação de conteúdo, revisão de estratégia, brainstorming

Trabalho: Terminal (ou IDE/Antigravity)
→ Implementação de features, automações, commits, deploys
→ Operações de banco, criação de docs no Obsidian
→ Ativação de agentes do AIOX (FREYJA, MAYA, HERMES, ARES...)

QA e pesquisa: Chrome Extension
→ Verificação visual de sites e dashboards
→ Scraping de métricas de plataformas
→ Teste de fluxos de compra e onboarding de clientes
→ Pesquisa web com interação real
```

---

## Para Clientes RUNA SYSTEMS

Os 4 módulos Core do produto ensinam exatamente esta progressão:

1. **Claude.ai chat** → parceiro de pensamento (você já usa isso)
2. **Claude.ai co-work** → modo Projects + memória estruturada
3. **Claude Code Terminal** → agente operacional real no seu negócio
4. **Antigravity** → ambiente integrado com squad completo de agentes

O Modo 4 (Chrome) é material avançado — ensinado como extensão do módulo 3 para clientes que querem automação de browser e QA visual.

---

*Próxima aula: Core 1.1 — Instalação e Configuração do Claude Code no Windows*
*Documento: [[core-02-instalacao-claude-code]]*
