'use client'
import { create } from 'zustand'
import type { Message, TabId } from '@/types'
import { saveMessages, saveActiveAgent } from '@/lib/storage'

interface AppState {
  activeAgentId: string
  isThinking:    boolean
  activeTab:     TabId
  messages:      Record<string, Message[]>
  sessionCount:  number
  clearedAt:     Record<string, number>  // agentId → timestamp of last visual clear

  setActiveAgent:    (id: string) => void
  setThinking:       (v: boolean) => void
  setActiveTab:      (tab: TabId) => void
  setSessionCount:   (n: number) => void
  initMessages:      (stored: Record<string, Message[]>) => void
  addMessage:        (agentId: string, msg: Message) => void
  updateLastMessage: (agentId: string, content: string) => void
  clearMessages:     (agentId: string) => void
  clearVisual:       (agentId: string) => void  // visual clear — keeps context
}

export const useStore = create<AppState>((set, get) => ({
  activeAgentId: 'orion',
  isThinking:    false,
  activeTab:     'chat',
  messages:      {},
  sessionCount:  1,
  clearedAt:     {},

  setActiveAgent: (id) => {
    saveActiveAgent(id)
    set({ activeAgentId: id })
  },

  setThinking: (v) => set({ isThinking: v }),

  setActiveTab: (tab) => set({ activeTab: tab }),

  setSessionCount: (n) => set({ sessionCount: n }),

  initMessages: (stored) => set({ messages: stored }),

  addMessage: (agentId, msg) => {
    const { messages } = get()
    const next = {
      ...messages,
      [agentId]: [...(messages[agentId] ?? []), msg],
    }
    saveMessages(next)
    set({ messages: next })
  },

  updateLastMessage: (agentId, content) => {
    const { messages } = get()
    const agentMsgs = messages[agentId] ?? []
    if (agentMsgs.length === 0) return
    const updated = [...agentMsgs]
    updated[updated.length - 1] = { ...updated[updated.length - 1], content }
    const next = { ...messages, [agentId]: updated }
    saveMessages(next)
    set({ messages: next })
  },

  clearMessages: (agentId) => {
    const { messages } = get()
    const next = { ...messages }
    delete next[agentId]
    saveMessages(next)
    set({ messages: next })
  },

  clearVisual: (agentId) => {
    set(state => ({
      clearedAt: { ...state.clearedAt, [agentId]: Date.now() },
    }))
  },
}))
