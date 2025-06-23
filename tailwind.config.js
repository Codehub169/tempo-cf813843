/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#F8F4F1',
        'sidebar-bg': '#E0E7E9',
        'border-color': '#C9D4D7',
        'text-primary': '#4A5568',
        'text-secondary': '#718096',
        'accent-color': '#A7BED3',
        'accent-glow': 'rgba(167, 190, 211, 0.3)',
        'card-bg': 'rgba(224, 231, 233, 0.7)',
        'code-bg': '#2D3748',
        'color-green': '#B8D8C8',
        'color-red': '#F0B8B8',
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