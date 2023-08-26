/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#334155",
        gray: "rgba(0, 0, 0, 0.5)",
        "primary-800": "#1e2640",
        aliceblue: "#e2e8f0",
        "primary-500": "#4a60a1",
        "gray-400": "#889099",
        "gray-700": "#363a3d",
        "primary-50": "#edeff6",
      },
      fontFamily: {
        "header-heading-4": "'Public Sans'",
        roboto: "Roboto",
        "heading-heading-1": "Inter",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      "21xl": "40px",
      xl: "20px",
      "33xl": "52px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
