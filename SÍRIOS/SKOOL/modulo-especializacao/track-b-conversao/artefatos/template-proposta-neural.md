---
date: 2026-04-21
tags: [runa-intervencao, artefato, proposta, template, track-c, orcamento]
project: runa-systems-global
type: artifact
sessao: track-c4-orcamento-proposta-neural
---

# Artefato — Template Proposta Neural

> **Usado em:** Track C4 — Block 2 (mapeamento) + Block 5 (entrega)
> **Como usar:** Preencher ao vivo durante o mapeamento de serviços. Após preenchido, passar para o `agente-orcamento` gerar a versão final, ou usar diretamente como rascunho.
> **Alternativa:** O `agente-orcamento` gera esta estrutura automaticamente com `*proposta [cliente] [serviço] [contexto]` — use este template quando quiser estruturar manualmente antes de ativar o agente.

---

## Por que ter um template manual

O template manual serve para dois casos:

1. **Primeira proposta:** O operador preenche o mapa antes de ativar o agente — assim o agente recebe briefing específico, não contexto vago.
2. **Propostas simples:** Serviços pequenos onde o agente não é necessário — preencher, ajustar e exportar direto.

---

## Checklist de Aprovação Pré-Envio

Antes de enviar qualquer proposta ao cliente, verificar:

| Critério | ✅/❌ |
|---------|-------|
| Diagnóstico usa linguagem do cliente (não termos técnicos) | — |
| Escopo tem tabela com Incluso e Não Incluso | — |
| Prova tem pelo menos 1 número e 1 prazo | — |
| Investimento tem 3 opções com âncora de custo antes da tabela | — |
| Próximos passos têm exatamente 3 itens numerados | — |
| Validade está indicada com data exata | — |
| Proposta tem no máximo 2 páginas A4 em leitura fluente | — |

**Mínimo 6/7 para enviar.** Se algum item falhou, corrigir com `*ajustar [seção] [instrução]` antes de exportar.

---

## PROPOSTA — [SERVIÇO] · [CLIENTE]

> **Data de emissão:** [YYYY-MM-DD]
> **Preparada por:** [NOME DO OPERADOR] · [NEGÓCIO]
> **Válida até:** [YYYY-MM-DD + 7 dias]

---

### SEÇÃO 1 — CAPA

| Campo | Resposta |
|-------|---------|
| Nome do cliente (empresa ou pessoa): | `[ ]` |
| Serviço ou projeto (título em 1 linha): | `[ ]` |
| Responsável pelo projeto no lado do cliente: | `[ ]` |
| Contato do operador (e-mail + WhatsApp): | `[ ]` |

---

### SEÇÃO 2 — DIAGNÓSTICO

> **Objetivo:** Mostrar que entendemos o problema antes de apresentar a solução.
> **Tom:** Linguagem do cliente, não linguagem técnica.
> **Fonte:** `wiki/concepts/icp.md` → dores + situação atual

**Situação atual do cliente em 2-3 frases (na voz do cliente):**
`[ ]`
*(Ex: "Você atende até 15 clientes por mês mas 60% do seu tempo vai para tarefas operacionais — mensagens repetidas, atualizações manuais, orçamentos feitos do zero a cada vez.")*

**Consequência de não resolver (o que continua acontecendo):**
`[ ]`
*(Ex: "Enquanto isso, o negócio não escala: cada novo cliente adiciona proporcionalmente mais trabalho, não mais receita.")*

**O que está em jogo (a oportunidade que está sendo perdida):**
`[ ]`
*(Ex: "Com a operação atual, o teto de faturamento é de R$15k–20k/mês. Não por falta de demanda — por falta de capacidade.")*

---

### SEÇÃO 3 — ABORDAGEM

> **Objetivo:** Apresentar o mecanismo — o que é diferente nesta abordagem.
> **Regra:** Máximo 3 passos. Suficiente para criar confiança, não para dispensar o serviço.
> **Fonte:** `wiki/concepts/metodo.md`

**Nome do mecanismo/método (não pode ser "consultoria personalizada"):**
`[ ]`
*(Ex: "O Protocolo de Operação Neural em 3 Camadas")*

**Passo 1 — [nome do passo]:**
`[ ]`
*(Ex: "Mapeamento Operacional — identificamos as 3–5 tarefas que consomem mais tempo e têm mais impacto")*

**Passo 2 — [nome do passo]:**
`[ ]`
*(Ex: "Delegação Neural — configuramos agentes específicos para cada tarefa com regras, tom e contexto do seu negócio")*

**Passo 3 — [nome do passo]:**
`[ ]`
*(Ex: "Ativação e Handover — você opera o sistema autônomo com suporte durante os primeiros 15 dias")*

---

### SEÇÃO 4 — ESCOPO

> **Objetivo:** Deixar cristalino o que está e não está incluído.
> **Fonte:** `wiki/concepts/servicos.md` → serviço correspondente

**O que inclui:**

| Entregável | Formato | Prazo |
|-----------|---------|-------|
| `[ ]` | `[ ]` | `[ ]` dias úteis |
| `[ ]` | `[ ]` | `[ ]` dias úteis |
| `[ ]` | `[ ]` | `[ ]` dias úteis |

**O que NÃO inclui (ao menos 3 itens):**
- `[ ]`
- `[ ]`
- `[ ]`

**Prazo total de entrega:** `[ ]` semanas/dias úteis a partir do kickoff

---

### SEÇÃO 5 — PROVA

> **Objetivo:** Mostrar que funciona para alguém com perfil parecido com este cliente.
> **Regra:** Pelo menos 1 número + 1 prazo. Sem isso, é só promessa.
> **Fonte:** `wiki/concepts/casos.md`

**Case escolhido (perfil sem nome):**

| Campo | Resposta |
|-------|---------|
| Perfil do cliente (sem identificar): | `[ ]` |
| Situação antes: | `[ ]` |
| O que foi feito: | `[ ]` |
| Resultado (número + prazo): | `[ ]` |
| Situação atual: | `[ ]` |

**Texto do case para a proposta (3-4 frases):**
`[ ]`
*(Ex: "Um consultor de RH independente estava perdendo 12 horas semanais com atendimento e orçamentos manuais. Após a implementação do squad neural, esse tempo caiu para 2 horas. Em 45 dias, ele abriu capacidade para receber 3 novos clientes — sem contratar assistente.")*

**Depoimento (se disponível — máximo 3 frases + identificação):**
`[ ]`
**— [Nome/iniciais], [perfil]**

*(Se não houver case com número: indicar "Resultado esperado com base em projetos similares" — não inventar)*

---

### SEÇÃO 6 — INVESTIMENTO

> **Objetivo:** Ancorar o preço no valor, não no custo por hora.
> **Fonte:** `wiki/concepts/precificacao.md`

**Frase de âncora antes da tabela:**
`[ ]`
*(Ex: "O problema atual custa R$[X]/mês à sua operação. O investimento no [nome do serviço] é R$[Completo] — o retorno começa a partir de [N semanas].")*

**Tabela de opções:**

| Opção | O que inclui | Investimento |
|-------|-------------|-------------|
| Essencial | `[ ]` | R$`[ ]` |
| Completo ⭐ | `[ ]` | R$`[ ]` |
| Premium | `[ ]` | R$`[ ]` |

**Condições de pagamento:**
`[ ]`
*(Ex: "50% no aceite da proposta + 50% na entrega final. Parcelamento em até 3× no cartão disponível para valores até R$5.000.")*

---

### SEÇÃO 7 — PRÓXIMOS PASSOS

> **Objetivo:** Eliminar a ansiedade sobre o que acontece depois de dizer sim.
> **Regra:** Exatamente 3 passos numerados.

**1. Aprovação:**
`[ ]`
*(Ex: "Confirmar a opção escolhida por WhatsApp ou e-mail. A proposta fica válida até [data].")*

**2. Kickoff:**
`[ ]`
*(Ex: "Em até 2 dias úteis após o aceite e o pagamento inicial, realizamos a reunião de kickoff — 60 minutos para mapear seus processos reais e configurar os primeiros agentes.")*

**3. Primeiro marco:**
`[ ]`
*(Ex: "Em até [N dias úteis] do kickoff, você terá o primeiro entregável ativo e testado.")*

**Frase de encerramento:**
`[ ]`
*(Ex: "A partir do aceite, você para de esperar e começa a ter um sistema operando por você.")*

---

### SEÇÃO 8 — VALIDADE

> Esta proposta é válida por **7 dias corridos** a partir de `[data de emissão]`, portanto até **`[data de emissão + 7 dias]`**.
>
> Após este prazo, os valores e prazos podem ser renegociados conforme disponibilidade de agenda.

---

*Preparado por [NOME DO OPERADOR] — [NEGÓCIO]*
*Contato: [e-mail] · [WhatsApp]*

---

## Após preencher o mapa

```
Opção A — usar o agente-orcamento:
  1. Copiar o mapa preenchido para o contexto do agente
  2. *proposta "[cliente]" "[serviço]" "[1 frase com o contexto mapeado]"
  3. O agente gera a proposta formatada com base no vault + mapa
  4. *ajustar [seção] se alguma parte precisar de refinamento
  5. *exportar docx → gera script Python para criar o .docx
  6. Rodar o script → arquivo gerado → enviar ao cliente

Opção B — usar o mapa direto:
  1. Revisar todos os campos preenchidos
  2. Converter para .docx com o script padrão de exportação
  3. Ou: abrir Google Docs, colar o conteúdo, formatar manualmente
  4. Enviar por e-mail + WhatsApp (protocolo de entrega da seção Block 5)

Protocolo de entrega (sempre duplo canal):
  Email: Assunto "[Proposta] [Serviço] — [Nome do Negócio]"
  WhatsApp: "Enviei a proposta por e-mail. Fica válida até [data]. Qualquer dúvida, me chama aqui."
```

---

## Connections

- **Sessão que usa este artefato:** [[runa-intervencao-sessao-track-c4-orcamento-proposta-neural|C4 — ORÇAMENTO$]]
- **Agente que gera esta estrutura automaticamente:** [[template-agente-orcamento]] — `agente-orcamento`
- **Vault que alimenta a proposta:**
  - [[template-servicos-precificacao]] — `servicos.md` + `precificacao.md`
  - `wiki/concepts/icp.md` — diagnóstico e linguagem do cliente
  - `wiki/concepts/casos.md` — prova com números
