/*const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const config = require('../utils/config');

test.describe('Login Tests', () => {
  let loginPage;
  let page;


  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
        loginPage = new LoginPage(page);

  });

  test('Login with valid credentials', async () => {
    await loginPage.openLoginPage();
    await loginPage.login(config.loginData.validEmail, config.loginData.validPassword);
    await loginPage.verifyLogin('Dashboard');
  });


});*/
