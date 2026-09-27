import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        encre: "#101F2B",
        billet: "#1F7A4D",
        "billet-clair": "#2FA968",
        creme: "#F7F5F0",
        sable: "#EAE6DC",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        prose: "38rem",
      },
    },
  },
  plugins: [],
};

export default config;
