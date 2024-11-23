import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  content: {
    pipeline: {
      include: [
        'resources/views/**/*.edge',
        'resources/js/**/*.js',
        'resources/js/**/*.ts',
        'resources/css/**/*.css',
      ],
    },
    filesystem: ['resources/views/**/*.edge'],
  },
  theme: {
    colors: {
      greenLhm: 'hsl(143deg 51% 23%)',
      lightBrown: 'hsl(69deg 23% 68%)',
    },
  },
  rules: [['lightBackground', { 'background-color': 'hsl(69deg 23% 68%)' }]],
})
