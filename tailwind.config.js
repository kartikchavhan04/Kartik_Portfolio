/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#0d1527", // Softer, lighter slate-navy dark
          900: "#111c34",
          850: "#162442",
          800: "#1c2d52",
          700: "#253a66",
          600: "#344e85",
        },
        brand: {
          cyan: "#06b6d4",
          teal: "#14b8a6",
          emerald: "#10b981",
          violet: "#8b5cf6",
          indigo: "#6366f1",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        glow: {
          "0%": { opacity: "0.35" },
          "100%": { opacity: "0.85" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(6, 182, 212, 0.3)",
        "glow-lg": "0 0 50px -10px rgba(6, 182, 212, 0.4)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.3)",
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.3)",
        card: "0 8px 30px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(6, 182, 212, 0.15)",
      },
    },
  },
  plugins: [],
}
