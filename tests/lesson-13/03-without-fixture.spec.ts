import { expect, test } from '@playwright/test';
import { MaterialPage } from './00-pom';

test("Test 1: registration page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");

    await page.getByText("Bài học 1: Register Page (có đủ các element)").click();
    await expect(page.getByText("User Registration")).toBeVisible();
});

test("Test 2: product page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");

    await page.getByText("Bài học 2: Product page").click();
    await expect(page.getByText("Simple E-commerce")).toBeVisible();
});

test.describe("Material page - without POM", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com");
    })

    test("Test 1: registration page", async ({ page }) => {
        await page.getByText("Bài học 1: Register Page (có đủ các element)").click();
        await expect(page.getByText("User Registration")).toBeVisible();
    });

    test("Test 2: product page", async ({ page }) => {
        await page.getByText("Bài học 2: Product page").click();
        await expect(page.getByText("Simple E-commerce")).toBeVisible();
    });
});

test.describe("Material page - with POM", async () => {
    let materialPage: MaterialPage;

    test.beforeEach(async ({ page }) => {
        materialPage = new MaterialPage(page);
        await materialPage.go();
        await expect(materialPage.page.getByText("Tài liệu học automation test")).toBeVisible();
    });

    test("Test 1: registration page", async () => {
        await materialPage.page.getByText("Bài học 1: Register Page (có đủ các element)").click();
        await expect(materialPage.page.getByText("User Registration")).toBeVisible();
    });

    test("Test 2: product page", async () => {
        await materialPage.page.getByText("Bài học 2: Product page").click();
        await expect(materialPage.page.getByText("Simple E-commerce")).toBeVisible();
    });

    test("Test 3: todo page", async () => {
        await materialPage.page.getByText("Bài học 3: Todo page").click();
        await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
    });
});