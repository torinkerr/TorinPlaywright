import { test, expect } from '@playwright/test';

test('Keyboard actions', async ({ page }) => {

    await page.goto("https://www.bing.com/");

    await page.getByRole('link', { name: 'Accept' }).click();

    await page.locator("textarea[name='q']").fill("Test");

    await page.keyboard.press("Enter");

});

test('Two Keyboard actions', async ({ page }) => {

    await page.goto("https://www.bing.com/");

    await page.getByRole('link', { name: 'Accept' }).click();

    await page.locator("textarea[name='q']").fill("Test Text");

    await page.keyboard.press("Meta+A");

    await page.keyboard.press("Backspace");

});

test('Copy and Paste', async ({ page }) => {

    await page.goto("https://www.bing.com/");

    await page.getByRole('link', { name: 'Accept' }).click();

    await page.locator("textarea[name='q']").fill("Copy Paste");

    await page.keyboard.press("Meta+A");

    await page.keyboard.press("Meta+C");

    await page.keyboard.press("Backspace");

    await page.keyboard.press("Meta+V");

});

test('Focus and highlight text using arrow keys', async ({ page }) => {

    await page.goto("https://www.bing.com/");

    await page.getByRole('link', { name: 'Accept' }).click();

    await page.locator("textarea[name='q']").focus();

    await page.keyboard.type("TTTTTT KKKKKK!");

    await page.keyboard.press("ArrowLeft");

    await page.keyboard.down("Shift");

    for (let i = 0; i < 6; i++) {
        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");

});