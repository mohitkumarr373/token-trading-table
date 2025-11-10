"use client";
import { memo, useState } from "react";
import { Token } from "@/entities/token/types";
import { fmtNum } from "@/shared/lib/formatters";
import { PriceCell } from "./PriceCell";
import { Popover } from "@/shared/ui/Popover";
import { Modal } from "@/shared/ui/Dialog";
import { Button } from "@/shared/ui/Button";

type Props = { t: Token; onPin: (id: string) => void; pinned: boolean };

export const TokenRow = memo(function TokenRow({ t, onPin, pinned }: Props) {
  const [open, setOpen] = useState(false);
  const tagColor = t.tag === "New" ? "bg-emerald-500/20 text-emerald-300" : t.tag === "Final" ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300";

  return (
    <>
      <div className="grid grid-cols-[160px_90px_140px_120px_1fr_1fr_100px] items-center gap-2 px-3 py-2 hover:bg-white/3 transition-colors">
        <div className="flex items-center gap-2">
          <button onClick={() => onPin(t.id)} className="text-subtle hover:text-white">{pinned ? "📌" : "📍"}</button>
          <Popover trigger={<button className="text-sm hover:underline">{t.symbol}</button>}>
            <div className="text-xs">Chain: {t.chain}<br/>Name: {t.name}</div>
          </Popover>
        </div>
        <div className="text-xs text-subtle">{t.chain}</div>
        <div><PriceCell price={t.price} change={t.change24h} /></div>
        <div className="text-sm">{fmtNum(t.volume24h)}</div>
        <div className="text-sm">{fmtNum(t.liquidity)}</div>
        <div><span className={`px-2 py-1 text-[11px] rounded ${tagColor}`}>{t.tag}</span></div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={() => setOpen(true)}>Details</Button>
        </div>
      </div>
      <Modal open={open} onOpenChange={setOpen} title={`${t.symbol} · ${t.name}`}>
        <div className="text-sm text-subtle">Mini chart placeholder<br/>More token info can go here.</div>
      </Modal>
    </>
  );
});
