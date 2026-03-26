/**
 * Trigger map: comment patterns → predefined links
 * Add new triggers by duplicating an entry below.
 * Patterns support regex — use /palavra/i for case-insensitive.
 */
export const triggers = [
  {
    id: "creator",
    patterns: [/creator\$/i, /quero o creator/i, /me manda.*creator/i, /creator/i],
    link: process.env.LINK_CREATOR || "",
    description: "CREATOR$"
  },
  {
    id: "alpha",
    patterns: [/alpha/i, /quero.*alpha/i, /me manda.*alpha/i],
    link: process.env.LINK_ALPHA || "",
    description: "Alpha®"
  }
  // Add more triggers here following the same pattern
]

/**
 * Returns the first matching trigger for a given comment text.
 * Returns null if no trigger matches.
 */
export function matchTrigger(commentText) {
  for (const trigger of triggers) {
    for (const pattern of trigger.patterns) {
      if (pattern.test(commentText)) return trigger
    }
  }
  return null
}
