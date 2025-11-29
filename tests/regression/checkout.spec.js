import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { ProductsPage } from '../../pages/ProductsPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

test('Regression - complete checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.addFirstItemToCart();
  await products.openCart();
  await cart.proceedToCheckout();
  await checkout.fillDetails('Vikash', 'Kumar', '110001');
  await checkout.continue();
  await checkout.finish();
  await expect(page.locator(checkout.completeHeader)).toHaveText('Thank you for your order!');
});
