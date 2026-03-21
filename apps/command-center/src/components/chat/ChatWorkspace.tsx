'use client'
import { useEffect, useRef, useState, MutableRefObject } from 'react'
import { ChatMessage }       from './ChatMessage'
import { ChatInput }         from './ChatInput'
import { QuickActions }      from './QuickActions'
import { useStore }          from '@/store/useStore'
import { getAgent }          from '@/lib/agents'
import { isCorrectionMessage, saveMemory, formatMemoriesForPrompt } from '@/lib/agentMemory'
import type { Message, ToolCall, ChatEvent } from '@/types'

interface Props {
  sendMessageRef?: MutableRefObject<((prompt: string) => void) | null>
}

export function ChatWorkspace({ sendMessageRef }: Props) {
  const {
    activeAgentId, messages, isThinking, clearedAt,
    addMessage, updateLastMessage, setThinking, clearVisual,
  } = useStore()

  const agent     = getAgent(activeAgentId)
  const agentMsgs = messages[activeAgentId] ?? []
  const cutoff    = clearedAt[activeAgentId] ?? 0
  // visibleMsgs: only render messages after the last visual clear
  const visibleMsgs = agentMsgs.filter(m => m.timestamp > cutoff)

  const bottomRef   = useRef<HTMLDivElement>(null)
  const [autoLearnToast, setAutoLearnToast] = useState<string | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visibleMsgs, isThinking])

  // Stable ref so event listeners always call the latest sendMessage
  const sendFnRef = useRef<(content: string) => Promise<void>>()

  const sendMessage = async (content: string) => {
    if (!agent || isThinking) return

    // Auto-detect corrections and save to agent memory
    if (isCorrectionMessage(content) && agentMsgs.length > 0) {
      const lastAssistant = [...agentMsgs].reverse().find(m => m.role === 'assistant')
      if (lastAssistant) {
        saveMemory({
          agentId: activeAgentId,
          correction: content,
          context: lastAssistant.content,
          source: 'auto',
        })
        setAutoLearnToast('💡 Aprendizado detectado e salvo')
        setTimeout(() => setAutoLearnToast(null), 3000)
      }
    }

    const userMsg: Message = {
      id: crypto.randomUUID(), role: 'user', content,
      timestamp: Date.now(), agentId: activeAgentId,
    }
    addMessage(activeAgentId, userMsg)
    setThinking(true)

    addMessage(activeAgentId, {
      id: crypto.randomUUID(), role: 'assistant', content: '',
      timestamp: Date.now(), agentId: activeAgentId,
    })

    try {
      // Full history (including pre-clear messages) sent to API for context
      const history = [...agentMsgs, userMsg].map(m => ({ role: m.role, content: m.content }))
      const memories = formatMemoriesForPrompt(activeAgentId)
      const systemPrompt = agent.systemPrompt + memories

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, systemPrompt }),
      })

      if (!res.ok || !res.body) {
        updateLastMessage(activeAgentId, `Erro: ${res.statusText}`)
        return
      }

      setThinking(false)

      const reader  = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let textContent = ''
      const pendingToolCalls: ToolCall[] = []

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''   // keep incomplete line for next chunk

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const raw = line.slice(6).trim()
          if (!raw) continue

          let event: ChatEvent
          try { event = JSON.parse(raw) } catch { continue }

          if (event.type === 'text') {
            textContent += event.content
            updateLastMessage(activeAgentId, textContent, [...pendingToolCalls])
          } else if (event.type === 'tool_start') {
            const tc: ToolCall = { id: event.id, name: event.name, label: event.label, input: event.input, status: 'running' }
            pendingToolCalls.push(tc)
            updateLastMessage(activeAgentId, textContent, [...pendingToolCalls])
          } else if (event.type === 'tool_result') {
            const tc = pendingToolCalls.find(t => t.id === event.id)
            if (tc) {
              tc.status  = event.success ? 'done' : 'error'
              tc.result  = event.content
            }
            updateLastMessage(activeAgentId, textContent, [...pendingToolCalls])
          } else if (event.type === 'error') {
            textContent += `\n\nErro: ${event.message}`
            updateLastMessage(activeAgentId, textContent, [...pendingToolCalls])
          }
          // 'done' event — loop will end naturally
        }
      }
    } catch {
      updateLastMessage(activeAgentId, 'Erro de conexão. Verifique a ANTHROPIC_API_KEY no .env.local')
    } finally {
      setThinking(false)
    }
  }

  // Keep stable ref updated every render
  useEffect(() => { sendFnRef.current = sendMessage })

  // Expose to parent CommandPanel
  useEffect(() => {
    if (sendMessageRef) sendMessageRef.current = sendMessage
  })

  // Listen for skill:execute events from Sidebar
  useEffect(() => {
    const handler = (e: Event) => {
      sendFnRef.current?.((e as CustomEvent<{ prompt: string }>).detail.prompt)
    }
    window.addEventListener('skill:execute', handler)
    return () => window.removeEventListener('skill:execute', handler)
  }, [])

  const hiddenCount = agentMsgs.length - visibleMsgs.length

  return (
    <div className="flex flex-col h-full">

      {/* Agent header */}
      <div className="flex items-center gap-3 px-4 py-2.5 shrink-0"
        style={{ borderBottom: '1px solid rgba(26,58,74,0.5)' }}>
        <span className="text-xl">{agent?.icon}</span>
        <div>
          <div className="font-display font-bold text-sm tracking-wider" style={{ color: '#F59E0B' }}>
            {agent?.name}
            {agent?.isPrimary && (
              <span className="ml-2 font-mono text-xs px-1.5 py-0.5 rounded"
                style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#FFD166', fontSize: 9 }}>
                ▸ ORQUESTRADOR
              </span>
            )}
          </div>
          <div className="font-body text-xs" style={{ color: '#7AA8B8' }}>{agent?.role}</div>
        </div>

        {/* Right side of header */}
        <div className="ml-auto flex items-center gap-2">
          {agent?.knowledge && (
            <div className="font-mono text-xs px-2 py-1 rounded"
              style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)', color: '#7AA8B8', fontSize: 10 }}>
              📚 {agent.knowledge.label} · {agent.knowledge.count} docs
            </div>
          )}
          {/* Clear visual button — only shown when there are messages */}
          {visibleMsgs.length > 0 && (
            <button
              onClick={() => clearVisual(activeAgentId)}
              title="Limpa o chat visualmente — contexto permanece para o agente"
              className="font-mono text-xs px-2 py-1 rounded transition-all"
              style={{
                border: '1px solid rgba(26,58,74,0.5)',
                color: '#1A3A4A',
                fontSize: 9,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'
                e.currentTarget.style.color = '#7AA8B8'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(26,58,74,0.5)'
                e.currentTarget.style.color = '#1A3A4A'
              }}
            >
              ⌫ clear
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

        {/* Empty state */}
        {visibleMsgs.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center gap-3 opacity-50">
            <span className="text-4xl">{agent?.icon}</span>
            <div className="font-display text-sm" style={{ color: '#7AA8B8' }}>
              {agent?.isPrimary ? 'Sistema operacional pronto.' : `${agent?.name} em standby.`}
            </div>
            <div className="font-mono text-xs" style={{ color: '#1A3A4A' }}>
              Use as ações rápidas ou digite seu comando
            </div>
          </div>
        )}

        {/* Context retained indicator — shown after a visual clear */}
        {visibleMsgs.length === 0 && hiddenCount > 0 && (
          <div className="flex items-center justify-center mt-4">
            <div className="font-mono text-xs px-3 py-1.5 rounded"
              style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.1)', color: '#1A3A4A' }}>
              ◌ {hiddenCount} mensagens no contexto (invisíveis) · o agente lembra de tudo
            </div>
          </div>
        )}

        {visibleMsgs.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Auto-learn toast */}
      {autoLearnToast && (
        <div className="mx-4 mb-1 px-3 py-1.5 rounded font-mono text-xs animate-[fade-slide_0.2s_ease-out_forwards]"
          style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#22C55E' }}>
          {autoLearnToast}
        </div>
      )}

      {/* Input area */}
      <div className="shrink-0 px-4 pb-4 space-y-2">
        {agent?.quickActions && (
          <QuickActions actions={agent.quickActions} onAction={sendMessage} disabled={isThinking} />
        )}
        <ChatInput onSend={sendMessage} disabled={isThinking} agentName={agent?.name} />
      </div>
    </div>
  )
}
