import { expect, test } from "@playwright/test";
import { ProductApiPage } from "./02-product.api.page";

test("Get Products", async ({ request }) => {
  const productApiPage = new ProductApiPage(request);

  const responseJson = await productApiPage.getProducts();
  expect(responseJson.data.products.length).toEqual(10);
});
