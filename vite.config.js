import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Deployed at site root (e.g. markrusselbaral.github.io), so base '/'.
export default defineConfig({
  base: '/',
  plugins: [vue()],
  server: { port: 8765, open: false }
})
