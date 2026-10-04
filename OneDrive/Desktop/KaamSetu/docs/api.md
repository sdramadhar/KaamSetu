# API conventions

## URL and versioning

External routes live below `/api/v1`. Health is intentionally outside the versioned business API at `/api/health`.

## Response envelope

Success:

```json
{
  "data": {},
  "meta": { "requestId": "uuid", "page": 1, "pageSize": 20 }
}
```

Failure:

```json
{
  "error": { "code": "BAD_REQUEST", "message": "The request contains invalid fields." },
  "meta": { "requestId": "uuid" }
}
```

## Required route pipeline

1. Create or receive a request ID.
2. Parse and validate input.
3. Authenticate the actor where required.
4. Authorize the action and data scope.
5. Call a module application service.
6. Log outcome without secrets.
7. Return the stable envelope.

Pagination is bounded to a maximum page size of 100. Future list routes should define stable sort keys and filter semantics in their module contract.
