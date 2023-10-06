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
        xl: "1360px",
      },
      padding: {
        DEFAULT: "16px",
        xl: "0",
      },
    },
    borderRadius: {
      xs: "10px",
      sm: "20px",
      DEFAULT: "30px",
      md: "40px",
      lg: "50px",
    },
    backgroundColor: {
      white: "#FFF",
      gray: "#F5F5F5",
      accent: "#FF376C",
      "accent-light": "#FF4073",
      filler: "#D9D9D9",
      dark: "#212121",
    },
    borderColor: {
      primary: "#E0E0E0",
      accent: "#FF376C",
      error: "#E53935",
    },
    textColor: {
      white: "#FFF",
      accent: "#FF376C",
      "accent-link": "#FF3F72",
      dark: "#212121",
      error: "#E53935",
    },
    outlineColor: {
      dark: "#212121",
    },
    fontFamily: {
      sans: `Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
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
      modal: "0px 8px 8px 0px rgba(0, 0, 0, 0.10)",
    },
    backdropBlur: {
      // TODO: remove
      DEFAULT: "5px",
    },
  },
  plugins: [],
};
export default config;
