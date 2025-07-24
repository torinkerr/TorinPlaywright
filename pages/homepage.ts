import { expect, Page } from '@playwright/test';

export class HomePage {
    private page: Page;
    private manageoption: string;
    private menu: string;
    private logoutoption: string ;

    constructor(page: Page) {
        this.page = page;
        this.manageoption = "div.nav-menu-item-manage span";
        this.menu = "//img[@alt='menu']";
        this.logoutoption = "text=Sign out";
    }

    //Method to confirm 'Manage' appears on the page (Confirms succesful log on)
    async verifyManageOption(): Promise<void> {
        await expect(this.page.locator(this.manageoption)).toBeVisible();
    }

    //Method to logout
    async logoutFromApplication(): Promise<void> {
        await this.page.click(this.menu);
        await this.page.click(this.logoutoption);
        //await this.page.pause();
    }

}



