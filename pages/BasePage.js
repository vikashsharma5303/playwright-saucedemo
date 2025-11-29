export class BasePage {
  constructor(page){ this.page = page; }
  async click(locator){ await this.page.locator(locator).click(); }
  async type(locator, text){ await this.page.locator(locator).fill(text); }
  async getText(locator){ return await this.page.locator(locator).innerText(); }
  async isVisible(locator){ return await this.page.locator(locator).isVisible(); }
}
