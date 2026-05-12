import { test, expect } from '@playwright/test';
import { RegisterPage } from './01-pom';
test('todo page', async ({page}) => {
    const todoPage = new RegisterPage(page);
    await todoPage.openMaterialPage();
    await page.locator(todoPage.cssTodoPage).click();
    //thêm 100 todo
    const todoInput = page.locator('//input[@id="new-task"]');
    for (let i = 1; i <= 100; i++) {
        await todoInput.fill(`To do ${i}`);
        await page.locator('//button[@id="add-task"]').click();
    };
    //kiểm tra dialog
    page.on('dialog',async dialog =>{ 
        await dialog.accept();
    });
    await expect(page.locator('#task-list li')).toHaveCount(100);

    //xóa todo lẻ

    for (let i = 1; i <= 100; i += 2) {
        // const todoItem = page.locator(`//li[@data-task-id="${i}"]`);
        await page.locator(`#to-do-${i}-delete`).click();

        };
});
