import { test } from './03-custom-fixture';
import { ToDoPage } from './03-pom';


//3.
test('To Do Page Test', async ({ materialPage }) => {
  const toDoPage = new ToDoPage(materialPage.page);
  await test.step('Go to To Do Page and Add Tasks up to 100, delete tasks which have odd numbers', async () => {
    await toDoPage.openMaterialBasePage();
    await toDoPage.goToPage("Todo Page");
    await toDoPage.addToDoList();
  });
  await test.step('Check todo number 90 in viewport', async () => {
    await toDoPage.checkTask90InViewport();
  });
  await test.step('Check todo number 21 is hidden', async () => {
    await toDoPage.checkTask21IsHidden();
  });
});



