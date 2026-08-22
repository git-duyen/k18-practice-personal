import { test, expect } from '@playwright/test';
import { MaterialBasePage, RegisterPage, TodoPage } from './01-pom';

test('Test 3', async ({ page }) => {
    const materialBasePage = new MaterialBasePage(page);
    const todoPage = new TodoPage(page);

    await test.step("Step 1: Go to Homepage", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Step 2: Go to Todo page", async () => {
        await materialBasePage.toDoList.click();
    });

    await test.step("Step 3: Input to-do list", async () => {
        const input = todoPage.newTaskInput;
        const addButton = todoPage.addTaskButton;

        for (let i = 1; i <= 100; i++) {
            await input.fill(`Todo ${i}`);
            await addButton.click();
        }
    });



    // Xoa item so le
    await test.step("Step 5: Xoa item so le", async () => {
        page.on('dialog', async dialog => dialog.accept());

        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
                continue;
            }
            const soLeDeleteButton = page.locator(`//button[@id='todo-${i}-delete']`);
            await soLeDeleteButton.click();
        }
    });

        await test.step("Step 4: Verify viewport visibility", async () => {
        await todoPage.verifyInViewport('Todo 90');
        await todoPage.verifyNotInViewport('Todo 21');
    });
});