import { execFile } from 'child_process'
import { promisify } from 'util'
import { mkdir, writeFile, rm } from 'fs/promises'
import { join } from 'path'
import { tmpdir } from 'os'
import { renderSlides } from '../carousel/renderer.js'
import { uploadVideo } from '../storage.js'

const execFileAsync = promisify(execFile)

// Check FFmpeg availability once per process (cached after first call)
let ffmpegAvailable = null

async function checkFfmpeg() {
  if (ffmpegAvailable !== null) return ffmpegAvailable
  try {
    await execFileAsync('ffmpeg', ['-version'])
    ffmpegAvailable = true
  } catch {
    ffmpegAvailable = false
  }
  return ffmpegAvailable
}

/**
 * Composes a 9:16 MP4 video from FREYJA brief slides using FFmpeg.
 * Stage 1: renders PNG slides via Puppeteer, concatenates via FFmpeg.
 *
 * @param {import('../brief.schema.js').BriefSchema} brief
 * @returns {Promise<{ content_id, type, videoUrl, caption? }>}
 */
export async function composeVideo(brief) {
  if (!await checkFfmpeg()) {
    throw Object.assign(
      new Error('FFmpeg not available — install ffmpeg or add nixpacks.toml'),
      { code: 'FFMPEG_UNAVAILABLE' }
    )
  }

  const { content_id, slide_duration_s } = brief
  const tmpDir = join(tmpdir(), `content-${content_id}`)

  try {
    // 1. Render slides to PNG buffers
    const slides = await renderSlides({ ...brief, type: 'story' }) // 1080×1920 viewport

    // 2. Write PNGs to temp directory
    await mkdir(tmpDir, { recursive: true })
    for (const s of slides) {
      const filename = `slide-${String(s.index).padStart(3, '0')}.png`
      await writeFile(join(tmpDir, filename), s.buffer)
    }

    // 3. Compose MP4 with FFmpeg
    const outputPath = join(tmpDir, 'video.mp4')
    const inputPattern = join(tmpDir, 'slide-%03d.png')

    await execFileAsync('ffmpeg', [
      '-y',                          // overwrite output
      '-framerate', `1/${slide_duration_s}`,
      '-i', inputPattern,
      '-vf', 'scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      outputPath,
    ])

    // 4. Upload to Supabase Storage
    const { readFile } = await import('fs/promises')
    const videoBuffer = await readFile(outputPath)
    const videoUrl = await uploadVideo(videoBuffer, content_id)

    return { content_id, type: brief.type, videoUrl }
  } finally {
    // 5. Cleanup temp directory (always, even on error)
    await rm(tmpDir, { recursive: true, force: true })
  }
}
