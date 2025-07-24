import { test, expect } from '@playwright/test';

test('Auto complete search using keyboard', async ({ page }) => {

    await page.goto("https://www.bing.com/");

    await page.getByRole('link', { name: 'Accept' }).click();

    await page.locator("textarea[name='q']").fill("tes");

    await page.waitForSelector("//li[@role='option']");

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

});

test('Auto complete search using loop', async ({ page }) => {

    await page.goto("https://www.bing.com/");

    await page.getByRole('link', { name: 'Accept' }).click();

    await page.locator("textarea[name='q']").fill("tes");

    await page.waitForSelector("//li[@role='option']");

    //Loops until a certain suggestion is found and selects
    const elements = await page.$$("//li[@role='option']");

    for (let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent();

        if (text && text.includes('Bank')) {
            await elements[i].click();
            break;
        }
    }

});
