import { expect } from "@playwright/test";
import { ToDoPage } from "./01-pom";
import { test } from "./materialPage-fixture";

test("TEST 3", async ({ materialPage }) => {
  const toDoPage = new ToDoPage(materialPage.page);

  await test.step("Go to Todo page", async () => {
    await toDoPage.gotoPage("Todo page");
  });

  await test.step("Add Task", async () => {
    await toDoPage.addTask(100);
  });

  await test.step("Delete Task", async () => {
    await toDoPage.deleteTask(100);
  });

  await test.step("Verify todo 90", async () => {
    const taskList = toDoPage.page.locator("#task-list").getByText("Todo 90");
    await taskList.scrollIntoViewIfNeeded();
    await expect(toDoPage.page.getByText("Todo 90")).toBeVisible();
  });

  await test.step("Verify todo 21", async () => {
    await expect(toDoPage.page.getByText("Todo 21")).not.toBeAttached();
  });
});
