module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react-hooks'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        tabWidth: 2,
      },
    ],
  },
};
