const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class EditOrgMemberLoginCrePage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;
        this.organizationMemberTab = page.getByRole('tab', { name: 'Organization Member' });
        this.loginCredentialEditButton = page.locator('a[href="/login-credential-edit/453"]'); // 👈 Adjusted to match the member ID in the test
        this.deliveryMethodInput = page.locator('input[name="delivery_method"]');
        this.updateButton = page.getByRole('button', { name: 'Update' });
        this.successMessage = page.locator('p:has-text("Login credentials successfully sent to your email")');
        this.okButton = page.getByRole('button', { name: 'OK' });

        this.activeButton = page.getByRole('button', { name: 'Active' });

        
    }


   async editOrgMemberLoginCredential(email) {
        await this.organizationMemberTab.click();
        await this.loginCredentialEditButton.click();
        await this.deliveryMethodInput.waitFor({ state: 'visible' });
        await this.deliveryMethodInput.fill(email);
        await this.updateButton.click();
        await expect(this.successMessage).toBeVisible();
        await this.okButton.click();
}

}

module.exports = { EditOrgMemberLoginCrePage};
