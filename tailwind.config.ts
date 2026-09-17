import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        brand: {
          ink: "#0a0d14", // near-black base
          night: "#12161f", // raised dark surface
          steel: "#8a94a6", // muted text on dark
          paper: "#f4f1e9", // warm off-white (not pure white)
          "paper-2": "#eae4d6", // deeper warm neutral
          blue: "#1f7ae0",
          "blue-light": "#4aa3ff",
          "blue-dark": "#0f5bc4",
          gold: "#f2b705",
          "gold-light": "#ffd45e",
          "gold-dark": "#c98a00",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 6px)",
      },
      letterSpacing: {
        mega: "-0.02em",
      },
      boxShadow: {
        gold: "0 18px 40px -18px rgba(242, 183, 5, 0.55)",
        blue: "0 18px 40px -18px rgba(31, 122, 224, 0.5)",
        hard: "6px 6px 0 0 rgba(10,13,20,1)",
        "hard-gold": "6px 6px 0 0 #f2b705",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #ffd45e 0%, #f2b705 50%, #c98a00 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #4aa3ff 0%, #1f7ae0 55%, #0f5bc4 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(242,183,5,0.55)" },
          "70%": { boxShadow: "0 0 0 16px rgba(242,183,5,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(242,183,5,0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
