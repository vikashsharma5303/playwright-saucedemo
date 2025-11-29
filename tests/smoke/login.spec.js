import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { ProductsPage } from '../../pages/ProductsPage.js';

test('Smoke - valid login', async ({ page }, testInfo) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  await login.goto();
  await login.login('standard_user','secret_sauce');
  await expect(page.locator(products.title)).toHaveText('Products');
});
