---
epic: "02"
story: "02-5"
title: "/planos pricing page — RUNA Mentoria card + dashboard preview"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-02-content-library.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-5"
---

# Story 02-5 — /planos Pricing Page

## Context

The shell page created in Story 01-5 is a placeholder. This story implements the actual pricing page. No Stripe integration (Epic 04). The CTA button generates a WhatsApp intent link — consistent with the current RUNA sales flow where interested buyers open a conversation before purchasing.

Single product: **RUNA Mentoria — R$ 7.000**
- 21 sessões / 7 semanas / 3×semana / 1.5h cada
- Acesso à biblioteca completa (mentee tier)
- 8 Agentes Neurais configurados no seu negócio

The page also receives `?upgrade=mentee` from the blur overlay CTA, which activates a highlighted "você está tentando acessar conteúdo exclusivo" notice at the top.

## Acceptance Criteria

- [x] `app/(public)/planos/page.tsx` upgraded from placeholder to full implementation
- [x] Single pricing card for RUNA Mentoria
- [x] Price displayed: **R$ 7.000**
- [x] Program details shown: 21 sessões, 7 semanas, 3×semana, 1.5h cada
- [x] Feature list: 8 Agentes Neurais + Biblioteca Completa + suporte WhatsApp
- [x] CTA button: "Quero começar" → WhatsApp intent URL (hardcoded, using `NEXT_PUBLIC_WHATSAPP_NUMBER` env var)
- [x] `?upgrade=mentee` query param → renders upgrade notice banner at top of page
- [x] Dashboard preview section: shows example mentee dashboard (static — no real data)
- [x] Page is public (no auth required) — unauthenticated users can see the pricing
- [x] Uses theme tokens only
- [x] `npm run build` passes with no TypeScript errors

## Implementation

```typescript
// app/(public)/planos/page.tsx
// Note: searchParams is a Promise in Next.js 16
export default async function PlanosPage({
  searchParams,
}: {
  searchParams: Promise<{ upgrade?: string }>
}) {
  const { upgrade } = await searchParams
  const isUpgradeFlow = upgrade === 'mentee'
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+RUNA+Mentoria`

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Upgrade notice */}
        {isUpgradeFlow && (
          <div className="mb-8 p-4 bg-surface1 border border-border rounded-lg text-sm text-textMuted">
            Este conteúdo é exclusivo para mentorados RUNA.
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-textPrimary text-3xl font-semibold mb-3">RUNA Mentoria</h1>
          <p className="text-textMuted">
            Reestruturação completa do seu negócio com IA — em 7 semanas.
          </p>
        </div>

        {/* Pricing card */}
        <div className="bg-surface1 border border-border rounded-xl p-8 mb-8">
          <div className="mb-6">
            <p className="text-textMuted text-sm mb-1">Investimento</p>
            <p className="text-textPrimary text-4xl font-semibold">R$ 7.000</p>
            <p className="text-textMuted text-sm mt-1">pagamento único</p>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              '21 sessões ao longo de 7 semanas',
              '3 encontros por semana, 1h30 cada',
              '8 Agentes Neurais configurados no seu negócio',
              'Acesso completo à Biblioteca RUNA',
              'Suporte via WhatsApp durante a mentoria',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-textMuted text-sm">
                <span className="text-textPrimary mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-surface2 border border-border text-textPrimary py-3 px-6 rounded-lg hover:bg-surface2/80 transition-colors font-medium"
          >
            Quero começar
          </a>
        </div>

        {/* Dashboard preview section */}
        <div className="bg-surface1 border border-border rounded-xl p-6">
          <p className="text-textMuted text-xs uppercase tracking-wide mb-4">
            O que mentorados têm acesso
          </p>
          <div className="space-y-2">
            {[
              { label: 'Sessões registradas', value: '21' },
              { label: 'Agentes configurados', value: '8' },
              { label: 'Recursos na biblioteca', value: 'Todos' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between text-sm">
                <span className="text-textMuted">{item.label}</span>
                <span className="text-textPrimary font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Environment Variable

```bash
# .env.local.example (add this line)
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Format: country code + number, no spaces, no `+` prefix.

## File List

- `apps/plataforma-runa/app/(public)/planos/page.tsx` (upgraded from placeholder)
- `apps/plataforma-runa/.env.local.example` (updated — add `NEXT_PUBLIC_WHATSAPP_NUMBER`)
