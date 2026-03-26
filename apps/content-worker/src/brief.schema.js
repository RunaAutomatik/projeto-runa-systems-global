import { z } from 'zod'

// Slide schema — used for carousel (N slides) and image (1 slide)
export const SlideSchema = z.object({
  title: z.string().optional(),
  body: z.string(),
  note: z.string().optional(), // visual note for future AI gen (Stage 1.5)
})

// FREYJA brief — standardized input format for all content types
export const BriefSchema = z.object({
  type: z.enum(['carousel', 'image', 'story', 'reel', 'video']),
  content_id: z.string(),
  brand: z.string().default('dark-architect'),

  narrative: z.object({
    hook: z.string().optional(),
    cta: z.string().optional(), // ARQUITETO | RUNA | SISTEMA
  }).optional(),

  // Required for carousel (N slides) and image (1 slide)
  slides: z.array(SlideSchema).min(1),

  caption: z.string().optional(),
  hashtags: z.array(z.string()).default([]),

  // Stage 1.5: AI image generation context (stored, not yet used)
  mood: z.string().optional(),
  visual_direction: z.string().optional(),
})

export function parseBrief(raw) {
  return BriefSchema.parse(raw)
}
