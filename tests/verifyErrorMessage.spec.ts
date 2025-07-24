import { test, expect } from '@playwright/test';

test("verify log in error message", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("wrongpassword");

    //Xpath
    await page.locator("//button[normalize-space()='Login']").click();

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
    console.log("Error message is " + errorMessage);
    //expect(errorMessage).toContain("Invalid");
    expect(errorMessage).toBe("Invalid credentials");

});