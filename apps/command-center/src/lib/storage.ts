import type { Message } from '@/types'

const MESSAGES_KEY = 'runa_messages'
const AGENT_KEY    = 'runa_active_agent'
const SESSION_KEY  = 'runa_session_count'

export function getStoredMessages(): Record<string, Message[]> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(MESSAGES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveMessages(messages: Record<string, Message[]>): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages))
  } catch {
    // storage full — ignore
  }
}

export function getStoredAgent(): string {
  if (typeof window === 'undefined') return 'orion'
  return localStorage.getItem(AGENT_KEY) ?? 'orion'
}

export function saveActiveAgent(id: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(AGENT_KEY, id)
}

export function getSessionCount(): number {
  if (typeof window === 'undefined') return 1
  const count = parseInt(localStorage.getItem(SESSION_KEY) ?? '0', 10)
  const next  = count + 1
  localStorage.setItem(SESSION_KEY, String(next))
  return next
}

export function clearAgentMessages(agentId: string): void {
  const all = getStoredMessages()
  delete all[agentId]
  saveMessages(all)
}
