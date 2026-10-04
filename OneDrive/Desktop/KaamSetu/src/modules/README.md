# Domain modules

Each module is a future bounded context. Keep domain invariants and use cases local to the module; expose only typed application/query contracts through `index.ts`.

A module should grow toward:

```text
domain/          entities, value objects, policies
application/     use cases, DTOs, ports
infrastructure/  Prisma repositories, adapters
index.ts         public exports
```

Part 01 creates the boundaries without pretending workflows are complete. New modules should not import another module's Prisma client or route objects directly.
