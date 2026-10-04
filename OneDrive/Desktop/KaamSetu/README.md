# KaamSetu

KaamSetu is a multilingual, hyperlocal workforce and opportunity platform. This repository is the **Part 01 foundation**: a production-minded modular monolith scaffold designed to support workers, employers, partners, and field operations without prematurely implementing marketplace workflows.

## Stack

- **Next.js 14 App Router** with React and TypeScript
- **Tailwind CSS** with a small, reusable token layer
- **PostgreSQL + Prisma** for the persistence boundary
- **Zod** for runtime validation
- **Vitest** for isolated business-logic tests
- **Managed Webdev runtime** for local preview and future deployment

## Run locally

1. Copy `.env.example` to `.env` and set `DATABASE_URL` only when a PostgreSQL instance is available.
2. Install dependencies with `npm install`.
3. Generate the Prisma client with `npm run db:generate`.
4. Start the interface with `npm run dev`.
5. Run checks with `npm run typecheck`, `npm run lint`, `npm test`, and `npm run db:validate`.

The development server binds to `127.0.0.1:3000` for the managed Local First preview. Do not place secrets in browser code or commit `.env` files.

## Scope boundary

Implemented now: repository foundation, module boundaries, design-system tokens, structured logging, centralized error responses, Zod validation, Prisma schema foundation, health endpoint, route manifest, tests, and documentation.

Deferred: payment gateways, AI/ML matching, chat, WhatsApp/SMS, complex onboarding, advanced employer workflows, and microservices. See [`docs/architecture.md`](docs/architecture.md).

## Project map

```text
app/                 Next.js routes and the foundation surface
src/components/      Reusable UI primitives
src/lib/             Shared browser/server-safe utilities
src/server/          Server-only database, logging, HTTP, and validation
src/modules/         Bounded domain modules; each owns its future use cases
prisma/              Database schema and future migrations
tests/               Unit and module-level tests
docs/                Architecture, security, API, and development conventions
public/              Static PWA/route metadata
```
