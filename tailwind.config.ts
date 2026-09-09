import type { Config } from "tailwindcss";

// Los colores se definen como variables CSS en src/app/globals.css.
// Para ajustar la identidad visual, cambiá los valores ahí (un solo lugar).
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        whatsapp: "var(--color-whatsapp)",
        "whatsapp-dark": "var(--color-whatsapp-dark)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 76, 129, 0.06), 0 8px 24px -12px rgba(15, 76, 129, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
