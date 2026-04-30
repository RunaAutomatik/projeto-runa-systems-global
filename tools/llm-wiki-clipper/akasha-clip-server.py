#!/usr/bin/env python3
"""
AKASHA Web Clipper Server
Receives clips from the LLM Wiki Chrome extension and saves to AKASHA/raw/

Usage: python akasha-clip-server.py [--vault PATH]
Default vault: C:/runa-systems-global/AKASHA
"""

import argparse
import hashlib
import json
import os
import re
import sys
from datetime import datetime
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import urlparse

DEFAULT_VAULT = Path("C:/runa-systems-global/AKASHA")
PORT = 19827

def slugify(title: str) -> str:
    slug = re.sub(r"[^\w\s-]", "", title.lower())
    slug = re.sub(r"[\s_]+", "-", slug).strip("-")
    return slug[:60]

def sha256_of(text: str) -> str:
    return hashlib.sha256(text.encode()).hexdigest()

def load_cache(vault: Path) -> dict:
    cache_file = vault / ".ingest-cache.json"
    if cache_file.exists():
        with open(cache_file, encoding="utf-8") as f:
            return json.load(f)
    return {}

def save_cache(vault: Path, cache: dict):
    cache_file = vault / ".ingest-cache.json"
    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)

class ClipHandler(BaseHTTPRequestHandler):
    vault: Path = DEFAULT_VAULT

    def log_message(self, format, *args):
        print(f"[{datetime.now().strftime('%H:%M:%S')}]", format % args)

    def send_json(self, code: int, data: dict):
        body = json.dumps(data).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/status":
            self.send_json(200, {"status": "ok", "vault": str(self.vault)})
        elif path == "/projects":
            self.send_json(200, {"projects": [str(self.vault)]})
        elif path == "/project":
            self.send_json(200, {"path": str(self.vault)})
        else:
            self.send_json(404, {"error": "not found"})

    def do_POST(self):
        path = urlparse(self.path).path
        if path != "/clip":
            self.send_json(404, {"error": "not found"})
            return

        length = int(self.headers.get("Content-Length", 0))
        body = json.loads(self.rfile.read(length))

        title = body.get("title", "untitled").strip()
        url = body.get("url", "")
        content = body.get("content", "")

        if not content:
            self.send_json(400, {"error": "empty content"})
            return

        # Dedup check
        cache = load_cache(self.vault)
        digest = sha256_of(content)
        if digest in cache:
            self.send_json(200, {
                "status": "duplicate",
                "message": f"Already ingested: {cache[digest]['file']}",
                "file": cache[digest]["file"]
            })
            return

        # Build filename
        date_prefix = datetime.now().strftime("%Y-%m-%d")
        slug = slugify(title) or "web-clip"
        filename = f"{date_prefix}-{slug}.md"
        raw_dir = self.vault / "raw"
        raw_dir.mkdir(exist_ok=True)
        filepath = raw_dir / filename

        # Handle collision
        counter = 1
        while filepath.exists():
            filepath = raw_dir / f"{date_prefix}-{slug}-{counter}.md"
            counter += 1

        # Write markdown
        md = f"""---
title: "{title}"
source_url: "{url}"
clipped: "{date_prefix}"
type: web-clip
---

# {title}

> Source: {url}
> Clipped: {date_prefix}

{content}
"""
        filepath.write_text(md, encoding="utf-8")

        # Update cache
        cache[digest] = {"file": filepath.name, "url": url, "date": date_prefix}
        save_cache(self.vault, cache)

        print(f"  ✓ Saved: raw/{filepath.name}")
        self.send_json(200, {
            "status": "ok",
            "file": filepath.name,
            "message": f"Clipped to AKASHA/raw/{filepath.name}"
        })


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--vault", default=str(DEFAULT_VAULT))
    args = parser.parse_args()

    vault = Path(args.vault)
    if not vault.exists():
        print(f"Vault not found: {vault}", file=sys.stderr)
        sys.exit(1)

    ClipHandler.vault = vault
    server = HTTPServer(("127.0.0.1", PORT), ClipHandler)
    print(f"AKASHA Clipper Server running on port {PORT}")
    print(f"Vault: {vault}")
    print(f"Saving clips to: {vault / 'raw'}")
    print("Press Ctrl+C to stop.\n")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")


if __name__ == "__main__":
    main()
