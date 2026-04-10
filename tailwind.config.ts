import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#4A5C2F',
          mid: '#5E7339',
          lt: '#7A9148',
          pale: '#EEF2E6',
          soft: '#D6E0C0',
        },
        gold: {
          DEFAULT: '#C9A84C',
          lt: '#E8C97A',
          dk: '#8A6B2A',
          pale: '#FBF3DC',
        },
        cream: {
          DEFAULT: '#FDFAF4',
          2: '#F5F0E4',
        },
        text: {
          DEFAULT: '#2A2A1E',
          mid: '#555545',
          muted: '#888878',
        },
        border: {
          DEFAULT: '#DDD8C4',
          lt: '#EEEADC',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
