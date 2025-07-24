import { test, expect } from '@playwright/test';
import path from 'path';

test('Verfify file upload using fixtures', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const filePath = path.join(__dirname, 'fixtures/TestFile.docx');
    await page.locator('#file-upload').setInputFiles(filePath);

    await page.locator("#file-submit").click();

    expect(await page.locator("//h3")).toHaveText("File Uploaded!");
    expect(await page.locator('#uploaded-files')).toContainText('TestFile.docx');

    await page.waitForTimeout(3000);

});