#!/usr/bin/env bash
# dia-fechar — Cria a nota de encerramento do dia no Obsidian
# Uso: npm run dia:fechar
# Chamado pelo orquestrador ao final do trabalho

export PATH="$PATH:/c/Program Files/Obsidian"

DATE=$(date +%Y-%m-%d)
NOTE_PATH="📅 Diário/${DATE}.md"

# Verifica se nota do dia já existe
EXISTING=$(obsidian files | grep "$DATE" || true)

if [ -n "$EXISTING" ]; then
  echo "📅 Nota do dia $DATE já existe. Abrindo para edição..."
  obsidian open path="$NOTE_PATH" newtab
else
  echo "📝 Criando nota de encerramento do dia $DATE..."
  obsidian create path="$NOTE_PATH" template="template-diario" open newtab
  echo "✅ Nota criada: $NOTE_PATH"
fi

echo ""
echo "Preencha as seções antes de encerrar o trabalho:"
echo "  • Resumo do dia"
echo "  • O que foi concluído"
echo "  • O que ficou pendente"
echo "  • Tasks para o próximo dia"
echo "  • Contexto para retomada"
