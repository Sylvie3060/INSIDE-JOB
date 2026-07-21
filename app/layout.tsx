import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Career Insight AI", description: "Find the work that fits how you work." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
