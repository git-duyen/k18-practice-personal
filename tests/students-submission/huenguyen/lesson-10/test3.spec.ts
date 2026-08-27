import test, { expect } from "@playwright/test";
import { ToDoPage } from "./01-pom";

test("TEST 3", async ({ page }) => {
  const toDoPage = new ToDoPage(page);

  await test.step("Open Material Page", async () => {
    await toDoPage.openMaterialPage();
  });

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
    await expect(toDoPage.page.getByText("Todo 21")).toBeHidden();
  });
});
