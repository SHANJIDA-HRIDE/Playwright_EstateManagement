const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class RoleListPage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;

        this.addRoleButton = page.getByRole('button', { name: 'Add Role' });


    }

  async openRoleListPage() {
    await this.goto('/role-list');
  }

   async viewIndivisualRoleDetails() {
    await this.goto('/roleProfile/57');
  }

    async clickAddRoleButton(){
        await this.addRoleButton.click();
    }

}

module.exports = { RoleListPage };
