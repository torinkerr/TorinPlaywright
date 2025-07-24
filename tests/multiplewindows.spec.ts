import { test, expect } from '@playwright/test';

test('Working with multiple tabs', async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all
        (
            [
                context.waitForEvent('page'),

                page.locator('div').filter({ hasText: /^Connect with us$/ }).getByRole('link').nth(3).click()


            ]


        )

    await newPage.getByRole('button', { name: 'Allow all cookies' }).click()
    await newPage.getByRole('textbox', { name: 'Email address or phone number' }).fill('TestUser');
    await newPage.close();

    await page.getByPlaceholder("Enter Email").fill("admin@123");

});