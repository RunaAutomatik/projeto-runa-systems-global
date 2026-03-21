import { executeCommand } from './executor'

// GWS binary — installed globally via npm
// CLI syntax: gws <service> <resource> [sub-resource] <method> --params '{JSON}'
const GWS = 'gws'

export async function gwsDriveList(input: Record<string, unknown>): Promise<string> {
  const folder = input.folder as string | undefined
  const params: Record<string, unknown> = { pageSize: 20, orderBy: 'modifiedTime desc', fields: 'files(id,name,mimeType,modifiedTime,size)' }
  if (folder) params.q = `"${folder}" in parents`
  const r = await executeCommand(GWS, ['drive', 'files', 'list', '--params', JSON.stringify(params)])
  return r.output
}

export async function gwsDriveSearch(input: Record<string, unknown>): Promise<string> {
  const query = input.query as string
  const params = { q: `name contains "${query}"`, pageSize: 10, fields: 'files(id,name,mimeType,modifiedTime)' }
  const r = await executeCommand(GWS, ['drive', 'files', 'list', '--params', JSON.stringify(params)])
  return r.output
}

export async function gwsDriveRead(input: Record<string, unknown>): Promise<string> {
  const id = input.file_id as string
  // Export Google Docs/Sheets as plain text; for other types fetch metadata
  const metaParams = { fileId: id, fields: 'id,name,mimeType' }
  const meta = await executeCommand(GWS, ['drive', 'files', 'get', '--params', JSON.stringify(metaParams)])
  if (!meta.success) return meta.output

  let mimeType = ''
  try { mimeType = JSON.parse(meta.output).mimeType ?? '' } catch { /* ignore */ }

  const isGoogleDoc = mimeType.startsWith('application/vnd.google-apps.')
  if (isGoogleDoc) {
    const exportParams = { fileId: id, mimeType: 'text/plain' }
    const r = await executeCommand(GWS, ['drive', 'files', 'export', '--params', JSON.stringify(exportParams)])
    return r.output
  }

  // Non-exportable file: return metadata
  return meta.output
}

export async function gwsGmailSearch(input: Record<string, unknown>): Promise<string> {
  const query = input.query as string
  const limit = (input.limit as number | undefined) ?? 10
  const params = { userId: 'me', q: query, maxResults: limit }
  const r = await executeCommand(GWS, ['gmail', 'users', 'messages', 'list', '--params', JSON.stringify(params)])
  return r.output
}

export async function gwsGmailRead(input: Record<string, unknown>): Promise<string> {
  const id = input.message_id as string
  const params = { userId: 'me', id, format: 'full' }
  const r = await executeCommand(GWS, ['gmail', 'users', 'messages', 'get', '--params', JSON.stringify(params)])
  return r.output
}

export async function gwsCalendarList(input: Record<string, unknown>): Promise<string> {
  const days = (input.days as number | undefined) ?? 7
  const timeMin = new Date().toISOString()
  const timeMax = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
  const params = { calendarId: 'primary', maxResults: 20, singleEvents: true, orderBy: 'startTime', timeMin, timeMax }
  const r = await executeCommand(GWS, ['calendar', 'events', 'list', '--params', JSON.stringify(params)])
  return r.output
}

export async function gwsCalendarCreate(input: Record<string, unknown>): Promise<string> {
  const { title, start, end, description } = input as Record<string, string>
  const body = {
    summary: title,
    start: { dateTime: start },
    end:   { dateTime: end },
    ...(description ? { description } : {}),
  }
  const params = { calendarId: 'primary' }
  const r = await executeCommand(GWS, ['calendar', 'events', 'insert', '--params', JSON.stringify(params), '--json', JSON.stringify(body)])
  return r.output
}

export async function gwsSheetsRead(input: Record<string, unknown>): Promise<string> {
  const { sheet_id, range } = input as Record<string, string>
  const params: Record<string, unknown> = { spreadsheetId: sheet_id }
  if (range) params.range = range
  const subResource = range ? ['spreadsheets', 'values', 'get'] : ['spreadsheets', 'get']
  const r = await executeCommand(GWS, ['sheets', ...subResource, '--params', JSON.stringify(params)])
  return r.output
}

export async function gwsDocsRead(input: Record<string, unknown>): Promise<string> {
  const id = input.doc_id as string
  const params = { fileId: id, mimeType: 'text/plain' }
  const r = await executeCommand(GWS, ['drive', 'files', 'export', '--params', JSON.stringify(params)])
  return r.output
}
