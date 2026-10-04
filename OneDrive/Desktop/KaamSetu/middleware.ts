import { NextResponse, type NextRequest } from "next/server";
import { createRequestId } from "@/src/server/logging/logger";

export function middleware(request: NextRequest) {
  const requestId = request.headers.get("x-request-id") ?? createRequestId();
  const response = NextResponse.next();
  response.headers.set("x-request-id", requestId);
  response.headers.set("x-content-type-options", "nosniff");
  response.headers.set("referrer-policy", "strict-origin-when-cross-origin");
  response.headers.set("permissions-policy", "camera=(), microphone=(), geolocation=()");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|manus-routes.json).*)"]
};
