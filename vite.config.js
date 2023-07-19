import { defineConfig } from "vite";
// import path from "path";

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  entry: "./src/index.html",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".json", ".ts"],
  },
});
