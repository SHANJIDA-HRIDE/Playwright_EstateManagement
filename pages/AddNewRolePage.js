const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class AddNewRolePage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;
        this.roleNameInput = page.locator('input[name="role_name"]');
        this.roleDescriptionInput = page.locator('textarea[name="role_description"]');
        this.createMemberText = page.locator('span:text("Create Member")');
        this.createTowerText = page.locator('span:text("Create Tower")');
        this.createButton = page.locator('button[type="submit"]', { hasText: 'Create' });
        this.successMessage = page.locator('p.text-center.text-base.text-gray-600.mt-2', { hasText: 'Your new Role has been successfully added.' });
        this.okButton = page.locator('button', { hasText: 'OK' });
    }


   async addNewRole(roleName, desciption) {

            await this.roleNameInput.waitFor({ state: 'visible' });
            await this.roleNameInput.fill(roleName);

            await this.roleDescriptionInput.waitFor({ state: 'visible' });
            await this.roleDescriptionInput.fill(desciption);

            await this.createMemberText.click();
            await this.createTowerText.click();
            await this.createButton.click();
            await expect(this.successMessage).toBeVisible();
            await this.okButton.click();

        
}



}

module.exports = { AddNewRolePage};
