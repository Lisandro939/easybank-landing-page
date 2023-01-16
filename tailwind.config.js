/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('../public/images/bg-intro-desktop.svg)",
        'mobile': "url('../public/images/bg-intro-mobile.svg)"
      }
    },
  },
  plugins: [],
}
