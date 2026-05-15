import { test } from '@playwright/test';
import { TodoPage } from './01-pom';

test('Add and Delete in Todo List', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await test.step('Go to Todo Page', async () => {
    await todoPage.openMaterialPage();
    await todoPage.gotoPage('todo');
  });

  await test.step('Add 100 tasks', async () => {
    await todoPage.addTodos(100);
  });

  await test.step('Delete odd tasks', async () => {
    await todoPage.deleteOdd(100);
  });

  await test.step('Verify todo #90 is in viewport', async () => {
    await todoPage.verifyVisible(90);
  });

  await test.step('Verify todo #21 is not in DOM', async () => {
    await todoPage.verifyNotExist(21);
  });
});