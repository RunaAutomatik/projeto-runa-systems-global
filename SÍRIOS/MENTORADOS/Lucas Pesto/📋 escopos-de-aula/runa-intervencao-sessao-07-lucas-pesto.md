---
date: 2026-05-06
tags: [runa-intervencao, mentoria, sessao-07, lucas, pesto, cleiton, carrossel, formatos]
project: runa-systems-global
type: session-scope
cliente: Lucas — Pesto (agência criativa)
status: planejando
---

# Runa Intervenção — Sessão 07: Cleiton Completo

> **Data prevista:** 2026-05-06 (Terça ou Quarta, noite)
> **Objetivo:** Personalizar completamente o System Messenger do Cleiton com os formatos extraídos das referências do Lucas

---

## Leitura antes da sessão (Arthur, leia antes de entrar na call)

Esta é a sessão de personalização. Lucas fez o homework — trouxe prints de referências. O objetivo é transformar esses prints em templates documentados dentro do System Messenger do Cleiton.

**O que diferencia esta sessão:**
- Não é técnica — é editorial. Lucas está definindo o **gosto visual** da Pesto em carrossel.
- A qualidade do System Messenger final determina a qualidade de TODOS os carrosséis futuros.
- Esta sessão é a "calibração do Cleiton" — equivalente à calibração do Designer feita na S05.

**Foco do facilitador:**
Não deixar Lucas generalizar. Cada decisão visual deve ser registrada como uma variável concreta: cor de fundo, tipografia, posição do elemento, densidade de informação, proporção de imagem vs texto.

---

## Pré-checklist (verificar no início da call)

- [ ] Lucas trouxe prints das referências de carrosseis?
- [ ] Classificou em: gosto / não gosto / quero a arquitetura, não a identidade?
- [ ] Tem pelo menos 3 referências distintas de **Capa** identificadas?
- [ ] System Messenger do Cleiton ainda está acessível no Claude Chat?

Se o homework não foi feito: pausar. Fazer ao vivo com Lucas buscando referências no Instagram. Vale 20 min de sessão — é o insumo obrigatório.

---

## BLOCO 1 — Extração de Referências (30 min)

### Objetivo
Transformar os prints em documentação estruturada de estilos visuais.

### Passo a passo

**1. Executar a skill `extract-content`**

Em Claude Code, para cada referência que Lucas trouxe:
```
/extract-content [imagem do carrossel de referência]
```

A skill vai extrair:
- Estrutura do layout (colunas, proporções, hierarquia)
- Tipografia aparente (peso, tamanho relativo, caixa)
- Paleta de cores (fundo, texto, destaque)
- Densidade: minimalista / médio / denso
- Estilo geral: editorial / tecnológico / emocional / informacional

**2. Categorizar os resultados**

Com as extrações em mãos, ajudar Lucas a classificar:
- **Formatos de Capa:** quantos estilos distintos existem? (meta: 3-4)
- **Formatos de Slide:** quantos estilos distintos? (meta: 4-6)
- **O que une todos:** elementos de marca inegociáveis da Pesto

**3. Nomear os formatos**

Dar nomes que o Lucas vai conseguir evocar naturalmente:
- Ex: "Capa Bold" (texto grande, fundo escuro, imagem cortada)
- Ex: "Capa Magazine" (layout split, foto esquerda, texto direita)
- Ex: "Slide Clean" (muito branco, tipografia pequena, dado central)
- Ex: "Slide Statement" (frase grande, sem imagem, cor sólida)

---

## BLOCO 2 — Documentação no System Messenger do Cleiton (30 min)

### Objetivo
Atualizar o System Messenger do Cleiton com todas as variáveis definidas.

### Estrutura do System Messenger (completar ao vivo)

```markdown
# Cleiton — Design Executor de Carrossel

## Identidade
Você é Cleiton. Você não pensa — você executa. Você recebe um brief estruturado e 
imagens prontas, e entrega HTML de carrossel pronto para exportação.

## Marca Pesto — Variáveis Fixas
- Cores: [paleta Lucas — ex: #1A1A1A, #F5F0E8, #FF4500]
- Tipografia: [fonte principal + pesos usados]
- Logo: sempre canto [posição] no tamanho [N]px
- Tom visual: [ex: sóbrio, editorial, sem excesso de elementos]
- O que NUNCA fazer: [ex: gradientes, sombras em excesso, clipart, stock photos genérico]

## Formatos de Capa Disponíveis
### Capa Bold
[Descrição detalhada do layout — posição de cada elemento, proporções, cores]
### Capa Magazine
[...]
### Capa [Nome]
[...]

## Formatos de Slide Disponíveis
### Slide Clean
[...]
### Slide Statement
[...]
### Slide [Nome]
[...]

## Como Receber o Brief
Você receberá sempre:
1. Tema do carrossel + objetivo
2. Pasta de imagens geradas (URL ou base64)
3. Copy de cada slide (título + subtítulo + body)
4. Formato solicitado: "Capa [Nome]" + "Slides [Nome]"

## Output Esperado
Arquivo HTML único com todos os slides. CSS embutido. Sem dependências externas.
Slides 1080×1080px (Instagram square). Exportável via screenshot.
```

---

## BLOCO 3 — Instalação da Skill de Carrossel no Designer (20 min)

### Objetivo
Criar a skill que o Designer (Claude Code) usará para gerar o brief estruturado para o Cleiton.

### Skill a criar: `briefing-carrossel-pesto`

Trigger: `/briefing-carrossel [tema] [cliente]`

Output da skill:
```markdown
# Brief de Carrossel — [Cliente] — [Tema]

## Objetivo do carrossel
[uma frase]

## Formato
- Capa: [nome do formato]
- Slides: [nome do formato] × [N slides]

## Copy por slide
### Slide 1 — Capa
Título: [...]
Subtítulo: [...]

### Slide 2
[...]

## Imagens necessárias
### Imagem 1 (Capa)
Prompt para nano-banana: [prompt completo]
Dimensão: 1080×1080

### Imagem N
[...]

## Instrução para o Cleiton
Usar formato [Capa X] + [Slides Y]. Paleta padrão Pesto. Entregar HTML único.
```

### Como instalar
```
/create-skill briefing-carrossel-pesto
```
Ao longo da criação, usar o próprio Lucas para validar se o output faz sentido na prática.

---

## Fala de Fechamento (se tudo correr bem)

> "Lucas, agora o Cleiton tem personalidade. Ele sabe o que a Pesto parece visualmente.
>
> Na quinta, a gente vai usar ele pela primeira vez de verdade. O Designer gera o brief e as imagens. Você cola no Cleiton. O carrossel sai pronto.
>
> Essa é a Vitória da Semana que você mencionou."

---

## Se a sessão for mais curta que o esperado

Prioridade de execução:
1. **Extração de referências** (inegociável — sem isso, o Cleiton não funciona)
2. Documentação básica no System Messenger (ao menos Capa + 2 estilos de Slide)
3. Skill de briefing (pode ficar para S08 se necessário)

---

## Conexões

- **Sessão anterior:** [[runa-intervencao-sessao-06-lucas-pesto]]
- **Próxima:** [[runa-intervencao-sessao-08-lucas-pesto]]
