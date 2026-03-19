#!/usr/bin/env bash
# dia-abrir — Lê a nota do dia anterior para briefing de início de trabalho
# Uso: npm run dia:abrir
# Chamado pelo orquestrador ao iniciar o trabalho

export PATH="$PATH:/c/Program Files/Obsidian"

# Encontra a nota mais recente na pasta Diário
LAST_NOTE=$(obsidian files folder="📅 Diário" | sort | tail -n 1)

if [ -z "$LAST_NOTE" ]; then
  echo "⚠️  Nenhuma nota de diário encontrada."
  echo "   Este parece ser o primeiro dia de trabalho."
  echo "   Ao finalizar, execute: npm run dia:fechar"
  exit 0
fi

DATE=$(basename "$LAST_NOTE" .md)
TODAY=$(date +%Y-%m-%d)

if [ "$DATE" = "$TODAY" ]; then
  # Pega a segunda mais recente (hoje ainda não fechou)
  LAST_NOTE=$(obsidian files folder="📅 Diário" | sort | tail -n 2 | head -n 1)
  DATE=$(basename "$LAST_NOTE" .md)
fi

if [ -z "$LAST_NOTE" ] || [ "$LAST_NOTE" = "" ]; then
  echo "⚠️  Apenas a nota de hoje foi encontrada. Nenhum histórico anterior."
  exit 0
fi

echo "============================================"
echo "  BRIEFING DE INÍCIO — Última sessão: $DATE"
echo "============================================"
echo ""

obsidian read path="$LAST_NOTE"

echo ""
echo "============================================"
echo "  Nota completa aberta no Obsidian ↓"
echo "============================================"

obsidian open path="$LAST_NOTE" newtab
