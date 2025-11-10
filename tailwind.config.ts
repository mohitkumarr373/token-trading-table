import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./widgets/**/*.{ts,tsx}", "./shared/**/*.{ts,tsx}", "./entities/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(222 47% 11%)",
        card: "hsl(222 47% 13%)",
        border: "hsl(216 34% 17%)",
        text: "hsl(210 40% 96%)",
        subtle: "hsl(215 20% 65%)",
        up: "hsl(142 71% 45%)",
        down: "hsl(0 84% 60%)",
        brand: "hsl(221 83% 53%)",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.18)",
      }
    }
  },
  plugins: [],
};

export default config;
