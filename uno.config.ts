import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // carrega coleções localmente (sem depender de download em runtime)
      collections: {
        ph: () =>
          import('@iconify-json/ph/icons.json').then(i => i.default),
        // alias "si" -> simple-icons (os nomes si:vercel, si:supabase, etc.)
        si: () =>
          import('@iconify-json/simple-icons/icons.json').then(i => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      },
    }),
  ],
});
