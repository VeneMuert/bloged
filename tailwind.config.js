/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors:{
      'White': "hsl(0, 0%, 100%)",
      'Grey': "hsl(0, 0%, 50%)",
      'Black': "hsl(0, 0%, 7%)",
      'Yellow': 'hsl(47, 88%, 63%)',
    },
    extend: {
      boxShadow: {
        'am1': '4px 3px 3px 4px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

