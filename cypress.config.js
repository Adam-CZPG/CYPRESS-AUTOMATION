const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e3xmok',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
