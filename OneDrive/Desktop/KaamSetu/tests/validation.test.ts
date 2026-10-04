import { describe, expect, it } from "vitest";
import { validateDatabaseUrl } from "../src/lib/env";
import { paginationSchema } from "../src/server/validation/parse";

describe("paginationSchema", () => {
  it("applies safe defaults", () => {
    expect(paginationSchema.parse({})).toEqual({ page: 1, pageSize: 20 });
  });

  it("rejects unsafe page sizes", () => {
    expect(() => paginationSchema.parse({ pageSize: 101 })).toThrow();
  });
});

describe("database configuration", () => {
  it("accepts PostgreSQL URLs", () => {
    expect(validateDatabaseUrl("postgresql://dev:dev@localhost:5432/kaamsetu")).toContain("postgresql://");
  });

  it("rejects non-PostgreSQL URLs", () => {
    expect(() => validateDatabaseUrl("mysql://localhost/kaamsetu")).toThrow();
  });
});
