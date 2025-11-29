import { BasePage } from './BasePage.js';

export class ProductsPage extends BasePage {
  constructor(page){
    super(page);
    this.title = '.title';
    this.inventoryItems = '.inventory_item';
    this.addToCartBtn = (name) => `button:has-text("Add to cart") >> nth=0`; // generic selector used in tests
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
    this.sortSelect = '[data-test="product_sort_container"]';
  }

  async getTitle(){ return await this.getText(this.title); }

  async addFirstItemToCart(){
    const btn = this.page.locator('.inventory_item button').first();
    await btn.click();
  }

  async openCart(){ await this.click(this.cartLink); }

  async sortBy(optionText){
    await this.page.selectOption(this.sortSelect, { label: optionText });
  }

  async cartCount(){ return await this.page.locator(this.cartBadge).innerText(); }
}
