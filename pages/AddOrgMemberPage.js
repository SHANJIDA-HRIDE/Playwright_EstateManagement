const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class AddOrgMemberPage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;
   
        this.addExistingCommMemberButton = page.getByRole('button', { name: 'Add a Community Member' });
        this.fullNameInput = page.locator('input[name="full_name"]');
        this.emailInput = page.locator('input[name="general_email"]');
        this.contactInput = page.locator('input[name="general_contact"]');
        this.nextButton1 = page.getByRole('button', { name: 'Next' });
        this.managementRadio = page.getByLabel('Management');
        this.superAdminCheckbox = page.getByLabel('SuperAdmin');
        this. nextButton2 = page.getByRole('button', { name: 'Next' });
        this.emailRadio = page.locator('#login-email');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.memberSuccessMessage = page.getByText('Member created successfully!');
        this.okButton = page.getByRole('button', { name: 'OK' });



    }


   async addNewOrgMember(fullName, email, contact) {

          await this.fullNameInput.waitFor({ state: 'visible' });
          await this.fullNameInput.fill(fullName);

          await this.emailInput.waitFor({ state: 'visible' });
          await this.emailInput.fill(email);

          await this.contactInput.waitFor({ state: 'visible' });
          await this.contactInput.fill(contact);

          await this.nextButton1.click();
          await this.managementRadio.check();
          await this.superAdminCheckbox.check();
          await this.nextButton2.click();
          await this.emailRadio.check();
          await this.submitButton.click();
            await expect(this.memberSuccessMessage).toBeVisible();
             await this.okButton.click();

}



}

module.exports = { AddOrgMemberPage};
