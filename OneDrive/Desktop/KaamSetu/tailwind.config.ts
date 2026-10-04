import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12231f",
        moss: "#176b5d",
        "moss-dark": "#0f4d43",
        mint: "#dff3eb",
        sand: "#f6f3eb",
        amber: "#e8a23b",
        coral: "#dd6b51",
        mist: "#edf3f0"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(18, 35, 31, 0.08)",
        card: "0 4px 18px rgba(18, 35, 31, 0.06)"
      },
      borderRadius: {
        panel: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
