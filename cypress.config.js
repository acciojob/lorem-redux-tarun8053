const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/integration/tests/test.spec.js",
    supportFile: false,
  },
});
