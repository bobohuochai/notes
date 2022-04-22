import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), dynamicImport()],
  server:{
    port:3001
  }
})
