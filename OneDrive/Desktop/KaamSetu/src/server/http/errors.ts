import { NextResponse } from "next/server";

export type ErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "INTERNAL_ERROR";

export class AppError extends Error {
  constructor(
    public readonly code: ErrorCode,
    message: string,
    public readonly status: number = 500,
    public readonly details?: Readonly<Record<string, unknown>>
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function errorResponse(error: unknown, requestId: string): NextResponse {
  const appError = error instanceof AppError ? error : new AppError("INTERNAL_ERROR", "An unexpected error occurred.", 500);

  return NextResponse.json(
    {
      error: {
        code: appError.code,
        message: appError.message,
        ...(appError.details ? { details: appError.details } : {})
      },
      meta: { requestId }
    },
    { status: appError.status, headers: { "x-request-id": requestId } }
  );
}
