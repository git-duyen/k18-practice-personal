import { test } from "@playwright/test";
test("test 02", async ({ page }) => {
  await test.step("Click link", async () => {
    await page.goto("https://material.playwrightvn.com");
    await page.locator("//a[text()='Bài học 4: Personal notes']").click();
  });
  await test.step("Add note", async () => {
    const list = [
      {
        title: "click",
        description:
          "Hàm click dùng để thực hiện click vào các phần tử trên trang web",
      },
      {
        title: "fill",
        description:
          "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web",
      },
      {
        title: "type",
        description:
          "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng",
      },
      {
        title: "hover",
        description:
          "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover",
      },
      {
        title: "check",
        description:
          "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
      },
      {
        title: "uncheck",
        description:
          "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
      },
      {
        title: "selectOption",
        description:
          "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
      },
      {
        title: "press",
        description:
          "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác",
      },
      {
        title: "dblclick",
        description:
          "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web",
      },
      {
        title: "dragAndDrop",
        description:
          "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
      },
    ];
    for (let i = 0; i < list.length; i++) {
      await page.locator("//input[@id='note-title']").fill(list[i].title);
      await page
        .locator("//textarea[@id='note-content']")
        .fill(list[i].description);
      await page.locator("//button[@id='add-note']").click();
    }
  });
  await test.step("add search", async () => {
    await page.locator("//input[@id='search']").fill("một hoặc nhiều");
  });
});
