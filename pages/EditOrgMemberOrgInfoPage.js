const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class EditOrgMemberOrgInfoPage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;

        this.organizationMemberTab = page.getByRole('tab', { name: 'Organization Member' });
        this.editOrganizationMemberButton = page.locator('a[href="/MemberTypeAndRoleEdit/453"] button');  
        this.propertyStaffRadio = page.getByLabel('Property Staff');
        this.addNewRoleButton = page.getByRole('button', { name: 'Add New Role' });
        this.roleNameInput = page.locator('.login-field input[name="role_name"]');
        this.roleDescriptionInput = page.locator('textarea[name="role_description"]');
        this.createMemberCheckbox = page.getByLabel('Create Member');
        this.createRoleButton = page.getByRole('button', { name: 'Create Role' });
        this.roleCreatedMessage = page.getByText('Role created successfully');
        this.okButton = page.getByRole('button', { name: 'OK' });
        this.adminCheckbox = page.locator('label:has-text("Admin") >> input[type="checkbox"]');
        this.selectAllCheckbox = page.locator('label:has-text("Select All") input[type="checkbox"]');
        this.updateButton = page.getByRole('button', { name: 'Update' });
        this.memberUpdatedMessage = page.getByText('Member updated successfully!');
        this.okButton = page.getByRole('button', { name: 'OK' });
    }


   async editOrgMemberOrgInfo(roleName, desciption) {
        await this.organizationMemberTab.click();
        await this.editOrganizationMemberButton.click();
        await this.propertyStaffRadio.check();
        await this.addNewRoleButton.click();
        await this.roleNameInput.waitFor({ state: 'visible' });
        await this.roleNameInput.fill(roleName);
        await this.roleDescriptionInput.waitFor({ state: 'visible' });
        await this.roleDescriptionInput.fill(desciption);
        //await this.createMemberCheckbox.check();
        await this.createRoleButton.click();
        await expect(this.roleCreatedMessage).toBeVisible();
        await this.okButton.click();
        await this.selectAllCheckbox.click();
        await this.updateButton.click();
        await expect(this.memberUpdatedMessage).toBeVisible();
        await this.okButton.click();
}


}

module.exports = { EditOrgMemberOrgInfoPage};
