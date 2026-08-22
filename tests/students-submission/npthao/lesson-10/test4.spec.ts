import { test, expect } from '@playwright/test';
import { MaterialBasePage, RegisterPage, NotesPage } from './01-pom';

test('Test 4', async ({ page }) => {
    const materialBasePage = new MaterialBasePage(page);
    const notesPage = new NotesPage(page);

    const notes = [
        { title: "Ra mắt mục Khoa học công nghệ trên VnExpress", content: "VnExpress hợp nhất hai mục Khoa học và Công nghệ thành một chuyên mục mới. Mục này gồm nhiều tiểu mục như Đổi mới sáng tạo, AI, Vũ trụ và Thế giới tự nhiên. Mục tiêu là mang đến thông tin toàn diện và chuyên sâu hơn cho độc giả." },
        { title: "Robot MIT hỗ trợ cứu hộ sau thảm họa", content: "Viện Công nghệ Massachusetts phát triển robot có khả năng lập bản đồ bên trong đống đổ nát. Thiết bị được kỳ vọng giúp lực lượng cứu hộ tăng cơ hội tìm thấy người gặp nạn sau động đất. Đây là một trong nhiều ứng dụng công nghệ mới cho công tác cứu trợ." },
        { title: "Đàn sứa khiến nhà máy điện hạt nhân Pháp ngừng hoạt động", content: "Một đàn sứa làm tắc nghẽn hệ thống bơm làm mát tại nhà máy điện hạt nhân Gravelines ở Pháp. Sự cố khiến ba lò phản ứng phải tạm dừng hoạt động. Đây là ví dụ cho thấy yếu tố tự nhiên có thể ảnh hưởng hạ tầng công nghệ cao." },
        { title: "iPhone màn hình gập lộ tên gọi nội bộ", content: "Mẫu smartphone màn hình gập đầu tiên của Apple được nhân viên gọi là iPhone Ultra. Đây được cho là tên gọi tạm thời trong quá trình phát triển. Tên thương mại chính thức khi ra mắt có thể sẽ khác." },
        { title: "SpaceX tuyển kỹ sư Starlink tại Hà Nội", content: "SpaceX đang tuyển kỹ sư phụ trách thiết bị đầu cuối Starlink làm việc tại Hà Nội. Vị trí này có thể phối hợp với các nhà cung cấp trong nước. Động thái cho thấy công ty đang mở rộng hiện diện tại Việt Nam." },
        { title: "Mạng 6G hứa hẹn tốc độ vượt trội", content: "Theo lãnh đạo Viettel, mạng 6G có thể truyền dữ liệu nhanh hơn nhiều so với các thế hệ trước. Công nghệ này phục vụ tốt hơn cho các ứng dụng đòi hỏi kết nối lớn. Việc triển khai sẽ cần nhiều trạm phát sóng hơn hiện tại." },
        { title: "Bộ Khoa học và Công nghệ tái cấu trúc chương trình quốc gia", content: "Bộ Khoa học và Công nghệ đang xây dựng đề án tái cấu trúc các chương trình khoa học công nghệ giai đoạn 2026-2035. Mục tiêu là tập trung nguồn lực và làm chủ công nghệ lõi. Đây được xem là bước đi quan trọng cho chiến lược phát triển dài hạn." },
        { title: "Phát hiện dấu hiệu khí quyển trên hành tinh giống Trái Đất", content: "Các nhà khoa học tìm thấy bằng chứng về khí quyển trên một hành tinh đá cách Trái Đất khoảng 48 năm ánh sáng. Hành tinh nằm trong vùng có thể tồn tại sự sống của hệ sao chủ. Phát hiện góp phần vào công cuộc tìm kiếm thế giới có thể sinh sống được." },
        { title: "Bút dạ của Neil Armstrong được đấu giá hơn 850.000 USD", content: "Chiếc bút dạ từng giúp Neil Armstrong và Buzz Aldrin rời khỏi Mặt Trăng đã được bán đấu giá tại New York. Món đồ từ nhiệm vụ Apollo 11 thu hút sự quan tâm lớn từ giới sưu tầm. Giá bán phản ánh giá trị lịch sử đặc biệt của hiện vật." },
        { title: "Starship V3 dừng phóng thử nghiệm vào phút chót", content: "Tên lửa khổng lồ Starship V3 của SpaceX không thể cất cánh sau khi máy tính kích hoạt lệnh dừng lúc đồng hồ đếm ngược về 0. Đây là một phần trong quá trình thử nghiệm liên tục của chương trình tên lửa tái sử dụng. Sự cố tương tự khá phổ biến trong các đợt phóng thử." },
    ];

    await test.step("Step 1: Go to Homepage", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Step 2: Click page Personal Notes", async () => {
        await materialBasePage.personalNote.click();
    });

    await test.step("Step 3: Add 10 notes", async () => {
        for (const note of notes) {
            await notesPage.addNote(note.title, note.content);
        }
    });

    await test.step("Step 4: Search by keyword", async () => {
        await notesPage.search("SpaceX");
        await notesPage.verifyAllVisibleNotesContain("SpaceX");
    });
});