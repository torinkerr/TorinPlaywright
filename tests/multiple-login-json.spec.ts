import { test, expect } from '@playwright/test';
const logintestdata = require('../logintestdata.json');

// Group of tests
// Data driven test which will loop 3 times and perform same test with different data
//Parameterization
test.describe('Data Driven Login Test', () => {
  for (const data of logintestdata) {
    test(`Login with user ${data.id}`, async ({ page }) => {
      await page.goto('https://freelance-learn-automation.vercel.app/login');
      await page.getByPlaceholder('Enter Email').fill(data.username);
      await page.getByPlaceholder('Enter Password').fill(data.password);
    });
  }
});
