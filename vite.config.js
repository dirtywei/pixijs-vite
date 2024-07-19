import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 4000,
    host: '0.0.0.0'
    // proxy: {
    //   '/account': {
    //     target: 'https://re-test.sl916.com/',
    //     changeOrigin: true,
    //     secure: false
    //     // rewrite: (path) => path.replace(/^\/web/, '')
    //   }
    // }
  }
})
