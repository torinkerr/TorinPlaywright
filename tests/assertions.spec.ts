import { test, expect } from '@playwright/test';

test("First Test", async ({ page }) => {

    expect(12).toBe(12);

});

test.skip('Second Test', async ({ page }) => {

    expect(100).toBe(101);

});

test('Third Test', async ({ page }) => {

    expect(1).toBe(1);

});

test('Fourth Test', async ({ page }) => {

    expect("Torin Kerr").toContain("Torin");
    expect(true).toBeTruthy();

});

test.skip('Fifth Test', async ({ page }) => {

    expect("Torin Kerr").toContain("zTorinz");

});

test('Sixth Test', async ({ page }) => {

    expect(false).toBeFalsy();

});

test('Seventh Test', async ({ page }) => {

    expect("Torin Kerr".includes("Tor")).toBeTruthy();

});