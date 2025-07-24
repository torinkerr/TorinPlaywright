import { test, expect } from '@playwright/test';

test('Login to site', async ({ page }) => {

    await page.goto('/');

    await page.viewportSize

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator("button[type='submit']").click();

    //await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click();

    //await page.waitForTimeout(3000);

    await page.getByText("Logout").click();

    await expect(page).toHaveURL(/login/);

});


