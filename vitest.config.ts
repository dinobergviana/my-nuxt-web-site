import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  test: {
    reporters: "verbose",
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"), // ajuste para sua pasta raiz de código
      "@": path.resolve(__dirname, "app"), // se preferir '@' também
      "#app": path.resolve(__dirname, ".nuxt", "imports"),
    },
  },
});
