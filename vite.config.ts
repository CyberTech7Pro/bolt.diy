import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/vite'
import { vitePlugin as remix } from '@remix-run/dev'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), UnoCSS(), remix()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    // diz ao Vite qual é o origin público por trás do proxy
    origin: 'https://bolt.ianeuralinker.com',
    allowedHosts: ['bolt.ianeuralinker.com'],
    hmr: {
      protocol: 'wss',
      host: 'bolt.ianeuralinker.com',
      clientPort: 443
      // NÃO defina "port" aqui
    }
  },
  preview: { host: true, port: 5173 }
})
