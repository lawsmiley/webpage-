/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444', // Red accent
        secondary: '#3b82f6', // Blue accent
        dark: '#0a0a0a',
        'dark-light': '#1a1a1a',
      },
      fontFamily: {
        'arcade': ['VT323', 'monospace'],
        'press-start': ['Press Start 2P', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(239, 68, 68, 0.5)', // Red glow
        'neon-strong': '0 0 30px rgba(239, 68, 68, 0.8)', // Strong red glow
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.5)', // Blue glow
        'blue-glow-strong': '0 0 30px rgba(59, 130, 246, 0.8)', // Strong blue glow
      },
    },
  },
  plugins: [],
}

