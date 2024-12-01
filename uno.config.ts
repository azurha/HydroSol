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
      'greenLhm': 'hsl(158deg 100% 20%)',
      'darkBrown': 'hsl(69deg 23% 68%)',
      'lightBrown': 'hsl(69deg 22% 77%)',
    },
  },
  rules: [
    [/^bg-light-(.*)$/, ([, c]) => ({ 'background-color': c })],
    [/^text-color-(.*)$/, ([, c]) => ({ color: c })],
  ],
})
