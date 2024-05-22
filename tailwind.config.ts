import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // Primary
        "irc-orange": "hsl(25, 97%, 53%)",
        // Neutral
        "irc-white": "hsl(0, 0%, 100%)",
        "irc-light-grey": "hsl(217, 12%, 63%)",
        "irc-dark-blue": "hsl(213, 19%, 18%)",
        "irc-very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        "irc-gradient":
          // "linear-gradient(180deg, rgba(34,41,51,1) 15%, rgba(24,31,41,0.7447795823665893) 100%)",
          // "linear-gradient(180deg, rgba(34,41,51,1) 15%, rgba(24,31,41,1) 100%)",
          "linear-gradient(180deg, rgba(34,41,51,1) 5%, rgba(24,31,41,1) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
