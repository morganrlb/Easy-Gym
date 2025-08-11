/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f75531",
        secondary: "#555555",
        accent: "#f75531",
        text: "#f0f0f0",
        light: "#f0f0f0",
        dark: "#000000",
        darkgray: "#1c1c1c",
        mediumgray: "#2c2c2c",
        lightgray: "#b0b0b0",
        success: "#4caf50",
      },
      borderRadius: {
        'lg-custom': '25px',
        'sm-custom': '15px',
      },
      boxShadow: {
        'card': '0 5px 15px rgba(0,0,0,0.2)',
        'card-hover': '0 12px 30px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
