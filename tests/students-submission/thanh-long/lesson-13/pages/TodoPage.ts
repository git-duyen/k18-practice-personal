import { expect, Page } from "@playwright/test";
import { MaterialPage } from "../fixture.ts";

export class TodoPage extends MaterialPage {
    constructor(page: Page) {
        super(page);
    }

    readonly inputTask = this.page.getByPlaceholder('Enter a new task');
    readonly addTaskButton = this.page.getByRole('button', { name: 'Add Task' });
    readonly deleteTaskButton = this.page.getByRole('button', { name: 'Delete' });
    
    readonly taskItem = this.page.locator('//ul[@id="task-list"]/li/span[normalize-space()="Task 90"]');
    

    async add100Task(task: string) {
        for (let i = 1; i <= 100; i++) {
            await this.inputTask.fill(`Task ${i}`);
            await this.addTaskButton.click();
        }
    }


    async acceptDialog() {
        this.page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
    }

    async deleteOddTask() {
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                const task = this.page.getByText(`Task ${i}`, { exact: true });
    
                await task.locator('..').getByRole('button', { name: 'Delete' }).click();
    
    
            }
        }
    }

    async verifyTask90InViewport() {
        await expect(this.page.getByText('Task 90', { exact: true })).toBeInViewport();
    }

    async verifyTask21NotInViewport() {
        await expect(this.page.getByText('Task 21', { exact: true })).not.toBeInViewport();
    }

}