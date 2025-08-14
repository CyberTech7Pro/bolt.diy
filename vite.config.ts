import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import UnoCSS from 'unocss/vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    // o UnoCSS cria o módulo virtual: 'virtual:uno.css'
    UnoCSS(),
    import UnoCSS from 'unocss/vite';
export default defineConfig({
  plugins: [UnoCSS(), remix()],
  // ... resto igual ao que já definimos antes
});
    remix(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'app'),
      '~/': resolve(__dirname, 'app/'),
      '@': resolve(__dirname, 'app'),
      '@/': resolve(__dirname, 'app/'),
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['bolt.ianeuralinker.com'],
    hmr: { protocol: 'wss', host: 'bolt.ianeuralinker.com', clientPort: 443 },
  },
});
