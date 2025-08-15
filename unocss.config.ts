import { defineConfig, presetUno, presetIcons, presetTypography, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetTypography()
  ],
  transformers: [transformerVariantGroup()]
})
