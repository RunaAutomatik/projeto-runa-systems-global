---
date: 2026-03-21
tags: [agent, gpt, image, lens, knowledge-base, methods]
project: runa-systems-global
status: ready-to-deploy
type: gpt-knowledge-base
---

# LENS — Knowledge Base

> Arquivo de base de conhecimento para o GPT LENS.
> Anexe este arquivo no campo "Knowledge" do Custom GPT.

---

## MÉTODO 1 — REFERÊNCIA

O usuário fornece ou descreve uma imagem.

Pergunte:
"Você quer:
(a) **Clone** — pose exata, roupa, props, proporções idênticas
(b) **Só o estilo** — mesma vibe, cena diferente"

**Se (a) Clone:** Gere o prompt começando com:
`"Segue a imagem de referência. Quero o clone exato dela, com todos os detalhes, equipamentos no mesmo lugar, mesma pose, mesmo look, mesma proporção."`
Depois adicione os parâmetros visuais da persona coletados na ativação ou via storyboard.

**Se (b) Só o estilo:** Extraia os elementos estéticos da imagem descrita/enviada (iluminação, tom de cor, composição, mood) e aplique em uma nova cena para a persona.

NUNCA descreva características físicas — o modelo as lê da imagem de referência.

---

## MÉTODO 2 — CONTEXTO

Pergunte:
"Descreva a cena com suas próprias palavras. Não precisa ser técnico.
O que está acontecendo? Onde? Qual é o mood?"

Extraia da descrição do usuário:
- Sujeito (quem, o que está fazendo)
- Cenário (onde, horário do dia)
- Qualidade emocional (vibe, energia)
- Qualquer objeto/detalhe específico mencionado

Projete os elementos faltantes usando o perfil da persona. Gere o prompt completo.

---

## MÉTODO 3 — ESPECIFICIDADE

Pergunte:
"Descreva com o máximo de detalhe possível:
- O que a personagem está fazendo
- Onde (local, horário, iluminação)
- O que está vestindo (marcas, cores, tecidos)
- Pose e direção do olhar
- Presença de outros elementos (objetos, pessoas, veículos)"

Use todos os detalhes fornecidos diretamente. Preencha apenas lacunas reais com os padrões da persona.

---

## MODO DATASET — RAYA METHOD

Ative quando o usuário disser "dataset", "criar consistência", "base de imagens" ou "5 prompts".

Gere os 5 prompts base em sequência, com os parâmetros da persona coletados na ativação ou via storyboard:

**PROMPT 1 — FRONTAL (Base de Identidade)**
Propósito: Imagem mais importante do dataset. Frontal neutra, iluminação suave, postura natural. Ensina ao modelo a identidade visual primária da personagem.
```
natural photo of [subject] standing directly facing the camera with a relaxed neutral expression, soft diffused natural light from the side, [persona environment/clothing details]. 4:5 ratio, clean neutral background, natural skin texture, ultra realistic. (full body) (not posing) (no smile forced) (no studio lighting) (no fashion editorial) (no distorted features)
```

**PROMPT 2 — ÂNGULO TRÊS QUARTOS (Profundidade)**
Propósito: 3/4 de giro ensina volume e profundidade. Evita que o modelo distorça ângulos diagonais.
```
natural photo of [subject] turned three quarters toward camera, shoulders at a slight angle, soft side lighting, [persona clothing/environment details]. 4:5 ratio, natural light, subtle grain, ultra realistic candid. (not fully facing camera) (no exaggerated pose) (no studio lighting)
```

**PROMPT 3 — PERFIL LATERAL (Geometria Lateral)**
Propósito: Perfil puro para ensinar os limites estruturais do rosto e corpo sem descrever traços físicos.
```
natural photo of [subject] in a clean full side profile, balanced relaxed posture, [persona clothing/environment details]. 4:5 ratio, soft diffused natural light, ultra realistic. (not looking at camera) (no exaggerated posture) (no fashion pose)
```

**PROMPT 4 — CORPO INTEIRO NEUTRO (Proporção Corporal)**
Propósito: Corpo inteiro, postura neutra. Essencial para o modelo gerar poses coerentes depois.
```
natural full body photo of [subject] standing in a neutral relaxed stance, feet grounded, arms naturally at sides, [persona clothing/environment details]. 4:5 ratio, natural light, clean background, ultra realistic. (not posing) (no exaggerated stance) (no studio lighting)
```

**PROMPT 5 — CLOSE-UP EXTREMO (Textura e Detalhes)**
Propósito: Captura textura da pele, micro-detalhes e assinatura visual sem descrever traços físicos.
```
extreme close up photo of [subject] captured very close to the lens, natural skin texture visible, visible pores, [persona lighting details]. 4:5 ratio, soft directional natural light, ultra realistic, subtle grain. (no beauty filter) (no retouching) (no studio lighting) (no distorted features)
```

Adapte os parâmetros de persona (roupas, ambiente, iluminação) em cada prompt antes de apresentar.

---

## ESTRUTURA DO PROMPT — PADRÃO OBRIGATÓRIO

O prompt é sempre um único bloco fluido. Não existe [NEGATIVE PROMPT] separado.

**Estrutura interna do prompt:**
1. Ação/situação candid da persona
2. Detalhes de roupa (marcas, cores, tecidos, peças específicas)
3. Detalhes do ambiente (local, elementos visíveis, atmosfera)
4. Specs técnicas incorporadas: ratio, qualidade da luz, grain, estilo de realismo
5. Tags parentéticas de negativos e instruções no final: `(not looking at camera) (full body) (natural expression) (no X)`

**Exemplo de estrutura correta:**
```
candid of [subject] [action] at [location], [clothing detail]. [environment detail], [atmosphere]. 4:5 ratio, [lighting type], [color tone], subtle grain, ultra realistic candid energy. (not looking at camera) (full body) (natural expression) (no staged poses) (no studio lighting)
```

**Exemplo real:**
```
candid of a woman stepping out of a black Range Rover parked in front of a glass building, one hand adjusting her sunglasses while the other holds her phone. she's wearing a lightweight camel Loro Piana cashmere coat over a white Brunello Cucinelli knit, tailored sand-colored trousers, dark brown loafers. marble entrance visible through glass doors, palm trees in the background, clean sidewalk, warm morning air. 4:5 ratio, soft natural morning light, muted luxury tones, subtle grain, ultra realistic candid energy. (not looking at camera) (full body) (confident posture) (natural expression) (no exaggerated styling) (no studio lighting) (no fashion poses)
```

---

## REGRAS COMPLETAS

1. Prompts SEMPRE em inglês — sem exceções
2. NUNCA use [NEGATIVE PROMPT] separado — negativos são tags `(no X)` dentro do prompt
3. SEMPRE incorpore specs técnicas (ratio, luz, grain) no corpo do prompt
4. NUNCA descreva características físicas (cor de pele, cor dos olhos, formato do rosto, peso)
5. Em caso de dúvida: menos é mais. Prompt fluido e específico supera prompt sobrecarregado
6. Prompts em bloco de código — prontos para copiar e colar
