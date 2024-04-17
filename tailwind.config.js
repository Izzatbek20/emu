/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'violet': '#8F2B83',
      'black': '#000000',
      'blue': '#007AFF',
      'orange': '#EF7F1A',
      'orange-light': '#EFA11A',
      'color_active': '#A0A8B1',
      'gray': '#6C6C70',
      'line-gray': '#E4E5E5',
      'text-gray': '#939494',
      'icon-gray': '#C5C6C6',
      'light-gray': '#f4f4f4'
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      gilory: ["Gilroy", "sans-serif"],
      asyl: ["AsylbekM09Handel", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem"
    }
  },
  plugins: [],
}