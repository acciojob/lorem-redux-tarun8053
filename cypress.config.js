const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    specPattern: "cypress/integration/tests/test.spec.js",
    supportFile: false,
  },
});
