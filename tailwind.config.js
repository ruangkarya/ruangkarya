/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Merienda", "sans-serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        // Ensure all common spacing values are explicitly available
        0: "0px",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      animation: {
        "gradient-flow": "gradient-flow 3s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "char-reveal": "char-reveal 0.6s ease-out forwards",
      },
      keyframes: {
        "gradient-flow": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "border-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 0, 0, 0.2)",
          },
        },
        "text-shimmer": {
          "0%": {
            backgroundPosition: "-200% center",
          },
          "100%": {
            backgroundPosition: "200% center",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            textShadow:
              "0 0 10px rgba(20, 184, 166, 0.5), 0 0 20px rgba(20, 184, 166, 0.3), 0 0 30px rgba(20, 184, 166, 0.1)",
          },
          "50%": {
            textShadow:
              "0 0 20px rgba(20, 184, 166, 0.8), 0 0 30px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3)",
          },
        },
        "char-reveal": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.8)",
          },
          "50%": {
            transform: "translateY(-5px) scale(1.05)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
