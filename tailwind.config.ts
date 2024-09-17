import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#151515',
        green: '#4EE1A0',
        grey: {
          100: '#D9D9D9', // grey
          200: '#242424' // dark grey
        },
        white: '#FFFFF',
        red: '#FF6F5B',
      },
    },
  },
  plugins: [],
};
export default config;
