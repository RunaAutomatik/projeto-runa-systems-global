---
date: 2026-04-15
tags: [notebooklm, mcp, claude-code, instalação, template, tools]
project: runa-systems-global
type: template
origin: movido de Skills/ em 2026-05-11 — era install guide direto para mentorado
---

> **Template base** — adaptar em português para cada mentorado antes de entregar.
> Referência técnica atualizada: [[Skills NotebookLM MCP]]

# NotebookLM MCP — Guia de Instalação no Claude Code

> Como instalar e configurar acesso direto ao Google NotebookLM dentro do Claude Code.

---

## O que é isso?

O **NotebookLM MCP** é uma ponte que conecta o Claude Code ao Google NotebookLM usando o protocolo MCP (Model Context Protocol). Após a instalação, você pode criar notebooks, adicionar fontes, fazer perguntas e gerar podcasts/áudios sem sair do Claude Code.

**Repositório usado:** `notebooklm-mcp-cli` (pacote unificado, CLI + servidor MCP)

> ⚠️ **Aviso:** Usa APIs internas não documentadas do Google. Pode parar de funcionar sem aviso. Limite de ~50 queries/dia no plano free.

---

## Pré-requisitos

| Requisito | Verificação |
|-----------|-------------|
| Python 3.10+ | `python --version` |
| Claude Code instalado | `claude --version` |
| Conta Google com NotebookLM | [notebooklm.google.com](https://notebooklm.google.com) |

---

## Passo 1 — Instalar `uv` (gerenciador de pacotes)

O `uv` é o gerenciador recomendado porque cria ambientes isolados para cada ferramenta, evitando conflitos de dependência.

```bash
python -m pip install uv --user
```

Verifique:
```bash
python -m uv --version
```

---

## Passo 2 — Instalar o pacote

```bash
python -m uv tool install notebooklm-mcp-cli
```

> Isso instala dois executáveis:
> - `nlm` → CLI para gerenciar autenticação e configurações
> - `notebooklm-mcp` → servidor MCP que o Claude Code usa

O caminho de instalação no Windows é `C:\Users\{seu-usuario}\.local\bin\`.

---

## Passo 3 — Adicionar ao PATH (Windows)

O instalador avisa que a pasta não está no PATH. Para usar `nlm` no terminal:

```bash
# No bash/WSL (sessão atual):
export PATH="$PATH:/c/Users/{seu-usuario}/.local/bin"

# Para tornar permanente, adicione ao seu ~/.bashrc ou ~/.zshrc:
echo 'export PATH="$PATH:/c/Users/{seu-usuario}/.local/bin"' >> ~/.bashrc
```

Verifique:
```bash
nlm --version
# Deve retornar: nlm version X.X.X
```

---

## Passo 4 — Configurar o MCP no Claude Code

Este comando edita automaticamente o `settings.json` do Claude Code para registrar o servidor MCP:

```bash
export PYTHONUTF8=1
nlm setup add claude-code
```

> A variável `PYTHONUTF8=1` é necessária no Windows para evitar erro de encoding com caracteres Unicode (→, ✓, etc.)

Saída esperada:
```
Claude Code — Adding NotebookLM MCP
✓ Added to Claude Code (user scope)
Restart Claude Code to activate the MCP server.
```

---

## Passo 5 — Autenticar com Google

```bash
export PYTHONUTF8=1
nlm login
```

Isso abre uma janela do **Chrome real** (via Chrome DevTools Protocol) para você fazer login. Não é um browser headless — o Google vê como uma sessão legítima.

Saída esperada após login:
```
✓ Successfully authenticated!
  Profile: default
  Cookies: 49 extracted
  CSRF Token: Yes
  Account: seu-email@gmail.com
```

Os cookies ficam salvos em:
```
C:\Users\{seu-usuario}\.notebooklm-mcp-cli\profiles\default
```

---

## Passo 6 — Reiniciar o Claude Code

Feche e abra o Claude Code. O servidor MCP será carregado automaticamente.

Para verificar se está ativo, você verá as ferramentas `mcp__notebooklm-mcp__*` disponíveis.

---

## Ferramentas disponíveis após instalação

| Ferramenta MCP | O que faz |
|----------------|-----------|
| `list_notebooks` | Lista todos os seus notebooks |
| `get_notebook` | Abre um notebook específico |
| `add_notebook` | Cria um novo notebook |
| `ask_question` | Faz uma pergunta ao notebook ativo |
| `search_notebooks` | Busca por conteúdo nos notebooks |
| `get_health` | Verifica status da conexão |
| `re_auth` | Reautentica sem precisar re-instalar |

---

## Manutenção

### Verificar status
```bash
export PYTHONUTF8=1 && nlm doctor
```

### Renovar autenticação (a cada 2-4 semanas)
```bash
export PYTHONUTF8=1 && nlm login
# ou, de dentro do Claude Code:
# use a ferramenta mcp__notebooklm-mcp__re_auth
```

> ⚠️ **Atenção:** O `re_auth` pode reportar sucesso mas ainda falhar. Se as ferramentas continuarem com erro, feche o Claude Code e repita o `nlm login` no terminal externo.

### Atualizar o pacote
```bash
python -m uv tool install --force notebooklm-mcp-cli
```

### Ver configurações ativas
```bash
nlm setup list
```

---

## Solução de problemas

| Problema | Causa | Solução |
|---------|-------|---------|
| `UnicodeEncodeError` | Windows cp1252 | Adicionar `export PYTHONUTF8=1` antes de todo comando `nlm` |
| `nlm: command not found` | PATH não configurado | Ver Passo 3 |
| Autenticação expirada | Cookies ~2-4 semanas | Rodar `nlm logout && nlm login && nlm login --check` |
| MCP não aparece no Claude Code | Faltou reiniciar | Fechar e abrir o Claude Code |
| `re_auth` reporta sucesso mas tools falham | False positive — lê cache expirado | Ver referência técnica [[Skills NotebookLM MCP]] |
| Exit code 1 no `nlm doctor` | Sem perfil autenticado | Ignorar se autenticação ok — é bug de display |

---

## Multi-conta (opcional)

Se você tiver mais de uma conta Google:

```bash
nlm login --profile trabalho
nlm login --profile pessoal
nlm login profile list    # Ver perfis
```

---

## Referência

- Repositório: `https://github.com/jacob-bd/notebooklm-mcp-cli`
- Referência técnica interna: [[Skills NotebookLM MCP]]
- Documentação MCP: [[mcp-usage]]
