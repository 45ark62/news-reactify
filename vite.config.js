import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@api": path.resolve(__dirname, "src/api"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
