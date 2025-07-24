import { test, expect } from '@playwright/test';

test("working with load state", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText("New user? Signup").click();

    //Wait for network to be idle otherwise test will be too quick and fail due to network calls / requests / api calls etc
    await page.waitForLoadState("networkidle");

    //Verify number of checkboxes
    const count = await page.locator("//input[@type='checkbox']").count();
    expect(count).toBe(6);

});