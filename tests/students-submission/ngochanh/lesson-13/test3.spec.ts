import { expect } from "@playwright/test";
import { test } from "./materialPagefixture";
import { TodoPage } from "./pom";

test.describe("Todo Page Tests", async () => {
    test("Todo page", async ({ materialPage }) => {
        const todoPage = new TodoPage(materialPage.page);

        await test.step("Go to Todo Page", async () => {
            await todoPage.gotoPage("Todo page")
        })

        await test.step("Add tasks", async () => {
           await todoPage.addTask(100);
        })

        await test.step("Delete odd tasks", async () => {
            await todoPage.deleteOddTodo(100);
        })

        await test.step("Check todo 90", async () => {
            await todoPage.page.getByText('Todo 90').scrollIntoViewIfNeeded();
            await expect(todoPage.page.getByText('Todo 90')).toBeInViewport();
        })

        await test.step("Check todo 21", async () => {
            await expect(todoPage.page.getByText('Todo 21')).not.toBeAttached();
        })
    })
})