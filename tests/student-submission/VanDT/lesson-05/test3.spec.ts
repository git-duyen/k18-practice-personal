import { test} from '@playwright/test';

test('bai3', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com');
  await page.locator("//a[text()='Bài học 3: Todo page']").click();

  // a. thêm mới 100 todo item có nội dung Todo<i>
  for(let i=1; i<=100; i++){
    await page.locator("//input[@id ='new-task']").fill(`Todo ${i}`);
    await page.locator("//button[@id ='add-task']").click();
  };
  // b. Xóa các todo có số lẻ
  page.on('dialog', async dialog => dialog.accept());
  for (let n=0;n<=100;n++){
    if(n%2!=0){ 
        await page.locator(`//button[@id='todo-${n}-delete']`).click();
    };
  };
});