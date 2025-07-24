import { test, expect } from '@playwright/test';

//Test shows how to select dropdown values in different ways

test('Select values from dropdown', async ({ page }) => {

  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  //label best practice label then value then index
  await page.locator("#state").selectOption({ label: "Goa" });
  // Can use this to ensure correct dropdown item has been selected
  await page.waitForTimeout(1000);

  await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
  await page.waitForTimeout(1000);

  await page.locator("#state").selectOption({ index: 4 });
  await page.waitForTimeout(3000);

});

test('Ensures certain text is present in dropdown', async ({ page }) => {

  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  const value: string | null = await page.locator("#state").innerText();

  expect(value?.includes("Kerala")).toBeTruthy();

});

test('Prints all values are present in the dropdown', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');
  await page.waitForSelector('#state');

  const state = await page.$('#state');
  if (!state) {
    throw new Error('Dropdown with ID #state not found');
  }

  const allElements = await state.$$('option');

  for (const [index, element] of allElements.entries()) {
    const value = await element.textContent();
    console.log(`Value ${index + 1} from dropdown: ${value?.trim()}`);
  }

});

test('Multi select', async ({ page }) => {

  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  await page.locator('#hobbies').selectOption(['Playing', 'Swimming']);

  await page.waitForTimeout(3000);

});
