import { renderSlides } from '../carousel/renderer.js'

/**
 * Renders a single-image post from a FREYJA brief.
 * Brief must have exactly one slide — or only the first slide is used.
 *
 * Returns a single PNG buffer.
 *
 * @param {import('../brief.schema.js').BriefSchema} brief
 * @returns {Promise<Buffer>}
 */
export async function renderImage(brief) {
  const singleSlideBrief = { ...brief, slides: [brief.slides[0]] }
  const [result] = await renderSlides(singleSlideBrief)
  return result.buffer
}
