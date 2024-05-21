import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
export default config;
