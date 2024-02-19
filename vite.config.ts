/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@api", replacement: path.resolve(__dirname, "./src/api") },
      { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
      { find: "@store", replacement: path.resolve(__dirname, "./src/store") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.ts",
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
});
