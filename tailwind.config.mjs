/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      colors: {
        'teal': {
          light: '#4dd0e1',
          DEFAULT: '#0099ba', 
          dark: '#006786',
          darker: '#003d48'
        },
        'lime': {
          DEFAULT: '#a6b443',
          light: '#c7cd85'
        },
        'olive': '#8fa339',
        'green-olive': '#a6b443',
        'green-lime': '#c7cd85',
        'gray': {
          light: '#f7fafc',
          medium: '#4a5568', 
          dark: '#2d3748'
        }
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.3' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
        'h4': ['1.25rem', { lineHeight: '1.5' }]
      }
    }
  },
  plugins: []
}