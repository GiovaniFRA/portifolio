// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  plugins: [
    require('tailwind-intersect')
  ],
};
export default config;