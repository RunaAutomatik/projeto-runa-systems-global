/**
 * Video compositor — Stage 1 stub.
 *
 * Stage 2 plan: Remotion with @remotion/cloudrun
 * - React component library for brand-consistent video
 * - Renders on GCP Cloud Run (no Docker locally needed)
 * - Input: FREYJA brief with script + visual_direction
 * - Output: MP4 URL (Cloud Run renders async, returns download URL)
 *
 * For now, returns a structured response indicating the brief was received
 * and is queued for manual/future processing.
 */
export async function composeVideo(brief) {
  console.warn('[video/compositor] Stage 2 not yet implemented — Remotion setup pending')

  return {
    status: 'pending',
    content_id: brief.content_id,
    type: brief.type,
    message: 'Video rendering is queued for Stage 2 (Remotion). Brief stored.',
    brief,
  }
}
