# Development guide

## Local setup

```powershell
Copy-Item .env.example .env
npm install
npm run db:generate
npm run dev
```

The app runs at `http://127.0.0.1:3000`. A PostgreSQL database is only required for Prisma-backed work; the foundation surface itself does not query the database.

## Quality checks

```powershell
npm run typecheck
npm run lint
npm test
npm run db:validate
```

Run checks before opening a PR. Keep TypeScript strict. Prefer small module functions over giant route handlers. Keep business logic out of React components.

## Configuration

`.env.example` is the source of documented variables. `.env` is local-only and ignored. Browser-safe configuration must be explicitly prefixed and reviewed; secrets stay server-side.

## Module convention

A future module can use:

```text
src/modules/opportunities/
  domain/          entities and invariants
  application/     use cases and DTOs
  infrastructure/  Prisma repositories and adapters
  index.ts         public module exports
```

Do not import another module's Prisma model directly. Use a typed application or query contract.
