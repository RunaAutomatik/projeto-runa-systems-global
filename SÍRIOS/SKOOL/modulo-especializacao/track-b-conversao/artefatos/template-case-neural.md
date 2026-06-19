---
date: 2026-04-21
tags: [runa-intervencao, artefato, case, prova-social, template, track-b]
project: runa-systems-global
type: artifact
sessao: track-b4-posicionamento-autoridade
---

# Artefato — Template Case Neural

> **Usado em:** Track B4 — Block 2 (Banco de Provas)
> **Onde salvar no vault do consultor:** `wiki/concepts/casos.md` (um bloco por case)
> **Como usar:** Preencher ao vivo para cada case. Mínimo 3 cases antes de ativar o agente de prova social.

---

## Formato do Case Neural

Copiar e preencher para cada case. Um arquivo `casos.md` pode conter múltiplos cases
separados por `---`.

```markdown
## Case [NÚMERO] — [PSEUDÔNIMO OU NOME APROVADO]

> **Categoria:** [ICP principal / ICP variante / ICP aspiracional]
> **Problema central:** [Uma frase — o problema que esse case resolve]
> **Resultado headline:** [Resultado mais forte em uma linha]

---

### Perfil de Entrada

**Quem era:**
[Descrição da situação — profissão, área, contexto sem identificar pessoalmente
 se o cliente optou por anonimato. Ex: "Consultora de RH independente, 8 anos de mercado,
 clientes corporativos médios."]

**O que estava acontecendo:**
[O problema específico — com contexto. Não genérico.
 Ex: "Cobrava R$800 por sessão individual. Tentou criar um programa em grupo
 mas não conseguiu preencher nem 5 vagas na primeira tentativa."]

**O que já havia tentado:**
[Tentativas anteriores sem sucesso — mostra que o problema era real e persistente.
 Ex: "Lançou o programa duas vezes com desconto. Fez webinar gratuito. Nenhuma das
 estratégias gerou conversão consistente."]

---

### O Ponto de Virada

**Por que escolheu trabalhar com [NOME DO CONSULTOR]:**
[O que diferenciou — o que o consultor viu ou propôs que ninguém mais havia proposto.
 Ex: "Identificou que o problema não era preço nem formato — era o posicionamento.
 A consultora estava vendendo 'sessões' quando deveria estar vendendo 'transformação
 de carreira em 90 dias'."]

**A primeira ação concreta:**
[O que foi feito na primeira semana que começou a mudar a trajetória.
 Ex: "Reestruturou a oferta: de 'sessões avulsas' para 'Programa de Transição de Carreira
 em 90 dias' com preço de R$6.500 — sem desconto."]

---

### O Processo

**Duração:** [X semanas / meses]

**Como foi:**
[Descrição do processo — o suficiente para mostrar profundidade sem revelar o método completo.
 Ex: "Mapeamos as 3 transformações que ela entregava mas não articulava. Construímos a oferta
 ao redor delas. Treinamos a conversa de venda com o novo posicionamento.
 Nas primeiras 3 semanas: 2 calls com prospects antigos que não haviam fechado antes."]

**O momento mais difícil:**
[O ponto de resistência — real e específico. Mostra autenticidade.
 Ex: "Na segunda semana, recebeu uma recusa de um prospect que disse o preço estava
 'muito alto'. Trabalhou a postura: não negociou o preço, explicou o valor."]

---

### O Resultado

**Resultado principal:**
[O resultado mais forte com número e prazo.
 Ex: "Em 45 dias fechou 3 contratos do programa novo a R$6.500. Receita de R$19.500
 em 45 dias vs. R$2.400 no mesmo período antes."]

**Resultado secundário:**
[Resultado não esperado — mostra que o processo gera mais do que o prometido.
 Ex: "Um dos 3 novos clientes veio de indicação de um prospect que havia recusado
 o programa antigo mas percebeu o novo posicionamento."]

**Estado atual:**
[Onde o cliente está hoje — mostra sustentabilidade.
 Ex: "6 meses depois, opera com lista de espera e preço reajustado para R$8.500."]

---

### A Frase do Cliente

> "[Citação real ou reconstruída com aprovação do cliente — preferencialmente com
>  contraste antes/depois na voz do próprio cliente.
>  Ex: 'Eu sabia que precisava mudar algo, mas achava que precisava de mais clientes.
>  Na verdade, precisava de um posicionamento diferente. Em 45 dias ganhei mais
>  do que em 3 meses antes.']"
> — [Nome ou pseudônimo], [perfil]

---

**Autorização de publicação:** [✅ Nome completo / ✅ Primeiro nome / 🔲 Anônimo]
**Data do case:** [YYYY-MM-DD]
**Relevante para:** [qual perfil de prospect se identifica com este case]
```

---

## Checklist de Qualidade do Case

Antes de salvar o case como válido para o agente de prova social, verificar:

| Critério | ✅ Sim | ❌ Não — corrigir |
|---------|--------|-----------------|
| Resultado tem número E prazo | — | — |
| ICP está claramente descrito | — | — |
| Problema central é específico (não genérico) | — | — |
| Tentativas anteriores documentadas | — | — |
| Ponto de virada explica o diferencial do consultor | — | — |
| Frase do cliente aprovada pelo cliente | — | — |
| Não revela nome sem autorização | — | — |

Minimum: 5 de 7 critérios ✅ para o case entrar no banco de provas.

---

## Connections

- **Sessão que usa este artefato:** [[runa-intervencao-sessao-track-b4-posicionamento-autoridade|B4 — POSICIONAMENTO$ II]]
- **Agente que usa:** `agente-prova-social` via `*case-para [perfil]`
- **Vault path:** `[negocio]-kb/wiki/concepts/casos.md`
