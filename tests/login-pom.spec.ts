import { test, Page , expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import dotenv from 'dotenv';
dotenv.config({path: 'logintestdata.env'});

test('Login to site using POM', async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage = new LoginPage(page);
    const username = process.env.LOGIN_USERNAME!;
    const password = process.env.LOGIN_PASSWORD!;

    await loginPage.loginToApplication(username, password);

    const homePage = new HomePage(page);

    await homePage.verifyManageOption();

    await homePage.logoutFromApplication();

    await loginPage.verifySignIn();

});
