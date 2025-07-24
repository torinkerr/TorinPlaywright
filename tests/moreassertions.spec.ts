import { test, expect } from '@playwright/test';

test("verify and print url", async ({ page }) => {

    await page.goto("https://demoqa.com/");

    const url = await page.url();

    console.log("URL is " + url);

    await expect(page).toHaveURL("https://demoqa.com/");

});

test("verify and print Page title", async ({ page }) => {

    await page.goto("https://demoqa.com/");

    const title = await page.title();

    console.log("Title is " + title);

    await expect(page).toHaveTitle("DEMOQA");

});