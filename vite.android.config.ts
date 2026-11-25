import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Отдельная сборка игры в папку, которую APK кладёт в assets. Без сервера. */
export default defineConfig({
  base: "./",
  publicDir: false,
  build: {
    outDir: "android/www",
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: resolve("android/index.html"),
    },
  },
  plugins: [tailwindcss(), react()],
  resolve: { tsconfigPaths: true },
});
