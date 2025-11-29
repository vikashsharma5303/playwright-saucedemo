import { BasePage } from './BasePage.js';

export class CartPage extends BasePage {
  constructor(page){
    super(page);
    this.checkoutBtn = '[data-test="checkout"]';
    this.cartItems = '.cart_item';
  }

  async proceedToCheckout(){ await this.click(this.checkoutBtn); }
  async itemCount(){ return await this.page.locator(this.cartItems).count(); }
}
