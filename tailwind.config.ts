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
        "2xl": "1440px",
      },
      padding: {
        DEFAULT: "16px",
        xl: "40px",
      },
    },
    borderRadius: {
      xs: "10px",
      sm: "20px",
      DEFAULT: "30px",
      md: "40px",
      lg: "50px",
      xl: "60px",
    },
    backgroundColor: {
      white: "#FFF",
      gray: "#F5F5F5",
      accent: "#FF376C",
      "accent-light": "#FF4073",
      "accent-hover": "#FF4677",
      "accent-active": "#FF225D",
      filler: "#D9D9D9",
      dark: "#212121",
      violet: "#F3F1FF",
      "light-violet": "#F9F8FF",
      pink: "#FDEAFF",
      "light-pink": "#FEF6FF",
      green: "#DAFFD8",
      "light-green": "#F1FFF0",
    },
    borderColor: {
      primary: "#F5F5F5",
      accent: "#FF376C",
      error: "#E53935",
      violet: "#F3F1FF",
    },
    textColor: {
      white: "#FFF",
      black: "#000",
      accent: "#FF376C",
      "accent-link": "#FF3F72",
      dark: "#212121",
      error: "#E53935",
    },
    outlineColor: {
      dark: "#212121",
    },
    lineHeight: {
      none: "normal",
      paragraph: "1.6",
    },
    letterSpacing: {
      DEFAULT: "0",
      title: "0.04em",
    },
    boxShadow: {
      header: "0px 8px 24px 0px rgba(33, 33, 33, 0.05)",
      card: "0px 8px 16px 0px rgba(33, 33, 33, 0.05)",
      modal: "0px 8px 8px 0px rgba(0, 0, 0, 0.10)",
      cookies: "0px 10px 16px 0px rgba(0, 0, 0, 0.08);",
    },
    backdropBlur: {
      // TODO: remove
      DEFAULT: "5px",
    },
  },
  plugins: [],
};
export default config;
