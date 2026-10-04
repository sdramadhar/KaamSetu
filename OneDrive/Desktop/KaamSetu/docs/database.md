# Database architecture

## Scope

Part 02 establishes the minimum stable relational foundation for identity, worker and employer profiles, opportunities, trust, training, notifications, future work records, financial records, governance, recommendations, and product analytics. It does not implement any workflow or application service.

## Entity responsibilities

`User`, `Role`, `UserRole`, and `Profile` provide identity and future access-control anchors. `WorkerProfile`, `Skill`, `UserSkill`, `Certification`, and `Locality` support worker capability and approximate location. `Organization`, `EmployerProfile`, `Opportunity`, `OpportunitySkill`, and `Application` provide the future opportunity graph.

`VerificationRequest`, `Rating`, `Report`, `Consent`, `AuditLog`, `Dispute`, and `FraudEvent` provide trust and governance records. `TrainingProvider`, `Course`, `Enrollment`, and `Notification` establish future support and communication data. `WorkAgreement`, `WorkAssignment`, `WorkShift`, `Attendance`, `WageLedger`, and `PaymentRecord` are intentionally minimal future-work records. `Recommendation`, `RecommendationFeedback`, and `ProductEvent` provide future explainability and product-measurement anchors without implementing AI or matching.

## Major relationships

A user can hold many roles, one profile, many skills, certifications, applications, enrollments, notifications, consents, and audit events. A worker profile belongs to one user and can have certifications, applications, and assignments. An organization can have employer profiles, opportunities, and training providers. An opportunity belongs to an organization or employer profile where available, is scoped to an approximate locality, and has skills, applications, recommendations, and future agreements. Courses belong to training providers and enrollments belong to users.

## Privacy decisions

The schema stores locality and approximate latitude/longitude only; it does not store exact worker home coordinates. `WorkerProfile.approximateRadiusKm` supports future matching without exposing a home address. `WorkAssignment.safeMeetingNote` is a protected workflow field, not a public location API. Phone and email are optional identity fields, and no passwords, tokens, API secrets, production credentials, or sensitive document contents are stored. `documentRef` is only an object-storage reference placeholder and must remain private behind authorization.

## Indexing strategy

Indexes cover active user lookup, role membership, locality filtering, opportunity status/type/locality, organization and employer lookup, application status and timestamps, skill proficiency, verification status, notifications, future work status and schedule, audit correlation, trust records, and event timestamps. Composite indexes follow expected list filters; no broad index was added to every column.

## Soft deletion

Soft deletion is applied to `User`, `WorkerProfile`, `Organization`, and `Opportunity`, where historical relationships and auditability matter. Transactional records such as applications, attendance, audit logs, consents, payments, and product events are retained and transition through explicit statuses instead of being silently deleted.

## Migration strategy

`prisma/migrations/20261004150000_initial_foundation` is generated from an empty PostgreSQL schema using `prisma migrate diff`. In an environment with PostgreSQL available, apply it with `npx prisma migrate deploy` or create a development migration with `npx prisma migrate dev`. Never use `prisma migrate reset` against staging or production. Future changes must be additive or explicitly reviewed migrations, with rollback and data-retention implications documented.

## Limitations of this phase

No local PostgreSQL server was available during implementation, so the migration was generated and the schema validated but not applied to a live database. The generated client succeeded. Application services, authorization policies, seed data, and workflow logic belong to later parts.
