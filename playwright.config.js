// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  globalSetup: require.resolve('./global-setup.js'),

  use: {
    storageState: 'auth.json',   // saved login session
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
  },

  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
