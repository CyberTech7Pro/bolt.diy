import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import UnoCSS from 'unocss/vite';
import { vitePlugin as remix } from '@remix-run/dev';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    remix(),
    react(),
    tsconfigPaths(),
    UnoCSS(),
  ],
  server: {
    host: true,      // permite acesso de fora do container
    port: 5173,      // mantém alinhado com Docker/compose
    strictPort: true // falha se a porta já estiver em uso (útil p/ Coolify)
  },
});
