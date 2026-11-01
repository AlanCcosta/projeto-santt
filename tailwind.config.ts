import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        santt: {
          base: "#0c100f",
          surface: "#121715",
          card: "rgba(22, 28, 26, 0.7)",
          "card-hover": "rgba(30, 39, 36, 0.9)",
          gold: "#c7a77b",
          "gold-light": "#e4d3ba",
          "gold-dark": "#9e7f53",
          "gold-glow": "rgba(199, 167, 123, 0.18)",
          border: "rgba(199, 167, 123, 0.25)",
          "border-subtle": "rgba(255, 255, 255, 0.07)",
          text: "#f7f5f0",
          "text-muted": "#b0b9b4",
          "text-subtle": "#79857f",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #ebdcc7 0%, #c7a77b 50%, #9e7f53 100%)",
        "gold-radial": "radial-gradient(circle, rgba(199, 167, 123, 0.2) 0%, transparent 70%)",
      },
      boxShadow: {
        "gold-soft": "0 10px 30px -10px rgba(199, 167, 123, 0.15)",
        "gold-glow": "0 12px 35px rgba(199, 167, 123, 0.25)",
        "card-dark": "0 20px 45px -15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;

