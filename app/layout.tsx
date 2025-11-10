import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/shared/store/providers";

export const metadata: Metadata = {
  title: "Axiom Token Table",
  description: "Token discovery table with realtime updates",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
