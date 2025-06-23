/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#2E1A2B',
        'sidebar-bg': '#3E2A3B',
        'border-color': '#5D4A5A',
        'text-primary': '#F5E0F0',
        'text-secondary': '#D5C0D0',
        'accent-color': '#FF79C6',
        'accent-glow': 'rgba(255, 121, 198, 0.3)',
        'card-bg': 'rgba(62, 42, 59, 0.7)',
        'code-bg': '#3E2A3B',
        'color-green': '#FFB8D1',
        'color-red': '#E75480',
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
