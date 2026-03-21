export type AgentStatus = 'active' | 'idle' | 'processing' | 'error'

export interface AgentKnowledge {
  label: string
  count: number
}

export interface QuickAction {
  label: string
  prompt: string
}

export interface Agent {
  id: string
  name: string
  icon: string
  persona: string
  role: string
  status: AgentStatus
  isPrimary?: boolean
  quickActions: QuickAction[]
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
  toolCalls?: ToolCall[]  // inline tool call blocks attached to this message
}

// ── Tool use types ────────────────────────────────────────────────────────────

export type ToolStatus = 'running' | 'done' | 'error'

export interface ToolCall {
  id: string        // tool_use_id from Claude API
  name: string      // e.g. "gws_drive_list"
  label: string     // human-readable e.g. "Listando Google Drive..."
  input: Record<string, unknown>
  status: ToolStatus
  result?: string   // stdout on done, error message on error
}

// SSE events streamed from /api/chat
export type ChatEvent =
  | { type: 'text';        content: string }
  | { type: 'tool_start';  id: string; name: string; label: string; input: Record<string, unknown> }
  | { type: 'tool_result'; id: string; name: string; success: boolean; content: string }
  | { type: 'done' }
  | { type: 'error';       message: string }

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

export interface AgentCommand {
  cmd: string          // e.g. "/briefing"
  args?: string        // e.g. "[tema]"
  description: string
  prompt: string
  category: string
}
