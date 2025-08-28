// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages (must EXACTLY match repo name case)
  base: '/BTW-Agent/',
})
