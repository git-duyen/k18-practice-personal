import { expect, test } from '@playwright/test';

test('API test cơ bản - response text', async ({ request }) => {
  const URL = 'https://material.playwrightvn.com/api/todo-app/v1/todos.php';

  const response = await request.get(URL);
  expect(response.status()).toBe(200);

  const responseJSON = await response.json();
  expect(responseJSON.todos.length).toBe(7);
});
