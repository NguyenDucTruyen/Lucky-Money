import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'

export default withNuxt(
  antfu({
    files: ['**/*.ts', '**/*.vue'],
    typescript: {
      overrides: {
        'no-var': 'off',
      },
    },
    vue: true,
    jsonc: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'warn',

      'node/prefer-global/process': 'off',

      'regexp/no-unused-capturing-group': 'off',

      'ts/ban-ts-comment': 'off',
      'ts/no-empty-object-type': 'off',
      'ts/no-unused-expressions': ['error', { allowTaggedTemplates: true }],

      'vue/valid-v-slot': 'off',
      'vue/custom-event-name-casing': 'off',
      'vue/no-multiple-template-root': 'off',
    },
  })
)