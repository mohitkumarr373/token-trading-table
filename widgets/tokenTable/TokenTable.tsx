"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Token } from "@/entities/token/types";
import { useAppDispatch, useAppSelector } from "./hooks";
import { pin, unpin } from "@/shared/store/tableUiSlice";
import { SortHeader } from "./SortHeader";
import { Skeleton } from "@/shared/ui/Skeleton";
import { WsMock } from "@/shared/lib/wsMock";

function useTokens() {
  return useQuery<Token[]>({
    queryKey: ["tokens"],
    queryFn: async () => {
      const res = await fetch("/api/tokens");
      if (!res.ok) throw new Error("Failed to load tokens");
      return res.json();
    },
    staleTime: 10_000,
    refetchOnWindowFocus: false,
  });
}

export function TokenTable() {
  const { data, isLoading, isError } = useTokens();
  const [rows, setRows] = useState<Token[]>([]);
  const sorts = useAppSelector(s => s.tableUi.sorts);
  const pinnedIds = useAppSelector(s => s.tableUi.pinnedIds);
  const d = useAppDispatch();
  const ws = useRef<WsMock | null>(null);

  useEffect(() => { if (data) setRows(data); }, [data]);

  useEffect(() => {
    if (!rows.length) return;
    ws.current = new WsMock();
    ws.current.start(rows.map(r => r.id));
    const off = ws.current.on(({ id, factor }) => {
      setRows(prev => prev.map(r => r.id === id ? { ...r, price: +(r.price * factor).toFixed(4) } : r));
    });
    return () => { off(); ws.current?.stop(); };
  }, [rows.length]);

  const sorted = useMemo(() => {
    let out = [...rows];
    sorts.forEach(s => {
      out.sort((a: any, b: any) => {
        const va = a[s.key as keyof Token];
        const vb = b[s.key as keyof Token];
        const cmp = typeof va === "number" && typeof vb === "number" ? (va - vb) : String(va).localeCompare(String(vb));
        return s.dir === "asc" ? cmp : -cmp;
      });
    });
    const pinned = out.filter(r => pinnedIds.includes(r.id));
    const rest = out.filter(r => !pinnedIds.includes(r.id));
    return [...pinned, ...rest];
  }, [rows, sorts, pinnedIds]);

  if (isLoading) {
    return (
      <div className="p-3">
        {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-10 mb-2" />)}
      </div>
    );
  }
  if (isError) {
    return (
      <div className="p-6 text-sm">
        Failed to load. <button className="underline" onClick={() => location.reload()}>Retry</button>
      </div>
    );
  }

  function onPin(id: string) {
    if (pinnedIds.includes(id)) d(unpin(id)); else d(pin(id));
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-[160px_90px_140px_120px_1fr_1fr_100px] gap-2 px-3 py-2 text-subtle border-b border-border sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <SortHeader label="Pair" k="symbol" />
        <SortHeader label="Chain" k="chain" />
        <SortHeader label="Price" k="price" />
        <SortHeader label="24h Vol" k="volume24h" />
        <SortHeader label="Liquidity" k="liquidity" />
        <SortHeader label="Tag" k="tag" />
        <div className="text-xs text-right">Actions</div>
      </div>
      <div className="divide-y divide-border max-h-[70vh] overflow-auto">
        {sorted.map(t => (
          <TokenRow key={t.id} t={t} onPin={onPin} pinned={pinnedIds.includes(t.id)} />
        ))}
      </div>
    </div>
  );
}

function TokenRow(props: any) {
  // dynamic require to avoid circulars in Next dev edge cases
  const Comp = require("./TokenRow")["TokenRow"] as any;
  return <Comp {...props} />;
}
