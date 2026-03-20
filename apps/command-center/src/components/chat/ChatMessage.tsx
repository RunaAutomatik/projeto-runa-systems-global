'use client'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAgent } from '@/lib/agents'
import { FeedbackButton } from './FeedbackButton'
import type { Message } from '@/types'

interface Props { message: Message }

export function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user'
  const agent  = getAgent(message.agentId)
  const time   = new Date(message.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  if (isUser) {
    return (
      <div className="flex justify-end animate-[fade-slide_0.2s_ease-out_forwards]">
        <div className="max-w-[70%]">
          <div className="rounded-lg px-4 py-2.5 font-body text-sm" style={{
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.2)',
            color: '#E8F4F8',
          }}>
            {message.content}
          </div>
          <div className="text-right mt-1 font-mono" style={{ color: '#7AA8B8', fontSize: 10 }}>{time}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3 animate-[fade-slide_0.2s_ease-out_forwards] group">
      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}>
        <span style={{ fontSize: 13 }}>{agent?.icon ?? '🤖'}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-display font-bold text-xs tracking-wider" style={{ color: '#F59E0B' }}>
            {agent?.name}
          </span>
          <span className="font-mono" style={{ color: '#7AA8B8', fontSize: 10 }}>{time}</span>
        </div>
        <div className="rounded-lg px-4 py-3 prose-hud text-sm"
          style={{ background: 'rgba(10,31,46,0.9)', border: '1px solid rgba(26,58,74,0.8)', color: '#E8F4F8' }}>
          {message.content ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          ) : (
            <span style={{ color: '#7AA8B8', fontStyle: 'italic', fontSize: 12 }}>▌</span>
          )}
        </div>
        {/* Feedback — only shown when message has content */}
        {message.content && (
          <div className="mt-1 pl-1">
            <FeedbackButton agentId={message.agentId} messageContent={message.content} />
          </div>
        )}
      </div>
    </div>
  )
}
