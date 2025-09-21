const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage'); // 👈 import BasePage

class TowerListPage extends BasePage { // 👈 EXTEND BasePage
    constructor(page) {
        super(page); // 👈 CALL super() to pass page to BasePage
        this.page = page;
      
    }

     async openTowerListPage() {
    await this.goto('/ViewTowers');
  }

}

module.exports = { TowerListPage};
