import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": "/src",
      "@/components": "/src/components",
      "@/utils": "/src/utils",
      "@/models": "/src/models",
      "@/constants": "/src/constants",
      "@/assets": "/src/assets",
    },
  },
});
