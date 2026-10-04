import { describe, expect, it } from "vitest";
import { paginationSchema } from "../src/server/validation/parse";

describe("paginationSchema", () => {
  it("applies safe defaults", () => {
    expect(paginationSchema.parse({})).toEqual({ page: 1, pageSize: 20 });
  });

  it("rejects unsafe page sizes", () => {
    expect(() => paginationSchema.parse({ pageSize: 101 })).toThrow();
  });
});
