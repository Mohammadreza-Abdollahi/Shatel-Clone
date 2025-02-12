/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenBtn: "#56c45f",
        blueBtn: "#5996ef",
        grayBtn: "#cccdd1",
        orangeBtn: "#f26322",
        grayBackground: "#fafcfd",
        gray2Background: "#f6f7fa",
        gray3Background: "#fafafa",
        blueGradient1: "#00b9f9", 
        blueGradient2: "#0068ec"
      },
    },
  },
  plugins: [],
};
