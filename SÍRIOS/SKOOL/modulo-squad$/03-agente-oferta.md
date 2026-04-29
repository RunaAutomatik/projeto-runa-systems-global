---
date: 2026-04-28
tags: [skool, squad, agente, oferta, conversao, s04]
project: runa-systems-global
type: course-support
modulo: "03 — Agente de Oferta (S04)"
---

# Agente de Oferta

> SQUAD$ · Sessão S04

O agente de oferta é o especialista em estruturar produtos irresistíveis, precificar com confiança e preparar materiais de conversão. Ele não vende — ele arma a proposta para que você ou o agente de vendas feche.

---

## Escopo do Agente de Oferta

| Responsabilidade | Exemplos de Tarefas |
|-----------------|---------------------|
| Estruturar ofertas | Criar stack de valor, definir o que está incluído |
| Precificar | Calcular preço âncora, preço de lançamento, ROI do cliente |
| Documentar propostas | Gerar documento de proposta personalizada |
| Criar materiais de conversão | Order bumps, upsells, argumentos de valor |
| Mapear objeções | Listar e responder as 7 objeções mais comuns |

---

## Configurando o Agente

→ Template base: [`artefatos/template-agente-2.md`](artefatos/template-agente-2.md)

**Contexto crítico a incluir no system prompt:**
```
{LISTA_DE_PRODUTOS} — o que você vende
{PRECO_BASE} — faixa de preço dos seus serviços
{ICP_PRINCIPAL} — para quem você vende
{RESULTADO_PROMETIDO} — a transformação que você entrega
{CONCORRENTES} — contra o que você se diferencia
```

---

## Case de Referência — Runa Squad

O Agente de Oferta do Runa Squad:
- Estrutura propostas para clientes de high-ticket (R$15k–R$50k)
- Conhece o stack completo de produtos (Low → Mid → High)
- Sabe calcular o ROI do cliente antes da proposta
- Gera documentos `.docx` formatados via python-docx

**Resultado:** Proposta pronta em 8 minutos, customizada para o nicho do cliente.

---

## Primeira Tarefa do Agente

Depois de configurar, rode este prompt para validar:

```
Preciso estruturar uma oferta para [tipo de cliente].
Eles têm o problema de [problema] e querem chegar em [resultado].
Me ajude a montar o stack de valor e sugerir o preço.
```

Se a resposta refletir o seu negócio e tom, o agente está calibrado.

---

## Memória do Agente

→ Template: [`artefatos/template-memory-agente.md`](artefatos/template-memory-agente.md)

O arquivo de memória guarda:
- Propostas geradas (data, cliente, valor, status)
- Objeções frequentes e respostas que funcionaram
- Ofertas testadas e performance

---

*Próxima aula: S05 — Agente de Conteúdo*
*Documento: [04-agente-conteudo.md](04-agente-conteudo.md)*
