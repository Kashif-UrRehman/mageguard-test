const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://182.176.169.225:9060",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
