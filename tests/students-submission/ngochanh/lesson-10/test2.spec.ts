import { expect, test} from "@playwright/test";
import { ProductPage } from "./pom";

test.describe("Product Page Tests", async () => {
    test("Product page", async ({ page }) => {
        const productPage = new ProductPage(page);

        await test.step("Open Material Page", async () => {
            await productPage.openMaterialPage();
        });

        await test.step("Go to Product Page", async () => {
            await productPage.gotoPage("Product page")
        })

        await test.step("Add product 1", async () => {
            await productPage.addProduct(1);
            await productPage.addProduct(1);
        })

        await test.step("Add product 2", async () => {
            await productPage.addProduct(2);
            await productPage.addProduct(2);
            await productPage.addProduct(2);
        })

        await test.step("Add product 3", async () => {
            await productPage.addProduct(3);
        })

        await test.step("Check product quantity", async() => {
            await expect(productPage.page.locator("//td[text()='Product 1']//following-sibling::td[text()='2']")).toBeVisible();
            
            await expect(productPage.page.locator("//td[text()='Product 2']//following-sibling::td[text()='3']")).toBeVisible();
            
            await expect(productPage.page.locator("//td[text()='Product 3']//following-sibling::td[text()='1']")).toBeVisible();
        })

        await test.step("Check total", async() => {
            await expect(productPage.page.locator("//td[text()='Total Price:']//following-sibling::td[text()='$110.00']")).toBeVisible();
        })
    })
})
