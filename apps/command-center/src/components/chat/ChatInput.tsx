'use client'
import { useState, useRef, KeyboardEvent } from 'react'
import { Send } from 'lucide-react'

interface Props {
  onSend: (content: string) => void
  disabled?: boolean
  agentName?: string
}

export function ChatInput({ onSend, disabled, agentName }: Props) {
  const [value, setValue] = useState('')
  const ref = useRef<HTMLTextAreaElement>(null)

  const send = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
    if (ref.current) ref.current.style.height = 'auto'
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  const onInput = () => {
    if (!ref.current) return
    ref.current.style.height = 'auto'
    ref.current.style.height = Math.min(ref.current.scrollHeight, 120) + 'px'
  }

  return (
    <div className="flex items-end gap-2 p-3 rounded-lg"
      style={{ background: 'rgba(13,36,56,0.8)', border: '1px solid rgba(26,58,74,0.8)' }}>
      <textarea
        ref={ref}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={onKey}
        onInput={onInput}
        placeholder={`Comando para ${agentName ?? 'agente'}... (Enter para enviar)`}
        disabled={disabled}
        rows={1}
        className="flex-1 bg-transparent resize-none font-body text-sm outline-none chat-input"
        style={{ color: '#E8F4F8', lineHeight: 1.5, maxHeight: 120 }}
      />
      <button
        onClick={send}
        disabled={disabled || !value.trim()}
        className="shrink-0 w-8 h-8 rounded flex items-center justify-center transition-all"
        style={{
          background: value.trim() && !disabled ? 'rgba(245,158,11,0.2)' : 'transparent',
          border: `1px solid ${value.trim() && !disabled ? 'rgba(245,158,11,0.4)' : 'rgba(26,58,74,0.5)'}`,
          color: value.trim() && !disabled ? '#F59E0B' : '#1A3A4A',
        }}
      >
        <Send size={14} />
      </button>
    </div>
  )
}
