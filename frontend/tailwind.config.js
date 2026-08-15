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
        bg: {
          base: '#08090a',
          subtle: '#0f1115',
          elevated: '#15181e',
          surface: '#1b1f27',
          hover: '#222731',
          active: '#282f3c',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          default: 'rgba(255, 255, 255, 0.1)',
          strong: 'rgba(255, 255, 255, 0.18)',
          focus: '#10b981',
        },
        text: {
          primary: '#f9fafb',
          secondary: '#9ca3af',
          muted: '#6b7280',
          faint: '#4b5563',
        },
        brand: {
          primary: '#10b981',
          hover: '#059669',
          faint: 'rgba(16, 185, 129, 0.08)',
          border: 'rgba(16, 185, 129, 0.25)',
        },
        danger: {
          primary: '#f43f5e',
          faint: 'rgba(244, 63, 94, 0.08)',
          border: 'rgba(244, 63, 94, 0.25)',
        },
        warning: {
          primary: '#f59e0b',
          faint: 'rgba(245, 158, 11, 0.08)',
          border: 'rgba(245, 158, 11, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
        display: ['Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glow-brand': '0 0 24px -4px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
