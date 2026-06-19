---
comando: "*criar-brief [cliente] [tipo de peça]"
versao: "3.0"
---

# Task: *criar-brief — Criar Brief de Design

## Trigger

`*criar-brief [cliente] [tipo de peça]`

Executar quando Lucas quer criar um brief estruturado de design para um cliente da Pesto.

Tipos de peça suportados: carrossel, post único, stories, capa, banner, peça promocional.

---

## Pré-verificação (ANTES de qualquer ação)

1. Verificar se `pesto/brand-kit/[cliente]/` existe.
   - Se não existe → avisar Lucas e oferecer criar o brand kit via *clonar-identidade-cliente antes de continuar.
2. Carregar regras numeradas (#NN) do cliente se existirem.
3. Confirmar que Lucas tem clareza sobre o objetivo da peça:
   - Qual canal? (Feed Instagram, Stories, LinkedIn, WhatsApp)
   - Qual objetivo? (awareness, conversão, engajamento, institucional)

---

## Fase 1 — Coletar Informações do Brief

### Passo 1 — Contexto da peça

```
"Para criar o brief de [tipo de peça] para [cliente], preciso saber:

1. Qual o tema/assunto da peça?
2. Qual o objetivo? (ex: divulgar lançamento, engajar seguidores, anunciar serviço)
3. Tem copy pronta ou preciso sugerir a mensagem principal?
4. Tem imagens/fotos do cliente para usar? (ou geramos via Higgsfield?)
5. Tem referências visuais de estilo? (ou uso o brand kit existente)"
```

Se Lucas já trouxe todas essas informações → pular e ir direto para Fase 2.

### Passo 2 — Carregar brand kit do cliente

Ler `pesto/brand-kit/[cliente]/` para extrair:
- Paleta de cores (se documentada)
- Tipografia (se documentada)
- Tom e voz da marca
- Regras numeradas #NN

Se brand kit não existe ou está incompleto → usar informações fornecidas por Lucas + notar no brief que a identidade visual precisa ser validada.

---

## Fase 2 — Construir o Brief

### Estrutura padrão do brief de design

```markdown
# Brief de Design — [Cliente] — [Tipo de Peça]

**Data:** [data atual]
**Cliente:** [nome do cliente]
**Formato:** [tipo de peça] — [canal]
**Objetivo:** [objetivo em 1 frase]

---

## Mensagem Principal

**Headline:** [headline principal da peça]
**Subtítulo/apoio:** [texto secundário se houver]
**CTA:** [chamada para ação]

---

## Identidade Visual

**Paleta:** [cores principais + HEX se disponível]
**Tipografia:** [fontes se disponível / ou "seguir padrão [cliente]"]
**Estilo:** [descritivo da estética — ex: minimalista, vibrante, corporativo, editorial]

---

## Conteúdo Visual

**Imagens:** [quais imagens usar — do cliente, do banco, geradas via Higgsfield]
**Elementos gráficos:** [ícones, formas, texturas se necessário]
**Texto na arte:** [o que deve aparecer como texto na imagem]

---

## Especificações Técnicas

**Dimensões:** [tamanho em px — ex: 1080x1080 para feed / 1080x1920 para stories]
**Formato de entrega:** [JPG/PNG/PDF]
**Quantidade de versões:** [1 versão / X variações]

---

## Referências e Restrições

**Referências de estilo:** [links ou descrição]
**Não fazer:** [elementos que devem ser evitados para esse cliente]
**Regras do cliente:** [lista das regras #NN aplicáveis]
```

---

## Fase 3 — Review Gate

Antes de salvar o brief, verificar:

- [ ] O brief tem todas as informações necessárias para executar sem perguntas adicionais?
- [ ] As regras #NN do cliente foram aplicadas e listadas?
- [ ] As especificações técnicas estão corretas para o canal de destino?
- [ ] A mensagem principal está alinhada com o objetivo da peça?

Se algum item estiver incompleto → completar antes de seguir.

---

## Fase 4 — Salvar Brief

STEP 1: Create directory if needed
- Path: `pesto/briefs/[cliente]/`

STEP 2: Save brief file
- File: `pesto/briefs/[cliente]/brief-[YYYY-MM-DD].md`
- Content: the complete brief from Fase 2

STEP 3: Confirm to Lucas

```
"✅ Brief de [tipo de peça] para [cliente] salvo.

Arquivo: pesto/briefs/[cliente]/brief-[YYYY-MM-DD].md

[EXIBIR O BRIEF COMPLETO AQUI]

---

Próximos passos:
→ Para gerar uma imagem com este brief: use *gerar-imagem [cliente]
→ Para gerar um carrossel: use *briefing [cliente]
→ Para ajustar algum ponto: diga o que quer mudar"
```

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Brief muito vago | Falta de informações sobre objetivo | Voltar ao Passo 1 e solicitar objetivo claro |
| Identidade visual inconsistente | Brand kit incompleto ou inexistente | Oferecer *clonar-identidade-cliente antes de continuar |
| Especificações técnicas erradas | Canal não definido claramente | Confirmar canal de destino antes de definir dimensões |
| Regras #NN ignoradas na geração | Regras #NN não foram incluídas no brief | Sempre verificar e incluir regras do cliente no brief |
