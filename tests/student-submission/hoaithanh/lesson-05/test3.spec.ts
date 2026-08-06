import { test } from '@playwright/test';

test('test3', async ({ page }) => {
    await test.step('Navigate to page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    // Select Bài học 3: Todo page
    await test.step('Click Bai hoc 3', async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });

    // Vòng lặp 100 lần
    await test.step('add Todo', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    // Xoá số lẻ
    await test.step('Delete task', async () => {
        // Lấy tất cả tasks
        const tasks = page.locator("//ul[@id='task-list']//li") 

        // Số lượng tasks
        const count = await tasks.count();

        // Xử lý sự kiên ( câu lệnh nằm ngoài for)
        page.on('dialog', async dialog => dialog.accept());

        // Xác định task
        for (let a = count - 1; a >= 0; a--) {
            // index từng task từ tasks
            const task = tasks.nth(a);

            // lấy tên task
            const taskName = await task.locator('span').innerText()

            // tách tên và số => chuyển chuỗi thành số
            const taskNumber = Number(taskName.replace("Todo", ""));

            // Kiểm tra số lẻ
            if (taskNumber % 2 === 1) {
                await task.locator("button").nth(1).click();
            }
        }
    });
});