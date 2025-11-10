"use client";
import * as Dialog from "@radix-ui/react-dialog";

export function Modal({ open, onOpenChange, title, children }: { open: boolean; onOpenChange: (v: boolean) => void; title: string; children: React.ReactNode }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-card p-4 border border-border shadow-soft">
          <Dialog.Title className="text-base font-semibold">{title}</Dialog.Title>
          <div className="mt-3">{children}</div>
          <Dialog.Close asChild>
            <button className="absolute right-3 top-3 text-subtle hover:text-text">✕</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
