// Agent self-learning memory system
// Stores corrections and insights per agent in localStorage (V3: Supabase)

export type MemorySource = 'auto' | 'manual'

export interface AgentMemoryEntry {
  id: string
  agentId: string
  correction: string           // What the user said / what should be different
  context: string              // The assistant message that was corrected (trimmed)
  timestamp: number
  source: MemorySource
}

const KEY = (agentId: string) => `runa_memory_${agentId}`

export function getMemories(agentId: string): AgentMemoryEntry[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(KEY(agentId))
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveMemory(entry: Omit<AgentMemoryEntry, 'id' | 'timestamp'>): AgentMemoryEntry {
  const memories = getMemories(entry.agentId)
  const newEntry: AgentMemoryEntry = {
    ...entry,
    id: crypto.randomUUID(),
    timestamp: Date.now(),
  }
  // Keep max 30 memories per agent — oldest dropped first
  const updated = [...memories, newEntry].slice(-30)
  localStorage.setItem(KEY(entry.agentId), JSON.stringify(updated))
  return newEntry
}

export function deleteMemory(agentId: string, memoryId: string): void {
  const memories = getMemories(agentId).filter(m => m.id !== memoryId)
  localStorage.setItem(KEY(agentId), JSON.stringify(memories))
}

export function getMemoryCount(agentId: string): number {
  return getMemories(agentId).length
}

// Formats memories as a system prompt injection block
export function formatMemoriesForPrompt(agentId: string): string {
  const memories = getMemories(agentId)
  if (memories.length === 0) return ''

  const lines = memories.map((m, i) => {
    const ctx = m.context ? `\n   Contexto: "${m.context.slice(0, 120)}..."` : ''
    return `[${i + 1}] ${m.correction}${ctx}`
  }).join('\n')

  return `\n\n--- Aprendizados acumulados (auto-injetados) ---\nEstes são ajustes e correções feitos pelo operador em sessões anteriores. Incorporate-os no seu comportamento:\n${lines}\n--- fim dos aprendizados ---`
}

// Patterns that indicate a correction in Portuguese
const CORRECTION_PATTERNS = [
  /^não[,\s]/i,
  /^não é isso/i,
  /^errad[oa]/i,
  /^na verdade/i,
  /^corrij[ae]/i,
  /^muda (isso|para|o)/i,
  /^não (assim|dessa forma|é assim)/i,
  /^esquece isso/i,
  /^diferente[,\s]/i,
  /^isso (está|tá) errad[oa]/i,
  /^não[,\s].{0,20}(assim|certo|correto)/i,
  /^(na real|na prática|na verdade)[,\s]/i,
]

export function isCorrectionMessage(text: string): boolean {
  return CORRECTION_PATTERNS.some(p => p.test(text.trim()))
}
