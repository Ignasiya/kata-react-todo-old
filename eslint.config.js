import js from '@eslint/js'
import globals from 'globals'
import eslintReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    extends: ['react-app', 'eslint:recommended'],
    plugins: {
      react: eslintReact,
      prettier: prettierPlugin
    }
  },
  {
    ignores: ['node_modules', 'build']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022
      },
      parserOptions: eslintReact.configs.recommended.parserOptions
    }
  },
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      ...eslintConfigPrettier.rules
    }
  }
]
