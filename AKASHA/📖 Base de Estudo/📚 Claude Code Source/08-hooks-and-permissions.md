---
date: 2026-04-02
tags: [claude-code, hooks, permissions, settings, allow-deny]
project: runa-systems-global
type: knowledge-doc
---

# Claude Code — Hooks System & Permission Architecture

## Hooks — O Sistema de Automação Nativa

Hooks são scripts shell executados em resposta a eventos do Claude Code. São configurados em `settings.json` e executados pelo **harness** (não pelo Claude).

### Tipos de Hooks

| Hook Event | Quando Dispara | Pode Bloquear? |
|-----------|---------------|---------------|
| `PreToolUse` | Antes de executar qualquer ferramenta | ✅ Sim (exit code != 0) |
| `PostToolUse` | Depois de executar qualquer ferramenta | ❌ Não |
| `Stop` | Quando Claude termina de responder | ❌ Não |
| `UserPromptSubmit` | Quando usuário envia mensagem | ✅ Sim |
| `StatusLine` | Periodicamente para atualizar status bar | — |
| `FileSuggestion` | Para sugerir arquivos relevantes | — |

### Tipos de Execução de Hooks

| Tipo | Como Funciona | Timeout |
|------|--------------|---------|
| Shell command sync | Executado, espera terminar | Configurável |
| Shell command async | Executado em background | 15s default |
| HTTP hook | POST para URL | Configurável |
| Prompt hook | Adiciona texto ao prompt do Claude | — |
| Agent hook | Spawna um sub-agente | — |

### Configuração em settings.json

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "my-security-checker.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "notify-done.sh"
          }
        ]
      }
    ]
  }
}
```

### JSON Output de Hooks

Hooks podem retornar JSON para comunicar com o Claude:

```json
// Hook de bloqueio (PreToolUse)
{
  "blocked": true,
  "message": "Razão do bloqueio exibida ao usuário"
}

// Hook informativo
{
  "output": "Texto adicional adicionado ao contexto do Claude"
}

// Hook assíncrono
{
  "asyncId": "uuid-do-processo",
  "asyncTimeout": 30000
}
```

### Skill Hooks — Hooks em Skill Frontmatter

Skills podem definir hooks no seu frontmatter:
```yaml
---
name: my-skill
hooks:
  PostToolUse:
    - matcher: Edit
      command: "run-after-edit.sh"
---
```

## Permission System

### Modos de Permissão

| Modo | Como Ativar | Comportamento |
|------|------------|--------------|
| `default` (Ask) | Padrão | Pergunta antes de ações potencialmente destrutivas |
| `acceptEdits` | Shift+Tab ou settings | Aceita edições automaticamente, pergunta para bash |
| `dontAsk` (Explore/YOLO) | `/yolo` ou `--dangerously-skip-permissions` | Executa tudo sem perguntar |
| `plan` | `/plan` | Só planeja, não executa |

### Regras de Permissão (allow/deny/ask)

**Settings.json:**
```json
{
  "permissions": {
    "allow": [
      "Bash(npm:*)",           // Qualquer comando npm
      "Bash(git:*)",           // Qualquer comando git
      "Edit(.claude/**)",      // Editar qualquer arquivo em .claude/
      "Read",                  // Todos os Reads sem perguntar
      "Write(src/**)"          // Criar arquivos em src/
    ],
    "deny": [
      "Bash(rm -rf:*)",        // Bloqueia rm -rf
      "Bash(curl * | bash)"    // Bloqueia pipe para bash
    ],
    "ask": [
      "Write(/etc/*)"          // Sempre perguntar para /etc/
    ],
    "defaultMode": "default",
    "additionalDirectories": ["/extra/project/dir"]
  }
}
```

**Sintaxe de regras:**
- `"ToolName"` — permite toda a ferramenta
- `"ToolName(prefix:*)"` — wildcard de prefixo
- `"ToolName(exact-match)"` — match exato
- `"mcp__server_name"` — todas as ferramentas de um MCP server
- `"mcp__server_name__tool_name"` — ferramenta MCP específica

### Hierarquia de Settings

```
~/.claude/settings.json          → Global (todas as sessões)
.claude/settings.json            → Projeto (commitado no git)
.claude/settings.local.json      → Local do projeto (gitignored)
```

Settings carregam em ordem: **global → project → local** (local sobrescreve).

### MDM (Mobile Device Management) Settings

Para organizações gerenciadas, settings podem vir de MDM:
- Lidos em paralelo no boot (`startMdmRawRead()`)
- Sobrepõem settings locais
- Podem bloquear features específicas

## Transcript Classifier (TRANSCRIPT_CLASSIFIER)

Quando ativo, usa um modelo de linguagem para:
- Classificar automaticamente se uma ação em modo YOLO é segura
- Identificar padrões "perigosos" em comandos bash
- Tomar decisão de permitir/bloquear/perguntar baseado em classificação

`yoloClassifier.ts` — classificador específico para modo YOLO
`bashClassifier.ts` — classificador específico para BashTool

## Dangerous Patterns — Detecção Automática

`dangerousPatterns.ts` detecta padrões como:
- `rm -rf`, `format`, `fdisk`, `mkfs`
- `curl ... | bash`, `wget ... | sh`
- `> /dev/sda`, operações em `/etc/`
- Output redirections para arquivos sensíveis

## Filesystem Permissions

`filesystem.ts` gerencia:
- Quais diretórios o Claude pode ler/escrever
- `additionalDirectories` — diretórios extras além do CWD
- Scratchpad directory (quando `tengu_scratch` gate ativo)
- Validação de paths para evitar path traversal

## SSRF Guard

`ssrfGuard.ts` protege hooks HTTP contra:
- Redirecionamentos para localhost
- Acesso a IPs internos (10.x.x.x, 172.16.x.x, 192.168.x.x)
- Metadata servers (169.254.169.254)

## Como Usar Hooks no AIOX/Runa

### Hook para auto-commit após edições:
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "git add -A && git commit -m 'auto: claude edit'"
      }]
    }]
  }
}
```

### Hook para notificação quando Claude termina:
```json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "powershell -Command \"[System.Windows.Forms.MessageBox]::Show('Claude terminou!')\""
      }]
    }]
  }
}
```

### Hook para lint automático:
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{
        "type": "command",
        "command": "cd D:/Runa/runa-systems-global && npm run lint --silent 2>&1 | head -20"
      }]
    }]
  }
}
```
