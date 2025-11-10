"use client";
import * as Tooltip from "@radix-ui/react-tooltip";

export function Tip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="rounded bg-card border border-border px-2 py-1 text-xs shadow-soft">
            {label}
            <Tooltip.Arrow className="fill-border" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
