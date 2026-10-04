import { NextResponse } from "next/server";
import { createRequestId } from "@/src/server/logging/logger";

export function GET(): NextResponse {
  const requestId = createRequestId();
  return NextResponse.json(
    { data: { status: "ok", service: "kaamsetu-web", version: "0.1.0" }, meta: { requestId } },
    { headers: { "cache-control": "no-store", "x-request-id": requestId } }
  );
}
