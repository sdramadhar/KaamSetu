import { NextResponse } from "next/server";
import { createRequestId } from "@/src/server/logging/logger";

export function GET(): NextResponse {
  const requestId = createRequestId();
  return NextResponse.json(
    { data: { name: "KaamSetu API", version: "v1", status: "foundation-only" }, meta: { requestId } },
    { headers: { "cache-control": "no-store", "x-request-id": requestId } }
  );
}
