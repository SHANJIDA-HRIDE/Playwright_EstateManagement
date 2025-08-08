const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class EditOrgMemberGenInfoPage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;
   
        this.viewProfileLink = page.locator('a[href*="/member-profile/452"]'); // 👈 Adjusted to match the member ID in the test
        this.editOrgInfo = page.getByText('Edit');
        this.fullNameInput = page.locator('input[name="full_name"]');
        this.generalEmailInput = page.locator('input[name="general_email"]');
        this.generalContactInput = page.locator('input[name="general_contact"]');
        this.updateButton = page.getByRole('button', { name: 'Update' });
        this.memberUpdatedMessage = page.getByText('Member updated successfully!');
        this.okButton = page.getByRole('button', { name: 'OK' });
    }


   async editOrgMemberGenInfo(fullName, email, contact) {
        await this.viewProfileLink.click();
        await this.editOrgInfo.click();
        await this.fullNameInput.waitFor({ state: 'visible' });
        await this.fullNameInput.fill(fullName);

        await this.generalEmailInput.waitFor({ state: 'visible' });
        await this.generalEmailInput.fill(email);

        await this.generalContactInput.waitFor({ state: 'visible' });
        await this.generalContactInput.fill(contact);
        await this.updateButton.click();


}

  async verifyEditOrgMember(expectedText) {
  await expect(this.memberUpdatedMessage).toHaveText(expectedText);
}

async clickOnOK(){
        await this.okButton.click();
    }


}

module.exports = { EditOrgMemberGenInfoPage};
