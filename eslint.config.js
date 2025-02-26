import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    ignores: [
      'node_modules/**',
      '.nuxt/**',
      'dist/**',
      '.output/**',
      'coverage/**',
      '.git/**',
      '*.min.js',
      'public/**',
      'build/**',
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        self: 'readonly',
        global: 'readonly',
        URL: 'readonly',
        Response: 'readonly',
        Headers: 'readonly',
        fetch: 'readonly',
        $fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        sessionStorage: 'readonly',
        requestAnimationFrame: 'readonly',
        Element: 'readonly',
        SVGElement: 'readonly',
        MathMLElement: 'readonly',
        Event: 'readonly',
        IntersectionObserver: 'readonly',
        defineNuxtConfig: 'readonly',
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'array-bracket-newline': [
        'error', {
          multiline: true,
          minItems: 3,
        },
      ],
      'object-curly-newline': [
        'error', {
          multiline: true,
          minProperties: 5,
        },
      ],
      'eol-last': ['error', 'always'],
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn', {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-undef': 'off',
      'no-empty': ['warn', { allowEmptyCatch: true }],
      'no-useless-escape': 'warn',
      'no-constant-condition': 'warn',
      'getter-return': 'warn',
      'no-case-declarations': 'warn',
      'no-constant-binary-expression': 'warn',
      'no-async-promise-executor': 'warn',
      'no-control-regex': 'off',
      'no-prototype-builtins': 'warn',
      'no-setter-return': 'warn',
    },
  },
]
