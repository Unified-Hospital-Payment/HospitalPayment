/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(125% 125% at 50% 10%, var(--tw-gradient-stops))',
      },
  },
},
  plugins: [],
}
