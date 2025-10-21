/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#2C2C2C",
        copper: "#B87333",
        taupe: "#DCD3C3",
        cream: "#FAF9F6",
      },
    },
  },
  plugins: [],
};
