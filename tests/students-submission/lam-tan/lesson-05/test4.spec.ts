import { test } from "@playwright/test";

test("Bai 4", async ({ page }) => {
  await test.step("Truy cap trang Playwrightvn", async () => {
    await page.goto(`https://material.playwrightvn.com/`);
  });

  await test.step("Click Bai 4", async () => {
    await page.locator('//a[text()="Bài học 4: Personal notes"]').click();
  });

  await test.step("Them moi 10 notes co noi dung", async () => {
    const notes = [
      {
        title: "click",
        content:
          "Hàm click dùng để thực hiện click vào các phần tử trên trang web",
      },
      {
        title: "fill",
        content:
          "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web",
      },
      {
        title: "type",
        content:
          "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng",
      },
      {
        title: "hover",
        content:
          "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover",
      },

      {
        title: "check",
        content:
          "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
      },

      {
        title: "uncheck",
        content:
          "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
      },

      {
        title: "selectOption",
        content:
          "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select",
      },

      {
        title: "press",
        content:
          "Hàm press dùng để mô phỏng việc nhấn bàn phím như Enter, Tab, Escape hoặc các phím khác",
      },

      {
        title: "dbclick",
        content:
          "Hàm dbclick dùng để thực hiện double click (nhấp đúp chuột) vào các phần tử trên trang web",
      },

      {
        title: "dragAndDrop",
        content:
          "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn thả vào vị trí đích trên trang web",
      },
    ];
    for (let note of notes) {
      await page.locator("//input[@id='note-title']").fill(note.title);
      await page.locator("//textarea[@id='note-content']").fill(note.content);
      await page.locator("//button[@id='add-note']").click();
    }
  });

  await test.step("Search voi keyword 'Mot hoac nhieu'", async () => {
    await page
      .locator('//input[@id="search"]')
      .pressSequentially("một hoặc nhiều", { delay: 100 });
  });
});
