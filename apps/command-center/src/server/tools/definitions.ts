import type Anthropic from '@anthropic-ai/sdk'

// Tool definitions sent to the Claude API on every call.
// Each definition tells Claude: what the tool does, when to use it, and what inputs it needs.

export const TOOL_DEFINITIONS: Anthropic.Tool[] = [
  // ── Google Workspace ────────────────────────────────────────────────────────
  {
    name: 'gws_drive_list',
    description: 'List files in the user\'s Google Drive. Use when asked to show, find, or list Drive files or documents.',
    input_schema: {
      type: 'object',
      properties: {
        folder: { type: 'string', description: 'Folder name or ID to list. Omit to list root.' },
      },
      required: [],
    },
  },
  {
    name: 'gws_drive_search',
    description: 'Search for files in Google Drive by name or content.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query string.' },
      },
      required: ['query'],
    },
  },
  {
    name: 'gws_drive_read',
    description: 'Read the content of a Google Drive file (Docs, Sheets, etc.) by its file ID.',
    input_schema: {
      type: 'object',
      properties: {
        file_id: { type: 'string', description: 'Google Drive file ID.' },
      },
      required: ['file_id'],
    },
  },
  {
    name: 'gws_gmail_search',
    description: 'Search emails in Gmail. Use Gmail search syntax (e.g. from:someone@email.com, subject:topic).',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Gmail search query.' },
        limit: { type: 'number', description: 'Max emails to return (default 10).' },
      },
      required: ['query'],
    },
  },
  {
    name: 'gws_gmail_read',
    description: 'Read a specific email by its message ID.',
    input_schema: {
      type: 'object',
      properties: {
        message_id: { type: 'string', description: 'Gmail message ID.' },
      },
      required: ['message_id'],
    },
  },
  {
    name: 'gws_calendar_list',
    description: 'List upcoming calendar events.',
    input_schema: {
      type: 'object',
      properties: {
        days: { type: 'number', description: 'How many days ahead to list (default 7).' },
      },
      required: [],
    },
  },
  {
    name: 'gws_calendar_create',
    description: 'Create a new calendar event.',
    input_schema: {
      type: 'object',
      properties: {
        title:       { type: 'string', description: 'Event title.' },
        start:       { type: 'string', description: 'Start datetime in ISO 8601 format.' },
        end:         { type: 'string', description: 'End datetime in ISO 8601 format.' },
        description: { type: 'string', description: 'Optional event description.' },
      },
      required: ['title', 'start', 'end'],
    },
  },
  {
    name: 'gws_sheets_read',
    description: 'Read data from a Google Sheets spreadsheet.',
    input_schema: {
      type: 'object',
      properties: {
        sheet_id: { type: 'string', description: 'Google Sheets spreadsheet ID.' },
        range:    { type: 'string', description: 'Cell range (e.g. Sheet1!A1:C10). Optional.' },
      },
      required: ['sheet_id'],
    },
  },
  {
    name: 'gws_docs_read',
    description: 'Read the content of a Google Doc.',
    input_schema: {
      type: 'object',
      properties: {
        doc_id: { type: 'string', description: 'Google Docs document ID.' },
      },
      required: ['doc_id'],
    },
  },

  // ── Obsidian Vault ───────────────────────────────────────────────────────────
  {
    name: 'obsidian_read',
    description: 'Read a note from the Obsidian vault (SÍRIOS). Use to retrieve existing knowledge, project docs, or diary entries.',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Vault-relative path to the note, e.g. "📐 Projetos/runa-command-center-prd.md".' },
      },
      required: ['path'],
    },
  },
  {
    name: 'obsidian_search',
    description: 'Search for notes in the Obsidian vault by keyword or phrase.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query.' },
      },
      required: ['query'],
    },
  },
  {
    name: 'obsidian_create',
    description: 'Create a new note in the Obsidian vault. Always include YAML frontmatter with date and tags.',
    input_schema: {
      type: 'object',
      properties: {
        path:    { type: 'string', description: 'Vault-relative path for the new note.' },
        content: { type: 'string', description: 'Full markdown content including frontmatter.' },
      },
      required: ['path', 'content'],
    },
  },
  {
    name: 'obsidian_append',
    description: 'Append content to an existing Obsidian note.',
    input_schema: {
      type: 'object',
      properties: {
        path:    { type: 'string', description: 'Vault-relative path to the note.' },
        content: { type: 'string', description: 'Markdown content to append.' },
      },
      required: ['path', 'content'],
    },
  },

  // ── Git / GitHub ─────────────────────────────────────────────────────────────
  {
    name: 'git_status',
    description: 'Show the current git working tree status (modified, staged, untracked files).',
    input_schema: { type: 'object', properties: {}, required: [] },
  },
  {
    name: 'git_log',
    description: 'Show recent git commit history.',
    input_schema: {
      type: 'object',
      properties: {
        limit: { type: 'number', description: 'Number of commits to show (default 10).' },
      },
      required: [],
    },
  },
  {
    name: 'git_diff',
    description: 'Show a summary of file changes compared to a git ref.',
    input_schema: {
      type: 'object',
      properties: {
        ref: { type: 'string', description: 'Git ref to diff against (default HEAD).' },
      },
      required: [],
    },
  },
  {
    name: 'gh_pr_list',
    description: 'List open pull requests on the GitHub repository.',
    input_schema: { type: 'object', properties: {}, required: [] },
  },
  {
    name: 'gh_issue_list',
    description: 'List GitHub issues.',
    input_schema: {
      type: 'object',
      properties: {
        state: { type: 'string', enum: ['open', 'closed', 'all'], description: 'Issue state filter (default open).' },
      },
      required: [],
    },
  },
]

// Human-readable labels shown in the chat UI while a tool is running
export const TOOL_LABELS: Record<string, string> = {
  gws_drive_list:     'Listando Google Drive...',
  gws_drive_search:   'Pesquisando no Drive...',
  gws_drive_read:     'Lendo arquivo do Drive...',
  gws_gmail_search:   'Pesquisando no Gmail...',
  gws_gmail_read:     'Lendo email...',
  gws_calendar_list:  'Verificando agenda...',
  gws_calendar_create:'Criando evento na agenda...',
  gws_sheets_read:    'Lendo planilha...',
  gws_docs_read:      'Lendo documento...',
  obsidian_read:      'Lendo nota no Obsidian...',
  obsidian_search:    'Pesquisando no vault...',
  obsidian_create:    'Criando nota no Obsidian...',
  obsidian_append:    'Atualizando nota no Obsidian...',
  git_status:         'Verificando status do repositório...',
  git_log:            'Consultando histórico de commits...',
  git_diff:           'Analisando diferenças...',
  gh_pr_list:         'Listando pull requests...',
  gh_issue_list:      'Listando issues do GitHub...',
}
