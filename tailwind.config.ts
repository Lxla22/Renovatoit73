import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        anthracite: '#161616',
        orange: {
          DEFAULT: '#FF6A00',
          hover: '#E05E00',
          light: '#FF8533',
        },
        white: '#FFFFFF',
        gray: {
          muted: '#6B6B6B',
          border: '#2A2A2A',
          subtle: '#1A1A1A',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-orange': 'linear-gradient(135deg, #FF6A00 0%, #E05E00 100%)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
    },
  },
  plugins: [],
}

export default config
