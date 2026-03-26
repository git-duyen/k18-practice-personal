import { Page, expect } from '@playwright/test';
import { MaterialBasePage } from './material.page';

export class TodoPage extends MaterialBasePage {
    xpathNewTask: string = "//input[@id='new-task']";
    xpathAddTaskBtn: string = "//button[@id='add-task']";

    constructor(page: Page) {
        super(page);
    }

    async addTask(number: number) {
        for (let i = 1; i <= number; i++) {
            await this.page.locator(this.xpathNewTask).fill(`Todo <${i}>`);
            await this.page.locator(this.xpathAddTaskBtn).click();
        }
    }

    async clickDeleteOddTaskBtn(number: number) {
        for (let i = 1; i <= number; i++) {
            if (i % 2 !== 0) {
                await this.page.locator(`//button[@id="todo-${i}--delete"]`).click();
            }
        }
    }

    async checkToDoInViewport(toDoItem: string) {
        const toDoInViewport = this.page.getByText(toDoItem);
        await expect(toDoInViewport).toBeInViewport();
    }

    async checkToDoHidden(toDoItem: string) {
        const toDoInViewport = this.page.getByText(toDoItem);
        await expect(toDoInViewport).toBeHidden();
    }
}
