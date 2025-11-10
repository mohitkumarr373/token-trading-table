export type Token = {
  id: string;
  symbol: string;
  name: string;
  chain: string;
  price: number;
  change24h: number;
  volume24h: number;
  liquidity: number;
  tag: "New" | "Final" | "Migrated";
};
