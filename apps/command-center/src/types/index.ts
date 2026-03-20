export type AgentStatus = 'active' | 'idle' | 'processing' | 'error'

export interface AgentKnowledge {
  label: string
  count: number
}

export interface Agent {
  id: string
  name: string
  icon: string
  persona: string
  role: string
  status: AgentStatus
  isPrimary?: boolean
  quickActions: string[]
  knowledge: AgentKnowledge | null
  systemPrompt: string
  color?: string
}

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
  agentId: string
}

export interface WorkerStatus {
  id: string
  name: string
  description: string
  platform: 'n8n' | 'manychat' | 'meta'
  status: 'live' | 'paused' | 'error' | 'pending'
  lastTriggered?: string
  triggerCount?: number
}

export type TabId = 'chat' | 'projects' | 'workers' | 'knowledge'
