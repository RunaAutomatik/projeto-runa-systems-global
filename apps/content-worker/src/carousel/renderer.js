import puppeteer from 'puppeteer'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))

// Pixel dimensions per content type
const DIMENSIONS = {
  carousel: { width: 1080, height: 1080 },
  image:    { width: 1080, height: 1080 },
  story:    { width: 1080, height: 1920 },
}

/**
 * Renders all slides from a FREYJA brief into PNG buffers.
 * Returns an array of { index, buffer } — one per slide.
 *
 * @param {import('../brief.schema.js').BriefSchema} brief
 * @returns {Promise<Array<{ index: number, buffer: Buffer }>>}
 */
export async function renderSlides(brief) {
  const { brand, slides, narrative, type } = brief
  const dim = DIMENSIONS[type] ?? DIMENSIONS.carousel

  const templatePath = join(__dir, 'templates', `${brand}.html`)
  const templateSrc = await readFile(templatePath, 'utf8')

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const results = []

  try {
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i]
      const isFirst = i === 0
      const isLast = i === slides.length - 1

      const slideClass = isFirst ? 'hook' : isLast ? 'last' : ''
      const titleSize = isFirst ? '72px' : '52px'
      const hookTitleSize = '80px'

      // Simple template interpolation (no runtime dep needed)
      const html = templateSrc
        .replace(/\{\{slideClass\}\}/g, slideClass)
        .replace(/\{\{titleSize\}\}/g, titleSize)
        .replace(/\{\{hookTitleSize\}\}/g, hookTitleSize)
        .replace(/\{\{#if title\}\}([\s\S]*?)\{\{\/if\}\}/g,
          slide.title ? `<h1 class="title">${escHtml(slide.title)}</h1>` : '')
        .replace(/\{\{#if body\}\}([\s\S]*?)\{\{\/if\}\}/g,
          slide.body ? `<p class="body">${escHtml(slide.body)}</p>` : '')
        .replace(/\{\{#if cta\}\}([\s\S]*?)\{\{#else\}\}([\s\S]*?)\{\{\/if\}\}/g,
          narrative?.cta
            ? `<span class="cta">Comente ${escHtml(narrative.cta)}</span>`
            : `<span class="cta">@arthsystems_</span>`)
        .replace(/\{\{slideIndex\}\}/g, String(i + 1))
        .replace(/\{\{totalSlides\}\}/g, String(slides.length))

      const page = await browser.newPage()
      await page.setViewport({ width: dim.width, height: dim.height, deviceScaleFactor: 2 })
      await page.setContent(html, { waitUntil: 'networkidle0' })

      const buffer = await page.screenshot({ type: 'png', fullPage: false })
      await page.close()

      results.push({ index: i + 1, buffer })
    }
  } finally {
    await browser.close()
  }

  return results
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>')
}
