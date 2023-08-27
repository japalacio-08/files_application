const standard = require('eslint-config-standard')

module.exports = [
  standard,
  {
    root: true,
    env: { browser: true, es2020: true },
    env: {
      'jest/globals': true
    },
    files: ['*.js', '*.jsx'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
]
