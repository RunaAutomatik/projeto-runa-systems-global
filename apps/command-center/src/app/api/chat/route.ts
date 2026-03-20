import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const MODEL = process.env.CLAUDE_MODEL ?? 'claude-sonnet-4-6'

export async function POST(req: NextRequest) {
  try {
    const { messages, systemPrompt } = await req.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response(
        'ANTHROPIC_API_KEY not configured. Copy .env.local.example to .env.local and add your key.',
        { status: 500 }
      )
    }

    const stream = anthropic.messages.stream({
      model:      MODEL,
      max_tokens: 2048,
      system:     systemPrompt,
      messages:   messages.map((m: { role: string; content: string }) => ({
        role:    m.role,
        content: m.content,
      })),
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
        } catch (err) {
          controller.error(err)
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[chat/route] error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
