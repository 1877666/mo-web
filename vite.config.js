import { fileURLToPath, URL } from 'node:url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:8848',
        changeOrigin:true,
      }
    }
  }
})
