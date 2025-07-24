import { test, expect } from '@playwright/test';
import path from 'path';

test('Verfify file upload using file upload folder', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./uploads/TestFile.docx");

    await page.locator("#file-submit").click();

    expect(await page.locator("//h3")).toHaveText("File Uploaded!");
    expect(await page.locator('#uploaded-files')).toContainText('TestFile.docx');

    await page.waitForTimeout(3000);

});