---
comando: "*briefing [cliente]"
versao: "3.0"
---

# Task: *briefing — Gerar Brief de Carrossel

## Trigger

`*briefing [cliente]`

Executar para criar brief completo de carrossel Instagram para um cliente específico da Pesto.
O output é um brief estruturado salvo localmente em `pesto/briefs/[cliente]/`.

---

## Pré-verificação (ANTES de qualquer ação)

### Passo 1 — Grade editorial

Verificar se existe `pesto/grade-editorial/semana-[N].md`:

```
Localizar grade da semana atual:
→ pesto/grade-editorial/semana-[número_da_semana].md

Se existe → ler e identificar qual carrossel está programado para [cliente]
Se não existe → informar Lucas: "Não encontrei a grade editorial desta semana. 
Criamos o brief sem referência à grade, ou você me passa o tema do carrossel?"
```

### Passo 2 — Brand kit do cliente

Verificar `pesto/brand-kit/[cliente]/`:
- Regras numeradas (#NN)
- Identidade visual (paleta, tipografia, tom)
- Soul ID (se o carrossel vai ter o personagem do cliente)

### Passo 3 — Confirmar contexto com Lucas (se necessário)

```
"Para o carrossel de [cliente], confirme:
1. Qual o tema/assunto desta semana?
2. Tem um objetivo específico? (educar, engajar, vender, posicionar)
3. Tem referência de estilo ou sigo o padrão do brand kit?
4. Vai ter o personagem do [cliente] nas imagens? (Soul Character)"
```

Se a grade editorial já tem essas informações → não perguntar.

---

## Fase 1 — Definir Estrutura do Carrossel

### Passo 1 — Escolher número de slides

| Objetivo | Slides recomendados |
|----------|-------------------|
| Educativo (lista, passo a passo) | 7–10 slides |
| Posicionamento / reflexão | 5–7 slides |
| Oferta / lançamento | 5–6 slides |
| Institucional / apresentação | 4–6 slides |

### Passo 2 — Definir estrutura narrativa

```
Slide 1 (Capa): Hook visual + headline que gera curiosidade
Slide 2: Problema / contexto / tensão
Slide 3–N-1: Conteúdo / desenvolvimento (um ponto por slide)
Slide N-1: CTA ou ação
Slide N (opcional): Verso — repetição do branding / contato
```

---

## Fase 2 — Construir o Brief

### Bloco 1 — Cabeçalho do brief

```markdown
# Brief de Carrossel — [Cliente] — [Tema]

**Data:** [data atual]
**Cliente:** [nome]
**Conta Instagram:** [@handle se Lucas informou]
**Tema:** [tema do carrossel]
**Objetivo:** [objetivo em 1 frase]
**Número de slides:** [N]
```

### Bloco 2 — Identidade visual

```markdown
## Identidade Visual

**Paleta:** [cores + HEX se disponível, ou "seguir brand kit [cliente]"]
**Tipografia:** [fontes, ou "seguir padrão [cliente]"]
**Estilo visual:** [descritivo — ex: clean e minimalista / escuro e editorial / vibrante e dinâmico]
**Soul Character:** [SIM — usar soul_id: [id] / NÃO — sem personagem]
```

### Bloco 3 — Slide a slide

```markdown
## Conteúdo — Slide a Slide

### Slide 1 — Capa
**Headline:** [headline forte — gera parada do scroll]
**Visual:** [descrição da imagem/visual — o que deve ser gerado ou usado]
**Texto na arte:** [somente o que aparece como texto na imagem]

### Slide 2 — [Nome do slide]
**Headline:** [headline do slide]
**Copy:** [texto do corpo se houver]
**Visual:** [descrição visual]

[... repetir para cada slide ...]

### Slide [N] — CTA
**Headline:** [chamada para ação]
**Ação:** [o que o seguidor deve fazer — comentar, salvar, clicar no link, etc.]
**Visual:** [visual de encerramento]
```

### Bloco 4 — Caption

```markdown
## Caption (legenda do post)

**Linha de abertura (hook):** [primeira linha que aparece antes do "ver mais"]
**Corpo:** [desenvolvimento em 3–5 parágrafos curtos]
**CTA:** [ação final]
**Hashtags:** [se relevante para o cliente — ou deixar em branco para Lucas definir]
```

### Bloco 5 — Especificações técnicas

```markdown
## Especificações Técnicas

**Formato:** Carrossel Instagram
**Dimensões:** 1080x1080px (feed quadrado)
**Slides:** [N] imagens
**Entrega:** PNG ou JPG de cada slide + caption em .txt
```

### Bloco 6 — Regras e restrições do cliente

```markdown
## Regras do Cliente [Nome]

[Listar regras #NN aplicáveis ao carrossel]
#01 — [regra]
#02 — [regra]
...

**Não fazer:** [elementos visuais ou de copy que devem ser evitados]
```

---

## Fase 3 — Review Gate

Antes de entregar o brief, verificar:

- [ ] O hook do Slide 1 é forte o suficiente para parar o scroll?
- [ ] A narrativa flui de forma lógica do problema para a solução?
- [ ] O CTA é claro e tem uma única ação?
- [ ] As regras #NN do cliente estão listadas e aplicadas?
- [ ] As especificações técnicas correspondem ao feed do Instagram do cliente?
- [ ] O brief é completo o suficiente para executar sem perguntas adicionais?

Se algum item falhar → ajustar antes de apresentar.

---

## Fase 4 — Salvar Brief e Upload Canva

STEP 1: Create directory if needed
- Path: `pesto/briefs/[cliente]/`

STEP 2: Save brief file
- File: `pesto/briefs/[cliente]/brief-[YYYY-MM-DD].md`
- Content: the complete brief from Fase 2

STEP 3: Confirm to Lucas

```
"✅ Brief de carrossel para [cliente] pronto.

Arquivo: pesto/briefs/[cliente]/brief-[YYYY-MM-DD].md

[EXIBIR O BRIEF COMPLETO]

Quer ajustar algum slide ou o hook antes de gerar as imagens?"
```

STEP FINAL: Upload to Canva (per slide generated)

If Lucas proceeds to generate slide images after the brief:

1. For each slide image generated, call `mcp__claude_ai_Canva__upload-asset-from-url` with `asset_url = [slide_image_url]`
2. On success → present to Lucas:
   "Slide [N] disponível no Canva: [canva_asset_url]."
3. If MCP unavailable or call fails → skip silently, present only:
   "Slide [N] gerado: [direct_url]"

---

## Modo Autônomo (se Lucas pedir geração sem interação)

Se Lucas disser "gera direto" ou "sem perguntas":

1. Ler grade editorial da semana atual em `pesto/grade-editorial/semana-[N].md`
2. Identificar o carrossel do cliente na grade
3. Ler brand kit completo do cliente
4. Construir o brief completo aplicando todas as regras #NN
5. Apresentar o brief pronto — sem etapas intermediárias de confirmação

Se a grade não existir → pausar e informar Lucas que não é possível executar em modo autônomo sem a grade editorial.

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Slides gerados fora do estilo do cliente | Regras #NN não foram incluídas | Sempre verificar e listar as regras no Bloco 6 |
| Narrativa sem coerência | Slides sem fio condutor | Usar estrutura problema → desenvolvimento → CTA |
| Caption fraca | Hook sem tensão | Começar com pergunta, dado, ou provocação |
| Grade não encontrada | Caminho incorreto ou semana errada | Verificar numeração da semana em `pesto/grade-editorial/` |
