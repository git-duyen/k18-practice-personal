import {expect, test} from '@playwright/test';
import { AddNewItem, MaterialBasePage } from './01-pom';

test ('Bai 3', async ({page}) => {
   const gotoPage1 = new MaterialBasePage(page);
   const addNewitem = new AddNewItem(page);

   await test.step('Go to page', async()=> {
      await gotoPage1.openMaterialPage();
   });

   await test.step('Click vào bài học 3', async() => {
      await gotoPage1.gotoPage("Bài học 3: Todo page");
   });

   await test.step('Thêm mới 100 item có nội dung Todo i', async() => {
      for (let i =1; i<= 100; i++){
         await addNewitem.addItem(`Todo ${i}`);
      }
   });

   await test.step('Xoá các Todo có số lẻ', async() => { 
      page.on('dialog', async dialog => dialog.accept());
         await addNewitem.deteleItem();
   });

  //Kiểm tra todo 90 nằm trong viewpoin
   await expect(page.locator("//span[text()='Todo 90']")).toBeVisible();

  //Kiểm tra todo 21 bị ẩn
   await expect(page.locator("//span[text()='Todo 21']")).not.toBeVisible();

});