/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        studio: {
          base: '#0e0e0e',
          panel: '#141414',
          text: '#f3f3f3',
          muted: '#a5a5a5',
          accent: '#ff2a2a',
          accentSoft: '#ff4b4b',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 42, 42, 0.22)',
      },
      backgroundImage: {
        'radial-accent': 'radial-gradient(circle at top, rgba(255,42,42,0.2), transparent 45%)',
      },
    },
  },
  plugins: [],
}

