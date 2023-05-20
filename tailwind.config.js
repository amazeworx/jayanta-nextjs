/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        xl: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          bluedark: '#001530',
          bluelight: '#2D9AE8',
          bluenight: '#091D42',
          red: '#DA3233',
        },
        primary: '#FF7A00',
        secondary: '#F6B221',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
};
