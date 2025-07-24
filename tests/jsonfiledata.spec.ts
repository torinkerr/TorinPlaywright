import { test, expect } from '@playwright/test';
const logintestdata = JSON.parse(JSON.stringify(require("../logintestdata.json")));
const signuptestdata = JSON.parse(JSON.stringify(require("../logintestdata.json")));

test("Login to app using data from a json file", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter Email").fill(logintestdata[0].username);

    await page.getByPlaceholder("Enter Password").fill(logintestdata[0].password);

    //await page.getByPlaceholder("Enter Password").fill(signuptestdata.address.area);

    //await page.getByPlaceholder("Enter Password").fill(signuptestdata.interest[1]);

});