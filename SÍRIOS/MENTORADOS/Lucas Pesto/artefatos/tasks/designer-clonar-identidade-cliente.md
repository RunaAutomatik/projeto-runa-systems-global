---
comando: "*clonar-identidade [cliente]"
versao: "3.0"
---

# Task: *clonar-identidade — Clonar Identidade Visual de Cliente

## Trigger

`*clonar-identidade [cliente]`

Executar quando Lucas precisa registrar a identidade visual de um cliente novo ou atualizar
o brand kit de um cliente existente. Esta task cria a estrutura persistente que todos os
outros comandos do agente consultam.

---

## Pré-verificação (ANTES de qualquer ação)

### Passo 1 — Verificar se já existe brand kit

```
Verificar: pesto/brand-kit/[cliente]/

Se já existe:
  → Perguntar: "O brand kit de [cliente] já existe. Você quer:
     1. Atualizar com novas informações
     2. Substituir completamente (isso apaga as regras #NN existentes)
     3. Adicionar apenas as regras #NN sem alterar a identidade visual"
  → Aguardar resposta de Lucas antes de prosseguir

Se não existe:
  → Prosseguir normalmente para Fase 1
```

### Passo 2 — Confirmar o que Lucas tem em mãos

```
"Para clonar a identidade de [cliente], o que você tem disponível agora?

□ Referências visuais (fotos, posts, site, paleta)
□ Manual de identidade visual ou brand guide
□ Fontes usadas pelo cliente
□ Cores (HEX, Pantone, ou amostras visuais)
□ Tom e voz da marca (formal, descontraído, técnico, etc.)
□ Fotos do personagem/fundador para soul (se aplicável)
□ Posts existentes nas redes para análise de padrão"
```

Se Lucas já trouxe essas informações → ir direto para Fase 1.

---

## Fase 1 — Extrair Identidade Visual

### Passo 1 — Paleta de cores

```
Solicitar ou extrair:
→ Cor primária: HEX + nome descritivo (ex: "azul petróleo #1B3A5C")
→ Cor secundária: HEX + nome descritivo
→ Cor de acento: HEX + nome descritivo (se houver)
→ Fundo padrão: HEX (branco, escuro, neutro)
→ Cor de texto: HEX

Se Lucas não tem os HEX → pedir referência visual e descrever em texto
```

### Passo 2 — Tipografia

```
Solicitar ou extrair:
→ Fonte principal (display/headlines)
→ Fonte secundária (corpo de texto, se houver)
→ Peso preferido (Light, Regular, Bold, Black)
→ Estilo (Serif, Sans-serif, Script, Monospace)

Se Lucas não sabe as fontes → descrever o estilo tipográfico que percebe
nos materiais existentes (ex: "Clean sans-serif, geométrica, bold nos títulos")
```

### Passo 3 — Estilo visual geral

```
Definir em uma frase o estilo visual do cliente:
→ Complexidade: Minimal / Moderado / Rico
→ Tom visual: Sério / Leve / Vibrante / Editorial / Técnico
→ Elementos recorrentes: formas, texturas, ícones, patterns
→ Inspirações visuais: marcas ou referências que o cliente admira
```

### Passo 4 — Tom e voz da marca

```
Definir:
→ Como a marca fala (formal, coloquial, técnico, inspiracional)
→ O que a marca NUNCA diz (restrições de linguagem)
→ CTA preferido (Saiba mais / Entre em contato / Compre agora / etc.)
→ Emoji: usa ou não usa?
```

---

## Fase 2 — Registrar Regras Numeradas (#NN)

As regras #NN são instruções específicas do cliente que o agente aplica silenciosamente
em qualquer geração. São acumulativas — cada nova sessão pode adicionar mais regras.

### Formato de regra:

```
#01 — [instrução específica e objetiva]
#02 — [instrução específica e objetiva]
...
```

### Exemplos de regras comuns:

```
#01 — Nunca usar fundo branco puro — sempre usar off-white (#F5F5F2) ou a paleta da marca
#02 — Personagem sempre aparece à esquerda da composição, nunca centralizado
#03 — Fonte de headline sempre em caixa alta (uppercase)
#04 — Não usar filtros quentes — manter temperatura de cor fria
#05 — Incluir sempre o @handle do cliente como watermark discreto
```

### Coletar regras de Lucas:

```
"Quais são as regras inegociáveis para [cliente]?
Pode ser visual, de copy, de comportamento da marca, ou qualquer padrão que
você já aprendeu que não pode mudar.

Escreva cada uma em uma linha — eu registro com numeração automática."
```

---

## Fase 3 — Criar Estrutura no Brand Kit

### Schema de arquivos a criar:

```
pesto/brand-kit/[cliente]/
├── identity.md          ← identidade visual completa (paleta, tipografia, estilo, tom)
├── rules.md             ← regras numeradas #NN
└── soul.json            ← personagem/fundador (opcional — só se tiver soul Higgsfield)
```

### Conteúdo de `identity.md`:

```markdown
---
cliente: [nome]
atualizado: [data atual YYYY-MM-DD]
---

# Brand Kit — [Cliente]

## Paleta de Cores

| Função | Nome | HEX |
|--------|------|-----|
| Primária | [nome] | [HEX] |
| Secundária | [nome] | [HEX] |
| Acento | [nome] | [HEX] |
| Fundo | [nome] | [HEX] |
| Texto | [nome] | [HEX] |

## Tipografia

**Headline:** [fonte] — [peso]
**Corpo:** [fonte] — [peso]
**Estilo:** [Sans-serif / Serif / etc.]

## Estilo Visual

**Complexidade:** [Minimal / Moderado / Rico]
**Tom visual:** [Sério / Leve / Vibrante / Editorial / Técnico]
**Elementos recorrentes:** [descrição]
**Referências visuais:** [marcas ou estilos]

## Tom e Voz

**Como fala:** [formal / coloquial / técnico / inspiracional]
**Não usar:** [restrições de linguagem]
**CTA preferido:** [expressão]
**Emoji:** [usa / não usa]

## Instagram

**@handle:** [@handle do cliente]
**Conta:** [Personal / Business]
**Formato principal:** [Feed / Stories / Reels]
```

### Conteúdo de `rules.md`:

```markdown
---
cliente: [nome]
atualizado: [data atual YYYY-MM-DD]
---

# Regras — [Cliente]

#01 — [regra]
#02 — [regra]
#03 — [regra]
...

## Histórico

[data] — Versão inicial criada por Lucas
[data] — #NN adicionada: [descrição]
```

### Schema de `soul.json` (apenas se o cliente tem soul Higgsfield):

```json
{
  "cliente": "[nome do cliente]",
  "soul_name": "[nome do personagem — geralmente o nome do fundador]",
  "soul_id": "[UUID gerado pelo Higgsfield após treinamento]",
  "trained_at": "YYYY-MM-DD",
  "photos_used": [número de fotos no treinamento],
  "notes": "[observações sobre o personagem — ângulos que funcionam melhor, etc.]"
}
```

Se o cliente não tem soul → não criar o arquivo `soul.json`.
Soul é criado via `*criar-soul [cliente]` separadamente.

---

## Fase 4 — Review Gate

Antes de finalizar o brand kit:

- [ ] A paleta de cores está completa (mínimo 3 cores: primária, fundo, texto)?
- [ ] A tipografia está identificada (mesmo que descritiva, sem o nome exato da fonte)?
- [ ] O estilo visual está descrito em linguagem que o agente consegue usar num prompt?
- [ ] As regras #NN estão escritas de forma objetiva e acionável?
- [ ] O `identity.md` está salvo no caminho correto?
- [ ] O `rules.md` está salvo no caminho correto?

Se algum item falhar → completar antes de confirmar para Lucas.

---

## Fase 5 — Confirmação e Próximos Passos

```
"✅ Brand kit de [cliente] registrado.

Estrutura criada:
├── pesto/brand-kit/[cliente]/identity.md  — identidade visual
├── pesto/brand-kit/[cliente]/rules.md     — [N] regras #NN

[Exibir resumo da identidade visual + lista das regras]

---

Próximos passos disponíveis:
→ *criar-soul [cliente]  — treinar o personagem/fundador no Higgsfield (se aplicável)
→ *gerar-imagem [cliente] [brief]  — primeira geração usando o novo brand kit
→ *briefing [cliente]  — criar brief de carrossel para o Cleiton

Quer adicionar mais alguma regra ou ajustar algum dado?"
```

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Agente ignora identidade do cliente em gerações futuras | `identity.md` não existe no caminho certo | Verificar path `pesto/brand-kit/[cliente]/identity.md` |
| Regras #NN não são aplicadas | `rules.md` não existe ou está em path diferente | Confirmar path e carregar no Step 2 de qualquer task |
| Soul retorna erro de ID inválido | `soul.json` tem ID incorreto ou desatualizado | Verificar com `higgsfield show-generations` ou MCP `soul_list` |
| Brand kit incompleto bloqueando outras tasks | Lucas encerrou antes de preencher tudo | Registrar o que tem e marcar campos como `[PENDENTE]` |
