import {expect, test} from '@playwright/test';
import { AddProduct, MaterialBasePage } from './01-pom';
import { RegisterPage } from './01-pom';

test ('Bai 2', async ({page}) => {
   const gotoPage1 = new MaterialBasePage(page);
   const addProduct = new AddProduct(page);

   await test.step('Go to page', async()=> {
      await gotoPage1.openMaterialPage();
   });

   await test.step('Click vào bài học 2', async() => {
      await gotoPage1.gotoPage("Bài học 2: Product page");
   });

   await test.step('Thêm sản phẩm 1: 2 sản phẩm', async() => {
      await addProduct.addToCart1();
      await addProduct.addToCart1();
   });

   await test.step('Thêm sản phẩm 2: 3 sản phẩm', async() => {
      await addProduct.addToCart2();
      await addProduct.addToCart2();
      await addProduct.addToCart2();
   });

   await test.step('Thêm sản phẩm 3: 1 sản phẩm', async() => {
      await addProduct.addToCart3();
   });

   //Kiểm tra số lượng sản phẩm tại giỏ hàng như đã thêm

   await expect(page.locator("//td[text()='Product 1']")).toBeVisible();
   await expect(page.locator("//td[text()='Product 1']/following-sibling::td[2]")).toHaveText("2");
   await expect(page.locator("//td[text()='Product 1']/following-sibling::td[3]")).toHaveText("$20.00");

   await expect(page.locator("//td[text()='Product 2']")).toBeVisible();
   await expect(page.locator("//td[text()='Product 2']/following-sibling::td[2]")).toHaveText("3");
   await expect(page.locator("//td[text()='Product 2']/following-sibling::td[3]")).toHaveText("$60.00");
   
   await expect(page.locator("//td[text()='Product 3']")).toBeVisible();
   await expect(page.locator("//td[text()='Product 3']/following-sibling::td[2]")).toHaveText("1");
   await expect(page.locator("//td[text()='Product 3']/following-sibling::td[3]")).toHaveText("$30.00");

   //Kiểm tra tổng tiền tại giỏ hàng đúng

   await expect(page.locator("//td[@class='total-price']")).toHaveText("$110.00");

});