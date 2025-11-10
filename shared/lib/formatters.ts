export const fmtPrice = (n: number) => `$${n.toFixed(n < 1 ? 4 : 2)}`;
export const fmtPct = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
export const fmtNum = (n: number) =>
  new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 2 }).format(n);
