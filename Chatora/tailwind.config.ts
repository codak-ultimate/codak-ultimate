import type { Config } from 'tailwindcss'

const config: Config = {
 content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-ri': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' }
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        float: 'float 2s ease-in-out infinite',
        'infinite-scroll-ri': 'infinite-scroll-ri 25s linear infinite',
        'slideInFromLeft': 'slideInFromLeft  .2s ease-in-out',

      },
      
     
    },
 },
 plugins: [],
}
export default config
