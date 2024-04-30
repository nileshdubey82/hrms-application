/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'text-head': 'rgba(113, 82, 243, 1)',
      },
    },
  },
  plugins: [require("daisyui")],
};
