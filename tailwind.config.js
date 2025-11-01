/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffe0',
        dark: '#0a0a0a',
        'dark-light': '#1a1a1a',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 224, 0.5)',
        'neon-strong': '0 0 30px rgba(0, 255, 224, 0.8)',
      },
    },
  },
  plugins: [],
}

