import { expect, Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private header: string;
    private usernameSelector: string;
    private passwordSelector: string;
    private loginButtonSelector: string;

    constructor(page: Page) {
        this.page = page;
        this.header = "//h2[normalize-space()='Sign In']";
        this.usernameSelector = '#email1';
        this.passwordSelector = '#password1';
        this.loginButtonSelector = "button[type='submit']";

    }

    //Method that logs into application
    async loginToApplication(user: string,  password: string): Promise<void> {
        await this.page.fill(this.usernameSelector, user);
        await this.page.fill(this.passwordSelector, password);
        await this.page.click(this.loginButtonSelector);
        //await this.page.pause();
    }

    //Method to verify Text 'Sign in' displays on loginpage
    async verifySignIn(): Promise<void> {
        await expect(this.page.locator(this.header)).toBeVisible();

    }
}


