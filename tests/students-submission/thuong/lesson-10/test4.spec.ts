import test, { expect } from "@playwright/test";
import { PersonalNote } from "./01-pom";

const notes = [
  {
    title: "JavaScript ES6",
    content: "Sử dụng một hoặc nhiều Arrow Functions và Destructuring",
  },
  {
    title: "Python Asyncio",
    content: "Xử lý một hoặc nhiều Coroutines cùng lúc với await",
  },
  {
    title: "Java Spring Boot",
    content: "Cấu hình một hoặc nhiều Bean trong Application Context",
  },
  {
    title: "C# LINQ",
    content: "Truy vấn một hoặc nhiều bản ghi từ List bằng Lambda",
  },
  {
    title: "SQL Query",
    content: "Sử dụng JOIN để kết hợp một hoặc nhiều bảng dữ liệu",
  },
  {
    title: "HTML5 & CSS3",
    content: "Tùy chỉnh Layout với Flexbox để dàn trang responsive",
  },
  {
    title: "React Hooks",
    content: "Quản lý State ứng dụng bằng useState và useEffect",
  },
  {
    title: "Node.js NPM",
    content: "Quản lý các thư viện phụ thuộc trong file package.json",
  },
  {
    title: "Git Version Control",
    content: "Sử dụng lệnh git commit để lưu lại lịch sử code",
  },
  {
    title: "Docker Container",
    content: "Đóng gói ứng dụng vào môi trường ảo hóa cô lập",
  },
];

const keywordSearch = "một hoặc nhiều";

test("TEST 4", async ({ page }) => {
  const personalNote = new PersonalNote(page);

  await test.step("Open Material Page", async () => {
    await personalNote.openMaterialPage();
  });

  await test.step("Go to Personal notes", async () => {
    await personalNote.personalNote.click();
  });

  await test.step("Add Notes", async () => {
    await personalNote.addNotes(notes);
  });

  await test.step("Search Note", async () => {
    await personalNote.searchNote(keywordSearch);
  });

  await test.step("Verify Search Note", async () => {
    const items = page.locator("#notes-list li");
    await expect(items).toContainText([keywordSearch]);
  });
});
