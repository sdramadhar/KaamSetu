# Security baseline

## Non-negotiables

- Never commit credentials, tokens, private keys, production database URLs, or user data.
- Validate all external input with Zod before use.
- Authorize on the server for every protected use case.
- Use Prisma parameterization; never concatenate SQL.
- Keep sessions/tokens server-owned and out of insecure browser storage.
- Rate-limit authentication, OTP, file upload, and public search surfaces.
- Record audit events for authentication, consent, role, moderation, and wage/payment changes.
- Minimize collection and support account deletion and data export.

## Location privacy

Worker home location is represented as an approximate locality or radius. A safe meeting point or worksite can be shared only inside an authorized workflow. Exact coordinates are never returned by public APIs.

## Files and documents

Future uploads must use an object-storage adapter with content-type/size checks, malware scanning, private-by-default ACLs, short-lived signed access, and audit events. Files are never served directly from a public application route.

## Cookies and Preview

If cookie sessions are added, the embedded public Preview requires `SameSite=None; Secure`. Local HTTP can use a separate development cookie policy. Do not send `X-Frame-Options: DENY` or a restrictive `frame-ancestors` policy that breaks the managed Preview iframe.

## Incident readiness

Every request should have a correlation ID. Logs must be structured and secret-safe. A future monitoring adapter should capture unexpected errors without sending private profile fields or documents.
