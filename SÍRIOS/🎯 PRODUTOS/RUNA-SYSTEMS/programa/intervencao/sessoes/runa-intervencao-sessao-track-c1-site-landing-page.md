---
date: 2026-04-21
tags: [runa-systems, runa-intervencao, track-c, site, landing-page, copy, deploy, sessao]
project: runa-systems-global
type: session-template
fase: "5 — ESPECIALIZAÇÃO"
track: "C — Agência / Operações"
codigo: C1
titulo: "SITE$ — Landing Page Neural"
subtitulo: "Copy + build + deploy: da estrutura ao ar em uma sessão"
duracao: "90–120 min"
anterior: fase-4-minds
proximo: track-c2-automacoes-n8n-basico
produto: [[runa-mentoria-prd]]
aliases: [sessao-c1, track-c1, site-landing-page]
---

# Track C1 — SITE$: Landing Page Neural

> **Fase 5 — Especialização · Track C · Sessão 1 de 4**
> **Pré-requisito:** S01 concluída — ICP mapeado. Idealmente B3 concluída — posicionamento definido.
> **Resultado desta sessão:** Landing page no ar com copy neural gerado pelos agentes do vault.

---

## Objetivo da Sessão

A maioria das agências e operadores digitais tem uma presença online que não converte.
O problema não é design — é estrutura. Uma página sem arquitetura de conversão é um folheto digital.

Nesta sessão o operador constrói uma landing page com:
- **Copy gerado pelos agentes do vault** — não genérico, não de template
- **Estrutura de conversão comprovada** — 7 seções em ordem correta
- **Deploy em menos de 24h** — sem depender de desenvolvedor

**Ao final desta sessão, o operador terá:**
- ✅ Agente de copy neural configurado e ativo
- ✅ Landing page com copy gerado, revisado e aprovado
- ✅ Página publicada (Netlify, Vercel ou equivalente)
- ✅ CTA conectado ao próximo passo do funil (diagnóstico / WhatsApp / calendário)

---

## Arcos da Sessão

```
Block 1 (10 min)  — Por que páginas não convertem (o erro de estrutura)
Block 2 (20 min)  — A arquitetura de 7 seções: o mapa antes do texto
Block 3 (30 min)  — Agente de copy neural: gerando o texto a partir do vault
Block 4 (25 min)  — Build e deploy: da copy ao ar
Block 5 (5 min)   — CTA + integração + desafio C1
```

---

## Block 1 — Por que Páginas Não Convertem

**Duração:** 10 min | **Formato:** Diagnóstico rápido + framing

### O teste dos 5 segundos

Quando alguém cai na sua landing page e tem 5 segundos para decidir se fica ou sai,
ela responde (consciente ou não) a 3 perguntas:

```
1. "Isso é para mim?" — ICP reconhece o problema
2. "Isso é diferente do que já tentei?" — mecanismo é claro
3. "Parece que funciona?" — evidência está visível
```

Se a página falha em qualquer uma das 3 — o visitante sai.

### Os erros mais comuns

| Erro | Por que acontece | Consequência |
|------|----------------|-------------|
| Fala sobre o negócio, não sobre o problema do cliente | "Somos a empresa X com Y anos..." | Visitante não se reconhece |
| Promessa genérica | "Resultados incríveis para o seu negócio" | Não cria crença |
| Prova ausente ou vaga | "Clientes satisfeitos em todo o Brasil" | Não gera confiança |
| CTA prematuro | Botão de compra antes da explicação | Não há motivo para clicar |
| Design antes de estrutura | Página bonita sem sequência lógica | Atenção sem conversão |

### O princípio da landing page neural

> A landing page não vende o serviço. Ela vende o **próximo passo**.

O próximo passo pode ser: agendar um diagnóstico, enviar uma mensagem no WhatsApp,
baixar um material gratuito, ou comprar diretamente.
A página tem um único CTA — qualquer página com mais de um objetivo não tem objetivo.

---

## Block 2 — A Arquitetura de 7 Seções

**Duração:** 20 min | **Formato:** Mapeamento ao vivo

### As 7 seções em sequência obrigatória

```
SEÇÃO 1 — HEADLINE + SUBHEADLINE
  ↓ Responde: "Isso é para mim?" em menos de 5 segundos
  Fórmula: [ICP] + [Problema central] → [Resultado]

SEÇÃO 2 — O PROBLEMA (em detalhe)
  ↓ Aprofunda o que a headline tocou
  Faz o visitante pensar: "Como eles sabem exatamente o que estou vivendo?"

SEÇÃO 3 — A CAUSA (por que as soluções anteriores falharam)
  ↓ Explica por que o problema persiste — e elimina objeções de "já tentei"
  Cria espaço para apresentar um mecanismo diferente

SEÇÃO 4 — O MECANISMO (a solução diferente)
  ↓ Apresenta o método ou abordagem com nome próprio
  Não revela tudo — apenas o suficiente para criar desejo de saber mais

SEÇÃO 5 — A PROVA (cases e depoimentos)
  ↓ Responde: "Parece que funciona para pessoas como eu?"
  Pelo menos 1 case com número + 1 depoimento específico

SEÇÃO 6 — A OFERTA (o que inclui e o próximo passo)
  ↓ Descreve o que acontece quando a pessoa clica no CTA
  Não necessariamente preço — pode ser "veja como funciona"

SEÇÃO 7 — O CTA FINAL
  ↓ Um único botão. Uma única ação. Uma única frase de suporte.
  "Clique aqui" não é CTA. "[RESULTADO] em [PRAZO] — comece agora" é CTA.
```

### Exercício de mapeamento (10 min)

O facilitador abre um documento em branco e preenche ao vivo com o operador:

```markdown
## Mapa da Landing Page — [NOME DO NEGÓCIO]

**SEÇÃO 1 — HEADLINE**
Versão A: [...]
Versão B: [...]

**SEÇÃO 2 — O PROBLEMA**
Problema principal: [...]
Como ele se manifesta na prática: [...]

**SEÇÃO 3 — A CAUSA**
Por que soluções convencionais falharam: [...]

**SEÇÃO 4 — O MECANISMO**
Nome do método/abordagem: [...]
O que o diferencia: [...]

**SEÇÃO 5 — A PROVA**
Case a usar: [Case X — resultado Y em Z dias]
Depoimento a usar: [...]

**SEÇÃO 6 — A OFERTA**
O que acontece quando clicam: [...]
Próximo passo: [...]

**SEÇÃO 7 — CTA**
Texto do botão: [...]
Frase de suporte (abaixo do botão): [...]
```

---

## Block 3 — Agente de Copy Neural

**Duração:** 30 min | **Formato:** Configuração + geração ao vivo

### O agente de copy: o que ele faz

O agente de copy lê os arquivos do vault (ICP, método, casos, FAQ) e gera o texto
de cada seção da landing page. Não usa templates genéricos — usa o vocabulário e
os problemas reais do ICP documentados em S01.

```yaml
name: agente-copy
version: "1.0"

persona: |
  Você é o agente de copy de [NOME DO NEGÓCIO].
  Sua função é gerar copy de landing page, e-mail e DM a partir dos arquivos do vault.
  Você nunca usa linguagem genérica. Você usa as palavras exatas que o ICP usa
  para descrever seus problemas — documentadas em wiki/concepts/icp.md.
  Você nunca promete o que o método não entrega — documentado em wiki/concepts/metodo.md.
  Todo copy gerado é brutalmente específico: ICP nomeado, problema nomeado, resultado nomeado.

vault_dependencies:
  icp: "[VAULT]/wiki/concepts/icp.md"
  metodo: "[VAULT]/wiki/concepts/metodo.md"
  casos: "[VAULT]/wiki/concepts/casos.md"
  faq: "[VAULT]/wiki/concepts/faq.md"
  manifesto: "[VAULT]/wiki/concepts/manifesto.md"

commands:
  - "*headline [objetivo]" → gera 5 variações de headline para a seção 1
  - "*secao [número] [contexto]" → gera copy para a seção especificada
  - "*pagina-completa" → gera copy das 7 seções em sequência
  - "*cta [próximo passo]" → gera 3 variações de CTA com texto do botão
  - "*email [tipo]" → gera e-mail de follow-up (boas-vindas / nutrição / proposta)
  - "*dm [canal]" → gera mensagem de DM para WhatsApp ou Instagram

scope:
  can:
    - Gerar copy para qualquer seção da landing page
    - Adaptar o tom para diferentes canais (formal / direto / conversacional)
    - Gerar variações A/B de headline e CTA
    - Manter consistência com o vocabulário do ICP documentado no vault
  cannot:
    - Inventar resultados ou casos não documentados
    - Prometer resultado que o método não entrega
    - Usar linguagem de hype sem evidência correspondente
    - Publicar copy sem aprovação do operador
```

### Geração ao vivo: as 7 seções

O facilitador demonstra ao vivo com o vault do operador.

**Sequência de geração:**

```
Passo 1 — *headline "landing page principal"
→ Agente gera 5 variações. Operador escolhe 2 para testar (A/B).

Passo 2 — *secao 2 "aprofundar o problema do ICP"
→ Agente escreve o parágrafo de problema usando linguagem do ICP.

Passo 3 — *secao 3 "por que as soluções convencionais falharam"
→ Agente usa o campo "tentativas anteriores" do ICP para essa seção.

Passo 4 — *secao 4 "apresentar o mecanismo"
→ Agente usa wiki/concepts/metodo.md para nomear e descrever o método.

Passo 5 — *secao 5 "prova social"
→ Agente seleciona o case mais forte de casos.md + depoimento de depoimentos.md.

Passo 6 — *secao 6 "a oferta e o próximo passo"
→ Agente descreve o que acontece depois do clique no CTA.

Passo 7 — *cta "agendar diagnóstico"
→ Agente gera 3 variações de CTA. Operador escolhe.
```

### Critérios de aprovação do copy gerado

| Seção | Critério de aprovação |
|-------|----------------------|
| Headline | ICP específico + problema central + resultado em menos de 12 palavras |
| Problema | O ICP real lendo pensa: "como eles sabem exatamente isso?" |
| Causa | Não ataca concorrente nomeado — ataca a lógica equivocada |
| Mecanismo | Tem nome próprio — não é "consultoria personalizada" |
| Prova | Pelo menos 1 número + 1 prazo + 1 nome (pode ser pseudônimo) |
| Oferta | O próximo passo está claro em 1 frase |
| CTA | Um único botão com ação específica |

---

## Block 4 — Build e Deploy

**Duração:** 25 min | **Formato:** Demonstração + execução ao vivo

### Stack de build recomendada

| Opção | Quando usar | Tempo de deploy |
|-------|------------|----------------|
| **Netlify Drop** | Arquivo HTML único — mais rápido | < 5 min |
| **Vercel** | Projeto com múltiplas páginas ou Next.js | 10–15 min |
| **Carrd** | Sem habilidade técnica, UI visual | 15–20 min |
| **Webflow** | Design mais elaborado, mas sem código | 30–60 min |

**Recomendação para C1:** Netlify Drop com HTML gerado pelo agente de copy.
Uma landing page de conversão não precisa de framework — precisa de estrutura correta.

### O agente de build: geração do HTML

O agente de copy tem um comando para gerar HTML diretamente:

```
*pagina-completa --format=html
```

Output: arquivo `index.html` com as 7 seções, CSS inline básico e CTA funcional.
O operador faz o download e arrasta para netlify.com/drop.

### Estrutura do HTML gerado

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[HEADLINE PRINCIPAL]</title>
  <!-- CSS básico de conversão — sem framework externo -->
</head>
<body>
  <!-- S1: Hero com headline + subheadline + CTA primário -->
  <!-- S2: Seção de problema (texto) -->
  <!-- S3: Por que os métodos convencionais falham -->
  <!-- S4: O mecanismo diferente -->
  <!-- S5: Case + depoimento -->
  <!-- S6: O que inclui + próximo passo -->
  <!-- S7: CTA final com botão + frase de suporte -->
  <!-- Footer: contato básico -->
</body>
</html>
```

### Processo de deploy (Netlify Drop — demonstração ao vivo)

```
1. Abrir netlify.com/drop no navegador
2. Arrastar o arquivo index.html para a área de drop
3. Netlify gera URL automática: [aleatorio].netlify.app
4. Configurar domínio personalizado (opcional nesta sessão)
5. Testar: CTA funciona? Link do WhatsApp / Calendly / formulário abre?
6. Copiar URL — landing page no ar
```

### Conectando o CTA ao funil

O CTA pode conectar a 3 destinos, dependendo do modelo do negócio:

| Modelo | CTA destino | Implementação |
|--------|------------|--------------|
| Diagnóstico por agente | Link para WhatsApp com mensagem pré-formatada | `wa.me/55XXXXXXXXXX?text=Quero%20o%20diagn%C3%B3stico` |
| Agendamento | Link para Calendly ou Cal.com | URL do calendário |
| Formulário de qualificação | Google Form com as 5 perguntas do agente-qualificacao | Link do Forms |

---

## Block 5 — CTA + Integração + Desafio C1

**Duração:** 5 min | **Formato:** Checklist + próxima sessão

### Integração com o funil completo

```
Landing page → CTA → WhatsApp / Calendly / Forms
     ↓
agente-atendimento (B1) — primeiro nível de qualificação
     ↓
agente-qualificacao (B2) — diagnóstico QUENTE/MORNO/FRIO
     ↓
agente-prova-social (B4) — case + depoimento para QUENTE
     ↓
Call com o operador / consultor
```

### Desafio C1

**Prazo:** 48h após a sessão

**5 critérios de conclusão:**

```
[ ] agente-copy configurado e ativo com vault preenchido
[ ] Copy das 7 seções gerado e aprovado pelo operador
[ ] Arquivo HTML gerado pelo agente
[ ] Landing page no ar com URL pública
[ ] CTA funcionando e conectado ao próximo passo (WhatsApp / Calendly / Forms)
```

---

## Artefatos da Sessão

| Tipo | Documento | Status |
|------|-----------|--------|
| Template agente | [[template-agente-copy]] | 🔲 A criar |
| Template mapa | [[template-mapa-landing-page]] | 🔲 A criar |

---

## Notas para o Facilitador

### Quando o operador não tem posicionamento definido (sem B3)

C1 pode ser feito sem B3, mas a qualidade do copy será inferior.
Se o operador não tem posicionamento definido:
1. Fazer o exercício de headline em Block 2 serve como mini-B3
2. Focar na especificidade do ICP documentado em S01
3. Recomendar fazer B3 após C1 para refinar o copy da página

### Quando o operador tem uma página existente

Se já existe uma landing page:
1. Aplicar o teste dos 5 segundos na página atual
2. Identificar quais das 7 seções estão faltando ou fracas
3. Usar o agente de copy para regenerar apenas as seções problemáticas
4. Não reescrever tudo se partes estão funcionando

### A prioridade é a página no ar

C1 não é uma sessão de perfeição — é uma sessão de velocidade.
Uma página simples e no ar converte mais do que uma página perfeita que nunca foi publicada.
O facilitador garante que ao final da sessão haja uma URL funcionando.
O refinamento acontece com dados reais de tráfego — não na teórica.

---

## Conexões

- **Track C:** C1 (site) → [[track-c2-automacoes-n8n-basico|C2 (automações)]] → [[track-c3-automacoes-crm-followup|C3 (CRM)]] → [[track-c4-orcamento-proposta-neural|C4 (orçamento)]]
- **Integração com Track B:** CTA da landing page alimenta `agente-atendimento` (B1)
- **Squad após C1:** `agente-copy` ativo + landing page conectada ao funil do squad
- **Produto ensinado:** [[SITE$|SITE$]] — a sessão é o próprio produto sendo construído ao vivo
