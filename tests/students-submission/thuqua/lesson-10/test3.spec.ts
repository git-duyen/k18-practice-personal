import { test } from '@playwright/test';
import { MateriaBasePage } from "./pom/01-materiapage-pom";
import { TodoPage } from "./pom/04-todopage-pom";

test('Todo page', async ({ page }) => {
    const materialBasePage = new MateriaBasePage(page);
    const todoPage = new TodoPage(page);

    await test.step('Navigate to material website', async () => {
        await materialBasePage.openMaterialPage();
    });

    await test.step('Click Bai hoc 3: To Do page', async () => {
        await materialBasePage.gotoPage(materialBasePage.cssTodoPage);
    });

    await test.step('Add new 100 todo item', async () => {
        await todoPage.addTotoItem();
    });

    await test.step('Delete todo item le', async () => {
        await todoPage.deleteOddIndexedItems();
    });

    await test.step('Delete todo item le', async () => {
        await todoPage.verifyItemInViewport(90);
    });

    await test.step('Verify Todo 21 is removed from DOM', async () => {
        await todoPage.verifyItemNotInDom(21);
    });
});