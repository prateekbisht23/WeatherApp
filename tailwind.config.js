/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(54deg, rgba(61, 61, 61, 1) 0%, rgba(39, 39, 39, 1) 100%)',
        'custom-gradient-2': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.7) 100%)',
      },
      colors: {
        'custom-bg': 'rgb(61, 61, 61)',
        'text-1' : 'rgb(205, 205, 205)',
        'text-2' : 'rgb(255, 255, 255)',
      },
      shadow: {
        'custom-shadow': '0px 8px 30px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
