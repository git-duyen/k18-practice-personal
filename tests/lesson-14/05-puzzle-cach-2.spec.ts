import { test, expect } from '@playwright/test';

test('Puzzle 01 - using Drag to', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/05-xpath-drag-and-drop.html');

    for (let i = 1; i <= 4; i++) {
        let fromLoc = page.locator(`#piece-${i}`);
        let toLoc = page.locator(`//div[@data-piece='${i}']`);
        
        await fromLoc.hover();
        await page.mouse.down();
        await toLoc.hover();
        await page.mouse.up();
    }
});