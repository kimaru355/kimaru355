/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#00234E",
        "blue-1": "#6b8eda",
        "blue-2": "#081b29",
        "blue-light": "#0c305b",
      },
    },
  },
  plugins: [],
};
