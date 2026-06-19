---
date: 2026-04-21
tags: [runa-intervencao, artefato, faq, atendimento, template, track-b]
project: runa-systems-global
type: artifact
sessao: track-b1-chat-atendimento-neural
---

# Artefato — Template FAQ Neural

> **Usado em:** Track B1 — Block 3 (Construindo o FAQ Neural)
> **Onde salvar no vault do consultor:** `[negocio]-kb/wiki/concepts/faq.md`
> **Como usar:** Preencher ao vivo na sessão. Meta: 20+ perguntas em 20 minutos.

---

## Como usar este template

O FAQ Neural é a base de conhecimento do agente de atendimento. Cada entrada é uma
resposta que o agente pode dar sem envolver o consultor. Quanto mais entradas, mais
autônomo o agente — e mais livre fica o consultor.

**Regra de ouro:** Se a mesma pergunta chegou mais de uma vez, ela vai pro FAQ.

**Regra de especificidade:** Para cada resposta, pergunte: "Isso meu concorrente direto
poderia responder igualmente?" Se sim, reescrever até ficar único.

---

## Template Pronto para Preencher

```markdown
---
date: [DATA]
tipo: concepts
tags: [faq, atendimento, perguntas-frequentes]
negocio: [NOME DO NEGÓCIO]
responsavel: [NOME DO CONSULTOR]
versao: 1.0
---

# FAQ — [NOME DO NEGÓCIO]

> Atualizado em: [DATA]
> Usando em: agente-atendimento (primeiro nível de resposta)
> Protocolo: se a pergunta não está aqui → escalar para [NOME DO CONSULTOR]
> Manutenção: revisar mensalmente ou sempre que uma pergunta nova aparecer 3x

---

## Sobre o consultor e o negócio

**P: Quem é [NOME] e qual é a especialidade?**
R: [Resposta em 3–4 linhas. Inclui: o que o consultor faz, para quem, qual é
   o diferencial — tudo no tom do consultor, primeira pessoa ou terceira pessoa
   dependendo da identidade da marca]

**P: Há quanto tempo você trabalha com isso?**
R: [Resposta específica. Ex: "10 anos na área, 5 anos como consultor independente,
   mais de 200 clientes atendidos"]

**P: Você atende em qual área / nicho?**
R: [Resposta clara sobre o nicho. Se tem sub-nichos, listar. Se não atende
   determinados perfis, mencionar aqui]

**P: Onde posso acompanhar seu trabalho?**
R: [Canais: Instagram (@), YouTube, LinkedIn, Substack — o que for ativo]

**P: Você tem cases ou resultados comprovados?**
R: [2–3 resultados específicos que o consultor pode citar sem comprometer privacidade.
   Ex: "Uma cliente aumentou o faturamento em 40% em 90 dias". Sem exageros.]

---

## Sobre os produtos e serviços

**P: Quais são os formatos de atendimento disponíveis?**
R: [Lista clara: mentoria individual, consultoria pontual, grupo, curso, etc.
   Para cada formato: o que é, para quem é, qual é a frequência]

**P: Como funciona a mentoria / consultoria?**
R: [Descrição do formato principal. Ex: "1 encontro semanal de 60 min via Zoom,
   acesso por WhatsApp para dúvidas rápidas entre as sessões, duração mínima de
   3 meses"]

**P: Qual é a duração do programa / acompanhamento?**
R: [Mínimo, máximo, o que é padrão. Ex: "O programa padrão é de 3 meses. Clientes
   que querem continuidade renovam mensalmente após isso."]

**P: Você atende em grupo ou individual?**
R: [Se tem os dois, explicar a diferença de experiência e benefícios de cada]

**P: Você atende presencialmente ou online?**
R: [Formato de atendimento. Se presencial existe, cidades ou regiões]

**P: Quantas vagas você tem abertas?**
R: [Política de vagas. Ex: "Trabalho com no máximo 8 clientes simultâneos.
   Atualmente há [X] vagas disponíveis — verificar antes de responder]

---

## Sobre preços e condições

**P: Qual é o investimento?**
R: [Tabela de valores por formato — ou faixa, se preferir não publicar valor exato.
   Ex: "Mentoria individual: a partir de R$ X/mês. Consultoria pontual: R$ Y a sessão.
   Valores completos na proposta após a conversa de diagnóstico."]

**P: Tem parcelamento?**
R: [Política de parcelamento. Ex: "Sim, em até 12x no cartão de crédito"]

**P: Tem desconto?**
R: [Política clara. Opção 1: "Os valores já são praticados com a melhor condição
   disponível — não trabalhamos com desconto." Opção 2: "Eventualmente há condições
   especiais para pagamento à vista — posso verificar com [NOME] se houver interesse."]

**P: Como funciona o pagamento?**
R: [Formas: cartão, Pix, boleto, transferência. Plataformas usadas. Ex: "Cartão via
   Hotmart, Pix ou transferência para parcelamento manual"]

**P: Tem período de teste ou sessão experimental?**
R: [Política. Ex: "Não trabalhamos com sessão experimental. A conversa de diagnóstico
   gratuita serve para verificarmos o fit antes de qualquer compromisso."]

---

## Sobre resultados e garantias

**P: Quais resultados posso esperar?**
R: [Resultado típico do método, sem promessa de resultado específico. Incluir prova
   social. Ex: "Clientes que seguem o programa por pelo menos 3 meses consistentemente
   relatam X, Y e Z. O resultado depende do engajamento — posso compartilhar alguns
   casos se quiser."]

**P: Tem garantia?**
R: [Política de garantia. Ex: "Sim, garantia de 7 dias para produtos digitais conforme
   o Código do Consumidor" ou "Não há garantia de devolução para serviços de mentoria —
   mas se por algum motivo a experiência não estiver sendo boa, conversamos."]

**P: Quanto tempo para ver resultado?**
R: [Resposta honesta e calibrada. Ex: "Os primeiros movimentos geralmente aparecem nas
   primeiras 4 semanas. Mudanças mais estruturais ocorrem entre 2–3 meses de trabalho
   consistente."]

**P: Você atende alguém que está começando do zero?**
R: [Política de pré-requisito. Quem o método serve e quem não serve. Ser específico.]

---

## Sobre o processo de entrada

**P: Como faço para começar?**
R: [Próximos passos exatos. Ex: "Você preenche um formulário de diagnóstico, depois
   marcamos uma conversa de 30 minutos para entender sua situação e verificar o fit.
   Se fizer sentido para os dois lados, apresento a proposta na mesma conversa."]

**P: Tem vaga disponível?**
R: [Como verificar disponibilidade. Ex: "Atualmente [sim/não]. Para confirmar,
   verifico a agenda e retorno em até 24h."]

**P: Posso fazer uma conversa antes de decidir?**
R: [Política de discovery call. Ex: "Sim — oferecemos uma conversa de diagnóstico de
   30 minutos sem compromisso. Você me conta sua situação, eu explico como trabalho,
   e a gente vê se faz sentido. Para agendar: [LINK OU INSTRUÇÃO]"]

**P: Qual é a diferença entre consultoria e mentoria?**
R: [Se o consultor oferece os dois: explicar a diferença prática. Ex: "Consultoria é
   pontual — você traz um problema, eu apresento a solução. Mentoria é contínua —
   trabalhamos juntos ao longo de meses, construindo sua autonomia progressivamente."]

**P: Você trabalha com contratos?**
R: [Política. Ex: "Sim, todos os clientes assinam um termo de serviço antes de iniciar.
   O documento é enviado por e-mail antes do pagamento."]

---

## Perguntas de escalação automática

As perguntas abaixo SEMPRE vão para [NOME DO CONSULTOR] — não tentar responder:

- Qualquer pedido de condição especial ou exceção à política (desconto, formato
  customizado, prazo diferente)
- Reclamações ou situações de insatisfação com o serviço
- Dúvidas específicas sobre clientes atuais e seus resultados
- Propostas de parceria, afiliação ou colaboração comercial
- Qualquer pergunta sobre situação jurídica ou contratual específica
- Prospects que demonstram urgência extrema ("preciso resolver isso amanhã")
- Qualquer situação que o agente não saiba responder com certeza

---

## Registro de atualizações

| Data | Mudança | Por quê |
|------|---------|--------|
| [DATA] | v1.0 — FAQ criado | Track B1 — Runa Intervenção |
```

---

## Guia de Calibração do FAQ (para o facilitador)

### Como conduzir o live exercise

O objetivo do live exercise é preencher o FAQ em 20 minutos — a velocidade é intencional.
Respostas espontâneas têm mais personalidade do que respostas escritas com calma.

**Sequência de facilitação:**

1. Compartilhar a tela com o template aberto
2. Perguntar cada Q em voz alta — o cliente responde em voz alta
3. Facilitador digita ou o cliente digita (dependendo da velocidade)
4. Para cada resposta: "Isso seu concorrente direto poderia responder igualmente?"
   → Se sim: "O que é único na sua versão dessa resposta?"
5. Continuar até ter pelo menos 20 entradas completas

**As 5 perguntas mais importantes para garantir (se o tempo apertar):**

| Prioridade | Pergunta | Por quê |
|-----------|----------|--------|
| 1 | Como faço para começar? | Prospect na borda de decisão — tem que ser perfeita |
| 2 | Qual é o investimento? | Pergunta mais frequente — vaga demais = lead esfria |
| 3 | Quais resultados posso esperar? | Define expectativa e pré-qualifica |
| 4 | Tem vaga disponível? | Urgência — resposta lenta = lead perdido |
| 5 | Quem é [NOME] e qual é a especialidade? | Primeira impressão do agente |

### Sinais de FAQ bem calibrado

- O consultor lê as respostas e pensa: "Eu diria exatamente isso"
- As respostas de preço não geram dúvida — são claras o suficiente para informar,
  vagas o suficiente para não eliminar prematuramente
- A seção de escalação automática cobre os casos que tiram o consultor do fluxo
  sem necessidade

### Erros mais comuns no FAQ

| Erro | Como identificar | Como corrigir |
|------|-----------------|--------------|
| Respostas genéricas | Poderia vir de qualquer consultor da área | Adicionar especificidade: números, casos, método próprio |
| Preço vago demais | Prospect não consegue nem saber se está na faixa | Dar pelo menos uma faixa ou piso ("a partir de...") |
| Preço exato demais | Remove toda a urgência de conversar | Usar tabela por formato, não valor único |
| Escalação mal definida | Agente tenta responder e inventa | Adicionar mais triggers à seção de escalação |
| Sem atualização | FAQ tem respostas desatualizadas (preço velho, produto descontinuado) | Criar protocolo mensal de revisão |

---

## Connections

- **Sessão que usa este artefato:** [[runa-intervencao-sessao-track-b1-chat-atendimento-neural|B1 — †CHAT I]]
- **Agente que consome este arquivo:** `agente-atendimento` → referencia `wiki/concepts/faq.md`
- **Próximo nível:** [[runa-intervencao-sessao-track-b2-chat-qualificacao-diagnostico|B2 — †CHAT II]] — qualificação profunda além do FAQ
