import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
