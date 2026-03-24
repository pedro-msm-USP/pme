import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        institutional: {
          blue: '#0A3A75',
          slate: '#F5F7FA',
          graphite: '#243447',
        },
      },
    },
  },
  plugins: [],
};

export default config;
