import { defineConfig } from 'vite'
import { vitePlugin as remix } from '@remix-run/dev'
import tsconfigPaths from 'vite-tsconfig-paths'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    remix(),          // ✅ plugin obrigatório do Remix
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
})
