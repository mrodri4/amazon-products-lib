module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'xo',
    'prettier'
  ],
  overrides: [
    {
      extends: ['xo-typescript', 'prettier'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json']
      },
      rules: {
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreArrowShorthand: true }
        ],
        'tailwindcss/classnames-order': 'off',
        'capitalized-comments': 'off',
        'no-warning-comments': 'off',
        'tailwindcss/no-custom-classname': [
          'warn',
          {
            whitelist: ['(?(apl)\\-).*']
          }
        ]
      }
    },
    {
      files: ['*.d.ts', 'vite.config.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/naming-convention': 'off'
      }
    },
    {
      files: ['*.config.cjs'],
      rules: {
        'capitalized-comments': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'tailwindcss'],
  rules: {},
  ignorePatterns: ['dist/**/*']
};
