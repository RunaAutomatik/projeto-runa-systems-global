#!/usr/bin/env node
/**
 * Claude Code Hook: Stop Notification
 *
 * Registered as Stop event — fires when Claude finishes responding.
 * Shows a Windows balloon tip notification so the user knows input is needed.
 *
 * Stdin format (Stop):
 * {
 *   "session_id": "abc123",
 *   "transcript_path": "/path/to/session.jsonl",
 *   "cwd": "/path/to/project",
 *   "hook_event_name": "Stop"
 * }
 *
 * Non-blocking: spawns PowerShell detached, exits immediately.
 */

'use strict';

const { spawn } = require('child_process');

const HOOK_TIMEOUT_MS = 8000;

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

function showBalloonNotification() {
  const psScript = [
    'Add-Type -AssemblyName System.Windows.Forms',
    'Add-Type -AssemblyName System.Drawing',
    '$balloon = New-Object System.Windows.Forms.NotifyIcon',
    '$balloon.Icon = [System.Drawing.SystemIcons]::Information',
    '$balloon.BalloonTipIcon = [System.Windows.Forms.ToolTipIcon]::Info',
    '$balloon.BalloonTipTitle = "Claude Code"',
    '$balloon.BalloonTipText = "Tarefa concluida — pronto para sua resposta"',
    '$balloon.Visible = $true',
    '$balloon.ShowBalloonTip(6000)',
    'Start-Sleep -Milliseconds 600',
    '$balloon.Dispose()',
  ].join('; ');

  const ps = spawn('powershell', [
    '-NoProfile',
    '-NonInteractive',
    '-WindowStyle', 'Hidden',
    '-Command', psScript,
  ], {
    detached: true,
    stdio: 'ignore',
    windowsHide: true,
  });

  ps.unref();
}

async function main() {
  await readStdin();
  showBalloonNotification();
}

function run() {
  const timer = setTimeout(() => { process.exit(0); }, HOOK_TIMEOUT_MS);
  timer.unref();

  main()
    .then(() => { clearTimeout(timer); process.exitCode = 0; })
    .catch(() => { clearTimeout(timer); process.exitCode = 0; });
}

if (require.main === module) run();

module.exports = { readStdin, main, run };