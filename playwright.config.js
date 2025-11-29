import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  expect: { timeout: 5000 },
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
  use: {
    headless: true,
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry"
  },
});
