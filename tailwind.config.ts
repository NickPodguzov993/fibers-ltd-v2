import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1280px",
      },
    },
    borderRadius: {
      sm: "20px",
      DEFAULT: "30px",
      md: "40px",
      lg: "50px",
    },
    backgroundColor: {
      white: "#FFF",
      accent: "#FF1744",
    },
    borderColor: {
      primary: "#E0E0E0",
      accent: "#FF1744",
    },
    textColor: {
      primary: "#000",
      accent: "#FF1744",
      dark: "#212121",
    },
    lineHeight: {
      DEFAULT: "1",
      paragraph: "1.6",
    },
    backdropBlur: {
      DEFAULT: "5px",
    },
  },
  plugins: [],
};
export default config;
