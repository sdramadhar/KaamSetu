import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KaamSetu | Workforce foundation",
  description: "A trusted foundation for hyperlocal work, skills, and opportunity.",
  applicationName: "KaamSetu",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
