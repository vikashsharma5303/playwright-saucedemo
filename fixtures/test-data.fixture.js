import { test as base } from '@playwright/test';

export const test = base.extend({
  validUser: async ({}, use) => {
    await use({ username: 'standard_user', password: 'secret_sauce' });
  }
});
