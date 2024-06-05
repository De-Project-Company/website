import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
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
       screens: {
        'custom': '1100px', 
      },
      colors: {
        navbar: "#063172",
        "nav-text": "#DBE9FF",
        "nav-text-active": "#FD9137",
      },
      borderRadius: {
        '1/2': '50%',
      },
      borderWidth: {
        1: '1px'
      },
      zIndex: {
        1: '1'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideUp: {
          "70%": {
            opacity: "0.7",
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDown: {
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideNavUp: {
          "100%": {
            transform: "translateY(-112px)",
            opacity: "0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideUp: "slideUp 1s 0.2s ease forwards",
        slideDown: "slideDown 1s 0.2s ease forwards",
        slideNavUp: "slideDown 1s 0.2s ease forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      fontFamily: {
        nunito: [`var(--font-nunito)`, "sans-serif"],
        worksans: [`var(--font-work-sans)`, "sans-serif"],
        poppins: [`var(--font-poppins)`, "sans-serif"],
        rama: [`var(--font-ramaraja)`, "sans-serif"],
        jaka: [`var(--font-jakarta)`, "sans-serif"],
        podkova: [`var(--font-podkova)`, "sans-serif"],
        cav: [`var(--font-caveat)`, "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
