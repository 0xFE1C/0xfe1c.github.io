import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base makes the build work on both project pages
// (https://0xfe1c.github.io/0xFE1C/) and user/root pages.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  // @react-pdf/renderer expects Node-ish globals in some code paths.
  define: {
    global: "globalThis",
  },
});
