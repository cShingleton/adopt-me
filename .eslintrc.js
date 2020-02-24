module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  rules: {
    // core
    "no-console": 1,
    "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["arrowFunctions"] }
    ],
    // react
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
  plugins: ["@typescript-eslint", "react", "import", "jsx-a11y", "react-hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
