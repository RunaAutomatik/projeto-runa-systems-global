---
date: 2026-04-21
tags: [runa-intervencao, artefato, depoimento, prova-social, template, track-b]
project: runa-systems-global
type: artifact
sessao: track-b4-posicionamento-autoridade
---

# Artefato — Template Depoimento Neural

> **Usado em:** Track B4 — Block 3 (Depoimentos Neurais)
> **Onde salvar no vault do consultor:** `wiki/concepts/depoimentos.md`
> **Como usar:** Duas etapas — coleta (4 perguntas ao cliente) e formatação (agente reformata para venda).

---

## Etapa 1 — Coleta: As 4 Perguntas

Enviar ao cliente **imediatamente após um resultado específico** — não ao final do programa.

### Mensagem de coleta (WhatsApp / e-mail)

```
[NOME DO CLIENTE], que resultado você teve com [RESULTADO ESPECÍFICO]!

Quero documentar a sua trajetória — tanto para minha própria análise quanto
para poder mostrar o caminho para quem está na situação que você estava.

4 perguntas rápidas — pode responder em texto, áudio ou vídeo:

1. Antes de começarmos, qual era a sua situação específica?
   O que estava acontecendo que te trouxe até aqui?

2. Qual foi o principal resultado que você atingiu, e em quanto tempo?

3. O que te surpreendeu no processo — algo que não esperava que aconteceria?

4. Para quem você recomendaria este trabalho?
   O que você diria para essa pessoa sobre o que pode esperar?

Obrigado por dedicar 5 minutos a isso. Seu relato vai ajudar alguém
que está exatamente onde você estava.
```

---

## Etapa 2 — Formatação: Template de Depoimento Neural

Após receber as respostas, preencher e enviar ao cliente para aprovação antes de publicar.

```markdown
## Depoimento [NÚMERO] — [NOME OU PSEUDÔNIMO]

> **Contexto de entrada (P1 reformatada):**
> "[Em 1–2 frases, o que o cliente estava vivendo antes. Na voz do cliente, editada
>  para clareza e impacto.
>  Ex: 'Eu cobrava R$800 por sessão e não conseguia preencher um programa em grupo.
>  Tentei lançar duas vezes com desconto — não funcionou.'"]

> **O resultado (P2 reformatada):**
> "[Em 1–2 frases, resultado com número e prazo.
>  Ex: 'Em 45 dias fechei 3 contratos do novo programa a R$6.500 cada.
>  Nunca havia faturado isso em um único mês.'"]

> **A surpresa (P3 reformatada — opcional):**
> "[O que aconteceu além do esperado — humaniza o depoimento.
>  Ex: 'O que eu não esperava: não precisei mudar o que eu ensinava,
>  só a forma de apresentar e o preço.'"]

> **A recomendação (P4 reformatada):**
> "[Para quem recomendaria e o que diria.
>  Ex: 'Para qualquer consultor que sente que seu trabalho vale mais
>  do que está cobrando — mas não sabe como mudar isso sem perder clientes.'"]

— [Nome ou pseudônimo], [perfil: área + contexto]
**Data:** [YYYY-MM-DD]
**Autorização:** [✅ Nome completo / ✅ Primeiro nome / 🔲 Anônimo]

---

**Versão para publicação (formato curto — até 3 frases):**
> "[Frase de impacto — resultado principal + surpresa em uma frase.
>  A segunda frase deve carregar o resultado em números.
>  A terceira é a recomendação.]"
> — [Nome], [perfil]

**Tags de uso:** [para qual perfil de prospect este depoimento ressoa mais]
```

---

## Critérios de um Depoimento Neural Válido

| Critério | Verificação |
|---------|------------|
| Resultado tem número ou contraste mensurável | "faturei X" ou "saí de X para Y" |
| Contexto de entrada está claro | Prospect lendo se reconhece na situação |
| Frase tem contraste antes/depois | Não apenas elogio, mas transformação |
| Aprovado pelo cliente antes de publicar | Nunca publicar sem OK explícito |
| Não parece fabricado | Tom natural, não corporativo |

---

## Erros Comuns na Formatação

| Erro | Exemplo ruim | Exemplo corrigido |
|------|-------------|------------------|
| Elogio sem resultado | "Profissional incrível e dedicado" | "Em 60 dias estruturei minha oferta e fechei 2 contratos de R$15k" |
| Vago | "Mudou minha vida" | "Fui de R$2.400/mês para R$9.500/mês em 3 meses" |
| Muito longo | 5 parágrafos | 3 frases no formato curto |
| Tom corporativo | "Processo extremamente eficaz e metodológico" | "Eu não sabia como cobrar mais — agora tenho lista de espera" |
| Sem contexto de quem é | Apenas "— João" | "— João, consultor de TI, São Paulo" |

---

## Connections

- **Sessão que usa este artefato:** [[runa-intervencao-sessao-track-b4-posicionamento-autoridade|B4 — POSICIONAMENTO$ II]]
- **Agente que usa:** `agente-prova-social` via `*depoimento-para [problema]`
- **Vault path:** `[negocio]-kb/wiki/concepts/depoimentos.md`
- **Integrado com:** `agente-atendimento` (B1) — envia depoimento relevante após qualificação
