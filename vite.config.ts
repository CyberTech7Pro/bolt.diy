import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/vite'

export default defineConfig(() => ({
  plugins: [
    react(),
    tsconfigPaths(),
    UnoCSS()
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['bolt.ianeuralinker.com'],
    hmr: {
      host: process.env.HMR_HOST || 'bolt.ianeuralinker.com',
      port: Number(process.env.HMR_PORT || 443),
      protocol: 'wss'
    }
  },
  preview: {
    host: true,
    port: 5173
  }
}))
