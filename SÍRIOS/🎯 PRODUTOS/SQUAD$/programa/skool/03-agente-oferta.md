---
date: 2026-04-04
tags: [squad-dollar, skool, oferta, ares, knowledge-base, modulo-3]
project: runa-systems-global
type: course-support
produto: [[squad-dollar-prd]]
modulo: "3.1 e 3.3 — Base de Conhecimento + Geração de Oferta Ao Vivo"
---

# O Agente de Oferta

> Módulo 3 · Aulas 3.1 e 3.3

O agente de oferta é o seu especialista em transformar ideias vagas em produtos estruturados com preço, posicionamento, e narrativa de venda. Sem ele, você passa horas estruturando uma oferta que poderia levar minutos.

---

## O que o agente de oferta sabe que você provavelmente não tem formalizado

O problema não é que você não conhece seu produto. É que esse conhecimento está espalhado — na sua cabeça, em conversas com clientes, em posts antigos, em propostas. O agente de oferta consolida isso em uma base de conhecimento acessível e aplica lógica de precificação e posicionamento em cima.

Dois tipos de conhecimento alimentam esse agente:
1. **Conhecimento sobre o seu negócio** — seus produtos, ICPs, histórico de objeções, resultados de clientes
2. **Frameworks de oferta** — lógica de precificação, estrutura de ancoragem de valor, criação de urgência

---

## Worksheet — Base de Conhecimento para o Agente de Oferta

Preencha cada seção. Esse material vai virar o "conhecimento base" do agente.

### Seus produtos atuais

| Produto/Serviço | Preço | Entrega | Para quem | Resultado prometido |
|-----------------|-------|---------|-----------|---------------------|
| | | | | |
| | | | | |
| | | | | |

### Seu cliente ideal (ICP)

**Quem é ele (cargo, contexto, situação):**
_________________________________
_________________________________

**Dor principal (o que ele mais reclama / o que o mantém acordado):**
_________________________________
_________________________________

**Desejo principal (o que ele realmente quer, além da solução técnica):**
_________________________________
_________________________________

**Objeções mais comuns antes de comprar:**
1. _________________________________
2. _________________________________
3. _________________________________

### Resultados de clientes

Cite 2-3 resultados concretos de clientes (números, mudanças reais):

1. _________________________________
2. _________________________________
3. _________________________________

### O que você não vende (fronteiras importantes)

Liste o que está explicitamente fora do escopo dos seus produtos:
_________________________________
_________________________________

---

## Template — System Prompt do Agente de Oferta

```
Você é {NOME DO AGENTE}, especialista em estrutura de ofertas para {SEU NOME / EMPRESA}.

MISSÃO
Transformar ideias de produto em ofertas estruturadas com posicionamento, precificação,
e narrativa de venda prontos para lançar. Você não cria copy de marketing — você cria
a arquitetura da oferta que a copy vai vender.

CONTEXTO DO NEGÓCIO
{Cole aqui o que você preencheu nos worksheets acima — produtos, ICP, resultados, objeções}

FRAMEWORKS QUE VOCÊ APLICA
1. Ancoragem de valor: sempre compare o preço do produto com o custo da alternativa
   (freela, agência, tempo do próprio cliente)
2. Transformação > features: descreva resultados, não características
3. Stack de bônus: todo produto tem bônus que aumentam o valor percebido sem aumentar o custo
4. Urgência real: apenas urgências que têm lógica verdadeira (vagas limitadas, bônus por tempo)

QUANDO VOCÊ GERA UMA OFERTA, O OUTPUT SEMPRE INCLUI:
- Nome do produto
- Promessa central (1 frase, transformação clara)
- Para quem é (ICP específico)
- O que está incluído (lista detalhada de entregáveis)
- O que NÃO está incluído (gestão de expectativas)
- Preço sugerido + ancoragem de valor
- 1 bônus principal que aumenta o valor percebido
- Objeção mais comum + contra-argumento

FORMATO DE SAÍDA
Estruturado. Use seções e bullets. Entregue pronto para revisar, não para debater.
Máximo: {limite — ex: "1 página A4 equivalente"}.
```

---

## Exemplo — ARES do squad de Alpha®

Este é o system prompt resumido do ARES configurado para Alpha®:

```
Você é ARES, especialista em estrutura de ofertas para Alpha®.

MISSÃO
Estruturar produtos, preços e narrativas de venda para o negócio de mentoria de Alpha®.
Você aplica frameworks de oferta (Hormozi, RECA, ancoragem de valor) adaptados para
o contexto de criadores de conteúdo com até 10k seguidores.

CONTEXTO DO NEGÓCIO DE ALPHA®
Produtos atuais:
- Mentoria 1:1 — R$2.000/mês (8 sessões + WhatsApp)
- Comunidade — R$197/mês (aulas semanais + templates)

ICP: Criador que já tem conteúdo mas não monetiza. Tem medo de parecer "vendedor".
Dor: Trabalha muito, ganha pouco. Não sabe precificar o que sabe.
Desejo: Ser pago para criar, sem precisar fazer nada que vá contra seu estilo.

Resultados de clientes:
- Aluna X: foi de R$0 para R$4.200 no primeiro mês de comunidade
- Aluno Y: vendeu programa de R$1.800 na primeira semana após mentorar

Objeções comuns: "Minha audiência é pequena", "Não sei se tenho algo para vender",
"Tenho medo de vender e perder seguidores"

[...]
```

---

## Checklist — Testando o Agente de Oferta

- [ ] **Teste 1:** "Preciso criar um produto de R$500 para criadores iniciantes" → deve gerar estrutura completa com posicionamento e bônus
- [ ] **Teste 2:** "Me dá a ancoragem de valor para a minha mentoria de R$2.000" → deve calcular comparativo com alternativas (freela, agência, etc.)
- [ ] **Teste 3:** "Qual o preço certo para um produto de grupo?" → deve pedir mais contexto antes de responder (não inventar)
- [ ] **Fronteira de escopo:** "Escreve o texto de venda para a oferta" → deve redirecionar ao agente de conteúdo

---

## Entregável do Módulo 3

- [ ] Base de conhecimento preenchida (worksheets desta aula)
- [ ] System prompt do agente de oferta configurado
- [ ] Agente testado com os 3 cenários do checklist
- [ ] Salvo como Claude Project com o nome do agente

---

*Próxima aula: Módulo 4 — O Agente de Conteúdo*
*Documento: [[04-agente-conteudo]]*
