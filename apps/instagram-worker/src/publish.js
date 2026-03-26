import fetch from 'node-fetch'

const BASE_URL = 'https://graph.facebook.com/v19.0'

function getToken() {
  return process.env.META_PAGE_ACCESS_TOKEN
}

function getIgUserId() {
  return process.env.META_INSTAGRAM_ACCOUNT_ID
}

// ─── Single image post ────────────────────────────────────────────────────────

/**
 * Publishes a single image post to Instagram.
 *
 * @param {{ imageUrl: string, caption?: string }} params
 * @returns {Promise<{ id: string }>} published media ID
 */
export async function publishImage({ imageUrl, caption = '' }) {
  const containerId = await createImageContainer({ imageUrl, caption })
  await waitUntilReady(containerId)
  return publishContainer(containerId)
}

// ─── Carousel post ────────────────────────────────────────────────────────────

/**
 * Publishes a carousel post to Instagram.
 * imageUrls must be publicly accessible (e.g. Supabase Storage).
 *
 * @param {{ imageUrls: string[], caption?: string }} params
 * @returns {Promise<{ id: string }>} published media ID
 */
export async function publishCarousel({ imageUrls, caption = '' }) {
  // Upload each slide as a child container
  const childIds = await Promise.all(
    imageUrls.map(url => createImageContainer({ imageUrl: url, isCarouselItem: true }))
  )

  // Create the parent carousel container
  const carouselId = await createCarouselContainer({ childIds, caption })
  await waitUntilReady(carouselId)

  return publishContainer(carouselId)
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

async function createImageContainer({ imageUrl, caption, isCarouselItem = false }) {
  const body = {
    image_url: imageUrl,
    access_token: getToken(),
  }

  if (isCarouselItem) {
    body.is_carousel_item = true
  } else if (caption) {
    body.caption = caption
  }

  const res = await fetch(`${BASE_URL}/${getIgUserId()}/media`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  if (data.error) throw new Error(`[createImageContainer] ${data.error.message}`)
  return data.id
}

async function createCarouselContainer({ childIds, caption }) {
  const res = await fetch(`${BASE_URL}/${getIgUserId()}/media`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      media_type: 'CAROUSEL',
      children: childIds.join(','),
      caption,
      access_token: getToken(),
    }),
  })

  const data = await res.json()
  if (data.error) throw new Error(`[createCarouselContainer] ${data.error.message}`)
  return data.id
}

/**
 * Polls the container status until FINISHED or times out.
 * Meta can take up to 30s to process images — skipping this causes MEDIA_NOT_READY errors.
 */
async function waitUntilReady(containerId, maxAttempts = 15, intervalMs = 3000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = await fetch(
      `${BASE_URL}/${containerId}?fields=status_code&access_token=${getToken()}`
    )
    const data = await res.json()

    if (data.status_code === 'FINISHED') return
    if (data.status_code === 'ERROR') {
      throw new Error(`[waitUntilReady] Container ${containerId} errored during processing`)
    }

    console.log(`[publish] Container ${containerId} status: ${data.status_code} (attempt ${attempt}/${maxAttempts})`)
    await sleep(intervalMs)
  }

  throw new Error(`[waitUntilReady] Container ${containerId} not ready after ${maxAttempts} attempts`)
}

async function publishContainer(containerId) {
  const res = await fetch(`${BASE_URL}/${getIgUserId()}/media_publish`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      creation_id: containerId,
      access_token: getToken(),
    }),
  })

  const data = await res.json()
  if (data.error) throw new Error(`[publishContainer] ${data.error.message}`)

  console.log(`[publish] Published successfully — media ID: ${data.id}`)
  return data
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
