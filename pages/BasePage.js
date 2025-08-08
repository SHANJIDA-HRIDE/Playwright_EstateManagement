class BasePage {
  constructor(page) {
    this.page = page;
    this.baseURL = 'http://localhost:5173'; // Replace with your actual base URL
  }

  async goto(path = '') {
    await this.page.goto(this.baseURL + path);
  }


  async screenshot(name = 'screenshot') {
    await this.page.screenshot({ path: `${name}.png` });
  }
}

module.exports = { BasePage };
