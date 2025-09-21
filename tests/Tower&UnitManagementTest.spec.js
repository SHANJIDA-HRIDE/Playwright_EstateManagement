const { test, expect } = require('@playwright/test');
const { TowerListPage } = require('../pages/TowerListPage');
const { AddEditDeleteTowerPage } = require('../pages/AddEditDeleteTowerPage');
const config = require('../utils/config');

test.describe('Tower & Unit Management Tests', () => {
    let page, towerListPage, towerPage;

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage;
        towerListPage = new TowerListPage(page);
        towerPage = new AddEditDeleteTowerPage(page);
    });

 test('Add and Edit Tower with config values', async () => {
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

});
