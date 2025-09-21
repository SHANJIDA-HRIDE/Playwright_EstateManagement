const { test, expect } = require('@playwright/test');
const { OrgMemberListPage } = require('../pages/OrgMemberListPage');
const { AddOrgMemberPage } = require('../pages/AddOrgMemberPage');
const { EditOrgMemberGenInfoPage } = require('../pages/EditOrgMemberGenInfoPage');
const { EditOrgMemberOrgInfoPage } = require('../pages/EditOrgMemberOrgInfoPage');
const { EditOrgMemberLoginCrePage } = require('../pages/EditOrgMemberLoginCrePage');
const config = require('../utils/config');

/*test.describe('Organization All Tests', () => {
  let page, orgMemberListPage, addOrgMemberPage, editOrgMemberGenInfoPage, editOrgMemberOrgInfoPage, editOrgMemberLoginCrePage;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    orgMemberListPage = new OrgMemberListPage(page);
    addOrgMemberPage = new AddOrgMemberPage(page);
    editOrgMemberGenInfoPage = new EditOrgMemberGenInfoPage(page);
    editOrgMemberOrgInfoPage = new EditOrgMemberOrgInfoPage(page);
    editOrgMemberLoginCrePage = new EditOrgMemberLoginCrePage(page);
  });

  test('Add New ORG Member with Valid Data', async () => {
    const member = config.orgMemberData(); 

    await orgMemberListPage.openMemberListPage();
    await orgMemberListPage.clickAddMemberButton();
    await addOrgMemberPage.addNewOrgMember(
      member.fullName,   
      member.email,      
      member.contact    
    );

    console.log('✅ Created user with:', member);
  });

 test('Edit ORG Member General Info', async () => {
    const member = config.orgMemberData(); 

    await orgMemberListPage.openMemberListPage();
    await editOrgMemberGenInfoPage.editOrgMemberGenInfo(
      member.fullName,   
      member.email,      
      member.contact     
    );
    await editOrgMemberGenInfoPage.verifyEditOrgMember('Member updated successfully!');
    await editOrgMemberGenInfoPage.clickOnOK();

        console.log('✅ Edit user with:', member);

  });

  
 test('Edit ORG Member ORG Info', async () => {
    const member = config.orgMemberData(); 
    await orgMemberListPage.openMemberListPage();
    await orgMemberListPage.clickViewMemberInfo();
    await editOrgMemberOrgInfoPage.editOrgMemberOrgInfo(
      member.roleName,   
      member.roleDescription  
    );
    console.log('✅ Edit ORG user with:', member);

  });

   test('Edit ORG Member Login Credential', async () => {
    const member = config.orgMemberData();
    await orgMemberListPage.openMemberListPage();
    await orgMemberListPage.clickViewMemberInfo();
    await editOrgMemberLoginCrePage.editOrgMemberLoginCredential(
      member.email,  
    );

  });





});*/
