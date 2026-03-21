import { executeCommand } from './executor'

// Project root — where git operations run
const PROJECT_ROOT = process.cwd()

export async function gitStatus(_input: Record<string, unknown>): Promise<string> {
  const r = await executeCommand('git', ['status', '--short'], { env: { ...process.env, GIT_WORK_TREE: PROJECT_ROOT } })
  return r.output || 'Working tree clean.'
}

export async function gitLog(input: Record<string, unknown>): Promise<string> {
  const limit = (input.limit as number | undefined) ?? 10
  const r = await executeCommand('git', ['log', '--oneline', `-${limit}`])
  return r.output
}

export async function gitDiff(input: Record<string, unknown>): Promise<string> {
  const ref = (input.ref as string | undefined) ?? 'HEAD'
  const r = await executeCommand('git', ['diff', '--stat', ref])
  return r.output || 'No differences.'
}

export async function ghPrList(_input: Record<string, unknown>): Promise<string> {
  const r = await executeCommand('gh', ['pr', 'list', '--json', 'number,title,state,author', '--limit', '10'])
  return r.output
}

export async function ghIssueList(input: Record<string, unknown>): Promise<string> {
  const state = (input.state as string | undefined) ?? 'open'
  const r = await executeCommand('gh', ['issue', 'list', '--state', state, '--limit', '15'])
  return r.output
}
