/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      accent: '#FF6600',
      black: '#121418',
      'dark-gray': '#1C1E22',
      'med-gray': '#cbd7d7',
      'light-gray': '#F7F7F7',
      white: '#FFFFFF'
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1340px'
      }
    },
    fontFamily: {
      heading: ['Levenim', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
      sans: ['Poppins', 'sans-serif']
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1.063rem', '1.6rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1.1'],
      '6xl': ['3.75rem', '1.1'],
      '7xl': ['4.5rem', '1.1'],
      '8xl': ['6rem', '1.1'],
      '9xl': ['8rem', '1.1'],
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: '#fb4934'
            }
          }
        }
      }
    }
  },
  plugins: [
      require('@tailwindcss/forms'),
      require("@tailwindcss/typography")
  ],
}
