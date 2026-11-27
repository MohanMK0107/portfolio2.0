import type { Config } from "tailwindcss";

// Theme colours live in CSS variables (see globals.css) so one set of classes works in both dark and light.
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"), bg2: c("bg2"), card: c("card"), line: c("line"), txt: c("txt"), mut: c("mut"),
        accent: c("a"), violet: c("b"), amber: c("w"), kw: c("k"), str: c("s"), fn: c("f"),
      },
      fontFamily: {
        mono: ['ui-monospace', '"JetBrains Mono"', '"Fira Code"', "Menlo", "Consolas", "monospace"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      boxShadow: { glow: "var(--glow)" },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        typing: { to: { width: "calc(var(--n) * 1ch)" } },
        fadein: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "none" } },
        grow: { to: { width: "var(--w)" } },
        scroll: { to: { transform: "translateX(-50%)" } },
        floaty: { "50%": { transform: "translateY(-10px)" } },
        drift: { "50%": { transform: "translate(30px,-24px)" } },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        typing: "typing .8s steps(var(--n)) forwards",
        fadein: "fadein .5s both",
        grow: "grow 1s cubic-bezier(.2,.8,.2,1) forwards",
        scroll: "scroll 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
