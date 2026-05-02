import { expect, test } from "@playwright/test";
import { TodoPage } from './01-pom';

test('Todo page', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await test.step("Goto Todo Page", async () => {
        await todoPage.openMaterialPage();
        await todoPage.gotoPage('Todo page');
    });

    await test.step("Add Todo Item", async () => {
        for (let i = 1; i <= 100; i++) {
            await todoPage.addTask(`Todo ${i}`);
        }
    });

    await test.step("Detele odd Todo", async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await todoPage.deleteTask(i);
            }
        }
    });

    await test.step('Check todo 90 visible in viewport', async () => {
        await expect(page.locator("//ul//li//span[text()='Todo 90']")).toBeInViewport();
    });
    await test.step('Check todo 21 hidden', async () => {
        await expect(page.locator("//ul//li//span[text()='Todo 21']")).toBeHidden();
    });
});
