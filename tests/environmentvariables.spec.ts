import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({path: 'logintestdata.env'});

test("Login to app using data from a .env file", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter Email").fill(process.env.LOGIN_USERNAME!);

    await page.getByPlaceholder("Enter Password").fill(process.env.LOGIN_PASSWORD!);

});
