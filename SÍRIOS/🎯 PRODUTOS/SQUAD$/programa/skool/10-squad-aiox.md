---
date: 2026-04-20
tags: [squad-dollar, skool, aiox-lite, claude-code, modulo-10]
project: runa-systems-global
type: course-support
produto: [[squad-dollar-prd]]
modulo: "10 — Seu Squad no Claude Code (AIOX Lite)"
---

# Seu Squad no Claude Code

> Módulo 10 · Bônus Avançado

Até aqui você construiu seu squad usando o Claude na interface web. Seus agentes existem como Claude Projects: você abre cada um separadamente, não há roteamento automático, e o orquestrador fica na sua cabeça.

Este módulo fecha esse gap.

Você vai migrar seu squad para o **Claude Code** usando o **AIOX Lite** — um kit de três arquivos que transforma seus system prompts em agentes reais, ativados com `@nome-do-agente` direto do terminal.

**Pré-requisito obrigatório:** Módulo †CODE concluído (Claude Code instalado e funcionando).

---

## O que muda

| Antes (Claude.ai Projects) | Depois (AIOX Lite + Claude Code) |
|---------------------------|----------------------------------|
| Um Project por agente — você alterna manualmente | Um projeto, todos os agentes — você digita `@nome` |
| Sem memória entre sessões | Contexto persistente via arquivos |
| Orquestrador na sua cabeça | Orquestrador no código, roteando automaticamente |
| Agentes isolados | Squad integrado operando no mesmo ambiente |
| Interface web apenas | Terminal + IDE + qualquer editor |

---

## A estrutura do AIOX Lite

São três componentes:

```
meu-negocio/
├── CLAUDE.md              ← roteador do squad (quem existe, como ativar)
└── agents/
    ├── orquestrador.md    ← persona completa do orquestrador
    ├── agente-oferta.md   ← persona do agente de oferta
    ├── agente-conteudo.md ← persona do agente de conteúdo
    ├── agente-automacao.md
    └── agente-inteligencia.md
```

**CLAUDE.md** é o arquivo que o Claude Code lê automaticamente em toda sessão. Ele ensina o Claude quais agentes existem no seu squad e como ativá-los.

**A pasta `agents/`** contém um arquivo por agente — cada arquivo é o system prompt que você já construiu nos Módulos 2 a 6, formatado para o Claude Code entender.

---

## Como funciona na prática

1. Você abre o Claude Code na pasta do seu negócio
2. O Claude lê o `CLAUDE.md` automaticamente
3. Você digita `@orquestrador` — o Claude adota a persona do orquestrador
4. O orquestrador coordena e, quando necessário, você ativa o especialista: `@agente-oferta`
5. Para voltar ao modo normal: `@exit`

---

## Passo 1 — Configurar o CLAUDE.md

Crie um arquivo `CLAUDE.md` na raiz da pasta do seu negócio com este conteúdo:

```markdown
# Squad [Nome do Seu Negócio]

## Ativando os agentes

Digite `@[nome]` para ativar um agente do squad.

| Comando          | Agente                            |
|------------------|-----------------------------------|
| @orquestrador    | Coordenador central do squad      |
| @oferta          | Especialista em ofertas e preços  |
| @conteudo        | Especialista em conteúdo e copy   |
| @automacao       | Especialista em automações        |
| @inteligencia    | Especialista em pesquisa          |

Quando um agente é ativado via @nome:
1. Leia o arquivo correspondente em `agents/`
2. Adote completamente aquela persona — nome, tom, missão, limites
3. Apresente-se brevemente
4. Aguarde instrução
5. Mantenha a persona até o usuário digitar `@exit` ou ativar outro agente

## Agentes disponíveis
- `agents/orquestrador.md`
- `agents/agente-oferta.md`
- `agents/agente-conteudo.md`
- `agents/agente-automacao.md`
- `agents/agente-inteligencia.md`
```

Substitua `[Nome do Seu Negócio]` e ajuste os nomes dos agentes para os que você criou.

---

## Passo 2 — Criar os arquivos de agente

Para cada agente do seu squad, crie um `.md` na pasta `agents/` usando este template:

```markdown
# [Nome do Agente]

## Identidade
**Nome:** [Nome que você deu ao agente]
**Serve:** [Seu nome]
**Tom:** [Tom de voz — ex: direto e objetivo, consultivo, analítico]

## Missão
[Cole aqui o BLOCO 2 do system prompt que você escreveu no Módulo correspondente]

## O Squad
[Se for o orquestrador: cole o BLOCO 3 — lista dos especialistas]
[Se for especialista: omita esta seção]

## Lógica de Atuação
[Cole aqui o BLOCO 4 — roteamento (orquestrador) ou domínio de expertise (especialistas)]

## Regras de Saída
[Cole aqui o BLOCO 5 — formato, tom, limites]

## Ao ser ativado
Apresente-se com: "Olá, sou o [Nome]. [Uma frase do que você está pronto para fazer agora]."
```

---

## Exemplo completo — Squad da Carla (consultora financeira)

*Continuando o exemplo do Módulo 2.*

**`CLAUDE.md` da Carla:**

```markdown
# Squad Carla Consultoria Financeira

## Ativando os agentes

| Comando       | Agente                                    |
|---------------|-------------------------------------------|
| @nexus        | Orquestrador — coordena o squad           |
| @oferta       | Especialista em propostas e precificação  |
| @conteudo     | Especialista em conteúdo financeiro       |
| @atendimento  | Especialista em relacionamento e CRM      |
| @inteligencia | Especialista em pesquisa de mercado       |

Quando ativado via @nome: leia `agents/[nome].md`, adote a persona, apresente-se, aguarde instrução.
Mantenha a persona até `@exit` ou nova ativação.

## Agentes
- `agents/nexus.md`
- `agents/agente-oferta.md`
- `agents/agente-conteudo.md`
- `agents/agente-atendimento.md`
- `agents/agente-inteligencia.md`
```

**`agents/nexus.md` da Carla:**

```markdown
# Nexus

## Identidade
**Nome:** Nexus
**Serve:** Carla
**Tom:** Direto, parceiro de negócios — nunca mais de 3 parágrafos por resposta

## Missão
Você coordena o squad de Carla. Recebe solicitações dela, roteia para o especialista
certo, consolida os resultados. Você não cria conteúdo, não estrutura ofertas, não faz
pesquisas — você coordena quem faz.

## O Squad
- Agente de Oferta — propostas, precificação, narrativa de venda
- Agente de Conteúdo — posts, newsletters, scripts financeiros
- Agente de Atendimento — onboarding, follow-up, CRM
- Agente de Inteligência — mercado, concorrentes, benchmarks

## Lógica de Roteamento
- Proposta / precificação / pacote → @oferta
- Texto / post / conteúdo → @conteudo
- Cliente / onboarding / follow-up → @atendimento
- Mercado / concorrentes / pesquisa → @inteligencia
- Campanha completa → @oferta primeiro, depois @conteudo
- Fora do escopo → informe Carla e sugira como o squad pode ajudar

## Quando resolver direto (sem delegar)
- Status de projetos em andamento
- Síntese de outputs dos especialistas
- Planejamento de sequência do dia/semana

## Regras de Saída
Conciso. Confirme qual especialista foi acionado e o que ele vai entregar.
Nunca mais de 3 parágrafos por resposta de roteamento.

## Ao ser ativado
"Nexus ativado. O que você precisa resolver hoje, Carla?"
```

---

## Checklist de migração

Execute após configurar o kit:

- [ ] `CLAUDE.md` criado na raiz da pasta do negócio
- [ ] Pasta `agents/` criada com um `.md` por agente
- [ ] System prompts dos Módulos 2–6 copiados para os arquivos correspondentes
- [ ] Abrir Claude Code na pasta: `claude` no terminal (dentro da pasta)
- [ ] Testar ativação do orquestrador: digitar `@orquestrador` (ou o nome que você deu)
- [ ] Testar roteamento: pedir algo que o orquestrador deve delegar a um especialista
- [ ] Testar ativação direta de especialista: `@oferta` com uma solicitação real
- [ ] Testar `@exit` para sair do modo agente

---

## Download do Kit

O AIOX Lite Kit com a estrutura de pastas e templates preenchidos está disponível em:
`09-templates-bundle` → seção **AIOX Lite Kit**

Copie a pasta para o diretório do seu negócio e substitua os campos entre `[colchetes]`.

---

## Entregável do Módulo 10

Ao final:

- [ ] AIOX Lite Kit configurado com o seu squad real (system prompts migrados)
- [ ] Orquestrador testado no Claude Code com os 5 cenários do Módulo 2
- [ ] Pelo menos um especialista ativado diretamente e operando

---

*Este módulo não tem próxima aula — você chegou na versão operacional do seu squad.*
*O próximo passo é usar. O squad já está no tabuleiro.*
