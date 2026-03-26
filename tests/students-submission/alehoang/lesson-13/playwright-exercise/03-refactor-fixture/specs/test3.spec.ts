import { test } from "../fixture/material-page.fixture";
import { TodoPage } from "../pom/todo.page";

test('Todo Page', async ({ materialPage }) => {
    const toDoPage = new TodoPage(materialPage.page);
    const numberItemToDo = 100;

    await test.step("Click Bài học 3", async () => {
        await toDoPage.gotoPage("Todo Page");
    });

    await test.step("Add 100 tasks", async () => {
        await toDoPage.addTask(numberItemToDo);
    });

    await test.step("Delete odd tasks", async () => {
        materialPage.page.on('dialog', async dialog => dialog.accept());
        await toDoPage.clickDeleteOddTaskBtn(numberItemToDo);
    });

    await test.step("Check Todo <90> is in viewport", async () => {
        await toDoPage.checkToDoInViewport("Todo <90>");
    });

    await test.step("Check Todo <21> is hidden", async () => {
        await toDoPage.checkToDoHidden("Todo <21>");
    });
});
