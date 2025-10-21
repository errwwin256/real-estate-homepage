import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ Important when deploying to GitHub Pages or subfolder
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
