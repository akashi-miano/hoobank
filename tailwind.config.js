/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.7)",
        secondary: "rgba(0, 217, 245, 0.6)",
      },
    },
  },
  plugins: [],
};
