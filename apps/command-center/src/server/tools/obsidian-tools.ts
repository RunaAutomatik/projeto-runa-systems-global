// Obsidian Local REST API — https://localhost:27124
// Provided by the Local REST API community plugin
// Two vaults: SÍRIOS (primary) and AKASHA (knowledge base)
// Only one vault is open at a time — system auto-detects the active one.

import https from 'https'
import type { RequestOptions } from 'https'

const OBSIDIAN_HOST = 'localhost'
const OBSIDIAN_PORT = 27124

// Bypass self-signed cert for localhost
const tlsAgent = new https.Agent({ rejectUnauthorized: false })

interface ObsidianResponse { status: number; ok: boolean; body: string }

function obsidianRequest(
  path: string,
  apiKey: string,
  method = 'GET',
  body?: string,
  contentType = 'application/json',
): Promise<ObsidianResponse> {
  return new Promise((resolve, reject) => {
    const headers: Record<string, string | number> = {
      'Content-Type': contentType,
      'Authorization': `Bearer ${apiKey}`,
    }
    if (body) headers['Content-Length'] = Buffer.byteLength(body)

    const options: RequestOptions = {
      hostname: OBSIDIAN_HOST,
      port:     OBSIDIAN_PORT,
      path,
      method,
      headers,
      agent:    tlsAgent,
    }

    const req = https.request(options, res => {
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => {
        const status = res.statusCode ?? 0
        resolve({ status, ok: status >= 200 && status < 300, body: data })
      })
    })

    req.on('error', reject)
    req.setTimeout(5000, () => { req.destroy(new Error('Obsidian request timeout')) })
    if (body) req.write(body)
    req.end()
  })
}

// Returns the API key for whichever vault is currently open, or null if offline.
// Tries SÍRIOS first (primary vault), then AKASHA.
let cachedKey: string | null = null
let cacheExpiry = 0

async function getActiveKey(): Promise<string | null> {
  // Cache the active key for 30s to avoid probing on every call
  if (cachedKey && Date.now() < cacheExpiry) return cachedKey

  const keys = [
    { name: 'SÍRIOS', key: process.env.OBSIDIAN_API_KEY_SIRIOS ?? '' },
    { name: 'AKASHA', key: process.env.OBSIDIAN_API_KEY_AKASHA ?? '' },
  ]

  for (const { key } of keys) {
    if (!key) continue
    try {
      const res = await obsidianRequest('/', key)
      if (res.status !== 401) {
        cachedKey = key
        cacheExpiry = Date.now() + 30_000
        return key
      }
    } catch {
      // Connection refused — Obsidian is not running
      break
    }
  }

  cachedKey = null
  cacheExpiry = 0
  return null
}

const OFFLINE_MSG = 'Obsidian offline — open Obsidian (SÍRIOS or AKASHA vault) with the Local REST API plugin enabled.'

export async function obsidianRead(input: Record<string, unknown>): Promise<string> {
  const key = await getActiveKey()
  if (!key) return OFFLINE_MSG
  const path = input.path as string
  const res = await obsidianRequest(`/vault/${encodeURIComponent(path)}`, key)
  if (!res.ok) return `Error reading note: HTTP ${res.status}`
  return res.body
}

export async function obsidianSearch(input: Record<string, unknown>): Promise<string> {
  const key = await getActiveKey()
  if (!key) return OFFLINE_MSG
  const query = input.query as string
  // v3.x uses POST /search/ with JsonLogic expression and application/vnd.olrapi.jsonlogic+json
  const body = JSON.stringify({ 'in': [query, { 'var': 'content' }] })
  const res = await obsidianRequest('/search/', key, 'POST', body, 'application/vnd.olrapi.jsonlogic+json')
  if (!res.ok) return `Error searching vault: HTTP ${res.status}`
  const data = JSON.parse(res.body) as { filename: string; result: boolean }[]
  const matches = data.filter(r => r.result)
  if (!matches.length) return 'No results found.'
  return matches
    .slice(0, 10)
    .map(r => `- ${r.filename}`)
    .join('\n')
}

export async function obsidianCreate(input: Record<string, unknown>): Promise<string> {
  const key = await getActiveKey()
  if (!key) return OFFLINE_MSG
  const { path, content } = input as Record<string, string>
  const res = await obsidianRequest(`/vault/${encodeURIComponent(path)}`, key, 'PUT', content, 'text/markdown')
  if (!res.ok) return `Error creating note: HTTP ${res.status}`
  return `Note created at ${path}`
}

export async function obsidianAppend(input: Record<string, unknown>): Promise<string> {
  const key = await getActiveKey()
  if (!key) return OFFLINE_MSG
  const { path, content } = input as Record<string, string>
  const res = await obsidianRequest(`/vault/${encodeURIComponent(path)}`, key, 'POST', content, 'text/markdown')
  if (!res.ok) return `Error appending to note: HTTP ${res.status}`
  return `Content appended to ${path}`
}
