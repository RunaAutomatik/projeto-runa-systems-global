---
comando: "*gerar-grade [semana-N] [clientes...]"
versao: "3.0"
---

# Task: *gerar-grade — Gerar Grade Editorial da Semana

## Trigger

`*gerar-grade [semana-N] [clientes...]`

Exemplos:
- `*gerar-grade semana-20 joana carol pedro`
- `*gerar-grade semana-21` (Lucas informa os clientes interativamente)

Executar para criar a grade editorial semanal da Pesto com os slots de conteúdo por cliente.

---

## Pré-verificação (ANTES de qualquer ação)

### Passo 1 — Confirmar número da semana

Se não fornecido no comando:

```
"Qual é o número da semana? (ex: semana-20)
Datas de referência: segunda a domingo."
```

Verificar se já existe `pesto/grade-editorial/semana-[N].md`:
- Se existe → avisar: "A grade da semana [N] já existe. Quer sobrescrever ou editar slots específicos?"
- Se não existe → criar.

### Passo 2 — Confirmar lista de clientes

Se não fornecida no comando:

```
"Quais clientes incluir na grade da semana [N]?
Liste os nomes (os que tiverem brand kit em pesto/brand-kit/)."
```

Para cada cliente informado, verificar se `pesto/brand-kit/[cliente]/` existe:
- Se não existe → avisar: "[Cliente] não tem brand kit. Pulando — quer criar antes?"
- Se existe → incluir na grade.

---

## Fase 1 — Calcular Datas da Semana

Identificar o intervalo de datas para semana-[N]:
- Segunda-feira = início da semana
- Domingo = fim da semana

Formato de exibição nas células: `Seg | Ter | Qua | Qui | Sex | Sáb | Dom`

---

## Fase 2 — Construir Grade

### Estrutura da grade por cliente

Para cada cliente, criar uma seção com 5 slots de conteúdo (Seg a Sex):

```markdown
## [Cliente]

| Dia | Formato | Pauta | Modelo | Status |
|-----|---------|-------|--------|--------|
| Seg | carrossel | [pauta] | nano_banana_flash | ⬜ pendente |
| Ter | post | [pauta] | nano_banana_flash | ⬜ pendente |
| Qua | reel | [pauta] | seedance_2_0 | ⬜ pendente |
| Qui | stories | [pauta] | nano_banana_flash | ⬜ pendente |
| Sex | capa | [pauta] | gpt_image_2 | ⬜ pendente |
```

### Regras de distribuição de formatos

| Dia | Formato padrão recomendado |
|-----|--------------------------|
| Segunda | carrossel (maior alcance educativo) |
| Terça | post estático ou reel curto |
| Quarta | reel ou stories |
| Quinta | post ou carrossel |
| Sexta | capa ou post de posicionamento |

Ajustar conforme brand kit do cliente — se o identity.md indicar preferência por formato específico, priorizar.

### Preenchimento de pautas

Se Lucas não forneceu pautas específicas: deixar "[a definir]" nas células de pauta.
Se Lucas forneceu pautas: distribuir pelos slots conforme indicado.

Não inventar pautas — apenas distribuir o que foi fornecido ou marcar como "[a definir]".

---

## Fase 3 — Montar o Arquivo Completo

### Formato do arquivo de grade

```markdown
---
semana: [N]
periodo: [data início] – [data fim]
clientes: [[cliente1], [cliente2], ...]
atualizado: [YYYY-MM-DD]
---

# Grade Editorial — Semana [N] ([data início] – [data fim])

---

## [Cliente 1]

| Dia | Formato | Pauta | Modelo | Status |
|-----|---------|-------|--------|--------|
| Seg | carrossel | [pauta] | nano_banana_flash | ⬜ pendente |
| Ter | post | [a definir] | nano_banana_flash | ⬜ pendente |
| Qua | reel | [a definir] | seedance_2_0 | ⬜ pendente |
| Qui | stories | [a definir] | nano_banana_flash | ⬜ pendente |
| Sex | capa | [a definir] | gpt_image_2 | ⬜ pendente |

---

## [Cliente 2]

[mesma estrutura]

---

## Status da semana

| Cliente | Slots | Pautas definidas | Gerados | Publicados |
|---------|-------|-----------------|---------|-----------|
| [cliente1] | 5 | [N] | 0 | 0 |
| [cliente2] | 5 | [N] | 0 | 0 |

---

## Legenda de status

| Ícone | Significado |
|-------|-------------|
| ⬜ pendente | Slot sem ação |
| 🔄 em geração | Ativo sendo criado |
| ✅ pronto | Ativo gerado e aprovado |
| 📤 publicado | Ativo publicado na rede |
```

---

## Fase 4 — Salvar e Confirmar

Salvar o arquivo em:
`pesto/grade-editorial/semana-[N].md`

Se a pasta não existir: criar com `mkdir -p pesto/grade-editorial` antes de salvar.

Confirmação para Lucas:

```
"✅ Grade da semana [N] criada.

Arquivo: pesto/grade-editorial/semana-[N].md
Período: [data início] a [data fim]
Clientes: [lista]
Total de slots: [N × clientes = total]
Pautas definidas: [X] | A definir: [Y]

Próximos passos:
→ Para preencher pautas: use *sugerir-pauta [cliente]
→ Para gerar um conteúdo agora: use *gerar-imagem ou *gerar-video-curto
→ Para criar um brief de carrossel: use *briefing [cliente]"
```

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Cliente sem brand kit | pesto/brand-kit/[cliente]/ não existe | Pular e avisar — oferecer *clonar-identidade |
| Grade já existe | Semana já foi criada | Perguntar se quer sobrescrever ou editar slots |
| Datas incorretas | Semana calculada errado | Confirmar com Lucas quais são o início e o fim da semana |
| Pasta grade-editorial não existe | Primeira vez usando a grade | Criar com mkdir -p pesto/grade-editorial |
