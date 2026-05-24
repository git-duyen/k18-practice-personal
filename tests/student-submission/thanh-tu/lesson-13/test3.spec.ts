import { test } from './03-fixture';

test('Add and Delete in Todo List', async ({ todoPage }) => {
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