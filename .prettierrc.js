module.exports = {
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  parser: "babel",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",

  overrides: [
    {
      files: "*.{css,scss}",
      options: {
        parser: "css",
      },
    },
  ],
};
