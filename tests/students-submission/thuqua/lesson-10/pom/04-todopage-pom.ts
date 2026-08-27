import { Page, expect } from "@playwright/test";
import { MateriaBasePage } from './01-materiapage-pom'

export class TodoPage extends MateriaBasePage {
    cssNewTask: string;
    cssAddTask: string;
    cssTodoItem: string;
    xpathDeleteItem: string;

    constructor(page: Page) {
        super(page);
        this.cssNewTask = "#new-task";
        this.cssAddTask = "#add-task";
        this.cssTodoItem = "#task-list > li";
        this.xpathDeleteItem = "//button[contains(text(),'Delete')]"
    }

    async addTotoItem() {
        for (let i = 1; i <= 100; i++) {
            await this.page.locator(this.cssNewTask).fill(`Todo ${i}`);
            await this.page.locator(this.cssAddTask).click();
        }
    }

    async deleteOddIndexedItems() {
        for (let i = 99; i >= 1; i -= 2) {
            this.page.once('dialog', async dialog => await dialog.accept());
            await this.page.locator(`(${this.xpathDeleteItem})[${i}]`).click();
        }
    }

    async getTodoItemByNumber(itemNumber: number) {
        return this.page.locator(this.cssTodoItem).filter({
            has: this.page.locator('span', { hasText: new RegExp(`^Todo ${itemNumber}$`) })
        });
    }
    async verifyItemInViewport(itemNumber: number) {
        const item = await this.getTodoItemByNumber(itemNumber);
        await item.scrollIntoViewIfNeeded();
        await expect(item).toBeInViewport();
    }

    async verifyItemNotInDom(itemNumber: number) {
        const item = await this.getTodoItemByNumber(itemNumber);
        await expect(item).toHaveCount(0);
    }
}