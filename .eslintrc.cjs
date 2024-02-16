/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Reglas personalizadas específicas del proyecto
    // Limitar la longitud de las líneas de código a 120 caracteres
    'max-len': ['error', { code: 120 }],
    // Mostrar un error al utilizar variables no definidas
    'no-undef': 'error',
    // Mostrar un error al usar números literales (números mágicos)
    'no-magic-numbers': 'error'
    // Otras reglas...
  }
}
