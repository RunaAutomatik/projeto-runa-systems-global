import 'dotenv/config'
import express from 'express'
import { parseBrief } from './brief.schema.js'
import { renderSlides } from './carousel/renderer.js'
import { renderImage } from './image/renderer.js'
import { composeVideo } from './video/compositor.js'

const app = express()
app.use(express.json({ limit: '2mb' }))

// ─── Health ───────────────────────────────────────────────────────────────────
app.get('/health', (_, res) =>
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
)

// ─── POST /render ─────────────────────────────────────────────────────────────
// Receives a FREYJA brief and returns rendered content.
//
// Response for carousel: { content_id, type, slides: [{ index, base64 }] }
// Response for image:    { content_id, type, base64 }
// Response for video:    { content_id, type, status, message }
app.post('/render', async (req, res) => {
  let brief
  try {
    brief = parseBrief(req.body)
  } catch (err) {
    return res.status(400).json({ error: 'Invalid brief', details: err.errors ?? err.message })
  }

  try {
    if (brief.type === 'carousel') {
      const slides = await renderSlides(brief)
      return res.json({
        content_id: brief.content_id,
        type: brief.type,
        slides: slides.map(s => ({
          index: s.index,
          base64: s.buffer.toString('base64'),
        })),
      })
    }

    if (brief.type === 'image' || brief.type === 'story') {
      const buffer = await renderImage(brief)
      return res.json({
        content_id: brief.content_id,
        type: brief.type,
        base64: buffer.toString('base64'),
      })
    }

    if (brief.type === 'reel' || brief.type === 'video') {
      const result = await composeVideo(brief)
      return res.json(result)
    }

    res.status(400).json({ error: `Unsupported type: ${brief.type}` })
  } catch (err) {
    console.error(`[render] Error processing ${brief.content_id}:`, err)
    res.status(500).json({ error: 'Render failed', details: err.message })
  }
})

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001
app.listen(PORT, () =>
  console.log(`[content-worker] Running on port ${PORT}`)
)
