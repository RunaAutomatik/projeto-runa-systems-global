import fetch from 'node-fetch'

const BASE_URL = "https://graph.facebook.com/v19.0"

function getToken() {
  return process.env.INSTAGRAM_ACCESS_TOKEN
}

function getIgUserId() {
  return process.env.INSTAGRAM_USER_ID
}

/**
 * Sends a plain text DM to a user.
 */
export async function sendDM(recipientId, text) {
  const res = await fetch(`${BASE_URL}/${getIgUserId()}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: { text },
      access_token: getToken()
    })
  })
  const data = await res.json()
  if (data.error) console.error('[sendDM] API error:', data.error)
  return data
}

/**
 * Sends a DM with quick reply buttons.
 * replies: [{ title: "Sim", payload: "YES" }, ...]
 */
export async function sendQuickReply(recipientId, text, replies) {
  const res = await fetch(`${BASE_URL}/${getIgUserId()}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: {
        text,
        quick_replies: replies.map(r => ({
          content_type: "text",
          title: r.title,
          payload: r.payload
        }))
      },
      access_token: getToken()
    })
  })
  const data = await res.json()
  if (data.error) console.error('[sendQuickReply] API error:', data.error)
  return data
}
