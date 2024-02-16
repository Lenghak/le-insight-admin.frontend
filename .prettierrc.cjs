/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: false,
  singleAttributePerLine: true,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  parser: "typescript",
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  importOrder: [
    "^react(.*)$",
    "^@remix-run/(.*)$",
    "^@/modules/(.*)$",
    "^@/common/components/(.*)$",
    "^@/common/hooks/(.*)$",
    "^@/common/lib/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
    "^@/common/types/(.*)$",
    "^@/common/scss/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: ["*.scss", "*.css"],
      options: { parser: "scss" },
    },
    {
      files: "*.json",
      options: { parser: "json" },
    },
  ],
};
