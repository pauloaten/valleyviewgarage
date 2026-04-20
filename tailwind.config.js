/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        franklin: ['"Libre Franklin"', '"Helvetica Neue"', "helvetica", "arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
