const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://analista-teste.seatecnologia.com.br/",
    setupNodeEvents(on, config) {
        allureWriter(on, config);
        return config;
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920
});
