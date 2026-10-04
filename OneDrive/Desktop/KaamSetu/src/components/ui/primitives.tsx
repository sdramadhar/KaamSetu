import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { tone?: "primary" | "quiet" };

export function Button({ className, tone = "primary", ...props }: ButtonProps) {
  return <button className={cn("focus-ring rounded-xl px-4 py-2.5 text-sm font-bold transition", tone === "primary" ? "bg-moss text-white hover:bg-moss-dark" : "border border-ink/10 bg-white text-ink/70 hover:border-moss/30 hover:text-moss", className)} {...props} />;
}

export function Panel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("panel", className)} {...props} />;
}

export function StatusBadge({ children, tone = "success" }: { children: ReactNode; tone?: "success" | "warning" | "neutral" }) {
  const styles = { success: "bg-mint text-moss", warning: "bg-[#fff0d5] text-[#a96a0e]", neutral: "bg-mist text-ink/60" };
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold", styles[tone])}><span className="h-1.5 w-1.5 rounded-full bg-current" />{children}</span>;
}
