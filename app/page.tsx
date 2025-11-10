"use client";
import { TokenTable } from "@/widgets/tokenTable/TokenTable";

export default function Page() {
  return (
    <main className="p-4 md:p-6">
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Pulse · Tokens (Mock)</h1>
        <div className="text-xs text-subtle">Radix + Redux + React Query</div>
      </header>
      <section className="rounded-xl bg-card shadow-soft border border-border">
        <TokenTable />
      </section>
    </main>
  );
}
