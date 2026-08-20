import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#075985",
          green: "#087A4B",
          red: "#D71920",
          gold: "#D6A437",
          ink: "#102A43",
          muted: "#52606D",
          warm: "#F7F8F5",
        },
      },
      boxShadow: {
        premium: "0 24px 80px rgba(7, 89, 133, 0.16)",
        card: "0 18px 48px rgba(16, 42, 67, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
