import { test, expect } from '@playwright/test';

test('Puzzle 01 - using Drag to', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/05-xpath-drag-and-drop.html');

    // // Piece 1
    // let fromLoc = page.locator("#piece-1");
    // let toLoc = page.locator("//div[@data-piece='1']");
    // await fromLoc.dragTo(toLoc);

    // // Piece 2
    // fromLoc = page.locator("#piece-2");
    // toLoc = page.locator("//div[@data-piece='2']");
    // await fromLoc.dragTo(toLoc);

    // // Piece 3
    // fromLoc = page.locator("#piece-3");
    // toLoc = page.locator("//div[@data-piece='3']");
    // await fromLoc.dragTo(toLoc);

    for (let i = 1; i <= 4; i++) {
        let fromLoc = page.locator(`#piece-${i}`);
        let toLoc = page.locator(`//div[@data-piece='${i}']`);
        await fromLoc.dragTo(toLoc);
    }
});