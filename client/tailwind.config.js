/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/assets/*.svg'],
  theme: {
    screens: {
      xs: '490px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      fontFamily: {
        DMsans: ['DM Sans'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
