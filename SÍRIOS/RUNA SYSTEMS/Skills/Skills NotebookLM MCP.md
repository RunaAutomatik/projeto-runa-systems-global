---
date: 2026-05-11
tags: [skills, notebooklm, mcp, troubleshooting, autenticacao]
project: runa-systems-global
type: skill-doc
---

# NotebookLM MCP — Documentação & Troubleshooting

> Skill: `notebooklm-mcp` | CLI: `nlm` | Pacote: `notebooklm-mcp-cli`

---

## Pré-requisitos

| Requisito | Verificação |
|-----------|-------------|
| Python 3.10+ | `python --version` |
| Claude Code instalado | `claude --version` |
| Conta Google com NotebookLM | notebooklm.google.com |

---

## Instalação

```bash
# 1. Instalar uv (gerenciador de ambientes isolados — recomendado)
python -m pip install uv --user

# 2. Instalar o pacote (cria nlm + notebooklm-mcp)
python -m uv tool install notebooklm-mcp-cli

# 3. Adicionar ao PATH (Windows — sessão atual)
export PATH="$PATH:/c/Users/{seu-usuario}/.local/bin"
# Para tornar permanente: echo 'export PATH=...' >> ~/.bashrc

# 4. Registrar no Claude Code (escopo global)
export PYTHONUTF8=1
nlm setup add claude-code

# 5. Autenticar (abre Chrome real via CDP — não headless)
export PYTHONUTF8=1
nlm login

# 6. Reiniciar o Claude Code
# Verificar
nlm doctor
```

> ⚠️ `PYTHONUTF8=1` é obrigatório no Windows — evita `UnicodeEncodeError` com caracteres →, ✓ etc.

### Multi-account (opcional)

```bash
nlm login --profile trabalho
nlm login --profile pessoal
nlm login profile list
```

---

## Comandos Essenciais

```bash
# Autenticação
nlm login              # Login via browser (Chrome headless)
nlm login --check      # Verificar se autenticação está válida
nlm logout             # Encerrar sessão

# Diagnóstico
nlm doctor             # Diagnóstico completo

# Notebooks
nlm notebook list
nlm notebook create "Nome"
nlm query <notebook-id> "pergunta"

# MCP
nlm setup list         # Ver status de registro no Claude Code
nlm setup add claude-code  # Registrar globalmente
```

---

## Tools MCP Disponíveis no Claude Code

| Tool | Função |
|------|--------|
| `notebook_list` | Listar notebooks |
| `notebook_create` | Criar notebook |
| `notebook_get` | Detalhes de um notebook |
| `source_add` | Adicionar fonte |
| `notebook_query` | Chat com as fontes |
| `studio_create` | Criar artefato (audio/video/slides) |
| `refresh_auth` | Tentar renovar auth sem fechar Claude Code |

---

## Troubleshooting

### ❌ Problema mais comum: `refresh_auth` retorna `success` mas tools ainda falham

**Sintoma:**
```
Notebooklm-mcp [refresh_auth]
OUT {"status":"success","message":"Auth tokens reloaded from disk cache."}

Notebooklm-mcp [notebook_get]
OUT {"status":"error","error":"Failed to get notebook: Authentication expired."}
```

**Causa raiz:**
O `refresh_auth` lê o arquivo `auth.json` do disco e reporta `success` se o arquivo existir e for parseável. **Não valida contra o Google.** Se o cookie no arquivo já expirou, o resultado é um falso positivo: o tool diz que funcionou, mas a autenticação com o servidor Google ainda está inválida.

**Solução — 3 comandos no terminal (fora do Claude Code):**
```bash
nlm logout
nlm login
nlm login --check
# Deve retornar: ✓ Authentication valid for [email]
```

Só após ver `Authentication valid` abrir o Claude Code.

---

### ❌ `nlm doctor` mostra `Account: unknown`

O `metadata.json` não tem email registrado. Indica que nunca houve login completo ou o perfil foi corrompido.

**Solução:** `nlm logout && nlm login`

---

### ❌ MCP aparece com `-` no `nlm setup list`

O MCP foi configurado via `.mcp.json` manual, não pelo canal oficial.

**Solução:**
```bash
nlm setup add claude-code
```

Registra globalmente. O `.mcp.json` manual pode ser removido depois.

---

### ❌ Dois binários coexistindo (venv + global)

Normal quando o pacote foi instalado tanto no venv do projeto quanto globalmente.
Após `nlm setup add claude-code`, o Claude Code passa a usar o global. Correto.

---

### ❌ Caminho hardcoded no `.mcp.json`

```json
"command": "c:\\CLAUDE TESTE\\venv\\Scripts\\notebooklm-mcp.exe"
```

Quebra se a pasta for movida. Substituir por:
```json
{
  "mcpServers": {
    "notebooklm-mcp": {
      "command": "notebooklm-mcp",
      "env": {
        "NOTEBOOKLM_HL": "pt-BR"
      }
    }
  }
}
```

Funciona se `~/.local/bin` estiver no PATH.

---

## Por que a autenticação expira?

O NotebookLM MCP usa **cookies de sessão Google** — não OAuth refresh tokens. Cookies têm TTL variável (dias a semanas). Não há renovação automática em background: cada sessão depende dos cookies capturados no último `nlm login`.

**Consequência prática:** O mentorado precisa rodar `nlm login` periodicamente. Frequência típica: a cada 1–2 semanas dependendo da atividade.

---

## Configuração com pt-BR

Adicionar ao `.mcp.json`:
```json
{
  "mcpServers": {
    "notebooklm-mcp": {
      "command": "notebooklm-mcp",
      "env": {
        "NOTEBOOKLM_HL": "pt-BR"
      }
    }
  }
}
```

---

## Mentorados com NotebookLM instalado

| Mentorado | Status | Última autenticação | Versão |
|-----------|--------|---------------------|--------|
| Lucas Pesto | 🔄 Fix pendente (entregável enviado pré-S10) | Expirada 2026-05-08 | 0.6.5 → atualizar 0.6.6 |

---

*Criado em 2026-05-11 — baseado em diagnóstico do ambiente Lucas Pesto*
