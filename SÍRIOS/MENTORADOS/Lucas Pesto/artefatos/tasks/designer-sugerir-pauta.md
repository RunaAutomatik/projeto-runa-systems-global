---
comando: "*sugerir-pauta [cliente]"
versao: "3.0"
---

# Task: *sugerir-pauta — Sugerir Pautas da Semana

## Trigger

`*sugerir-pauta [cliente]`

Executar para sugerir pautas de conteúdo para a semana de um cliente específico da Pesto.
As sugestões são baseadas no brand kit do cliente e na grade editorial existente.

---

## Pré-verificação (ANTES de qualquer ação)

### Passo 1 — Confirmar o cliente

Se o cliente não foi fornecido no comando:

```
"Para sugerir pautas, qual cliente da Pesto devo usar?
Liste os clientes disponíveis ou diga o nome."
```

Verificar se `pesto/brand-kit/[cliente]/` existe:
- Se não existe → avisar: "Não encontrei o brand kit de [cliente]. Quer criar com `*clonar-identidade [cliente]` antes de sugerir pautas?"
- Se existe → continuar.

### Passo 2 — Carregar brand kit do cliente

Ler os dois arquivos:
- `pesto/brand-kit/[cliente]/identity.md` → tom, estilo visual, formatos habituais
- `pesto/brand-kit/[cliente]/rules.md` → regras numeradas (#NN)

Aplicar silenciosamente durante toda a task. Não exibir a lista de regras para Lucas.

### Passo 3 — Verificar grade editorial ativa

Detectar a semana atual e procurar:
`pesto/grade-editorial/semana-[N].md`

```
Se existe → ler a grade e identificar:
  - Pautas já alocadas para [cliente]
  - Formatos já utilizados na semana
  - Lacunas sem pauta definida

Se não existe → continuar sem referência de grade
  (as sugestões serão baseadas apenas no brand kit)
```

---

## Fase 1 — Gerar Sugestões de Pauta

Gerar 5 sugestões de pauta. Cada sugestão deve:
- Ter um formato diferente das outras (evitar 5 carrosseis seguidos)
- Ser viável dentro das regras #NN do cliente
- Ter um hook claro e específico

### Formato de cada sugestão

```
Pauta [N]: [título da pauta]
Formato: [carrossel | post | reel | capa | stories]
Tema: [tema central — o que o conteúdo comunica]
Hook: [primeira linha que para o scroll — específica, não genérica]
Modelo recomendado: [opção do menu de geração]
Regras aplicáveis: [#NN — regra | #NN — regra]
```

### Modelo recomendado — referência

| Formato do conteúdo | Modelo recomendado |
|--------------------|--------------------|
| Post com personagem do cliente | nano_banana_flash com soul |
| Post sem personagem | nano_banana_flash |
| Capa editorial premium | gpt_image_2 |
| Carrossel (capa) | nano_banana_flash ou gpt_image_2 |
| Reel | seedance_2_0 |

### Critérios de qualidade para cada sugestão

- [ ] O hook é específico (evitar "Você sabia que..." genérico)
- [ ] O formato faz sentido para o objetivo do conteúdo
- [ ] As regras #NN aplicáveis foram identificadas
- [ ] A sugestão é diferente do que já está na grade (se grade existe)

---

## Fase 2 — Apresentar as Sugestões

```
"✅ 5 sugestões de pauta para [cliente] esta semana:

---

PAUTA 1: [título]
Formato: [formato]
Tema: [tema]
Hook: "[hook]"
Modelo recomendado: [modelo]
Regras: [#NN] [#NN]

---

PAUTA 2: [título]
...

---

[repetir para todas as 5 pautas]

---

Quer adicionar alguma à grade ou gerar alguma diretamente?
→ Para adicionar à grade: diga quais números quer incluir
→ Para gerar agora: diga o número da pauta e uso `*gerar-imagem` ou `*gerar-video-curto`"
```

---

## Fase 3 — Ação pós-sugestão

### Se Lucas quer adicionar à grade:

```
"Adicionando as pautas [N, N, N] à grade da semana [X].
Vou atualizar pesto/grade-editorial/semana-[X].md"
```

Abrir o arquivo de grade e inserir as pautas nos slots disponíveis.
Se a grade não existe → informar: "A grade da semana [X] não existe ainda. Quer que eu crie com `*gerar-grade`?"

### Se Lucas quer gerar diretamente:

Executar o task correspondente:
- Imagem → `*gerar-imagem [cliente] [descrição baseada na pauta]`
- Vídeo → `*gerar-video-curto [cliente] [descrição]`
- Carrossel → `*briefing [cliente]` (com o tema da pauta como input)

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Brand kit não encontrado | Cliente sem pasta em pesto/brand-kit/ | Oferecer *clonar-identidade antes de continuar |
| Sugestões genéricas | identity.md sem informações suficientes | Pedir ao Lucas que complete o brand kit do cliente |
| Pauta repetida na grade | Grade não foi lida antes de sugerir | Sempre verificar grade antes de gerar sugestões |
| Hook sem especificidade | Instrução vaga | Reescrever hook com dado concreto ou situação específica |
