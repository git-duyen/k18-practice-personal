import { test } from '@playwright/test';

test('Personal Notes with predefined news', async ({ page }) => {
  // Fake data: 10 news items
  const notes = [
    { title: 'Nhà linh trưởng học nổi tiếng thế giới qua đời ở tuổi 91', content: 'Nhà linh trưởng học người Anh Jane Goodall với 60 năm kinh nghiệm nghiên cứu tinh tinh qua đời ở tuổi 91.'},
    { title: 'Apple, OpenAI yêu cầu tòa bác đơn kiện của Musk', content: 'Apple và OpenAI đã gửi đơn yêu cầu bác bỏ hoàn toàn vụ kiện vô căn cứ của Elon Musk về việc hợp tác giữa hai công ty. '},
    { title: 'ADN có thể tồn tại bao lâu?', content: 'ADN cổ nhất thế giới đến từ một hệ sinh thái 2,4 triệu năm tuổi ở Greenland và các nhà khoa học vẫn đang tìm hiểu thời gian DNA có thể tồn tại là bao lâu. '},
    { title: 'Hôm nay đóng cổng bình chọn tai nghe True Wireless', content: 'Số bình chọn thứ năm của Sản phẩm tôi yêu 2025 có chủ đề tai nghe True Wireless được yêu thích nhất sẽ đóng vào cuối ngày 2/10. '},
    { title: 'Công nghệ thúc đẩy doanh nghiệp bán lẻ', content: 'Ông Lê Vũ Minh, Giám đốc FPT Digital, đánh giá doanh nghiệp bán lẻ đang đầu tư công nghệ song rời rạc, riêng lẻ khiến giảm hiệu quả kinh doanh. '},
    { title: 'Vinhomes ra mắt đô thị "tựa rừng, lấn biển" đẳng cấp tại TP HCM', content: 'Cạnh khu dự trữ sinh quyển hơn 75.000 ha, diện tích lấn biển 1.357 ha, kết nối trực tiếp metro.'},
    { title: 'Chính sách là yếu tố then chốt thúc đẩy đổi mới sáng tạo', content: 'Theo các chuyên gia, chính sách là yếu tố then chốt thúc đẩy đổi mới sáng tạo, từ xây dựng hệ sinh thái khởi nghiệp đến thương mại hóa kết quả nghiên cứu '},
    { title: 'Những sản phẩm công nghệ nổi bật tại Triển lãm đổi mới sáng tạo', content: 'Triển lãm Quốc tế Đổi mới sáng tạo Việt Nam 2025 trình diễn nhiều sản phẩm công nghệ độc đáo như robot, sản phẩm AI, chip bán dẫn do Việt Nam phát triển. '},
    { title: 'Ngày hội Đổi mới sáng tạo khuyến khích tinh thần sáng tạo toàn dân', content: 'Lễ phát động Ngày hội Đổi mới sáng tạo Quốc gia 2025 khẳng định tinh thần sáng tạo không chỉ là việc của nhà khoa học hay doanh nhân công nghệ mà thuộc về tất cả mọi người. '},
    { title: 'Hà Nội tiếp tục dẫn đầu cả nước về đổi mới sáng tạo', content: 'Bộ Khoa học và Công nghệ công bố kết quả Chỉ số đổi mới sáng tạo cấp địa phương (PII) năm 2025, với Hà Nội là địa phương dẫn đầu với tổng điểm số 65,68. '},
  ];
  
  await test.step('Step 1: Navigate', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();
  });
  
  await test.step('Step 2: Add 10 notes', async () => {
    for (const note of notes) {
      await page.locator("//input[@id='note-title']").fill(note.title);
      await page.locator("//textarea[@id='note-content']").fill(note.content);
      await page.locator("//button[@id='add-note']").click();
    };
  });

  // cách 1
  //await test.step('Step 3: Search note no4', async () => {
  //  const searchTitle = notes[3].title; 
  //  await page.locator("//input[@id='search']").fill(searchTitle);
  //});

  // cách 2
  await test.step('Step 3: Search note no4', async () => {
    await page.locator("//input[@id='search']").fill('AND');
  });
});
