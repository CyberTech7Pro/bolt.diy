import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/vite'
import { vitePlugin as remix } from '@remix-run/dev' // Remix + Vite

export default defineConfig(() => ({
  plugins: [
    remix(),
    react(),
    tsconfigPaths(),
    UnoCSS()
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['bolt.ianeuralinker.com'],
    // NÃO force HMR via wss:443 aqui; deixe Vite decidir via proxy do Coolify
  },
  preview: {
    host: true,
    port: 5173
  }
}))
