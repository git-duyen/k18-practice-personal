import { expect, test } from '@playwright/test';
import { count } from 'console';

test('Add 10 personal notes and search by title', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Personal notes page', async () => {
        await page.locator("//a[text()= 'Bài học 4: Personal notes']").click();
    });

    const notes = [
        { title: 'Ngày hội Đổi mới sáng tạo khuyến khích tinh thần sáng tạo toàn dân', content: 'Lễ phát động Ngày hội Đổi mới sáng tạo Quốc gia 2025 khẳng định tinh thần sáng tạo không chỉ là việc của nhà khoa học hay doanh nhân công nghệ mà thuộc về tất cả mọi người.' },
        { title: 'Tổng Bí thư: "Không gì có thể ngăn cản Việt Nam vươn mình"', content: 'Tổng Bí thư Tô Lâm khẳng định "không gì có thể ngăn cản Việt Nam vươn mình" phát triển giàu mạnh và thịnh vượng, tại Lễ hưởng ứng Ngày hội Đổi mới sáng tạo quốc gia 2025.' },
        { title: 'Hà Nội tiếp tục dẫn đầu cả nước về đổi mới sáng tạo', content: 'Bộ Khoa học và Công nghệ công bố kết quả Chỉ số đổi mới sáng tạo cấp địa phương (PII) năm 2025, với Hà Nội là địa phương dẫn đầu với tổng điểm số 65,68.' },
        { title: 'Trung Quốc triển khai robot mới nhiều gấp 10 lần Mỹ', content: 'Theo báo cáo Robot Thế giới 2025 của Liên đoàn Robot quốc tế (IFR), năm ngoái, hơn nửa triệu robot được đưa vào sử dụng tại các nhà máy trên toàn cầu, trong đó riêng Trung Quốc chiếm 295.000 robot. Đây là mức cao nhất từng ghi nhận trong một năm và nhiều hơn các nước còn lại cộng vào. Nhật Bản xếp thứ hai khi lắp đặt 44.500 robot, Mỹ thứ ba với 34.200 robot, tiếp theo là Hàn Quốc, 30.600 robot, và Đức với 27.000 robot.' },
        { title: 'Doanh nghiệp Hàn Quốc đưa giải pháp đào tạo thực tế ảo vào Việt Nam', content: 'Big Pictures gia nhập thị trường giáo dục nghề nghiệp tại Việt Nam, giới thiệu giải pháp đào tạo nghề vận hành thiết bị xây dựng bằng VR.' },
        { title: 'Nền tảng OBranding kết nối doanh nghiệp Việt với thế giới', content: 'Nền tảng thương mại điện tử số OBranding ra mắt tính năng B2B, đánh dấu bước tiến kết nối giao thương cho doanh nghiệp Việt, hôm 28/9. ' },
        { title: 'Hạ tầng AI là trụ cột sống còn cho tương lai số', content: 'Cuộc đua toàn cầu về AI thực chất là cuộc đua hạ tầng, việc đầu tư vào hạ tầng AI trở thành điều kiện tiên quyết, theo ông Nguyễn Hoàng Hưng, Giám đốc Công nghệ Viettel AI.' },
        { title: 'Cách Google AI thay đổi công việc giới văn phòng', content: 'Người dùng văn phòng có thể sử dụng AI trong các ứng dụng làm việc hàng ngày, thay vì học cách sử dụng các phầm mềm hoàn toàn mới.' },
        { title: 'Hàn Quốc chạy đua khôi phục 647 dịch vụ công trực tuyến', content: 'Hàn Quốc đã khôi phục được 62 trong số 647 dịch vụ công bị gián đoạn do vụ cháy trung tâm dữ liệu ở Daejeon. ' },
        { title: 'Ra mắt phân khu đầu tiên tại Vinhomes Green Paradise Cần Giờ', content: 'Phân khu quy mô lớn, nhiều tiện ích nhất, đa dạng loại hình sản phẩm nhà phố, shophouse, villa.' },
        { title: 'Nên đưa AI vào tiểu học nhưng cần lộ trình thận trọng', content: 'Ông Hồ Đức Thắng, Viện trưởng Công nghệ số và Chuyển đổi số Quốc gia, cho rằng nên đưa AI vào trường tiểu học nhưng cần lộ trình thận trọng, an toàn.' },
        { title: 'Hành trình tiến tới 6G của Việt Nam', content: 'Ứng dụng công nghệ, sở hữu các nền tảng AI "Make in Vietnam" giúp tập đoàn FPT đạt danh hiệu doanh nghiệp, giải pháp và cá nhân AI xuất sắc.' },

    ]
    await test.step('Add 10 notes from VnExpress Khoa học', async () => {
        for (let i = 0; i < notes.length; i++) {
            await page.locator("//input[@id='note-title']").fill(notes[i].title);
            await page.locator("//textarea[@id='note-content']").fill(notes[i].content);
            await page.locator("//button[@id='add-note']").click();
        }
    });

    await test.step('Search note by random title', async () => {
        await page.locator("//input[@id='search']").fill(notes[5].title)
        await expect(page.locator("//ul[@id='notes-list']")).toContainText(notes[5].title);

    });

});
