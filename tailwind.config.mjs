/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A831',
          light: '#E8C45A',
          dark: '#B08A1E',
        },
        charcoal: {
          DEFAULT: '#2A2A2A',
          light: '#3D3D3D',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
