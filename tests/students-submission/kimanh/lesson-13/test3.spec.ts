import { expect } from "@playwright/test";
import { TodoPage } from "./01-pom";
import { test } from "./materialPage-fixture";


test("Add Todo Items", async ({ materialPage }) => {
    const todoPage = new TodoPage(materialPage);

    await test.step("Navigate to Todo Page", async () => {
        await todoPage.gotoTodoPage();
    });

    await test.step("Add 100 todo items", async () => {
        await todoPage.addMultipleTasks();
    });

    await test.step("Delete odd todo items", async () => {
        await todoPage.deleteOddTasks();
    });

    await todoPage.verifyTodoInViewport(90);
    await todoPage.verifyTodoNotExist(21);
});