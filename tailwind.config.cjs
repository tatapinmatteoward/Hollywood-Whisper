/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b001d',
        accent: '#ff6f61',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
