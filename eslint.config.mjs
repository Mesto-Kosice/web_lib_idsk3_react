import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: [
      '**/.idea',
      '**/.storybook',
      '**/.config',
      'node_modules/*',
      'src/styles',
      'src/svgIcons',
      'src/svgImages'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    ...reactPlugin.configs.flat.recommended
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off'
    }
  }
];
