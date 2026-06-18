import { expect } from "@playwright/test";
import { ProductPage } from "./01-pom";
import { test } from "./materialPage-fixture";

test("TEST 2", async ({ materialPage }) => {
  const productPage = new ProductPage(materialPage.page);

  await test.step("Go to Product Page", async () => {
    await productPage.gotoPage("Product page");
  });

  await test.step("Add product 1", async () => {
    await productPage.addProduct("1", 2);
  });

  await test.step("Add product 2", async () => {
    await productPage.addProduct("2", 3);
  });

  await test.step("Add product 3", async () => {
    await productPage.addProduct("3", 1);
  });

  await test.step("Verify product quantity", async () => {
    const productName = [
      { name: "Product 1", quantity: 2 },
      { name: "Product 2", quantity: 3 },
      { name: "Product 3", quantity: 1 },
    ];

    for (const prod of productName) {
      await expect(
        productPage.page.locator(
          `//td[normalize-space(text())='${prod.name}']//following-sibling::td[normalize-space(text())='${prod.quantity}']`,
        ),
      ).toBeVisible();
    }
  });

  await test.step("Verify Total Price", async () => {
    await expect(
      productPage.page.locator(
        "//td[normalize-space(text())='Total Price:']//following-sibling::td[normalize-space(text())='$110.00']",
      ),
    ).toBeVisible();
  });
});
