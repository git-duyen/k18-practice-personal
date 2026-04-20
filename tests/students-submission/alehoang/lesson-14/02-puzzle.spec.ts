import { test, expect } from "@playwright/test";

test("Drag & Drop puzzle", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.getByText("Bài học 5: Puzzle drag and drop game").click();
    for (let i = 1; i <= 4; i++) {
        let fromLoc = page.locator(`#piece-${i}`);
        let toLoc = page.locator(`div[data-piece='${i}']`);
        await fromLoc.dragTo(toLoc);
        await expect(toLoc).toContainText(i.toString());
    }
});
