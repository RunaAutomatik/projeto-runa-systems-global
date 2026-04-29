---
date: 2026-04-21
tags: [runa-intervencao, mentoria, track-b, consultor, mentor, chat-neural, atendimento, especializacao]
project: runa-systems-global
type: lesson-structure
fase: 5 — ESPECIALIZAÇÃO
track: B — Consultor / Mentor
codigo: B1
titulo: "†CHAT I — Atendimento Neural de Primeiro Nível"
anterior: sessao-08-mind-memoria-evolucao
proximo: track-b2-chat-qualificacao-diagnostico
---

# Runa Intervenção — Track B1: †CHAT I — Atendimento Neural de Primeiro Nível

> **Purpose:** Criar o sistema de atendimento neural que responde prospects e clientes no primeiro nível — antes de qualquer interação humana do consultor. O agente qualifica, responde dúvidas frequentes e escala os casos que realmente precisam de atenção humana.
> **Output:** Agente de atendimento de primeiro nível operacional + protocolo de escalação + FAQ neural com 20+ entradas do negócio específico do consultor.
> **Track:** B — Consultor / Mentor. Selecionado em S01 para clientes com foco em atendimento, mentoria ou consultoria como principal modelo de negócio.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Key message:**

> "Você tem um problema que todo consultor tem: seu tempo é o produto. Cada DM respondida manualmente é tempo que não está sendo pago. Cada pergunta repetida é energia desperdiçada. O agente de atendimento neural não substitui você — ele resolve o que pode ser resolvido sem você, e te traz só o que precisa da sua mente."

**O custo oculto do atendimento manual:**

| Situação | Impacto real |
|---------|------------|
| 20 DMs/dia com 5 min cada | 1h40min do seu dia em perguntas repetidas |
| Prospect não qualificado em call | 1h perdida para os dois lados |
| Resposta atrasada (24h+) | Lead esfria, conversão cai |
| Você respondendo às 23h | Você como funcionário, não como dono |
| Ausência de filtro | Você atende "curiosos" no mesmo nível que clientes sérios |

**O que o agente de atendimento faz:**

```
RECEBE
  → Mensagem de prospect ou cliente (DM, WhatsApp, e-mail)

CLASSIFICA
  → FAQ? (responde automaticamente)
  → Qualificação necessária? (inicia protocolo B2)
  → Escalação? (notifica o consultor)

RESPONDE OU ESCALA
  → FAQ: responde com base no vault
  → Qualificação: encaminha para fluxo de descoberta
  → Escalação: entrega ao consultor com contexto completo
```

---

### BLOCK 2 — Construindo o Agente de Atendimento (25 min)

**Agente — Atendimento Neural de Primeiro Nível:**

```yaml
name: agente-atendimento
persona: |
  Você é o primeiro ponto de contato com [NOME DO CONSULTOR / NEGÓCIO].
  Seu trabalho é atender com a energia e o nível de atenção que [NOME] daria
  pessoalmente — mas sem precisar da presença de [NOME].
  Você responde perguntas com base no vault do negócio.
  Você não inventa. Se não sabe, diz que vai verificar e escala.
  Você nunca faz o prospect esperar mais de [TEMPO MÁXIMO DEFINIDO].

identidade:
  negocio: [NOME DO NEGÓCIO]
  consultor: [NOME DO CONSULTOR]
  tom: [ex: "profissional mas acessível — como um assistente de confiança, não um bot"]
  canais_ativos:
    - instagram_dm: [SIM / NÃO]
    - whatsapp: [SIM / NÃO]
    - email: [SIM / NÃO]

scope:
  can:
    - Responder perguntas frequentes sobre o negócio (com base no vault)
    - Verificar disponibilidade de agenda e informar próximos passos
    - Coletar informações de qualificação básica (perfil, momento, interesse)
    - Enviar material de apoio (links, guias, aperitivos)
    - Registrar o contato no log do vault
  cannot:
    - Fazer promessas de resultado específico sem aprovação do consultor
    - Fechar venda ou confirmar preço final sem o consultor
    - Responder sobre situações específicas de clientes ativos sem consulta
    - Inventar informações — se não está no vault, escalar

escalacao:
  triggers:
    - Prospect demonstra urgência clara ("preciso resolver isso agora")
    - Pergunta que não está no FAQ e não está no vault
    - Situação sensível (cliente insatisfeito, reembolso, reclamação)
    - Prospect passou pela qualificação e está pronto para conversa comercial
    - Qualquer pergunta sobre preço específico ou condição especial
  protocolo: |
    Quando trigger de escalação ativado:
    1. Informar ao prospect: "Vou confirmar isso diretamente com [NOME] e te retorno em [PRAZO]"
    2. Registrar no log: data, canal, resumo da mensagem, trigger de escalação
    3. Notificar o consultor com: resumo + histórico da conversa + recomendação de próximo passo

vault_reference: [VAULT]/wiki/
memory_reference: [VAULT]/wiki/memory/agente-atendimento-memory.md

commands:
  - "*responder [mensagem]" → gera resposta baseada no vault
  - "*faq [tema]" → busca no FAQ e retorna a resposta padrão
  - "*qualificar [perfil]" → inicia sequência de qualificação
  - "*escalar [motivo]" → gera resumo para o consultor + registra
  - "*historico [contato]" → recupera histórico de interações anteriores
```

**A diferença entre atender e escalar:**

```
ATENDER (agente resolve):
  ✓ "Quanto custa sua mentoria?" → tem tabela no vault → responde com tabela
  ✓ "Quais são os horários disponíveis?" → tem calendário no vault → responde
  ✓ "Posso parcelar?" → tem política no vault → responde com política
  ✓ "Qual é o formato do programa?" → tem descrição no vault → responde

ESCALAR (consultor resolve):
  ✗ "Você garante resultado em 30 dias para o meu caso específico?"
  ✗ "Posso ter desconto além do que está no site?"
  ✗ "Estou insatisfeito com X que aconteceu"
  ✗ "Minha situação é diferente, posso ter uma condição especial?"
```

---

### BLOCK 3 — Construindo o FAQ Neural (25 min)

**Objetivo:** Criar o FAQ do negócio com pelo menos 20 entradas — a base de conhecimento do agente de atendimento.

**Onde o FAQ fica no vault:**

```
[negocio]-kb/
└── wiki/
    └── concepts/
        └── faq.md   ← arquivo que alimenta o agente-atendimento
```

**Template de FAQ Neural:**

```markdown
---
date: [DATA]
tipo: concepts
tags: [faq, atendimento, perguntas-frequentes]
---

# FAQ — [NOME DO NEGÓCIO]

> Atualizado em: [DATA]
> Usando em: agente-atendimento (primeiro nível de resposta)
> Protocolo: se a pergunta não está aqui → escalar para o consultor

---

## Sobre o consultor e o negócio

**P: Quem é [NOME] e qual é a especialidade?**
R: [resposta em 3–4 linhas, tom do consultor]

**P: Há quanto tempo você trabalha com isso?**
R: [resposta]

**P: Você atende em qual área/nicho?**
R: [resposta]

---

## Sobre os produtos/serviços

**P: Quais são os formatos de atendimento?**
R: [lista dos formatos — mentoria, consultoria, curso, etc.]

**P: Como funciona a mentoria / consultoria?**
R: [descrição do formato, frequência, canais]

**P: Qual é a duração do programa?**
R: [resposta]

**P: Você atende em grupo ou individual?**
R: [resposta]

---

## Sobre preços e condições

**P: Qual é o investimento?**
R: [tabela de preços — ou faixa, se preferir não publicar valor exato]

**P: Tem parcelamento?**
R: [política de parcelamento]

**P: Tem desconto?**
R: [política de desconto — ou redirecionamento para conversa com o consultor]

**P: Como funciona o pagamento?**
R: [formas de pagamento aceitas]

---

## Sobre resultados e garantias

**P: Quais resultados posso esperar?**
R: [resultado típico, sem promessa de resultado específico, com prova social]

**P: Tem garantia?**
R: [política de garantia]

**P: Quanto tempo para ver resultado?**
R: [resposta honesta, sem promessa inflada]

---

## Sobre o processo de entrada

**P: Como faço para começar?**
R: [próximos passos exatos]

**P: Tem vaga disponível?**
R: [como verificar disponibilidade]

**P: Posso fazer uma conversa antes de decidir?**
R: [política de call de descoberta — tem ou não tem, como agendar]

---

## Perguntas de escalação automática

As perguntas abaixo SEMPRE vão para o consultor — não tentar responder:

- Qualquer pedido de condição especial ou exceção à política
- Reclamações ou situações de insatisfação
- Dúvidas sobre clientes atuais e seus resultados específicos
- Propostas de parceria ou colaboração
```

**Live exercise:** O cliente preenche o FAQ ao vivo — o facilitador vai fazendo perguntas ("e se alguém pergunta sobre isso?") e o cliente responde. Meta: 20 entradas em 20 minutos. A velocidade é intencional — respostas espontâneas são mais autênticas que respostas escritas com calma.

---

### BLOCK 4 — Protocolo de Escalação (15 min)

**Objetivo:** Garantir que o consultor só receba contexto — nunca mensagens brutas.

**Formato de escalação — o que o consultor recebe:**

```markdown
# Escalação — Agente de Atendimento

📅 [DATA E HORA]
📱 Canal: [Instagram DM / WhatsApp / E-mail]
👤 Contato: [nome/perfil do prospect ou cliente]

## Resumo da conversa

[2–3 linhas resumindo o que foi dito — sem transcrição completa]

## Motivo da escalação

[trigger que ativou a escalação]

## Histórico de qualificação (se coletado)

- Perfil: [o que o prospect disse sobre si]
- Momento: [urgência e timing]
- Intenção: [o que está buscando]

## Recomendação de próximo passo

[o que o agente sugere — marcar call / enviar proposta / resolver situação X]

## Mensagem original (se necessário ler)

[transcrição ou link para a conversa]
```

**Onde o consultor recebe a escalação:**

- DM do próprio canal (agente encaminha para DM do consultor)
- WhatsApp pessoal (agente envia mensagem formatada)
- E-mail (agente envia e-mail de escalação)
- Arquivo no vault (`wiki/log.md` — entrada de escalação)

---

### BLOCK 5 — Desafio B1 (5 min)

**DESAFIO TRACK B1:**

```
Antes de B2:

1. AGENTE OPERACIONAL: agente-atendimento criado com escopo, tom e
   triggers de escalação definidos corretamente

2. FAQ COMPLETO: 20+ perguntas e respostas no vault/wiki/concepts/faq.md
   — testado: o agente responde todas corretamente sem inventar

3. ESCALAÇÃO TESTADA: Simulou 3 cenários de escalação — o agente
   produziu o resumo correto para o consultor sem informação inventada

4. PROTOCOLO ATIVO: Agente conectado ao canal principal (Instagram DM
   ou WhatsApp) — 1 conversa real atendida pelo agente

5. LOG FUNCIONANDO: wiki/log.md registrou pelo menos 2 interações
   com canal + resumo + resultado
```

**O que vem em B2:**

> "Em B2 você vai mais fundo — o agente não só atende, ele qualifica. O fluxo de descoberta vai filtrar prospects automaticamente e entregar ao consultor só quem está realmente pronto para comprar."

---

## Facilitator Notes

### Ajuste por canal principal do consultor

| Canal | Ajuste em B1 |
|-------|------------|
| Instagram DM | Configurar respostas dentro do limite de caracteres do DM |
| WhatsApp | Configurar mensagem de boas-vindas (template) + respostas |
| E-mail | Configurar resposta automática + sequência de 48h |
| Comentários em posts | Protocolo de resposta pública vs. privada |

### Problema mais comum em B1

**FAQ muito genérico** — respostas que poderiam vir de qualquer consultor, sem especificidade.

Solução: o live exercise de FAQ precisa forçar especificidade. Para cada resposta, o facilitador pergunta: "Isso você ou seu concorrente direto poderia responder igualmente?" Se sim, reescrever até ficar único.

### Sinal de agente bem calibrado

O consultor abre as escalações e pensa: "isso eu precisava mesmo saber." Não recebe escalações de coisas que o agente poderia ter respondido sozinho.

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template FAQ Neural | Block 3 — construção do FAQ | [[template-faq-neural]] |
| Template de Escalação | Block 4 — protocolo | Incluído no doc acima |

---

## Connections

- **Fase anterior:** [[runa-intervencao-sessao-08-mind-memoria-evolucao|S08 — MIND$ II · Memória e Evolução]]
- **Próxima:** [[runa-intervencao-sessao-track-b2-chat-qualificacao-diagnostico|B2 — †CHAT II · Qualificação e Diagnóstico Neural]]
- **Referência produto:** [[runa-mentoria-prd]] — PRD RUNA SYSTEMS
