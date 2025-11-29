import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {
  constructor(page){
    super(page);
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueBtn = '[data-test="continue"]';
    this.finishBtn = '[data-test="finish"]';
    this.completeHeader = '.complete-header';
  }

  async fillDetails(first, last, postal){
    await this.type(this.firstName, first);
    await this.type(this.lastName, last);
    await this.type(this.postalCode, postal);
  }

  async continue(){ await this.click(this.continueBtn); }
  async finish(){ await this.click(this.finishBtn); }
  async getCompleteText(){ return await this.getText(this.completeHeader); }
}
