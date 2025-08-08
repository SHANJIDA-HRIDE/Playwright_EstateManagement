// login.setup.js
const { chromium } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');


(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.openLoginPage();
  await loginPage.login('birdlove629@gmail.com', '12345');

  // Save login session to file
  await context.storageState({ path: 'auth.json' });

  await browser.close();
})();
