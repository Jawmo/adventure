// .eslintrc.js
const { createConfig } = require("eslint-config-galex/dist/createConfig");
const { getDependencies } = require("eslint-config-galex/dist/getDependencies");
const {
  createTypeScriptOverride,
} = require("eslint-config-galex/dist/overrides/typescript");

const dependencies = getDependencies();

const disableSuggestions = createTypeScriptOverride({
  ...dependencies,
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
  },
});

module.exports = createConfig({
  overrides: [disableSuggestions],
  rules: {
    "no-eq-null": "off",
    eqeqeq: ["warn", "smart"],
  },
});
