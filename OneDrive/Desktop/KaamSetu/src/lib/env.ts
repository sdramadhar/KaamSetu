import { z } from "zod";

export const databaseUrlSchema = z.string().url().refine((value) => value.startsWith("postgres://") || value.startsWith("postgresql://"), {
  message: "DATABASE_URL must use the postgres:// or postgresql:// protocol."
});

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: databaseUrlSchema.optional(),
  APP_URL: z.string().url().default("http://127.0.0.1:3000"),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info")
});

export type AppEnv = z.infer<typeof envSchema>;

let cachedEnv: AppEnv | undefined;

export function getEnv(): AppEnv {
  cachedEnv ??= envSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    APP_URL: process.env.APP_URL,
    LOG_LEVEL: process.env.LOG_LEVEL
  });

  return cachedEnv;
}

export function validateDatabaseUrl(value: string): string {
  return databaseUrlSchema.parse(value);
}
