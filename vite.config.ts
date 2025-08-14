import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';

export default defineConfig({
  plugins: [remix()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['bolt.ianeuralinker.com'],
    hmr: {
      host: 'bolt.ianeuralinker.com',
      protocol: 'wss',
      port: 443
    }
  }
});
