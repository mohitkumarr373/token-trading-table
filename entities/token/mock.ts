import type { Token } from "./types";

function rnd(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const presets = [
  { chain: "ETH", price: 1.23, change24h: 2.3, volume24h: 1203045, liquidity: 453210, tag: "New" as const },
  { chain: "SOL", price: 0.42, change24h: -1.1, volume24h: 872134, liquidity: 112034, tag: "Final" as const },
  { chain: "BSC", price: 5.67, change24h: 0.5, volume24h: 234523, liquidity: 325600, tag: "Migrated" as const },
];

export const tokens: Token[] = Array.from({ length: 120 }).map((_, i) => {
  const p = presets[i % presets.length];
  const price = p.price * (1 + (rnd(i) - 0.5) * 0.15);
  return {
    id: `t${i}`,
    symbol: `TKN${(i % 90) + 10}`,
    name: `Token ${(i + 1).toString().padStart(3, "0")}`,
    chain: p.chain,
    price: Number(price.toFixed(4)),
    change24h: Number((p.change24h + (rnd(i+2)-0.5)*2).toFixed(2)),
    volume24h: Math.floor(p.volume24h * (0.8 + rnd(i+3))),
    liquidity: Math.floor(p.liquidity * (0.7 + rnd(i+5))),
    tag: p.tag,
  };
});
