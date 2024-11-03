module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "prettier"],
  overrides: [
    {
      // Disable `no-undef` rule for files in `shared/components` (because env variables are defined within a nuxt application)
      files: ["shared/components/**/*.vue"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      // Override for .vue files in the pages directory
      files: ["clients/**/pages/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
    {
      // Apply TypeScript rules only to .ts files
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json", // Use the root `tsconfig.json` to limit scope
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        // Add TypeScript-specific rules here if desired
      },
    },
  ],
  rules: {
    "prettier/prettier": ["error", { semi: false }],
  },
}
