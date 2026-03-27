"""
@arthsystems_ Brand Asset Exporter
===================================
Generates all brand assets from the Ansuz glyph SVG definition.
Outputs: glyph, avatar (circle), lockup (glyph + handle) at all required sizes.

Usage: python scripts/export-brand-assets.py
Output: SÍRIOS/📱 Instagram/@arthsystems_/brand-assets/
"""

import asyncio
from pathlib import Path

OUTPUT_DIR = Path("SÍRIOS/📱 Instagram/@arthsystems_/brand-assets")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# ─── Brand tokens ──────────────────────────────────────────────────────────────
DEEP_SPACE    = "#050D1A"
TEAL          = "#0E9E8E"
GOLD          = "#C9A84C"
WHITE_STAR    = "#F0F4F8"
MUTED_SILVER  = "#7A8A9A"

# ─── SVG builder ───────────────────────────────────────────────────────────────

def build_glyph_svg(size=200, teal=TEAL, gold=GOLD, bg=None, circle=False):
    """
    Renders the Ansuz modified glyph at any size.
    Optionally wraps in a circle (for profile picture / avatar use).
    """
    stroke_w  = max(1.5, size * 0.012)
    gold_w    = max(1.2, size * 0.009)
    pad       = size * 0.15
    cx        = size / 2
    # Vertical stem
    y_top     = pad
    y_bot     = size - pad
    # Diagonal branches (Ansuz)
    b1_y1     = size * 0.30; b1_y2 = size * 0.58
    b2_y1     = size * 0.52; b2_y2 = size * 0.80
    x_right   = size - pad * 0.5
    # Horizontal bar (circuit/terminal) — the gold modification
    bar_y     = size * 0.20
    bar_x1    = pad * 0.8
    bar_x2    = size - pad * 0.8

    bg_layer = ""
    if circle:
        bg_layer = f'<circle cx="{cx}" cy="{cx}" r="{cx}" fill="url(#avatarGrad)"/>'
    elif bg:
        bg_layer = f'<rect width="{size}" height="{size}" fill="{bg}"/>'

    grad = ""
    if circle:
        grad = f"""
  <defs>
    <radialGradient id="avatarGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#0A1E3A"/>
      <stop offset="100%" stop-color="{DEEP_SPACE}"/>
    </radialGradient>
  </defs>"""

    lines = f"""
  <!-- Vertical stem -->
  <line x1="{cx}" y1="{y_top}" x2="{cx}" y2="{y_bot}"
        stroke="{teal}" stroke-width="{stroke_w}" stroke-linecap="round"/>
  <!-- Ansuz branch 1 -->
  <line x1="{cx}" y1="{b1_y1}" x2="{x_right}" y2="{b1_y2}"
        stroke="{teal}" stroke-width="{stroke_w}" stroke-linecap="round"/>
  <!-- Ansuz branch 2 -->
  <line x1="{cx}" y1="{b2_y1}" x2="{x_right}" y2="{b2_y2}"
        stroke="{teal}" stroke-width="{stroke_w}" stroke-linecap="round"/>
  <!-- Horizontal bar — circuit terminal (gold) -->
  <line x1="{bar_x1}" y1="{bar_y}" x2="{bar_x2}" y2="{bar_y}"
        stroke="{gold}" stroke-width="{gold_w}" stroke-linecap="round" opacity="0.9"/>"""

    viewbox_size = size
    return f"""<svg width="{size}" height="{viewbox_size}" viewBox="0 0 {size} {viewbox_size}" fill="none" xmlns="http://www.w3.org/2000/svg">{grad}
  {bg_layer}{lines}
</svg>"""


def build_lockup_svg(width=400, height=80):
    """
    Handle lockup: [glyph] @arthsystems_
    Used in slide corners and for watermarking.
    """
    glyph_h = height * 0.75
    glyph_w = glyph_h * 0.72
    font_size = height * 0.30
    text_x = glyph_w + 16
    text_y = height / 2 + font_size * 0.35

    return f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&amp;display=swap');</style>
  </defs>
  <!-- Glyph inline -->
  <line x1="{glyph_w/2}" y1="{height*0.10}" x2="{glyph_w/2}" y2="{height*0.88}"
        stroke="{TEAL}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="{glyph_w/2}" y1="{height*0.32}" x2="{glyph_w*0.92}" y2="{height*0.56}"
        stroke="{TEAL}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="{glyph_w/2}" y1="{height*0.54}" x2="{glyph_w*0.92}" y2="{height*0.78}"
        stroke="{TEAL}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="{glyph_w*0.12}" y1="{height*0.20}" x2="{glyph_w*0.88}" y2="{height*0.20}"
        stroke="{GOLD}" stroke-width="1.8" stroke-linecap="round" opacity="0.9"/>
  <!-- Handle text -->
  <text x="{text_x}" y="{text_y}"
        font-family="Inter, -apple-system, sans-serif"
        font-size="{font_size}" font-weight="600"
        fill="{GOLD}" letter-spacing="0.5">@arthsystems_</text>
</svg>"""


def build_html_page(assets: list[dict]) -> str:
    """Wraps all SVG variants in a single HTML for Playwright export."""
    items = ""
    for a in assets:
        items += f"""
    <div class="asset-wrap" id="{a['id']}"
         style="width:{a['size']}px;height:{a['h']}px;display:flex;align-items:center;justify-content:center;background:{a.get('page_bg','transparent')};">
      {a['svg']}
    </div>"""

    return f"""<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>
  *{{margin:0;padding:0;box-sizing:border-box;}}
  body{{background:#030810;display:flex;flex-wrap:wrap;gap:40px;padding:40px;}}
  .asset-wrap{{border-radius:8px;overflow:hidden;}}
</style>
</head><body>{items}</body></html>"""


# ─── Export pipeline ────────────────────────────────────────────────────────────

async def export_assets():
    from playwright.async_api import async_playwright

    assets = [
        # 1. Glyph only — transparent bg (for overlays / compositing)
        {
            "id": "glyph-512",
            "filename": "glyph-512.png",
            "size": 512, "h": 512,
            "page_bg": "transparent",
            "svg": build_glyph_svg(512),
            "clip": {"x": 0, "y": 0, "width": 512, "height": 512},
            "scale": 1,
        },
        # 2. Glyph — dark background (for slides / decks)
        {
            "id": "glyph-dark-512",
            "filename": "glyph-dark-512.png",
            "size": 512, "h": 512,
            "page_bg": DEEP_SPACE,
            "svg": build_glyph_svg(512, bg=DEEP_SPACE),
            "clip": {"x": 0, "y": 0, "width": 512, "height": 512},
            "scale": 1,
        },
        # 3. Avatar circle — 512px (Instagram profile picture, Slack, etc.)
        {
            "id": "avatar-512",
            "filename": "avatar-512.png",
            "size": 512, "h": 512,
            "page_bg": DEEP_SPACE,
            "svg": build_glyph_svg(512, circle=True),
            "clip": {"x": 0, "y": 0, "width": 512, "height": 512},
            "scale": 1,
        },
        # 4. Avatar circle — 200px (small UI, thumbnails)
        {
            "id": "avatar-200",
            "filename": "avatar-200.png",
            "size": 200, "h": 200,
            "page_bg": DEEP_SPACE,
            "svg": build_glyph_svg(200, circle=True),
            "clip": {"x": 0, "y": 0, "width": 200, "height": 200},
            "scale": 2,
        },
        # 5. Handle lockup — horizontal (for slide corners, email headers, docs)
        {
            "id": "lockup-400",
            "filename": "lockup-400x80.png",
            "size": 400, "h": 80,
            "page_bg": "transparent",
            "svg": build_lockup_svg(400, 80),
            "clip": {"x": 0, "y": 0, "width": 400, "height": 80},
            "scale": 2,
        },
        # 6. Glyph watermark — large, very low opacity (slide bg watermark)
        {
            "id": "watermark-800",
            "filename": "watermark-800.png",
            "size": 800, "h": 800,
            "page_bg": "transparent",
            "svg": build_glyph_svg(800, teal=f"rgba(14,158,142,0.07)", gold=f"rgba(201,168,76,0.05)"),
            "clip": {"x": 0, "y": 0, "width": 800, "height": 800},
            "scale": 1,
        },
    ]

    html = build_html_page(assets)
    html_path = OUTPUT_DIR / "_export-source.html"
    html_path.write_text(html, encoding="utf-8")

    async with async_playwright() as p:
        browser = await p.chromium.launch()

        for a in assets:
            page = await browser.new_page(
                viewport={"width": a["size"] + 80, "height": a["h"] + 80},
                device_scale_factor=a.get("scale", 1),
            )
            await page.set_content(html, wait_until="networkidle")
            await page.wait_for_timeout(800)

            el = page.locator(f"#{a['id']}")
            out_path = OUTPUT_DIR / a["filename"]
            await el.screenshot(path=str(out_path), omit_background=True)
            print(f"✓ {a['filename']} ({a['size']}×{a['h']}px)")
            await page.close()

        await browser.close()

    # Also save standalone SVG files
    (OUTPUT_DIR / "glyph.svg").write_text(build_glyph_svg(200), encoding="utf-8")
    (OUTPUT_DIR / "avatar.svg").write_text(build_glyph_svg(200, circle=True), encoding="utf-8")
    (OUTPUT_DIR / "lockup.svg").write_text(build_lockup_svg(400, 80), encoding="utf-8")
    print("✓ SVG source files saved")
    print(f"\nAll assets exported to: {OUTPUT_DIR.resolve()}")


if __name__ == "__main__":
    asyncio.run(export_assets())
