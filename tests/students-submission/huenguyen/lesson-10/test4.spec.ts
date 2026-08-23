import test, { expect } from "@playwright/test";
import { PersonalNote } from "./01-pom";

const notes = [
  {
    title: "AI & Machine Learning",
    content: "Gần một nửa cuộc tấn công mạng tại Việt Nam có yếu tố AI",
  },
  {
    title: "AI & Machine Learning",
    content: "Lập trình viên đua tạo công cụ 'tẩy' nhãn AI",
  },
  {
    title: "Khoa học dữ liệu",
    content: "Ba nhóm dự kiến nhận hỗ trợ 5 triệu đồng khi làm chuyển đổi số",
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
    title: "Nhịp sống số",
    content: "Lừa đảo trực tuyến tại Việt Nam 'có dấu hiệu giảm rõ rệt'",
  },
  {
    title: "React Hooks",
    content: "Quản lý State ứng dụng bằng useState và useEffect",
  },
  {
    title: "Sáng kiến khoa học công nghệ",
    content: "83 hồ sơ vào chung kết Sáng kiến Khoa học 2026",
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
