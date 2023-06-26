/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-desktop": "url('./src/assets/images/bg-shorten-desktop.svg')",
        "boost-desktop": "url('./src/assets/images/bg-boost-desktop.svg')",
      },
      colors: {
        //Primary
        "c-cyan": "#2acfcf",
        "Dark-Violet": "#3b3054",
        //Secondary
        "r-red": "#f46262",
        // Neutral
        "g-gray": "#bfbfbf",
        "Grayish-Violet": "#9e9aa7",
        "Very-Dark-Blue": "#35323e",
        "Very-Dark-Violet": "#232127",
      },
      fontFamily: {
        "Poppins-1": "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
