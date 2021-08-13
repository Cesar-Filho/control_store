module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': ['error'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ]
  }
}
