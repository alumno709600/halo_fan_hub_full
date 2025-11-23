import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/_variables.scss"; @import "./styles/_mixins.scss";`
      }
    }
  }
})
