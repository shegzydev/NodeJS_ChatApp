import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
//export default {
modules.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
