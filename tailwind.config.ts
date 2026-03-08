// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... suas outras configurações
  plugins: [
    require('tailwind-intersect')
  ],
};
export default config;