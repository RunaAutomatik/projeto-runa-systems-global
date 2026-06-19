---
date: 2026-04-21
tags: [runa-intervencao, artefato, framework, extracao, conhecimento, mind, s07]
project: runa-systems-global
type: worksheet
sessao: S07 — MIND$ I · Base de Conhecimento
produto: [[runa-intervencao-sessao-07-mind-base-conhecimento]]
---

# Framework — Extração de Conhecimento

> **O que é:** Método para extrair conhecimento do formato que está (documentos, planilhas, memória, conversas) para o formato que o squad pode consultar.
> **Quando usar:** Block 2 de S07 — ou toda vez que o cliente precisar criar uma nova wiki page sem ter documento fonte.
> **Regra:** Uma sessão de extração por tema. Não extraia tudo de uma vez.

---

## As 3 Fontes de Conhecimento

| Tipo | O que é | Como extrair |
|------|---------|-------------|
| **Documentos existentes** | Arquivos que o cliente já tem | Ingestão direta no vault → wiki page via template |
| **Conhecimento tácito** | Está na cabeça do cliente, não registrado | Extração pelas 5 perguntas → wiki page escrita ao vivo |
| **Dados operacionais** | Números e registros do negócio | Síntese + interpretação → wiki page em analyses/ |

---

## As 5 Perguntas de Extração

Para qualquer tema de conhecimento, responda as 5 perguntas abaixo. O facilitador documenta as respostas em tempo real.

---

### Pergunta 1 — O que precisa ser sabido

> "O que eu sei sobre esse tema que um agente precisaria saber para agir bem?"

**Objetivo:** Capturar o conhecimento factual — o "o quê" do tema.

**Exemplos de resposta bem-formada:**

| Tema | Resposta bem-formada |
|------|---------------------|
| ICP | "Meu cliente ideal é dono de negócio de serviços, entre 30 e 50 anos, com equipe de 2 a 5 pessoas. Não tem sócio. Fatura entre R$20k e R$100k/mês. O gargalo dele é operacional, não de vendas." |
| Processo de venda | "São 4 etapas: diagnóstico (30min) → proposta (enviada em 48h) → follow-up 1 (dia 5) → follow-up 2 (dia 12). Reuniões sempre por vídeo, nunca presencial." |

**Sinal de resposta ruim:** Resposta genérica que poderia se aplicar a qualquer negócio.

**Campo:**

```
Resposta 1:
[escrever aqui durante a sessão]
```

---

### Pergunta 2 — A regra de ouro

> "Qual é a regra de ouro (heurística) que eu aplico inconscientemente?"

**Objetivo:** Capturar o padrão de decisão implícito — o "como eu decido" do tema.

**Exemplos de resposta bem-formada:**

| Tema | Regra de ouro |
|------|--------------|
| ICP | "Se o cliente não tem clareza do que quer resolver, eu não proponho. Primeiro diagnóstico, depois proposta." |
| Objeção de preço | "Quando alguém pede desconto na primeira reunião, eu sei que não é o cliente certo. Mas quando pede na segunda, geralmente é insegurança — aí eu trabalho." |
| Onboarding | "Nos primeiros 7 dias, meu único objetivo é provar que tomaram a decisão certa. Tudo que eu faço é para isso." |

**Campo:**

```
Regra de ouro:
[escrever aqui durante a sessão]
```

---

### Pergunta 3 — O exemplo mais claro

> "Qual é o exemplo mais claro de 'isso funcionou' e 'isso não funcionou'?"

**Objetivo:** Capturar prova real — o case e o anti-case do tema.

**Exemplos de resposta bem-formada:**

```
FUNCIONOU:
Cliente X — setor Y. Entrou pela objeção Z. O que funcionou: [ação específica].
Resultado: fechou em [prazo], permaneceu [tempo], gerou [resultado].

NÃO FUNCIONOU:
Cliente A — setor B. Tentei [abordagem]. O que não funcionou: [o que falhou e por quê].
Resultado: [o que aconteceu].
```

**Campo:**

```
FUNCIONOU:
[escrever aqui]

NÃO FUNCIONOU:
[escrever aqui]
```

---

### Pergunta 4 — A exceção mais importante

> "Qual é a exceção mais importante — quando a regra não se aplica?"

**Objetivo:** Evitar que o agente aplique o conhecimento cegamente em situações onde não deve.

**Exemplos de resposta bem-formada:**

| Regra | Exceção |
|-------|---------|
| "Sempre envio proposta em 48h" | "Exceto quando o cliente menciona urgência extrema. Nesse caso, mando em 4h para capturar o momento." |
| "Nunca desconto" | "Exceto para cliente de indicação de alto valor — aí posso ceder até 15% sem comprometer o posicionamento." |

**Campo:**

```
A regra do tema X NÃO se aplica quando:
[escrever aqui]
```

---

### Pergunta 5 — A pergunta do novo analista

> "Qual seria a pergunta que um novo analista do meu negócio deveria me fazer?"

**Objetivo:** Descobrir o que está faltando — o conhecimento que o cliente não percebeu que tem.

**Como usar:** O facilitador usa esta resposta para identificar 1–2 wiki pages adicionais que o cliente precisa criar mas ainda não considerou.

**Exemplos:**

| Contexto | Pergunta reveladora |
|---------|-------------------|
| Após capturar ICP | "O que diferencia um cliente que vai embora insatisfeito de um que permanece 3 anos?" |
| Após capturar processo de venda | "Quando você sabe, ainda na primeira reunião, que vai fechar?" |
| Após capturar objeções | "Qual objeção você nunca conseguiu contornar?" |

**Campo:**

```
A pergunta que revelaria mais:
[escrever aqui]

Resposta (se o cliente souber na hora):
[escrever aqui]
```

---

## Calendário de Extração — 4 Semanas

Use este roteiro para distribuir as sessões de extração após S07:

| Semana | Tema | Perguntas prioritárias | Wiki pages esperadas |
|--------|------|----------------------|---------------------|
| **Semana 1** | ICP e processo de venda | 1, 2, 3 | entities/icp.md + concepts/processo-venda.md |
| **Semana 2** | Objeções e contorno | 2, 3, 4 | concepts/objecoes.md + concepts/contorno-objecoes.md |
| **Semana 3** | Onboarding e entrega | 1, 2, 3 | concepts/onboarding.md + analyses/padrao-entrega.md |
| **Semana 4** | Retenção e expansão | 2, 4, 5 | concepts/retencao.md + entities/casos-sucesso.md |

---

## Exercício Ao Vivo (Block 2 de S07)

O cliente escolhe 1 tema e responde as 5 perguntas em voz alta. O facilitador:

1. Escolhe o tema junto com o cliente (geralmente ICP ou processo de venda)
2. Faz as perguntas uma de cada vez
3. Documenta as respostas nos campos acima em tempo real
4. Ao final, abre o template de ingestão e constrói a wiki page ao vivo

**Tempo:** 15–20 minutos para 1 tema completo.

**Output do exercício:** 1 wiki page completa pronta para ser salva em `wiki/[categoria]/[tema].md`

---

## Sinais de Extração de Qualidade

| Sinal positivo ✅ | Sinal de ajuste necessário ⚠️ |
|------------------|-----------------------------|
| Resposta inclui números específicos | Resposta usa "às vezes", "depende", "geralmente" sem qualificar |
| Resposta cita um cliente real (anonimizado) | Resposta poderia se aplicar a qualquer negócio |
| Exceção está claramente delimitada | Exceção é "depende do caso" |
| A regra de ouro é acionável | A regra de ouro é filosófica (não gera ação) |
| Novo analista entenderia sem contexto adicional | Precisaria de 10 perguntas de follow-up para entender |

---

*Sessão de origem: [[runa-intervencao-sessao-07-mind-base-conhecimento|S07 — MIND$ I · Base de Conhecimento]]*
*Relacionado: [[template-ingestao-wiki|Template de Ingestão]] · [[estrutura-vault-conhecimento|Estrutura do Vault]]*
