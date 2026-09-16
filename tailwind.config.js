/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#121214',
        'surface-elevated': '#18181B',
        'surface-border': 'rgba(255, 255, 255, 0.08)',
        'surface-border-hover': 'rgba(255, 255, 255, 0.18)',
        primary: '#F5F5F5',
        secondary: '#A1A1AA',
        muted: '#71717A',
        accent: {
          DEFAULT: '#5B7CFA',
          hover: '#4A6CF7',
          light: '#818CF8',
          glow: 'rgba(91, 124, 250, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
