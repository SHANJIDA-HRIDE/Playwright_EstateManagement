const { test, expect } = require('@playwright/test');
const { RoleListPage } = require('../pages/RoleListPage');
const { AddNewRolePage } = require('../pages/AddNewRolePage');
const config = require('../utils/config');

test.describe('Role All Tests', () => {
  let page, roleListPage, addNewRolePage ;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    roleListPage = new RoleListPage(page);
    addNewRolePage = new AddNewRolePage(page);

  });

  test('Add New Role with Valid Data', async () => {
    const member = config.RoleData(); 
    await roleListPage.openRoleListPage();
    await roleListPage.clickAddRoleButton();
    await addNewRolePage.addNewRole(
      member.roleName,   
      member.roleDescription
    );
});

});
