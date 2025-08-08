const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class LoginPage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;

        this.emailField_usernameField = page.locator('#usernameOrEmail'); // 👈 Added '#' for ID selector
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.passwordField = page.getByPlaceholder('Enter password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid credentials');
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    }

  async openLoginPage() {
    await this.goto('/login');
  }

async login(email, password) {
  // Wait for email/username field to be visible before interacting
  await this.emailField_usernameField.waitFor({ state: 'visible' });
  await this.emailField_usernameField.fill(email);

  await this.nextButton.click();

  // Wait for password field to be visible
  await this.passwordField.waitFor({ state: 'visible' });
  await this.passwordField.fill(password);

  await this.loginButton.click();
}



    /*async invalidLogin(){
        await expect(this.errorMessage).toHaveText("Invalid credentials");
    }*/


    async verifyLogin(expectedText) {
  await expect(this.dashboardHeading).toHaveText(expectedText);
}


}

module.exports = { LoginPage };
