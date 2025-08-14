import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/vite'
import { vitePlugin as remix } from '@remix-run/dev'

// ⚠️ Não use hmr.port=443 (isso tenta ligar servidor na 443).
// Use APENAS clientPort para o cliente HMR atrás de proxy HTTPS.

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    UnoCSS(),
    remix()
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['bolt.ianeuralinker.com'],
    hmr: {
      protocol: 'wss',                   
      host: 'bolt.ianeuralinker.com',     
      clientPort: 443                     
    }
  },
  preview: {
    host: true,
    port: 5173
  }
})
