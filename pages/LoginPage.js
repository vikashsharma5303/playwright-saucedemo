import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
    this.error = '[data-test="error"]';
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(user, pass) {
    await this.type(this.username, user);
    await this.type(this.password, pass);
    await this.click(this.loginBtn);
  }

  async getError() { return await this.getText(this.error); }
}
