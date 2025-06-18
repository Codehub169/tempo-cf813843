/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#0d1117',
        'sidebar-bg': '#161b22',
        'border-color': '#30363d',
        'text-primary': '#c9d1d9',
        'text-secondary': '#8b949e',
        'accent-color': '#58a6ff',
        'accent-glow': 'rgba(88, 166, 255, 0.3)',
        'card-bg': 'rgba(22, 27, 34, 0.7)',
        'code-bg': '#161b22',
        'color-green': '#3fb950',
        'color-red': '#f85149',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        fadeInDown: 'fadeInDown 0.8s ease-out',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        growLine: 'growLine 2s ease-out forwards',
        popIn: 'popIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        growLine: {
            'from': { height: '0' },
            'to': { height: '100%' },
        },
        popIn: {
            'from': { transform: 'scale(0)' },
            'to': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
