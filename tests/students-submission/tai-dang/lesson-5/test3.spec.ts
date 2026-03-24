import { test, expect, Page } from '@playwright/test';




//3.
test('To Do Page Test', async ({ page }) => {
  await test.step('Go to To Do Page and Add Tasks up to 100, delete tasks which have odd numbers', async () => {
    await goTo_ToDoPage(page);
    await addToDoList(page);
  });
});

async function goTo_ToDoPage(page: Page) {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

  // Expects page to have a heading with the name of Simple E-commerce.
  await expect(page.getByRole('heading', { name: 'To-Do List' })).toBeVisible({ timeout: 10000 });
}


async function addToDoList(page: Page) {
   const inputLocator = page.locator('#new-task');
  // Add 100 tasks
  for (let i = 1; i <= 100; i++) {
    await inputLocator.fill(`Task ${i}`);
    await page.getByRole('button', { name: 'Add Task' }).click();
  }
  
  // Delete tasks with odd numbers using for j++
  let taskCount = await page.locator('//ul[@id="task-list"]/li').count();
  for (let j = 0; j < taskCount; j++) {
    const taskElement = page.locator('//ul[@id="task-list"]/li').nth(j);
    const textContent = await taskElement.textContent();
    
    // Extract task number from text (e.g., "Task 1")
    const taskNumberMatch = textContent?.match(/Task (\d+)/);
    if (taskNumberMatch) {
      const taskNumber = parseInt(taskNumberMatch[1]);
      // If task number is odd, delete it
      if (taskNumber % 2 !== 0) {
        page.once('dialog', async dialog => { await dialog.accept(); });
        await taskElement.getByRole('button', { name: /Delete/ }).click();
        j--; // Decrement j to account for the deleted item
        taskCount = await page.locator('//ul[@id="task-list"]/li').count();
      }
    }
  }
}
