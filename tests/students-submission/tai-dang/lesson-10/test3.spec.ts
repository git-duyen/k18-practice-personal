import { test, expect, Page } from '@playwright/test';
import { ToDoPage } from './01-pom';


//3.
test('To Do Page Test', async ({ page }) => {
  const toDoPage = new ToDoPage(page);
  await test.step('Go to To Do Page and Add Tasks up to 100, delete tasks which have odd numbers', async () => {
    await toDoPage.openMaterialBasePage();
    await toDoPage.goToPage("Todo Page");
    await toDoPage.addToDoList(page);
  });
  await test.step('Check todo number 90 in viewport', async () => {
    await toDoPage.checkTask90InViewport();
  });
  await test.step('Check todo number 21 is hidden', async () => {
    await toDoPage.checkTask21IsHidden();
  });
});



