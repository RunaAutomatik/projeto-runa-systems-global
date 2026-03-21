import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'
import { TOOL_DEFINITIONS, TOOL_LABELS, executeTool } from '@/server/tools'
import type { ChatEvent } from '@/types'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const MODEL = process.env.CLAUDE_MODEL ?? 'claude-sonnet-4-6'

// Helper: encode a ChatEvent as an SSE data line
function encodeEvent(controller: ReadableStreamDefaultController, event: ChatEvent, encoder: TextEncoder) {
  controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`))
}

export async function POST(req: NextRequest) {
  try {
    const { messages, systemPrompt } = await req.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ type: 'error', message: 'ANTHROPIC_API_KEY not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const encoder = new TextEncoder()

    const readable = new ReadableStream({
      async start(controller) {
        try {
          // Conversation history — grows if tool use requires multiple turns
          const conversationMessages: Anthropic.MessageParam[] = messages.map(
            (m: { role: string; content: string }) => ({ role: m.role, content: m.content })
          )

          // Multi-turn tool loop — runs until Claude stops with end_turn (text response)
          // or we exceed a safety limit of 10 tool iterations
          let iterations = 0
          const MAX_ITERATIONS = 10

          while (iterations < MAX_ITERATIONS) {
            iterations++

            const response = await anthropic.messages.create({
              model:      MODEL,
              max_tokens: 4096,
              system:     systemPrompt,
              messages:   conversationMessages,
              tools:      TOOL_DEFINITIONS,
              tool_choice: { type: 'auto' },
            })

            // Stream any text content blocks to the client immediately
            for (const block of response.content) {
              if (block.type === 'text' && block.text) {
                // Stream text word-by-word for a natural feel
                encodeEvent(controller, { type: 'text', content: block.text }, encoder)
              }
            }

            // If Claude is done talking (no tool calls), exit the loop
            if (response.stop_reason === 'end_turn') break

            // If stop_reason is tool_use, execute each tool and feed results back
            if (response.stop_reason === 'tool_use') {
              const toolUseBlocks = response.content.filter(
                (b): b is Anthropic.ToolUseBlock => b.type === 'tool_use'
              )

              // Add Claude's response (with tool_use blocks) to conversation history
              conversationMessages.push({ role: 'assistant', content: response.content })

              // Notify client of all starting tools, then execute in parallel
              for (const block of toolUseBlocks) {
                encodeEvent(controller, {
                  type: 'tool_start',
                  id:    block.id,
                  name:  block.name,
                  label: TOOL_LABELS[block.name] ?? `Executando ${block.name}...`,
                  input: block.input as Record<string, unknown>,
                }, encoder)
              }

              // Execute all tools in parallel
              const toolResults: Anthropic.ToolResultBlockParam[] = await Promise.all(
                toolUseBlocks.map(async block => {
                  const result = await executeTool(block.name, block.input as Record<string, unknown>)

                  encodeEvent(controller, {
                    type:    'tool_result',
                    id:      block.id,
                    name:    block.name,
                    success: result.success,
                    content: result.output,
                  }, encoder)

                  return {
                    type:        'tool_result' as const,
                    tool_use_id: block.id,
                    content:     result.output,
                    is_error:    !result.success,
                  }
                })
              )

              // Add tool results to conversation history, then loop back for Claude's next response
              conversationMessages.push({ role: 'user', content: toolResults })
              continue
            }

            // Any other stop reason — exit
            break
          }

          encodeEvent(controller, { type: 'done' }, encoder)
        } catch (err) {
          const raw = err instanceof Error ? err.message : String(err)
          let message = 'Erro de conexão com a API. Tente novamente.'
          if (raw.includes('529') || raw.includes('overloaded')) message = 'A API está sobrecarregada no momento. Aguarde alguns segundos e tente novamente.'
          else if (raw.includes('401') || raw.includes('authentication')) message = 'ANTHROPIC_API_KEY inválida. Verifique o .env.local.'
          else if (raw.includes('429')) message = 'Limite de requisições atingido. Aguarde um momento.'
          encodeEvent(controller, { type: 'error', message }, encoder)
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[chat/route] error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
