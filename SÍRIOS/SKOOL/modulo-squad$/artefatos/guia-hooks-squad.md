---
date: 2026-04-21
tags: [runa-intervencao, artefato, guia, hooks, claude-code, squad, s06]
project: runa-systems-global
type: guide
sessao: S06 — SQUAD$ III · Deploy
produto: [[runa-intervencao-sessao-06-squad-deploy]]
---

# Guia — Hooks do Squad

> **O que são:** Hooks são comandos que o Claude Code executa automaticamente em resposta a eventos. Transformam o ambiente de passivo em reativo — o sistema age sem você precisar pedir.
> **Arquivo de configuração:** `.claude/settings.local.json` no diretório do squad.

---

## Os 4 Eventos de Hook

| Evento | Quando dispara | Uso principal no squad |
|--------|---------------|----------------------|
| `PreToolUse` | Antes de qualquer ferramenta ser usada | Validar, enriquecer contexto, bloquear ação |
| `PostToolUse` | Imediatamente após a ferramenta terminar | Notificar, registrar no log, disparar próximo passo |
| `UserPromptSubmit` | Ao enviar qualquer mensagem ao Claude | Injetar contexto automático do negócio |
| `Stop` | Ao terminar de responder | Notificar o operador que o agente concluiu |

---

## Estrutura do settings.local.json

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "[comando-a-executar]"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit|Bash",
        "hooks": [
          {
            "type": "command",
            "command": "[comando-a-executar]"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "[comando-a-executar]"
          }
        ]
      }
    ],
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "[comando-a-executar]"
          }
        ]
      }
    ]
  }
}
```

**Regras obrigatórias:**
- Use caminho absoluto no `command` — caminhos relativos falham silenciosamente
- O script deve ter permissão de execução: `chmod +x [script]`
- Erros no hook aparecem em stderr — não interrompem o Claude, mas aparecem no terminal
- Teste cada hook individualmente antes de combinar vários

---

## Hook 1 — Stop Notification (obrigatório)

Notifica o operador quando o agente termina de responder.

**Por que é obrigatório:** Permite trabalhar em outro lugar enquanto o agente processa — você só volta quando o hook notifica.

**Implementação (Windows):**

```javascript
// ~/.claude/hooks/stop-notify.js
const { execSync } = require('child_process');
try {
  execSync('powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show(\'Squad concluiu — verifique o resultado.\', \'Runa Squad\')"');
} catch (e) {}
```

```json
// settings.local.json
"Stop": [
  {
    "hooks": [
      {
        "type": "command",
        "command": "node C:/[seu-path]/.claude/hooks/stop-notify.js"
      }
    ]
  }
]
```

**Verificação:** Execute qualquer comando com o agente e aguarde. A notificação deve aparecer quando o agente terminar.

---

## Hook 2 — Log Automático de Operação

Registra automaticamente o uso de ferramentas no log do squad, sem precisar preencher manualmente.

**Por que usar:** O log do squad (CLAUDE.md) alimenta a memória dos agentes em S08. Se o log não é preenchido, os agentes não aprendem.

```javascript
// ~/.claude/hooks/log-operation.js
const fs = require('fs');
const path = require('path');

const logEntry = `| ${new Date().toISOString().split('T')[0]} | ${process.env.AGENT_NAME || 'squad'} | ${process.env.TOOL_NAME || 'operação'} | auto-log | |\n`;
const logPath = path.join(process.cwd(), 'CLAUDE.md');

try {
  const content = fs.readFileSync(logPath, 'utf8');
  const logTableEnd = content.indexOf('| | | | | |');
  if (logTableEnd !== -1) {
    const updated = content.slice(0, logTableEnd) + logEntry + content.slice(logTableEnd);
    fs.writeFileSync(logPath, updated);
  }
} catch (e) {}
```

```json
// settings.local.json
"PostToolUse": [
  {
    "matcher": "Write|Edit",
    "hooks": [{"type": "command", "command": "node C:/[path]/hooks/log-operation.js"}]
  }
]
```

---

## Hook 3 — Context Injection (UserPromptSubmit)

Injeta automaticamente o contexto do negócio em cada nova conversa.

**Por que usar:** Quando você abre uma nova sessão do Claude Code, o agente começa sem contexto recente. Este hook garante que o agente sempre sabe em que fase do negócio está.

```javascript
// ~/.claude/hooks/inject-context.js
const fs = require('fs');
const path = require('path');

try {
  const contextPath = path.join(process.cwd(), '.squad-context.md');
  if (fs.existsSync(contextPath)) {
    const context = fs.readFileSync(contextPath, 'utf8');
    process.stdout.write(context);
  }
} catch (e) {}
```

```markdown
// .squad-context.md (criar no diretório do squad)
Contexto atual do negócio (2026-[MM]):
- Objetivo prioritário: [objetivo da semana/mês]
- Status do squad: [em operação / calibrando / deploy]
- Última operação registrada: [data e tarefa]
```

---

## Combinação Recomendada para S06

Implementar os 3 hooks na seguinte ordem:

1. **Stop notification** — instalar primeiro, verificar imediatamente
2. **Log automático** — instalar depois de Stop estar funcionando
3. **Context injection** — instalar por último, quando os outros dois estão estáveis

```json
// settings.local.json — configuração S06 completa
{
  "hooks": {
    "Stop": [
      {
        "hooks": [{"type": "command", "command": "node C:/[path]/hooks/stop-notify.js"}]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [{"type": "command", "command": "node C:/[path]/hooks/log-operation.js"}]
      }
    ],
    "UserPromptSubmit": [
      {
        "hooks": [{"type": "command", "command": "node C:/[path]/hooks/inject-context.js"}]
      }
    ]
  }
}
```

---

## Diagnóstico de Problemas

| Problema | Causa provável | Solução |
|----------|---------------|---------|
| Hook não executa | Path relativo no command | Use caminho absoluto completo |
| Hook executa mas não faz nada | Script sem permissão | `chmod +x [script]` |
| Hook causa lentidão | Script pesado no UserPromptSubmit | Mover para PostToolUse ou Stop |
| Hook para a execução do Claude | Script retorna exit code não-zero | Adicionar `try/catch` no script |
| Notificação não aparece | PowerShell bloqueado | Testar `powershell -Command "echo ok"` no terminal |

---

## Evolução dos Hooks (S08+)

Em S08, os hooks evoluem para alimentar a memória dos agentes:

```javascript
// Hook avançado: salvar aprendizado no Memory.md do agente
// (implementado em S08 — não em S06)
```

Por agora, mantenha simples. 3 hooks básicos são suficientes para S06.

---

*Sessão de origem: [[runa-intervencao-sessao-06-squad-deploy|S06 — SQUAD$ III · Deploy]]*
*Relacionado: [[template-worker|Template Worker]] · [[checklist-deploy-squad|Checklist de Deploy]]*
