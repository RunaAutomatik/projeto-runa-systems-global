'use client'
import { useEffect, useRef } from 'react'
import { ChatMessage }     from './ChatMessage'
import { ChatInput }       from './ChatInput'
import { QuickActions }    from './QuickActions'
import { ThinkingAnimation } from './ThinkingAnimation'
import { useStore }        from '@/store/useStore'
import { getAgent }        from '@/lib/agents'
import type { Message }    from '@/types'

export function ChatWorkspace() {
  const { activeAgentId, messages, isThinking, addMessage, updateLastMessage, setThinking } = useStore()
  const agent    = getAgent(activeAgentId)
  const agentMsgs = messages[activeAgentId] ?? []
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [agentMsgs, isThinking])

  const sendMessage = async (content: string) => {
    if (!agent || isThinking) return

    const userMsg: Message = {
      id: crypto.randomUUID(), role: 'user', content,
      timestamp: Date.now(), agentId: activeAgentId,
    }
    addMessage(activeAgentId, userMsg)
    setThinking(true)

    const assistantId = crypto.randomUUID()
    addMessage(activeAgentId, {
      id: assistantId, role: 'assistant', content: '',
      timestamp: Date.now(), agentId: activeAgentId,
    })

    try {
      const history = [...agentMsgs, userMsg].map(m => ({ role: m.role, content: m.content }))
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, systemPrompt: agent.systemPrompt }),
      })

      if (!res.ok || !res.body) {
        updateLastMessage(activeAgentId, `Erro: ${res.statusText}`)
        return
      }

      setThinking(false)
      const reader  = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        full += decoder.decode(value, { stream: true })
        updateLastMessage(activeAgentId, full)
      }
    } catch (err) {
      updateLastMessage(activeAgentId, 'Erro de conexão. Verifique a ANTHROPIC_API_KEY no .env.local')
    } finally {
      setThinking(false)
    }
  }

  const onQuickAction = (action: string) => {
    sendMessage(`${action}: me ajude com isso.`)
  }

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
        {agent?.knowledge && (
          <div className="ml-auto font-mono text-xs px-2 py-1 rounded"
            style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)', color: '#7AA8B8', fontSize: 10 }}>
            📚 {agent.knowledge.label} · {agent.knowledge.count} docs
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {agentMsgs.length === 0 && (
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
        {agentMsgs.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isThinking && <ThinkingAnimation />}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="shrink-0 px-4 pb-4 space-y-2">
        {agent?.quickActions && (
          <QuickActions actions={agent.quickActions} onAction={onQuickAction} disabled={isThinking} />
        )}
        <ChatInput onSend={sendMessage} disabled={isThinking} />
      </div>
    </div>
  )
}
