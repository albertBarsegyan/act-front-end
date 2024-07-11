import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ['violet']: '#8B50FF',
        ['violet-dark']: '#671AFF',
        ['violet-light-1']: '#A77BFF',
        ['violet-light-2']: '#CAAFFF',
        ['violet-light-3']: '#E5D8FF',
        ['blue-dark-1']: '#191A2A',
        ['blue-dark-2']: '#21233C',
        ['grey-light-1']: '#E1E2E3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
