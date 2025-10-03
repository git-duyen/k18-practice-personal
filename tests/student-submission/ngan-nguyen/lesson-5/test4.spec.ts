import { test } from "@playwright/test";

test('Add personal notes', async ({ page }) => {
    const noteList = [
        { title: "Ukraine để lọt toàn bộ tên lửa Iskander-M trong đòn tập kích của Nga", content: "Ukraine tuyên bố đánh chặn thành công 320 UAV và tên lửa các loại trong cuộc tập kích ban đêm của Nga, nhưng không hạ các quả đạn Iskander-M." },
        { title: "iPhone 17 Pro Max vẫn 'đội' giá 8 triệu đồng", content: "Sau hai tuần mở bán, giá iPhone 17 Pro Max vẫn cao so với mức niêm yết, trong đó bản màu bạc 256 GB được bán giá 46 triệu, chênh 8 triệu đồng." },
        { title: "Ấn Độ xây siêu đập cạnh tranh với Trung Quốc", content: "Nhà chức trách Ấn Độ đang xúc tiến dự án xây dựng đập lớn nhất cả nước với hồ chứa dung tích 9,2 tỷ m3 và công suất 11.200-11.600 MW." },
        { title: "Sinh viên Việt có thể dùng Gemini Pro miễn phí một năm", content: "Google cho biết sẽ tặng một năm sử dụng Gemini Pro cho sinh viên đại học trên toàn quốc, nhằm hỗ trợ Việt Nam nâng cao chất lượng nguồn nhân lực" },
        { title: "Chứng khoán kết tuần trong sắc đỏ", content: "Hơn 61% mã đi lùi, nhiều cổ phiếu ngân hàng và chứng khoán bị nhuộm đỏ khiến VN-Index chốt phiên cuối tuần giảm gần 7 điểm." },
        { title: "Nhà đầu tư Tesla phản đối gói thù lao 1.000 tỷ USD cho Elon Musk", content: "Một nhóm quan chức và cổ đông Tesla thúc giục nhà đầu tư bỏ phiếu phản đối gói thù lao kỷ lục dành cho CEO Elon Musk trong cuộc họp tháng 11." },
        { title: "Ông Trump cắt gần 8 tỷ USD tài trợ các dự án năng lượng sạch", content: "Chính quyền Trump hủy 7,6 tỷ USD tài trợ cho hàng trăm dự án năng lượng sạch tại 16 bang từng ủng hộ ứng viên Kamala Harris." },
        { title: "Tăng trưởng tín dụng 9 tháng đạt gần 13,4%", content: "Ông Phạm Chí Quang, Vụ trưởng Vụ Chính sách tiền tệ, cho biết tín dụng tăng trưởng gần 13,37% sau 9 tháng, và dự báo có thể đạt 19-20% năm nay." },
        { title: "Công ty của Warren Buffett sắp có thương vụ lớn nhất 3 năm", content: "Việc mua hãng hóa chất OxyChem với 9,7 tỷ USD sẽ là thương vụ M&A lớn nhất với Berkshire Hathaway kể từ năm 2022." },
        { title: "Thủ tướng quyên góp ủng hộ người dân vùng bão Bualoi", content: "Thủ tướng Phạm Minh Chính cùng các Phó thủ tướng và tập thể Văn phòng Chính phủ quyên góp 500 triệu đồng ủng hộ người dân bị ảnh hưởng bởi bão Bualoi." },
    ]
    await test.step('Navigate to website', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Navigate to Personal notes', async () => {
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    })

    await test.step('Add 10 notes', async () => {
        for (const note of noteList) {
            await page.locator(`//input[@id='note-title']`).fill(note.title);
            await page.locator(`//textarea[@id='note-content']`).fill(note.content);
            await page.locator(`//button[@id='add-note']`).click();
        }
    })

    await test.step('Search notes', async () => {
        await page.locator(`//input[@id='search']`).fill('iPhone');
    })
});