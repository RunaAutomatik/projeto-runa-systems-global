import { spawn } from 'child_process'

export interface ExecuteResult {
  success: boolean
  output: string
}

/**
 * Spawns a CLI command and returns stdout/stderr as a string.
 * Used by all tool handlers (gws, git, gh, obsidian).
 */
export function executeCommand(
  command: string,
  args: string[],
  options: { timeout?: number; env?: NodeJS.ProcessEnv } = {}
): Promise<ExecuteResult> {
  const { timeout = 30_000, env } = options

  return new Promise(resolve => {
    const proc = spawn(command, args, {
      shell: true,
      env: { ...process.env, ...env },
      windowsHide: true,
    })

    let stdout = ''
    let stderr = ''

    proc.stdout.on('data', chunk => { stdout += chunk.toString() })
    proc.stderr.on('data', chunk => { stderr += chunk.toString() })

    const timer = setTimeout(() => {
      proc.kill()
      resolve({ success: false, output: `Timeout: command took longer than ${timeout / 1000}s` })
    }, timeout)

    proc.on('close', code => {
      clearTimeout(timer)
      if (code === 0) {
        resolve({ success: true, output: stdout.trim() || '(no output)' })
      } else {
        resolve({ success: false, output: stderr.trim() || stdout.trim() || `Exit code ${code}` })
      }
    })

    proc.on('error', err => {
      clearTimeout(timer)
      resolve({ success: false, output: `Failed to spawn: ${err.message}` })
    })
  })
}
