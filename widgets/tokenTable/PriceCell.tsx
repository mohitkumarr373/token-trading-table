"use client";
import { useSmoothChange } from "@/shared/hooks/useSmoothChange";
import { fmtPrice, fmtPct } from "@/shared/lib/formatters";

export function PriceCell({ price, change }: { price: number; change: number }) {
  const flash = useSmoothChange(price);
  const cls = flash === "up" ? "bg-up/15" : flash === "down" ? "bg-down/15" : "";
  return (
    <div className={`rounded px-2 py-1 transition-colors ${cls}`}>
      <div className="text-sm">{fmtPrice(price)}</div>
      <div className={`text-[11px] ${change >= 0 ? "text-up" : "text-down"}`}>{fmtPct(change)}</div>
    </div>
  );
}
