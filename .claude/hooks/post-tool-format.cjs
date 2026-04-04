#!/usr/bin/env node
/**
 * Claude Code Hook: PostToolUse Auto-Format
 *
 * Registered as PostToolUse event (matcher: Edit|Write).
 * Runs prettier on TypeScript/JavaScript files after edits.
 *
 * Scope: only .ts, .tsx, .js, .jsx files — never hooks, configs, markdown, YAML.
 * Protected: skips files in .claude/, .aiox-core/, SÍRIOS/, AKASHA/.
 *
 * Stdin format (PostToolUse):
 * {
 *   "session_id": "...",
 *   "tool_name": "Edit" | "Write",
 *   "tool_input": { "file_path": "...", ... },
 *   "tool_response": { ... },
 *   "hook_event_name": "PostToolUse"
 * }
 */

'use strict';

const { execSync } = require('child_process');
const path = require('path');

const HOOK_TIMEOUT_MS = 12000;

/** Extensions eligible for formatting */
const FORMATTABLE_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css']);

/** Path segments that are off-limits */
const SKIP_SEGMENTS = ['.claude', '.aiox-core', 'SÍRIOS', 'AKASHA', 'node_modules'];

function readStdin() {
  return new Promise((resolve) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('error', () => resolve({}));
    process.stdin.on('data', (chunk) => { data += chunk; });
    process.stdin.on('end', () => {
      try { resolve(JSON.parse(data)); }
      catch { resolve({}); }
    });
  });
}

function shouldFormat(filePath) {
  if (!filePath) return false;
  const ext = path.extname(filePath).toLowerCase();
  if (!FORMATTABLE_EXTS.has(ext)) return false;
  const normalized = filePath.replace(/\\/g, '/');
  return !SKIP_SEGMENTS.some((seg) => normalized.includes(`/${seg}/`) || normalized.includes(`/${seg}`));
}

async function main() {
  const input = await readStdin();
  const filePath = input?.tool_input?.file_path;

  if (!shouldFormat(filePath)) return;

  try {
    // Use --log-level silent to suppress all output — never pollute stderr
    execSync(`npx prettier --write --log-level silent "${filePath}"`, {
      timeout: 10000,
      stdio: 'ignore',
    });
  } catch {
    // Silent fail — formatting is best-effort, never break the workflow
  }
}

function run() {
  const timer = setTimeout(() => { process.exit(0); }, HOOK_TIMEOUT_MS);
  timer.unref();

  main()
    .then(() => { clearTimeout(timer); process.exitCode = 0; })
    .catch(() => { clearTimeout(timer); process.exitCode = 0; });
}

if (require.main === module) run();

module.exports = { readStdin, main, run, shouldFormat };
