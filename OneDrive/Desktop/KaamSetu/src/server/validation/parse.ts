import { z, type ZodType } from "zod";
import { AppError } from "../http/errors";

export function parseInput<T>(schema: ZodType<T>, input: unknown): T {
  const result = schema.safeParse(input);
  if (!result.success) {
    throw new AppError("BAD_REQUEST", "The request contains invalid fields.", 400, {
      issues: result.error.issues.map((issue) => ({ path: issue.path, message: issue.message }))
    });
  }
  return result.data;
}

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20)
});
