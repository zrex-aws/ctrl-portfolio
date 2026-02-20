import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f1726',
        panel: '#121a2b',
        glass: 'rgba(22,31,48,0.62)',
        text: '#f3f7ff',
        muted: '#9eabc5',
        accent: '#7cb7ff',
        taskbar: 'rgba(11,17,29,0.72)',
      },
      boxShadow: {
        panel: '0 16px 44px rgba(3, 8, 20, 0.45)',
        glow: '0 0 0 1px rgba(149, 192, 255, 0.16), 0 14px 34px rgba(26, 74, 146, 0.30)',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        win: '26px',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        wallpaper:
          'radial-gradient(90% 70% at 20% 15%, rgba(83,139,255,0.42), transparent), radial-gradient(90% 80% at 80% 20%, rgba(84,80,196,0.35), transparent), linear-gradient(180deg, #121C30 0%, #0B1221 65%, #080E19 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
