import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  build: {
    manifest: true
  },
  server: {
    hmr: {
      host: 'localhost'
    }
  },
  logLevel: 'info'
})
