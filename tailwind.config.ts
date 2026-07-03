import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./minimal/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        cta: "#FF6A3D",
        primary: "#0F1724",
        accent: "#00BFA6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 70px rgba(15, 23, 36, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
