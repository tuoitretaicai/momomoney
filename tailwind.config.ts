import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'viettel-red': '#a60063',
        'viettel-yellow': '#FFC700',
      },
      fontFamily: {
        'sans': ['Roboto Slab', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
