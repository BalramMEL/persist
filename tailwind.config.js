/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        
      },
      colors: {
        red: {
          500: '#EB0000',          
        },
    },
  },
  plugins: [],
  }
}

