// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  importOrder: ["^@/(.*)$", "^[./]"], // aliased imports first, then relative imports (all others go before)
  importOrderSeparation: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
}

export default config
