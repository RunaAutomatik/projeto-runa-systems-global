---
date: 2026-05-07
tags: [runa-intervencao, mentoria, sessao-08, lucas, pesto, cleiton, pipeline, carrossel]
project: runa-systems-global
type: session-scope
cliente: Lucas — Pesto (agência criativa)
status: planejando
---

# Runa Intervenção — Sessão 08: Primeiro Carrossel Completo

> **Data prevista:** 2026-05-07 (Quinta 14:30)
> **Objetivo:** Executar o pipeline completo Designer → Cleiton pela primeira vez

---

## Leitura antes da sessão (Arthur, leia antes de entrar na call)

Esta é a sessão de execução. O Cleiton está personalizado (S07). A skill de briefing está instalada (S07). Agora a gente fecha o loop pela primeira vez.

**Mentalidade desta sessão:**
Não é ensinar — é **fazer junto**. Lucas sai com um carrossel real na mão. Se o pipeline travar em algum ponto, a gente resolve ao vivo. Cada fricção é material para refinar o fluxo.

**Risco principal:**
O primeiro output do Cleiton raramente é perfeito. A calibração acontece aqui. Ter paciência para 2-3 iterações ao vivo é esperado e normal — isso NÃO é falha, é processo.

**O critério de sucesso desta sessão não é "carrossel perfeito" — é "pipeline funcionando".**

---

## BLOCO 1 — Escolher o Primeiro Carrossel (10 min)

### Critério de seleção
O primeiro carrossel precisa ser:
- Para a **própria Pesto** (não um cliente — menos pressão, mais liberdade para iterar)
- Tema simples: algo que Lucas já sabe o que quer dizer (não criar do zero)
- Formato: Capa + 4 slides (número ideal para primeira execução)

### Sugestão de tema se Lucas não tiver um
> "Os 3 erros que toda agência comete ao tentar usar IA"
- Tema familiar para Lucas (viveu os erros)
- Autoridade genuína (não precisa pesquisar)
- Formato de lista = mais fácil de estruturar no briefing

---

## BLOCO 2 — Executar a Skill de Briefing (15 min)

No Claude Code, com o Designer agent ativo:

```
/briefing-carrossel-pesto [tema escolhido] Pesto
```

Revisar o output junto com Lucas:
- Copy de cada slide faz sentido?
- Prompts de imagem estão no estilo certo?
- Formato de Capa e Slides corretos para o tema?

Fazer ajustes no brief antes de prosseguir. O brief é o insumo — se ele está errado, tudo downstream fica errado.

---

## BLOCO 3 — Gerar as Imagens (15 min)

Designer agent chama inference.sh para cada imagem do brief:

```bash
# Exemplo — Designer executa via Claude Code
infsh app run google/gemini-3-flash-image --input '{
  "prompt": "[prompt do brief]",
  "width": 1080,
  "height": 1080
}'
```

Verificar cada imagem gerada:
- Está no estilo esperado?
- Precisa de nova geração?
- Salvar na pasta designada (ex: `pesto/carrosséis/[data]-[tema]/imagens/`)

**Meta:** 1-2 imagens principais para a Capa. Slides internos podem ter imagem ou não (depende do formato).

---

## BLOCO 4 — Passar para o Cleiton (20 min)

No Claude Chat, projeto Cleiton:

```
[colar o brief completo]
[colar as imagens ou URLs das imagens geradas]

Formato: Capa Bold + Slides Clean × 4
```

Cleiton gera o HTML. Exportar cada slide via screenshot (1080×1080).

**Iteração esperada:**
- Provavelmente 1-2 ajustes no HTML (espaçamento, tamanho de fonte, posição de logo)
- Cada ajuste = feedback específico para o Cleiton: "mova o título 20px para cima", "aumente o padding lateral"
- Registrar os ajustes como regras no System Messenger: `#01 sempre padding lateral de X`, etc.

---

## BLOCO 5 — Fechar o Loop e Documentar (15 min)

### O que documentar após o primeiro carrossel
1. **Pasta de referência:** salvar os slides aprovados como referência visual futura
2. **Regras geradas:** quais ajustes foram necessários → viraram regras no System Messenger
3. **Tempo total:** quanto tempo levou o pipeline completo? (benchmark para medir evolução)
4. **Fricções encontradas:** o que travou? Como foi resolvido?

### Reflexão com Lucas
Pergunta para fazer ao final:
> "Compara esse processo com como você fazia carrossel antes. Quanto tempo levaria manualmente? O que mudou?"

Registrar a resposta — é material direto para produto (RUNA SYSTEMS).

---

## Próximas sessões (preview para Lucas)

| Sessão | Tema |
|--------|------|
| S09 (Terça/Quarta) | Escalar: segundo cliente, brand kit no sistema, Cleiton com múltiplas marcas |
| S10 (Quinta) | Automatizar: grade → briefing → imagens → carrossel em fluxo único |

---

## Fala de Fechamento

> "Lucas, você acabou de fazer em [tempo total] o que levaria [tempo manual]. Não foi perfeito na primeira tentativa — e não precisava ser. O sistema aprendeu. Cada regra que você adicionou no Cleiton é uma memória permanente. Próxima vez, vai sair melhor. Na décima, vai sair praticamente sem ajuste.
>
> Na próxima sessão, a gente escala isso para os seus clientes."

---

## Se o pipeline não funcionar completamente

**Plano B:** Fazer apenas a parte do Designer (brief + imagens) e deixar o Cleiton para início da S09.

Critério de desempate: se até os 45 min da sessão o brief e as imagens não estiverem prontos, parar ali e documentar os bloqueios para resolver antes da S09.

---

## Conexões

- **Sessão anterior:** [[runa-intervencao-sessao-07-lucas-pesto]]
- **Sessão 01 (base):** [[runa-intervencao-sessao-01-lucas-pesto]]
