import { gwsDriveList, gwsDriveSearch, gwsDriveRead, gwsGmailSearch, gwsGmailRead, gwsCalendarList, gwsCalendarCreate, gwsSheetsRead, gwsDocsRead } from './gws-tools'
import { obsidianRead, obsidianSearch, obsidianCreate, obsidianAppend } from './obsidian-tools'
import { gitStatus, gitLog, gitDiff, ghPrList, ghIssueList } from './git-tools'

export { TOOL_DEFINITIONS, TOOL_LABELS } from './definitions'

// Central registry: tool name → async handler function
const TOOL_HANDLERS: Record<string, (input: Record<string, unknown>) => Promise<string>> = {
  // Google Workspace
  gws_drive_list:     gwsDriveList,
  gws_drive_search:   gwsDriveSearch,
  gws_drive_read:     gwsDriveRead,
  gws_gmail_search:   gwsGmailSearch,
  gws_gmail_read:     gwsGmailRead,
  gws_calendar_list:  gwsCalendarList,
  gws_calendar_create:gwsCalendarCreate,
  gws_sheets_read:    gwsSheetsRead,
  gws_docs_read:      gwsDocsRead,
  // Obsidian
  obsidian_read:      obsidianRead,
  obsidian_search:    obsidianSearch,
  obsidian_create:    obsidianCreate,
  obsidian_append:    obsidianAppend,
  // Git / GitHub
  git_status:         gitStatus,
  git_log:            gitLog,
  git_diff:           gitDiff,
  gh_pr_list:         ghPrList,
  gh_issue_list:      ghIssueList,
}

/**
 * Execute a tool by name. Returns the string result or an error message.
 */
export async function executeTool(name: string, input: Record<string, unknown>): Promise<{ success: boolean; output: string }> {
  const handler = TOOL_HANDLERS[name]
  if (!handler) return { success: false, output: `Unknown tool: ${name}` }

  try {
    const output = await handler(input)
    return { success: true, output }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, output: `Tool error: ${message}` }
  }
}
