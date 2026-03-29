import { createClient } from '@supabase/supabase-js'

const BUCKET = 'content-pipeline'

function getClient() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set')
  return createClient(url, key)
}

/**
 * Uploads a PNG buffer to Supabase Storage and returns the public URL.
 * Path: content-pipeline/{contentId}/{filename}
 *
 * @param {Buffer} buffer
 * @param {string} contentId  — e.g. "arc-01-post-001"
 * @param {string} filename   — e.g. "slide-1.png"
 * @returns {Promise<string>} public URL
 */
export async function uploadImage(buffer, contentId, filename) {
  const supabase = getClient()
  const path = `${contentId}/${filename}`

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, buffer, {
      contentType: 'image/png',
      upsert: true,
    })

  if (error) throw new Error(`[storage] Upload failed: ${error.message}`)

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return data.publicUrl
}

/**
 * Uploads all slides from a render result and returns their public URLs.
 *
 * @param {Array<{ index: number, buffer: Buffer }>} slides
 * @param {string} contentId
 * @returns {Promise<string[]>} ordered array of public URLs
 */
export async function uploadSlides(slides, contentId) {
  return Promise.all(
    slides.map(s => uploadImage(s.buffer, contentId, `slide-${s.index}.png`))
  )
}

/**
 * Uploads an MP4 video buffer to Supabase Storage and returns the public URL.
 * Path: content-pipeline/{contentId}/video.mp4
 *
 * @param {Buffer} buffer
 * @param {string} contentId  — e.g. "reel-20260326-001"
 * @returns {Promise<string>} public URL
 */
export async function uploadVideo(buffer, contentId) {
  const supabase = getClient()
  const path = `${contentId}/video.mp4`

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, buffer, {
      contentType: 'video/mp4',
      upsert: true,
    })

  if (error) throw new Error(`[storage] Video upload failed: ${error.message}`)

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return data.publicUrl
}
