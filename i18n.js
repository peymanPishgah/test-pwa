/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    zh: "zh",
  },
  all: {
    en: "en",
    zh: "zh",
  },
};

module.exports = new NextI18Next({
  defaultLanguage: "zh",
  otherLanguages: ["en"],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
  // ignoreRoutes: [],
});
