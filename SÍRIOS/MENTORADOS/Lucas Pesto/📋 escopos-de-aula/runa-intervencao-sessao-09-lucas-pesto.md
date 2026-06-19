---
date: 2026-05-12
tags: [runa-intervencao, mentoria, sessao-09, lucas, pesto, higgsfield, soul-characters, designer-v3]
project: runa-systems-global
type: session-scope
cliente: Lucas — Pesto (agência criativa)
status: entregavel-pronto
---

# Runa Intervenção — Sessão 09: Upgrade de Infraestrutura — Designer V3 + Higgsfield

> **Data prevista:** Terça ou Quarta, semana de 12–13/05/2026
> **Objetivo:** Instalar o Designer V3 (entregável pronto em 2026-05-06) + criar o primeiro Soul Character da Pesto ao vivo

> ✅ **Entregável Designer V3 gerado em 2026-05-06** — `artefatos/designer-agent-v2-system-prompt.md`
> V3 resolve as 17 inconsistências auditadas: YAML persona, activation HALT, 7 workflows, dependencies, review gate, *criar-soul, handoff → Cleiton (não humano), command visibility tags.

---

## Leitura antes da sessão (Arthur, leia antes de entrar na call)

Esta sessão é um upgrade de infraestrutura. O que era S09 (escalar para segundo cliente) avança para S10.

**O que muda com esta sessão:**
- O Designer V3 substitui o V2.1: persona estruturada, 7 workflows definidos, review gate, *criar-soul, handoff correto para Cleiton
- Higgsfield se torna a ferramenta padrão de geração: CLI `--wait` como Tier 0, inference.sh como último fallback
- Higgsfield Soul Characters desbloqueia ensaios fotográficos sintéticos de qualquer cliente
- A qualidade das imagens sobe consideravelmente

**Foco do facilitador:**
Não é "aprender tecnologia" — é "o que isso desbloqueia para o negócio do Lucas". A cada passo, trazer para o concreto: quanto custaria contratar isso no mercado? Quanto tempo economiza por cliente?

**O Cleiton não muda.** Esta sessão é exclusivamente sobre o Designer (Claude Code).

**Risco principal:**
O Higgsfield MCP requer conexão com o Claude.ai do Lucas. Se ele não fez o setup antes da sessão, o Bloco 1 resolve ao vivo. Plano B previsto.

---

## Pré-checklist (verificar no início da call)

- [ ] Lucas tem conta no Higgsfield AI (higgsfield.ai)?
- [ ] O MCP Connector já está configurado no Claude.ai dele?
  - `Claude.ai → Settings → Connectors → Higgsfield`
  - URL: `https://mcp.higgsfield.ai/mcp`
- [ ] Claude Code aberto com o Designer V1 ativo?
- [ ] Tem 3–5 fotos de algum cliente da Pesto para criar o primeiro Soul?

---

## BLOCO 1 — Setup do MCP Connector (15 min)

### Objetivo
Conectar o Higgsfield MCP ao Claude.ai do Lucas. Sem isso, nada funciona.

### Passo a passo

1. Acessar: `claude.ai → Settings → Connectors`
2. Clicar em **Add custom connector**
3. Preencher:
   - **Name:** Higgsfield
   - **URL:** `https://mcp.higgsfield.ai/mcp`
4. Clicar em **Connect** → autenticar com a conta Higgsfield do Lucas
5. Verificar que as ferramentas aparecem como disponíveis no Claude Code:
   - Deve aparecer: `mcp__claude_ai_MCP_Higgsfield__generate_image`, `generate_video`, `soul_train`, etc.

### Verificação rápida

No Claude Code, digitar:
```
/higgsfield-generate image "foto de teste"
```

Se o job retornar `job_id` → MCP conectado com sucesso.

---

## BLOCO 2 — Instalar Skills + Atualizar System Prompt (15 min)

### Skills para instalar

Lucas copia as pastas para `~/.claude/skills/`:

```
pesto/artefatos/skills/higgsfield-generate/  → ~/.claude/skills/higgsfield-generate/
pesto/artefatos/skills/ensaio-fotografico/   → ~/.claude/skills/ensaio-fotografico/
```

Verificar que aparecem disponíveis no Claude Code:
- `/higgsfield-generate`
- `/ensaio-fotografico`

### Instalar o Designer V3

1. Abrir o projeto do Designer no Claude Code
2. Substituir o System Prompt atual pelo conteúdo de:
   `pesto/artefatos/designer-agent-v2-system-prompt.md` (arquivo contém V3 a partir de 2026-05-06)
3. Confirmar que o V3 está ativo — greeting deve mostrar: "🎨 Designer — Pesto. Contexto carregado."

**O que muda visivelmente no V3:**
- Greeting estruturado com comandos disponíveis
- Ao ativar, o Designer pergunta semana de produção e clientes ativos — não começa a executar sem contexto
- *criar-soul agora existe como comando
- Ao finalizar um brief, passa automaticamente por review gate antes de enviar para o Cleiton
- inference.sh cai para Tier 2 (último fallback)

---

## BLOCO 3 — Primeiro Teste: Gerar Imagem ao Vivo (20 min)

### Objetivo
Gerar uma imagem para a Pesto usando o novo fluxo — ver o resultado ao vivo.

### Sugestão de primeiro teste

```
/higgsfield-generate image "modern creative agency workspace, dark aesthetic, 
architectural lighting, minimalist design studio"
```

### Verificar:
- O job_id foi retornado?
- O polling está funcionando (job_status)?
- A imagem final chegou (job_display)?
- Qualidade vs. nano-banana: o Lucas consegue ver a diferença?

**Comparação ao vivo:** Gerar a mesma imagem com nano-banana para comparar. O diferencial do Higgsfield é a estética cinemática.

### Se a imagem falhar:
- Verificar créditos Higgsfield: `balance`
- Tentar prompt mais simples
- Fallback para nano-banana e registrar o problema para resolver antes da S10

---

## BLOCO 4 — Primeiro Soul Character da Pesto (25 min)

### Objetivo
Criar o primeiro Soul de um cliente da Pesto. Lucas sai com um ensaio fotográfico sintético em mãos.

### Passo a passo

1. Lucas escolhe um cliente da Pesto que tenha fotos disponíveis
2. Executar:
   ```
   /ensaio-fotografico [nome-do-cliente]
   ```
3. A skill guia o processo:
   - Solicita as fotos
   - Executa `soul_train_wizard`
   - Aguarda o treino (~5 min)
   - Registra o `soul_id` em `brand-kit/[cliente]/soul.json`
4. Gerar 3 variações de cena com o Soul:
   - Estúdio clean
   - Outdoor urbano
   - Lifestyle warm
5. Ver os resultados → Lucas seleciona os aprovados

### Fala de venda do momento

> "Lucas, você acabou de criar um personagem digital desse cliente. Da próxima vez que precisar de uma foto para o Instagram dele, você não precisa agendar sessão, contratar fotógrafo, ou pedir para ele tirar foto. Você só chama `/ensaio-fotografico [nome]` e escolhe o ambiente. Isso custa R$2k–5k no mercado por sessão. Aqui é grátis a partir de agora."

---

## BLOCO 5 — Fechar + O Que Desbloqueou (10 min)

### Reflexão com Lucas

Perguntas para fazer:

1. **Imagens:** "Você vê diferença de qualidade entre o Higgsfield e o que você estava usando antes?"
2. **Souls:** "Pensa nos seus clientes agora. Quantos deles você poderia criar um personagem hoje?"
3. **Proposta de valor:** "Como você apresentaria isso para um cliente que paga o serviço de conteúdo da Pesto?"

### O que documentar

- Soul IDs criados (nome → soul_id)
- Qualidade percebida das imagens Higgsfield
- Fricções encontradas (setup MCP, tempo de polling, etc.)
- Tempo total do fluxo completo (benchmark)

---

## Plano B — Se o MCP Higgsfield não conectar

Se o Higgsfield MCP não conectar no ambiente do Lucas durante o Bloco 1:

1. **Registrar o problema:** qual o erro? Tela de Connectors mostra algo?
2. **Não travar a sessão:** seguir para Bloco 2 (instalar skills + atualizar system prompt)
3. **Demonstrar com o Arthur:** fazer a demo de Soul Characters na máquina do Arthur ao vivo
4. **Agendar mini-sessão técnica** de 30 min antes da S10 exclusivamente para resolver o MCP
5. **Lucas sai da sessão** com o system prompt V2 instalado e as skills prontas — só esperando o MCP

---

## Próximas sessões (preview para Lucas)

| Sessão | Tema |
|--------|------|
| S10 (semana de 19/05) | Escalar: segundo cliente + brand kit no sistema + Cleiton com múltiplas marcas |
| S11 (semana de 26/05) | Automatizar: grade → briefing → imagens → carrossel em fluxo único |

---

## Conexões

- **Sessão anterior:** [[runa-intervencao-sessao-08-lucas-pesto]]
- **Artefatos desta sessão:**
  - [[../artefatos/designer-agent-v2-system-prompt]]
  - [[../artefatos/skills/higgsfield-generate/SKILL]]
  - [[../artefatos/skills/ensaio-fotografico/SKILL]]
