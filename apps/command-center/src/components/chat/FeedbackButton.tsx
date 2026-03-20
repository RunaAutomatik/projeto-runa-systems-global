'use client'
import { useState } from 'react'
import { saveMemory } from '@/lib/agentMemory'

interface Props {
  agentId: string
  messageContent: string  // The assistant message being evaluated
}

export function FeedbackButton({ agentId, messageContent }: Props) {
  const [open, setOpen]     = useState(false)
  const [text, setText]     = useState('')
  const [saved, setSaved]   = useState(false)

  const handleSave = () => {
    if (!text.trim()) return
    saveMemory({
      agentId,
      correction: text.trim(),
      context: messageContent,
      source: 'manual',
    })
    setSaved(true)
    setOpen(false)
    setText('')
    setTimeout(() => setSaved(false), 3000)
  }

  if (saved) {
    return (
      <span className="font-mono text-xs" style={{ color: '#22C55E', fontSize: 9 }}>
        ✓ aprendizado salvo
      </span>
    )
  }

  return (
    <div className="inline-flex flex-col gap-1.5">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: '#1A3A4A', fontSize: 9 }}
          title="Salvar aprendizado para este agente"
        >
          ✏️ aprendizado
        </button>
      ) : (
        <div className="flex flex-col gap-1.5 mt-1 animate-[fade-slide_0.15s_ease-out_forwards]"
          style={{ borderLeft: '2px solid rgba(245,158,11,0.3)', paddingLeft: 8 }}>
          <div className="font-mono text-xs" style={{ color: '#7AA8B8', fontSize: 9 }}>
            O que deveria ser diferente?
          </div>
          <textarea
            autoFocus
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Ex: Sempre estruturar em bullet points. Não usar o termo X..."
            rows={2}
            className="font-body text-xs rounded px-2 py-1.5 resize-none outline-none w-64"
            style={{
              background: 'rgba(13,36,56,0.9)',
              border: '1px solid rgba(245,158,11,0.25)',
              color: '#E8F4F8',
              fontSize: 11,
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSave() }
              if (e.key === 'Escape') { setOpen(false); setText('') }
            }}
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={!text.trim()}
              className="font-mono text-xs px-2 py-1 rounded transition-all"
              style={{
                background: text.trim() ? 'rgba(245,158,11,0.15)' : 'transparent',
                border: '1px solid rgba(245,158,11,0.3)',
                color: text.trim() ? '#F59E0B' : '#1A3A4A',
                fontSize: 9,
              }}
            >
              Salvar (Enter)
            </button>
            <button
              onClick={() => { setOpen(false); setText('') }}
              className="font-mono text-xs px-2 py-1 rounded"
              style={{ color: '#1A3A4A', fontSize: 9 }}
            >
              Cancelar (Esc)
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
