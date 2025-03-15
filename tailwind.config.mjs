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
        yellowColor: "#facf54",
        footerBgColor: "#242c39",
        // Logo Pallets | Instagram :
        insta1: "#fecc71",
        insta2: "#e94658",
        insta3: "#9d36b5",
        // LinkedIn : 
        linkedin: "#0077b5",
        // Tellegram
        tellegram: "#0088cc",
        // Twitter
        twitter: "#1da1f2",
        // Backgrounds
        grayBackground: "#fafcfd",
        gray2Background: "#f6f7fa",
        gray3Background: "#fafafa",
        gray4Background: "#eef0f5",
        gray5Background: "#fbfbfb",
        blueBackground: "#002a63",
        blueGradient1: "#00b9f9", 
        blueGradient2: "#0068ec"
      },
    },
  },
  plugins: [],
};
