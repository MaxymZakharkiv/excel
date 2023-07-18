import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

// const __dirname = path.dirname(new URL(import.meta.url).pathname);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }),
  ],
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
    extensions: [".js", ".json", ".ts"],
  },
});
