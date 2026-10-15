import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['code/day_1/src/Counter.tsx'],
    rules: {
      // This live demo intentionally starts with a mutable local counter.
      'react-hooks/immutability': 'off',
    },
  },
  {
    files: ['demo/day-2/cart-state/Cart.tsx'],
    rules: {
      // This instructor demo intentionally starts by mutating array state.
      'react-hooks/immutability': 'off',
    },
  },
  {
    files: ['demo/**/entry.tsx', 'exercises/**/entry.tsx'],
    rules: {
      'react-refresh/only-export-components': ['error', {
        allowConstantExport: true,
        allowExportNames: ['meta'],
      }],
    },
  },
])