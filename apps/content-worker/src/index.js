import { config } from 'dotenv'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../../../.env') })

import express from 'express'
import { parseBrief } from './brief.schema.js'
import { renderSlides } from './carousel/renderer.js'
import { renderImage } from './image/renderer.js'
import { composeVideo } from './video/compositor.js'
import { uploadSlides, uploadImage } from './storage.js'

const app = express()
app.use(express.json({ limit: '2mb' }))

// ─── Health ───────────────────────────────────────────────────────────────────
app.get('/health', (_, res) =>
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
)

// ─── POST /render ─────────────────────────────────────────────────────────────
// Receives a FREYJA brief, renders content, uploads to Supabase Storage,
// and returns public URLs ready for instagram-worker /publish.
//
// Response for carousel: { content_id, type, imageUrls: string[], caption }
// Response for image:    { content_id, type, imageUrl: string, caption }
// Response for video:    { content_id, type, status, message }
app.post('/render', async (req, res) => {
  let brief
  try {
    brief = parseBrief(req.body)
  } catch (err) {
    return res.status(400).json({ error: 'Invalid brief', details: err.errors ?? err.message })
  }

  const caption = buildCaption(brief)

  try {
    if (brief.type === 'carousel') {
      const slides = await renderSlides(brief)
      const imageUrls = await uploadSlides(slides, brief.content_id)
      return res.json({ content_id: brief.content_id, type: brief.type, imageUrls, caption })
    }

    if (brief.type === 'image' || brief.type === 'story') {
      const buffer = await renderImage(brief)
      const imageUrl = await uploadImage(buffer, brief.content_id, 'image.png')
      return res.json({ content_id: brief.content_id, type: brief.type, imageUrl, caption })
    }

    if (brief.type === 'reel' || brief.type === 'video') {
      const { content_id, type, videoUrl } = await composeVideo(brief)
      return res.json({ content_id, type, videoUrl, caption })
    }

    res.status(400).json({ error: `Unsupported type: ${brief.type}` })
  } catch (err) {
    console.error(`[render] Error processing ${brief.content_id}:`, err)
    res.status(500).json({ error: 'Render failed', details: err.message })
  }
})

// ─── Helpers ──────────────────────────────────────────────────────────────────
function buildCaption(brief) {
  const parts = []
  if (brief.caption) parts.push(brief.caption)
  if (brief.narrative?.cta) parts.push(`\n.\n.\n.\nComente ${brief.narrative.cta} 👇`)
  if (brief.hashtags?.length) parts.push(`\n${brief.hashtags.map(h => `#${h}`).join(' ')}`)
  return parts.join('\n')
}

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001
app.listen(PORT, () =>
  console.log(`[content-worker] Running on port ${PORT}`)
)
