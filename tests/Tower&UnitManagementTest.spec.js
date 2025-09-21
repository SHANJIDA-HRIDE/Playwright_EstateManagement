const { test, expect } = require('@playwright/test');
const { TowerListPage } = require('../pages/TowerListPage');
const { AddEditDeleteTowerPage } = require('../pages/AddEditDeleteTowerPage');
const { Owner_Resident_Staff_Page } = require('../pages/Owner_Resident_Staff_Page');
const config = require('../utils/config');

test.describe('Tower & Unit Management Tests', () => {
    let page, towerListPage, towerPage, owner_Resident_Staff_Page;

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage;
        towerListPage = new TowerListPage(page);
        towerPage = new AddEditDeleteTowerPage(page);
        owner_Resident_Staff_Page = new Owner_Resident_Staff_Page(page);
    });

 /*test('Add and Edit Tower Same as Every Floor', async () => {
  const { initial, updated } = config.TowerData();

  await towerListPage.openTowerListPage();

  await towerPage.addAndEditTower(
    initial.towerName,
    initial.description,
    initial.numFloors,
    initial.numUnits,
    updated.towerName,
    updated.description,
    updated.numFloors
  );
});


test('Add tower with different units per floor', async () => {
   const { initial } = config.TowerData();
    await towerListPage.openTowerListPage();
    await towerPage.addTowerDifferentUnit(
      initial.towerName,
      initial.description,
      initial.numFloors,
      initial.numUnits,
      1,
      1
  );
});

test('Add New 1 Owner 100% Ownership', async () => {
    const member = config.commMemberData();
    await towerListPage.openTowerListPage();
    await owner_Resident_Staff_Page.addNewOwner(
      member.fullName,
      member.email,
      member.contact
      
  );
});*/


test('Add New 1 Resident & Remove the Added Resident', async () => {
    const member = config.commMemberData();
    await towerListPage.openTowerListPage();
    await owner_Resident_Staff_Page.addNewResident_removeResident(
      member.fullName,
      member.email,
      member.contact
    )

      
});



});
