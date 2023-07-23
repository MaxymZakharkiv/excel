import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath, URL } from 'url'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  entry: './src/index.html',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, './src/')
    },
    extensions: ['.js', '.json', '.ts']
  }
})
