"use client";
import { useAppDispatch, useAppSelector } from "./hooks";
import { toggleSort } from "@/shared/store/tableUiSlice";
import { Tip } from "@/shared/ui/Tooltip";

export function SortHeader({ label, k }: { label: string; k: string }) {
  const d = useAppDispatch();
  const sorts = useAppSelector(s => s.tableUi.sorts);
  const s = sorts.find(x => x.key === k);
  const dir = s?.dir;
  return (
    <Tip label="Sort">
      <button
        onClick={() => d(toggleSort(k))}
        className="inline-flex items-center gap-1 text-left hover:text-white"
      >
        <span className="text-xs text-subtle">{label}</span>
        <span className="text-[10px]">{dir === "asc" ? "▲" : dir === "desc" ? "▼" : ""}</span>
      </button>
    </Tip>
  );
}
