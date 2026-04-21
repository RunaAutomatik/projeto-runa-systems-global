---
date: 2026-04-21
tags: [runa-intervencao, artefato, estrutura, vault, conhecimento, mind, akasha, s07]
project: runa-systems-global
type: scaffold-guide
sessao: S07 — MIND$ I · Base de Conhecimento
produto: [[runa-intervencao-sessao-07-mind-base-conhecimento]]
---

# Estrutura do Vault de Conhecimento

> **O que é:** Guia completo para criar e configurar o vault de conhecimento personalizado do cliente — o repositório que transforma agentes genéricos em especialistas do negócio.
> **Quando usar:** Block 3 de S07 — criação ao vivo com o cliente.
> **Referência:** Implementação de referência em `C:/runa-systems-global/AKASHA/`

---

## Estrutura de Arquivos

```
[nome-do-negocio]-kb/
│
├── CLAUDE.md                  ← Mapa do vault: roteamento, schema, guardrails
│
├── raw/                       ← Documentos fonte imutáveis
│   ├── 2026-04-21-icp.md     ← Exemplo: diagnóstico do ICP
│   ├── 2026-04-21-proposta-modelo.md
│   └── ...                   ← Nomeação: YYYY-MM-DD-[tema].md
│
└── wiki/
    ├── index.md              ← LEIA PRIMEIRO — catálogo de todas as páginas
    ├── log.md                ← Log de operações (append-only)
    ├── hot.md                ← Buffer de conhecimento ativo recente (≤500 chars)
    │
    ├── entities/             ← Pessoas, empresas, produtos, perfis de clientes
    │   ├── icp.md
    │   └── ...
    │
    ├── concepts/             ← Frameworks, métodos, processos, regras
    │   ├── processo-venda.md
    │   ├── objecoes.md
    │   └── ...
    │
    ├── sources/              ← Resumos de documentos fonte
    │   ├── proposta-modelo.md
    │   └── ...
    │
    └── analyses/             ← Comparações, sínteses, diagnósticos
        ├── padrao-clientes-que-fecham.md
        └── ...
```

---

## CLAUDE.md do Vault — Template Completo

Crie este arquivo primeiro. É o mapa que o squad usa para navegar o vault.

```markdown
# [Nome do Negócio] — Knowledge Base

> Este vault contém o conhecimento de negócio de [Nome]. Sempre consulte antes de responder.

---

## Mapa do Vault

Esta é a base de conhecimento do squad de [Nome do Negócio].

**Regra de uso:**
1. Leia wiki/index.md antes de responder qualquer consulta
2. O conteúdo em raw/ é imutável — nunca edite arquivos em raw/
3. Cite a fonte ao final de toda resposta que usa o vault
4. Se a informação não estiver no vault, diga explicitamente — não invente

---

## Roteamento

| Tipo de consulta | Onde consultar |
|-----------------|---------------|
| Quem é o cliente ideal | wiki/entities/icp.md |
| Como é o processo de venda | wiki/concepts/processo-venda.md |
| Quais são as objeções | wiki/concepts/objecoes.md |
| Como é o onboarding | wiki/concepts/onboarding.md |
| Cases de sucesso | wiki/analyses/ |
| Documentos fonte originais | wiki/sources/ |
| O que foi feito recentemente | wiki/hot.md |

---

## Schema de Ingestão

Todo documento ingerido segue este padrão:

1. Documento original → `raw/YYYY-MM-DD-[tema].md` (imutável)
2. Wiki page → `wiki/[categoria]/[tema].md` (síntese acionável)
3. Entrada no índice → `wiki/index.md` (atualizar sempre)
4. Entrada no log → `wiki/log.md` (append-only)

Categorias disponíveis: `entities/` · `concepts/` · `sources/` · `analyses/`

---

## Guardrails

- **Nunca invente** informação ausente — sinalize a lacuna com: "Esta informação não está no vault"
- **Sempre cite** a fonte ao final da resposta: `Fonte: [[wiki/[categoria]/[tema]]]`
- **Priorize o vault** sobre o treinamento do modelo — o vault é mais específico
- **Sinalize conflitos** — se o vault contradiz algo, indique ambas as versões

---

## Agentes com acesso a este vault

| Agente | Acesso | Quando usa |
|--------|--------|-----------|
| [orquestrador] | Leitura completa | Toda decisão estratégica |
| [especialista-comercial] | entities/, concepts/ | Proposta, objeções, follow-up |
| [especialista-conteudo] | Leitura completa | Copy, posicionamento |
| [especialista-operacoes] | concepts/, analyses/ | Onboarding, processos |
```

---

## wiki/index.md — Template Inicial

```markdown
# Índice do Vault — [Nome do Negócio] KB

> Catálogo de todas as páginas do vault. Leia antes de qualquer consulta.
> Atualizado a cada ingestão. Se uma página não aparece aqui, o vault não a conhece.

---

## entities/

| Página | Descrição | Última atualização |
|--------|-----------|-------------------|
| [[entities/icp]] | Perfil do cliente ideal | YYYY-MM-DD |

## concepts/

| Página | Descrição | Última atualização |
|--------|-----------|-------------------|
| [[concepts/processo-venda]] | Processo de venda passo a passo | YYYY-MM-DD |
| [[concepts/objecoes]] | Objeções frequentes e respostas | YYYY-MM-DD |

## sources/

| Página | Descrição | Última atualização |
|--------|-----------|-------------------|
| *(nenhuma ainda)* | | |

## analyses/

| Página | Descrição | Última atualização |
|--------|-----------|-------------------|
| *(nenhuma ainda)* | | |
```

---

## wiki/log.md — Template Inicial

```markdown
# Log de Operações — [Nome do Negócio] KB

> Registro append-only de todas as operações do vault.
> Nunca edite entradas passadas — apenas adicione novas ao final.

---

## Formato de entrada

| Data | Tipo | Tema | Categoria | Notas |
|------|------|------|-----------|-------|
| YYYY-MM-DD | ingest | [tema] | [categoria] | [observações] |
| YYYY-MM-DD | update | [tema] | [categoria] | [o que mudou] |
| YYYY-MM-DD | query | [pergunta resumida] | — | [resultado: encontrou / não encontrou] |

---

## Entradas

| Data | Tipo | Tema | Categoria | Notas |
|------|------|------|-----------|-------|
| [data S07] | ingest | icp | entities | Primeira ingestão — sessão S07 |
```

---

## wiki/hot.md — Template Inicial

```markdown
# Hot Buffer — [Nome do Negócio] KB

> Conhecimento recente e ativo. Máximo 500 caracteres. Substitui quando supera o limite.

---

[DATA]: [O que está acontecendo agora no negócio que os agentes precisam saber]

Exemplo:
2026-04-21: Lançamento do novo produto X em maio. Toda copy deve mencionar o período de early access. Proposta atual tem desconto de 20% para os primeiros 10 clientes.
```

---

## Passo a Passo de Criação (ao vivo em S07)

Execute nesta ordem com o cliente:

### Passo 1 — Criar a estrutura de pastas

```bash
mkdir -p [nome-do-negocio]-kb/raw
mkdir -p [nome-do-negocio]-kb/wiki/entities
mkdir -p [nome-do-negocio]-kb/wiki/concepts
mkdir -p [nome-do-negocio]-kb/wiki/sources
mkdir -p [nome-do-negocio]-kb/wiki/analyses
```

### Passo 2 — Criar o CLAUDE.md do vault

Abrir o vault no Claude Code:
```bash
cd [nome-do-negocio]-kb && claude
```

Criar `CLAUDE.md` usando o template acima, preenchendo:
- Nome do negócio
- Roteamento específico (quais páginas existem e o que têm)
- Lista de agentes do squad com seus papéis

### Passo 3 — Criar o index.md inicial

Criar `wiki/index.md` com a estrutura básica.
Deixar as tabelas vazias — elas serão preenchidas a cada ingestão.

### Passo 4 — Criar o log.md e hot.md

Criar os dois arquivos com o template acima.
O log começa vazio. O hot começa com o estado atual do negócio (1 frase).

### Passo 5 — Primeira ingestão ao vivo

Fazer a ingestão do ICP (documento mais importante):
1. Colocar o diagnóstico do ICP em `raw/YYYY-MM-DD-icp.md`
2. Criar `wiki/entities/icp.md` usando o template de ingestão
3. Atualizar `wiki/index.md` com a nova entrada
4. Registrar em `wiki/log.md`

---

## Verificação — Vault Operacional

O vault está funcional quando:

- [ ] `CLAUDE.md` existe com roteamento completo
- [ ] `wiki/index.md` existe e lista pelo menos 1 página
- [ ] `wiki/log.md` existe com pelo menos 1 entrada
- [ ] `wiki/hot.md` existe com contexto atual
- [ ] Pelo menos 1 arquivo em `raw/`
- [ ] Pelo menos 1 wiki page criada
- [ ] Agente consultou corretamente em pelo menos 1 teste (Block 5 de S07)

---

## Erros Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| Agente não encontra informação que existe | Página não está em `wiki/index.md` | Atualizar index sempre após ingestão |
| Agente inventa em vez de consultar | `CLAUDE.md` do vault não está no contexto do agente | Adicionar `@include [vault]/CLAUDE.md` ao agente |
| Páginas muito longas e o agente não sintetiza bem | Transcrição em vez de síntese | Reescrever limitando a 500 palavras e priorizando pontos acionáveis |
| Vault não cresce | Cliente ingere mentalmente mas não documenta | Criar rotina: 1 página nova por semana mínimo |

---

*Sessão de origem: [[runa-intervencao-sessao-07-mind-base-conhecimento|S07 — MIND$ I · Base de Conhecimento]]*
*Relacionado: [[framework-extracao-conhecimento|Framework de Extração]] · [[template-ingestao-wiki|Template de Ingestão]]*
