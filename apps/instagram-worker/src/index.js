import { config } from 'dotenv'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
// Load root .env (monorepo pattern — workers share env file at repo root)
config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../../../.env') })
import express from 'express'
import { matchTrigger } from './triggers.js'
import { sendDM, sendQuickReply } from './instagram.js'
import { publishImage, publishCarousel } from './publish.js'

const app = express()
app.use(express.json())

/**
 * In-memory state: userId → { trigger, timestamp }
 * Tracks users who triggered a keyword and are awaiting the follow confirmation.
 * Entries expire after 24h (Instagram messaging window).
 */
const pendingFollowCheck = new Map()

// ─── Webhook verification (required by Meta) ─────────────────────────────────
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  if (mode === 'subscribe' && token === process.env.WEBHOOK_VERIFY_TOKEN) {
    console.log('[webhook] Verification successful')
    return res.status(200).send(challenge)
  }
  console.warn('[webhook] Verification failed — check WEBHOOK_VERIFY_TOKEN')
  res.sendStatus(403)
})

// ─── Incoming events ──────────────────────────────────────────────────────────
app.post('/webhook', async (req, res) => {
  // Always respond 200 immediately — Meta retries if it doesn't get a fast ack
  res.sendStatus(200)

  const { object, entry } = req.body
  if (object !== 'instagram') return

  for (const e of entry) {
    for (const change of (e.changes || [])) {
      if (change.field === 'comments') {
        await handleComment(change.value).catch(err =>
          console.error('[handleComment] error:', err)
        )
      } else if (change.field === 'messages') {
        await handleMessage(change.value).catch(err =>
          console.error('[handleMessage] error:', err)
        )
      }
    }
  }
})

// ─── Comment handler ──────────────────────────────────────────────────────────
async function handleComment(value) {
  const userId = value.from?.id
  const commentText = value.text || ''

  if (!userId || !commentText) return

  const trigger = matchTrigger(commentText)
  if (!trigger) return

  console.log(`[comment] User ${userId} triggered "${trigger.id}" with: "${commentText}"`)

  pendingFollowCheck.set(userId, {
    trigger,
    timestamp: Date.now()
  })

  await sendQuickReply(userId,
    "Ei, vi seu comentário! 👋 Você já segue o perfil?",
    [
      { title: "✅ Sim, já sigo!", payload: "FOLLOWS_YES" },
      { title: "❌ Ainda não", payload: "FOLLOWS_NO" }
    ]
  )
}

// ─── DM reply handler ─────────────────────────────────────────────────────────
async function handleMessage(value) {
  const userId = value.sender?.id
  const messageText = value.message?.text || ''
  const payload = value.message?.quick_reply?.payload

  if (!userId) return

  const pending = pendingFollowCheck.get(userId)
  if (!pending) return

  // Expire state after 24h
  if (Date.now() - pending.timestamp > 24 * 60 * 60 * 1000) {
    pendingFollowCheck.delete(userId)
    return
  }

  const confirmedFollower =
    payload === 'FOLLOWS_YES' ||
    /\b(sim|já|ja|sigo|yes|s)\b/i.test(messageText)

  const notFollower =
    payload === 'FOLLOWS_NO' ||
    /\b(nao|não|n|ainda|no)\b/i.test(messageText)

  if (confirmedFollower) {
    console.log(`[dm] User ${userId} confirmed follow — sending link for "${pending.trigger.id}"`)
    await sendDM(userId, `Perfeito! 🚀 Aqui está o link: ${pending.trigger.link}`)
    pendingFollowCheck.delete(userId)
  } else if (notFollower) {
    console.log(`[dm] User ${userId} does not follow — prompting`)
    await sendDM(userId, 'Sem problema! Segue o perfil e depois é só responder aqui com "sim" que te mando o link 😊')
  }
}

// ─── Publish endpoints ─────────────────────────────────────────────────────────
// POST /publish/image   { imageUrl, caption }
// POST /publish/carousel { imageUrls, caption }
//
// imageUrls must be publicly accessible (e.g. Supabase Storage URLs).
// These are called after content-worker renders and uploads the assets.

app.post('/publish/image', async (req, res) => {
  const { imageUrl, caption } = req.body
  if (!imageUrl) return res.status(400).json({ error: 'imageUrl is required' })

  try {
    const result = await publishImage({ imageUrl, caption })
    res.json({ ok: true, id: result.id })
  } catch (err) {
    console.error('[publish/image] error:', err)
    res.status(500).json({ error: err.message })
  }
})

app.post('/publish/carousel', async (req, res) => {
  const { imageUrls, caption } = req.body
  if (!Array.isArray(imageUrls) || imageUrls.length < 2) {
    return res.status(400).json({ error: 'imageUrls must be an array with at least 2 items' })
  }

  try {
    const result = await publishCarousel({ imageUrls, caption })
    res.json({ ok: true, id: result.id })
  } catch (err) {
    console.error('[publish/carousel] error:', err)
    res.status(500).json({ error: err.message })
  }
})

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`[worker] Instagram worker running on port ${PORT}`)
)
