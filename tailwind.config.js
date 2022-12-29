/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['dark'],
    base: true,
    utils: true,
    logs: false,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('daisyui')],
  theme: {
    screens: {
      zero: '0px',
      mobile: '600px',
      tablet: '900px',
      laptop: '1440px',
      desktop: '1920px',
    },
  },
};
