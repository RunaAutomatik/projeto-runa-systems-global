---
date: 2026-04-10
tags: [runa-systems, skool, claude-code, skills, plugins, mcps, clis, modulo-claude-code]
project: runa-systems-global
type: course-support
produto: [[runa-systems-prd]]
modulo: "Módulo Claude Code · Aula 1.3 — Skills, Plugins, MCPs e CLIs"
---

# Skills, Plugins, MCPs e CLIs — Mapa do Ecossistema

> Módulo Claude Code · Aula 1.3

O Claude Code opera com uma camada extra de capacidades além das ferramentas nativas. Esta aula mapeia as quatro categorias principais — Skills, Plugins, MCPs e CLIs — o que cada uma é, onde fica e quando usar cada tipo.

> Esta aula é um mapa de orientação. Cada categoria tem sua própria aula aprofundada no módulo.

---

## As Quatro Camadas de Capacidade

```
Claude Code (base)
  └── Tools nativas (Read, Write, Edit, Bash, Glob, Grep...)
      └── Skills — playbooks de instruções (carregadas sob demanda)
      └── Plugins — slash commands + hooks (automações e atalhos)
      └── MCPs — conexões com serviços externos (Supabase, Figma, Gmail...)
      └── CLIs — ferramentas de linha de comando que o Claude usa via Bash
```

Cada camada adiciona um tipo diferente de capacidade ao Claude.

---

## Skills — Playbooks Especializados

### O que são

Skills são arquivos `.md` com instruções especializadas. O Claude as carrega **sob demanda** — somente quando você precisa delas para uma tarefa específica.

A grande vantagem: não lotam a janela de contexto. Uma skill de 200 linhas sobre frontend design só consome tokens quando você está realmente trabalhando em frontend.

### Onde ficam

| Localização | Escopo | Quando usar |
|-------------|--------|------------|
| `~/.claude/skills/` | Global — disponível em qualquer projeto | Skills que você usa sempre |
| `.claude/skills/` | Projeto — só neste projeto | Skills específicas desta aplicação |

### Como instalar

Skills globais da Anthropic (via npm):

```bash
npx skills add ads-meta
npx skills add seo-content
```

Skills de terceiros ou personalizadas: basta copiar o arquivo `.md` na pasta correta.

### Como usar

```bash
# Dentro de uma sessão Claude Code
/ads-meta

# Ou chamando por nome em um prompt
Use a skill frontend-design para criar esse componente
```

### Exemplos de skills no ecossistema RUNA SYSTEMS

| Skill | Para que serve |
|-------|---------------|
| `ads-meta` | Criação e análise de campanhas no Meta Ads |
| `ads-google` | Google Ads — estrutura, keywords, análise |
| `seo-content` | Análise e otimização de conteúdo para SEO |
| `frontend-design` | Padrões e boas práticas de UI/UX |
| `commit-commands` | Padrões de commit convencional e PR |
| `obsidian-markdown` | Escrita e estrutura de notas no Obsidian |
| `content-repurposing` | Transformar um conteúdo em múltiplos formatos |

---

## Plugins — Slash Commands e Hooks

### O que são

Plugins são extensões que adicionam dois tipos de capacidades ao Claude Code:

1. **Slash commands** — atalhos de prompt com `/nome`
2. **Hooks** — automações disparadas por eventos (veja aula 1.2, conceito 16)

### Slash Commands

Slash commands ficam em arquivos `.md` dentro de:
- `~/.claude/commands/` — globais
- `.claude/commands/` — por projeto

Cada arquivo é um comando. O nome do arquivo é o nome do comando.

```
.claude/
└── commands/
    ├── revisar.md      → /revisar
    ├── deploy.md       → /deploy
    └── daily.md        → /daily
```

**Estrutura básica de um slash command:**

```markdown
Revise o código modificado nesta sessão buscando:
- Bugs e erros de lógica
- Violações de convenções do projeto (veja CLAUDE.md)
- Oportunidades de simplificação

Seja direto. Não explique o que é óbvio. Priorize crítico > médio > baixo.
```

### Hooks

Hooks ficam configurados no arquivo `.claude/settings.json` do projeto:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint {{file}} --fix"
          }
        ]
      }
    ]
  }
}
```

O exemplo acima roda o ESLint automaticamente sempre que o Claude editar ou criar um arquivo.

### Diferença entre Skills e Plugins

| | Skill | Plugin (Slash Command) |
|--|-------|----------------------|
| Conteúdo | Instruções de como fazer algo | Um prompt específico a executar |
| Escopo | Expertise em uma área | Tarefa específica repetível |
| Exemplo | "Como fazer SEO de conteúdo" | "/daily — gerar relatório diário" |

---

## MCPs — Conexões com o Mundo Externo

### O que são

MCP (Model Context Protocol) é o padrão criado pela Anthropic para conectar o Claude a serviços externos. Sem MCPs, o Claude opera só dentro do seu computador. Com MCPs, ele alcança qualquer serviço com API.

### Onde são configurados

| Arquivo | Escopo |
|---------|--------|
| `~/.claude.json` (seção `mcpServers`) | Global — disponível em qualquer projeto |
| `.mcp.json` (raiz do projeto) | Por projeto — só nesta pasta |

### Estrutura de configuração

```json
// ~/.claude.json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-supabase"],
      "env": {
        "SUPABASE_URL": "https://...",
        "SUPABASE_KEY": "..."
      }
    }
  }
}
```

### MCPs ativos no ecossistema RUNA SYSTEMS

| MCP | Serviço | Quem usa |
|-----|---------|---------|
| `claude_ai_Supabase` | Banco de dados e autenticação | Desenvolvimento, dados |
| `claude_ai_Figma` | Design e prototipagem | UX, frontend |
| `claude_ai_Gmail` | Email | Automações, comunicação |
| `claude_ai_Google_Calendar` | Calendário | Agendamento, planejamento |
| `claude_ai_Netlify` | Deploy e hosting | DevOps |
| `notebooklm-mcp` | Google NotebookLM | Pesquisa, conteúdo |
| `n8n-mcp` | Automação de workflows | HERMES, automações |

### Como verificar MCPs ativos

```bash
# Dentro de uma sessão Claude Code
/mcp
```

Lista todos os MCPs disponíveis com o número de ferramentas que cada um expõe.

---

## CLIs — Ferramentas de Linha de Comando

### O que são

CLIs (Command Line Interface) são programas que rodam no terminal. O Claude Code os usa via a tool **Bash** — ele não os instala, mas usa os que já estão instalados no seu sistema.

A diferença dos MCPs: CLIs rodam localmente no seu computador. MCPs conectam a serviços externos via API.

### CLIs importantes no ecossistema RUNA SYSTEMS

#### gws — Google Workspace CLI

Acesso completo ao Google Drive, Docs, Sheets, Slides, Gmail e Calendar via terminal.

```bash
# Upload de arquivo para o Google Drive
gws drive files create --upload ./documento.docx --json '{"name":"Documento"}'

# Criar uma planilha
gws sheets spreadsheets create --json '{"properties":{"title":"Dados"}}'

# Ler um documento
gws docs documents get --params '{"documentId":"ID_DO_DOC"}'
```

**Conta:** automatikruna@gmail.com (já autenticada)

---

#### infsh — inference.sh CLI

Acesso a mais de 80 modelos de IA para geração de imagens, vídeo, voz, música e transcrição.

```bash
# Gerar imagem com Flux
infsh app run falai/flux-dev --input '{"prompt":"..."}'

# Gerar vídeo com Google Veo
infsh app run google/veo-3-1-fast --input '{"prompt":"...", "aspect_ratio":"9:16"}'

# Text-to-speech com ElevenLabs
infsh app run elevenlabs/text-to-speech --input '{"text":"...", "voice_id":"..."}'
```

---

#### obsidian — Obsidian CLI

Criação, leitura e busca de notas no vault Obsidian via terminal.

```bash
# Criar nota
obsidian create path="📐 Projetos/novo-doc.md" content="---\ndate: 2026-04-10\n---\n# Título"

# Ler nota
obsidian read path="📅 Diário/2026-04-10.md"

# Buscar no vault
obsidian search query="Claude Code"
```

**Vault:** `D:/Runa/runa-systems-global/SÍRIOS/`

---

#### yt-dlp — Download de Legendas do YouTube

Extrai legendas de vídeos do YouTube sem baixar o vídeo completo.

```bash
# Baixar legendas automáticas em português
yt-dlp --skip-download --write-auto-subs --sub-langs "pt.*" \
  --convert-subs srt -o "tools/transcript_%(id)s" \
  "https://www.youtube.com/watch?v=ID_DO_VIDEO"
```

Útil para extrair transcrições de vídeos e usar como base para pesquisa ou criação de conteúdo.

---

#### gh — GitHub CLI

Operações de GitHub sem sair do terminal.

```bash
# Criar pull request
gh pr create --title "feat: nova funcionalidade" --body "..."

# Ver status de um PR
gh pr view 123

# Listar issues abertas
gh issue list --state open
```

---

## Quando Usar Cada Um

| Situação | Use |
|----------|-----|
| Preciso que Claude entenda meu domínio de trabalho (SEO, ads, frontend) | **Skill** |
| Tenho um prompt que reutilizo com frequência | **Plugin (slash command)** |
| Quero que algo aconteça automaticamente ao editar um arquivo | **Plugin (hook)** |
| Preciso que Claude acesse um serviço externo (banco, email, design) | **MCP** |
| Preciso rodar uma ferramenta de terminal (upload, geração de mídia) | **CLI via Bash** |

---

## Ordem de Prioridade para Escolha de Ferramenta

Sempre siga esta hierarquia — da mais simples para a mais complexa:

1. **Tools nativas do Claude Code** (Read, Write, Edit, Bash, Glob, Grep) — sempre primeiro
2. **Skills do projeto** (`.claude/skills/`) — instruções especializadas
3. **Skills globais** (`~/.claude/skills/`) — capacidades reutilizáveis
4. **MCPs** — quando precisa de um serviço externo
5. **CLIs via Bash** — quando o MCP não existe mas há uma ferramenta de terminal

Nunca use um MCP para algo que uma tool nativa resolve. Nunca use um CLI para algo que uma tool nativa resolve.

---

## Estrutura Completa de Arquivos

```
~/.claude/                      ← GLOBAL
├── settings.json               ← config globais
├── CLAUDE.md                   ← instruções para todos os projetos
├── commands/                   ← slash commands globais
│   └── daily.md               → /daily
└── skills/                     ← skills globais
    ├── ads-meta/
    ├── seo-content/
    └── ...

~/.claude.json                  ← MCPs globais (mcpServers)

seu-projeto/                    ← PROJETO
├── CLAUDE.md                   ← instruções deste projeto
├── .mcp.json                   ← MCPs específicos deste projeto
└── .claude/
    ├── settings.json           ← config deste projeto
    ├── settings.local.json     ← config local (não commitar)
    ├── commands/               ← slash commands do projeto
    │   └── deploy.md          → /deploy
    ├── skills/                 ← skills do projeto
    │   └── api-patterns.md
    └── rules/                  ← regras contextuais
        └── ...
```

---

*Próxima aula: Aula específica — Skills em profundidade*
*Documento: [[claude-code-04-skills-deep-dive]] (em produção)*
