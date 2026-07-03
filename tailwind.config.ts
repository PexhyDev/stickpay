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
        cta: "#4F46E5",
        primary: "#0B1120",
        accent: "#06B6D4",
        brandSlate: "#0F172A",
        brandGray: "#64748B",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 70px rgba(11, 17, 32, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
