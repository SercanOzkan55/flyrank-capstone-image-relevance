/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090d0f',
        card: '#12181b',
        'card-hover': '#182126',
        border: '#202a2f',
        'border-strong': '#2c3a42',
        signal: '#1fb59d',
        'signal-glow': 'rgba(31, 181, 157, 0.15)',
        stamp: '#e05a33',
        'stamp-glow': 'rgba(224, 90, 51, 0.15)',
        amber: '#f59e0b',
        ink: '#f3f6f5',
        muted: '#8497a1',
        dim: '#51626a'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['IBM Plex Mono', 'JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
