---
date: 2026-04-28
tags: [skool, mind, github, versionamento, memoria, s08]
project: runa-systems-global
type: course-support
modulo: "03 — GitHub como Memória (S08)"
---

# GitHub como Memória de Longo Prazo

> MIND$ · Sessão S08

O vault guarda o que você sabe. O AKASHA guarda o que você aprendeu. O GitHub guarda o que você **decidiu** — e por quê. É a memória imutável e auditável do seu ecossistema.

---

## Por Que o GitHub para um Criador/Empreendedor

Não é só para developers. O GitHub como memória de negócio significa:

| O que você versiona | O que isso resolve |
|--------------------|-------------------|
| System prompts dos agentes | Você sabe qual versão funcionou antes |
| CLAUDE.md do squad | Histórico de como o squad evoluiu |
| Skills e workers | Rollback quando uma automação quebra |
| Configs de ferramentas | Portabilidade — recria o ambiente em qualquer máquina |
| Decisões importantes | Commits com contexto = diário de decisões |

---

## Configuração Inicial

**Passo 1 — Crie um repositório privado:**
```
Nome sugerido: {seu-negocio}-systems
Visibilidade: Private
```

**Passo 2 — O que vai no repositório:**
```
{repositorio}/
├── .claude/          ← CLAUDE.md + skills + hooks + settings
├── agents/           ← system prompts de cada agente
├── workers/          ← scripts de automação
├── templates/        ← templates de docs e entregas
└── docs/             ← decisões, specs, roadmaps
```

**Passo 3 — Convenção de commits:**
```
feat: add [agente] com escopo [X]
update: [agente] calibração após [sessão]
fix: worker [nome] — correção [problema]
docs: decision [tema] — [resumo da decisão]
```

---

## Commits como Diário de Decisões

Cada commit importante deve ter uma mensagem que explica o **porquê**, não só o **o quê**.

**Ruim:** `update agent`
**Bom:** `update: agente de oferta — adicionado contexto de precificação high-ticket após calibração S05`

Daqui 6 meses, você vai saber exatamente o que mudou e por quê.

---

## Sincronizando com o Squad

Configure o Claude Code para trabalhar dentro do seu repositório. Assim, qualquer alteração nos agentes pode ser versionada com um comando:

```bash
git add .claude/
git commit -m "update: [agente] — [o que mudou]"
```

O histórico de commits vira a memória de como o seu squad evoluiu.

---

*Próxima aula: S08 — Memória e Evolução*
*Documento: [04-memoria-evolucao.md](04-memoria-evolucao.md)*
