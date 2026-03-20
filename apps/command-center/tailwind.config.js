/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void:    '#050D1A',
        panel:   '#0A1F2E',
        surface: '#0D2438',
        rim:     '#1A3A4A',
        amber: {
          DEFAULT: '#F59E0B',
          light:   '#FFD166',
          dim:     '#92620A',
          glow:    'rgba(245,158,11,0.25)',
        },
        alert:   '#FF6B00',
        success: '#22C55E',
        mist:    '#E8F4F8',
        slate:   '#7AA8B8',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
        body:    ['Outfit', 'sans-serif'],
        data:    ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        amber:    '0 0 20px rgba(245,158,11,0.25)',
        'amber-lg': '0 0 40px rgba(245,158,11,0.45)',
        'amber-sm': '0 0 10px rgba(245,158,11,0.18)',
        'amber-xl': '0 0 60px rgba(245,158,11,0.5), 0 0 120px rgba(245,158,11,0.2)',
        panel:    '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
        alert:    '0 0 20px rgba(255,107,0,0.4)',
      },
      animation: {
        breathe:    'breathe 3.5s ease-in-out infinite alternate',
        'breathe-slow': 'breathe 5s ease-in-out infinite alternate',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'orion-glow': 'orion-glow 4s ease-in-out infinite alternate',
        'scan-line': 'scan-line 12s linear infinite',
        'count-up':  'count-up 1.2s ease-out forwards',
        'fade-slide': 'fade-slide 0.2s ease-out forwards',
        'mycelium':  'mycelium 10s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          from: { opacity: '0.55' },
          to:   { opacity: '1' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)',    opacity: '0.8' },
          '70%':  { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '0' },
        },
        'orion-glow': {
          from: { boxShadow: '0 0 20px rgba(245,158,11,0.3), 0 0 60px rgba(245,158,11,0.1)' },
          to:   { boxShadow: '0 0 40px rgba(245,158,11,0.6), 0 0 80px rgba(245,158,11,0.25)' },
        },
        'scan-line': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'fade-slide': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        mycelium: {
          '0%,100%': { opacity: '0.06' },
          '50%':     { opacity: '0.14' },
        },
      },
      backgroundImage: {
        'cosmic': 'radial-gradient(ellipse at 30% 20%, #0A1F2E 0%, #050D1A 60%, #020810 100%)',
        'panel-gradient': 'linear-gradient(135deg, #0D2438 0%, #0A1F2E 100%)',
        'amber-gradient': 'linear-gradient(135deg, #F59E0B 0%, #FFD166 100%)',
      },
    },
  },
  plugins: [],
}
