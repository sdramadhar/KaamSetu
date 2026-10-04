# KaamSetu target architecture

## Current audit

The repository was empty except for the managed Webdev declaration. There was no frontend, backend, database, authentication, route set, test suite, package manager, deployment file, duplicate code, or technical debt to preserve. The only existing project identity is `manus-webdev.json`.

## Target shape

KaamSetu is a **modular monolith**: one Next.js deployable with explicit domain modules. A module may later move behind an internal service boundary, but the first release keeps transactions, observability, and deployment simple.

```text
Browser / PWA shell
        |
Next.js App Router + API routes (/api/v1)
        |
HTTP policy -> use cases -> domain module -> repository boundary
        |
Prisma -> PostgreSQL
        |
Future adapters: queue, object storage, search, analytics, notifications
```

## Module boundaries

Identity (`auth`, `users`, `roles`, `profiles`) owns access and profile identity. Trust (`verification`, `trust`, `audit`, `consent`, `fraud`, `moderation`, `disputes`) owns safety signals and accountability. Opportunity (`opportunities`, `applications`, `matching`) owns future discovery and explainable recommendations. Work (`work-management`, `attendance`, `agreements`, `wage-ledger`, `payments`) owns future work execution and payment records. Community (`training`, `partners`, `field-coordination`, `notifications`, `messaging`) owns future support loops. Platform (`analytics`, `admin`, `organizations`, `skills`) owns shared configuration and measurement.

Modules communicate through typed application services and events, not direct UI-to-database calls. Cross-module reads should use explicit query contracts. Domain code must not import Next.js request objects.

## API baseline

All externally used endpoints are versioned under `/api/v1`. Each route will validate input, resolve a request ID, authorize the actor, call an application service, and return `{ data, meta }` or `{ error, meta }`. List endpoints support bounded pagination and stable sorting. Internal database names are not exposed.

## Authentication and authorization

Authentication is a server-owned session/OTP abstraction. Authorization uses server-side role and policy checks; client role labels are never sufficient. Exact home coordinates, private phone numbers, sensitive documents, tokens, and secrets never appear in public payloads. Contact sharing and location precision require explicit consent records.

## Database

PostgreSQL is accessed through Prisma. The first schema establishes users, roles, profiles, localities, organizations, skills, consent, and audit logs. Future workflow tables should reference stable UUIDs and carry created/updated timestamps. Migration changes are reviewed and applied through Prisma commands, never by ad-hoc production SQL.

## Reliability and errors

`AppError` gives domain-safe codes and HTTP status mapping. Unexpected errors become a generic `INTERNAL_ERROR` response while request IDs remain available for logs. Structured JSON logs are the foundation for later monitoring; sensitive values must be omitted from context.

## Testing

Use unit tests for policies and pure use cases, integration tests for Prisma repositories, API tests for route contracts, component tests for accessible interaction, and end-to-end tests for the critical discover-to-complete journey once those workflows exist. The first test only proves validation defaults and rejection behavior.

## Deployment

Local development binds to the managed Session port. Production should build with a pinned lockfile, load secrets at runtime, expose an unauthenticated health path, and keep static assets separate from server routes. Database, queue, object storage, search, and analytics remain behind interfaces so infrastructure can evolve without domain rewrites.
