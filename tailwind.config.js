import { theme } from './src/theme/index';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...theme.colors,
      },

      spacing: {
        ...theme.spacing,
      },
      boxShadow: {
        ...theme.boxShadow,
      },
    },
  },
  plugins: [],
};
