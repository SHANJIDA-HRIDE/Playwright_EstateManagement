const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class OrgMemberListPage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;
        this.addMemberButtonLocator = this.page.getByRole('button', { name: 'Add Member' });
        this.viewProfileLink = page.locator('a[href*="/member-profile/453"]'); // 👈 Adjusted to match the member ID in the test


    }

  async openMemberListPage() {
    await this.goto('/member-list');
  }

    async clickAddMemberButton(){
        await this.addMemberButtonLocator.click();
    }

   async clickViewMemberInfo(){
        await this.viewProfileLink.click();
    }

}

module.exports = { OrgMemberListPage };
