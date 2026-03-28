"""
@arthsystems_ Carousel PNG Exporter
=====================================
Takes a carousel HTML file and exports each .slide element as a PNG.

Usage:
  python -X utf8 scripts/export-carousel.py --html PATH --out DIR
  python -X utf8 scripts/export-carousel.py --html path/to/carousel.html --out path/to/pin-01-assets/

Output: slide_1.png ... slide_N.png in the output directory.
"""

import asyncio
import argparse
from pathlib import Path


async def export_carousel(html_path: str, out_dir: str):
    from playwright.async_api import async_playwright

    html_path = Path(html_path).resolve()
    out_dir   = Path(out_dir).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    # file:/// URI — forward slashes required on all platforms
    url = "file:///" + html_path.as_posix()

    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Match the Instagram square: 1080x1080 logical pixels
        page = await browser.new_page(
            viewport={"width": 1080, "height": 1080},
            device_scale_factor=1,
        )

        await page.goto(url, wait_until="networkidle")
        await page.wait_for_timeout(1200)  # allow fonts + CSS to settle

        slides = page.locator(".slide")
        count  = await slides.count()

        if count == 0:
            print(f"WARNING: No .slide elements found in {html_path.name}")
            await browser.close()
            return

        print(f"Found {count} slides in {html_path.name}")

        for i in range(count):
            slide    = slides.nth(i)
            out_path = out_dir / f"slide_{i + 1}.png"
            await slide.screenshot(path=str(out_path), omit_background=False)
            print(f"  + slide_{i + 1}.png")

        await browser.close()

    print(f"\nAll {count} slides exported to: {out_dir}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Export carousel slides to PNG")
    parser.add_argument("--html", required=True, help="Path to carousel HTML file")
    parser.add_argument("--out",  required=True, help="Output directory for PNGs")
    args = parser.parse_args()

    asyncio.run(export_carousel(args.html, args.out))
