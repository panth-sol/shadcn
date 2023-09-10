import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"
import { shadcnPlugin } from "./lib/shadcn-plugin"

const config = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config

export default config
