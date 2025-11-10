"use client";
import * as Pop from "@radix-ui/react-popover";

export function Popover({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) {
  return (
    <Pop.Root>
      <Pop.Trigger asChild>{trigger}</Pop.Trigger>
      <Pop.Portal>
        <Pop.Content className="rounded-lg bg-card border border-border p-3 shadow-soft will-change-transform">
          {children}
          <Pop.Arrow className="fill-border" />
        </Pop.Content>
      </Pop.Portal>
    </Pop.Root>
  );
}
