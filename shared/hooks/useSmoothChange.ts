import { useEffect, useRef, useState } from "react";

export function useSmoothChange(value: number, ms = 800) {
  const prev = useRef<number>(value);
  const [flash, setFlash] = useState<"up"|"down"|null>(null);
  useEffect(() => {
    if (value > prev.current) setFlash("up");
    else if (value < prev.current) setFlash("down");
    prev.current = value;
    const t = setTimeout(() => setFlash(null), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return flash;
}
