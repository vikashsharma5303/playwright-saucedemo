import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { ProductsPage } from '../../pages/ProductsPage.js';
import { CartPage } from '../../pages/CartPage.js';

test('Smoke - add first item to cart and proceed', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user','secret_sauce');
  await products.addFirstItemToCart();
  await products.openCart();
  const count = await cart.itemCount();
  expect(count).toBeGreaterThan(0);
});
