---
date: 2026-04-28
tags: [skool, automacao, landing-page, conversao, track-c]
project: runa-systems-global
type: course-support
modulo: "C3 — Landing Pages (Track C)"
---

# Landing Pages com AI

> Track C — Automação · Sessão C3

A landing page é o destino de todo o funil. Para agências técnicas, a LP não é só um documento de vendas — é o produto em si, demonstrando a capacidade de construir e converter.

---

## Estrutura de LP de Alta Conversão

→ [`artefatos/template-mapa-landing-page.md`](artefatos/template-mapa-landing-page.md)

**Os 8 blocos obrigatórios:**

| Bloco | Função | Dica |
|-------|---------|------|
| **Hero** | Capturar atenção em 3 segundos | Resultado específico + para quem |
| **Problema** | Fazer o visitante se identificar | Falar a dor em linguagem do cliente |
| **Agitação** | Mostrar o custo da inação | Números, consequências, urgência |
| **Solução** | Apresentar o método como saída | Mecanismo único, não benefícios genéricos |
| **Prova** | Criar credibilidade | Cases, depoimentos, números |
| **Oferta** | Detalhar o que está incluído | Stack de valor com âncora de preço |
| **Garantia** | Remover risco do cliente | Quanto mais específica, melhor |
| **CTA** | Pedir a ação | Um único CTA, repetido 3× |

---

## Construindo com AI

**Passo 1 — Brief:**
```
Nicho: {NICHO}
ICP: {ICP — quem exatamente}
Maior dor: {DOR_PRINCIPAL}
Resultado principal: {RESULTADO}
Mecanismo único: {METODO}
Prova principal: {CASE_OU_NUMERO}
Preço: R$ {PRECO}
CTA: {ACAO_DESEJADA}
```

**Passo 2 — Geração:**
Passe o brief para o agente de oferta + agente de conteúdo. O agente de oferta gera o argumento; o agente de conteúdo escreve na sua voz.

**Passo 3 — Design:**
Use Next.js + Tailwind para implementar, ou Google Stitch para mockup rápido.

---

## Stack Técnico

| Componente | Ferramenta | Motivo |
|-----------|-----------|--------|
| Framework | Next.js | SSR, performance, deploy fácil |
| CSS | Tailwind | Desenvolvimento rápido |
| Deploy | Netlify ou Railway | Git push = deploy automático |
| Analytics | Vercel Analytics ou GA4 | Rastrear conversão por bloco |
| Formulário | Tally ou Typeform → n8n | Captura lead → entra no funil |

---

## A/B Testing com AI

Após a primeira versão publicada, use o agente de inteligência para:
1. Analisar dados de heatmap (Hotjar)
2. Identificar onde os visitantes saem
3. Gerar 3 variações do bloco com menor conversão
4. Implementar a variação vencedora

---

## Resultado Desta Sessão

- [ ] Brief de LP preenchido
- [ ] Texto dos 8 blocos escrito
- [ ] LP publicada (mesmo que versão beta)
- [ ] Analytics configurado
- [ ] Formulário conectado ao funil de DM/email

---

*Próxima aula: C4 — Escala de Automação*
*Documento: [C4-escala-automacao.md](C4-escala-automacao.md)*
