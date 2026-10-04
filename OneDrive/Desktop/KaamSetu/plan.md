# KaamSetu Part 01 plan

## Implementation approach

This empty repository uses a Next.js App Router application with strict TypeScript and a modular-monolith layout. The UI is intentionally a foundation console rather than a fake marketplace: it communicates what is ready, what is bounded, and what remains deferred. Server concerns stay under `src/server`; product domains live under `src/modules`; Prisma is the only future database access boundary.

## Design direction

- **Design movement:** warm civic software — the calm clarity of public-service tools with the polish of a trusted startup control plane.
- **Core principles:** legible before decorative; safe by default; optimistic but precise; mobile-first and low-data conscious.
- **Color philosophy:** deep moss signals trust and action; sand keeps the canvas human and approachable; mint marks verified progress; amber flags a deliberate future boundary rather than an error.
- **Layout paradigm:** a quiet navigation rail paired with an editorial, asymmetric content field. Dense system information sits beside short, plain-language explanations.
- **Signature elements:** moss status dots, rounded civic panels, and small monospace domain chips that make the architecture tangible.
- **Interaction:** actions are explicit, reversible, and labeled with their consequence. Empty/future states explain what is not implemented yet.
- **Animation:** no decorative motion in Part 01; reserve short opacity/position transitions for navigation and future loading states, respecting reduced-motion preferences.
- **Typography:** a system sans for body content and a slightly tighter display face for architectural headlines; strong size contrast, short line lengths, and sentence case for low-literacy clarity.
- **Brand essence:** the trusted operating layer for local work, built for the people and communities that keep cities moving. Personality: grounded, capable, accountable.
- **Brand voice:** clear, respectful, and specific. Example lines: “Build the trust layer first.” / “One trusted layer at a time.”
- **Wordmark & mark:** a compact lowercase wordmark paired with a rounded “K” tile, suggesting two paths meeting without using a generic handshake icon.
- **Signature brand color:** deep moss `#176B5D`.

## Folder architecture

`app/` owns route composition only. `src/components/ui` will own reusable presentation primitives. `src/server/http`, `logging`, and `validation` own cross-cutting backend policies. Each folder under `src/modules` is a future bounded context with room for `domain`, `application`, `infrastructure`, and `index.ts` exports. `prisma/schema.prisma` models stable identity and trust foundations first, avoiding premature workflow tables.

## Material constraints

No production credentials, user data, external API keys, or marketplace workflow implementations are included. A real database is not required to render the foundation screen; `DATABASE_URL` is validated only when database-backed code is invoked.
