export type LogLevel = "debug" | "info" | "warn" | "error";

type LogContext = Readonly<Record<string, string | number | boolean | undefined>>;

function write(level: LogLevel, message: string, context: LogContext = {}): void {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    context
  };

  const output = JSON.stringify(entry);
  if (level === "error") console.error(output);
  else if (level === "warn") console.warn(output);
  else console.log(output);
}

export function createRequestId(): string {
  if (typeof globalThis.crypto?.randomUUID === "function") return globalThis.crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export const logger = {
  debug: (message: string, context?: LogContext) => write("debug", message, context),
  info: (message: string, context?: LogContext) => write("info", message, context),
  warn: (message: string, context?: LogContext) => write("warn", message, context),
  error: (message: string, context?: LogContext) => write("error", message, context)
};
