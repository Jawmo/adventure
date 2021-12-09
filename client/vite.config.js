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
  logLevel: 'info',
  resolve: {
    alias: {
      '@views': './src/views',
      '@components': './src/components',
      '@context': './src/context',
      '@hooks': './src/hooks',
      '~': './src'
    }
  }
})
