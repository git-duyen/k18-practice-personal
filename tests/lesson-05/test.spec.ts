import { test } from '@playwright/test';

test('Create 10 Notes and Search', async ({ page }) => {

    await test.step('Navigate Page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Refer Page: Personal notes', async () => {
        await page.locator('//a[text() = "Bài học 4: Personal notes"]').click();
    });

    const notes = [
        {
            title: 'Trung Quốc triển khai robot mới nhiều gấp 10 lần Mỹ',
            content: 'Trung Quốc đứng đầu thế giới về tự động hóa sản xuất với số robot công nghiệp triển khai trong nhà máy năm 2024 chiếm 54% toàn cầu.'
        },
        {
            title: 'Robot in 3D xây nhà trong một ngày',
            content: 'Robot hình nhện Charlotte có thể in 3D ngôi nhà rộng 200 m2 trong vòng 24 giờ nhờ hệ thống nén và ép đùn.'
        },
        {
            title: 'Thế hệ nhà sáng lập "không rượu, không ngủ, không giải trí"',
            content: 'Để đạt ước mơ tạo ra công ty nghìn tỷ USD, những người trẻ đến Thung lũng Silicon theo đuổi cuộc sống tối giản, vùi đầu vào công việc.'
        },
        {
            title: 'Doanh nghiệp Hàn Quốc đưa giải pháp đào tạo thực tế ảo vào Việt Nam',
            content: 'Big Pictures gia nhập thị trường giáo dục nghề nghiệp tại Việt Nam, giới thiệu giải pháp đào tạo nghề vận hành thiết bị xây dựng bằng VR.'
        },
        {
            title: '"Nữ hoàng Bitcoin" nhận tội lừa đảo 61.000 Bitcoin',
            content: 'Zhimin Qian, từng được gọi là "nữ hoàng Bitcoin" ở Trung Quốc, nhận tội lừa đảo trong phi vụ liên quan đến Bitcoin giá trị lớn nhất thế giới.'
        },
        {
            title: 'Trải nghiệm AirPods Pro 3: Chống ồn gần như không đối thủ',
            content: 'AirPods Pro 3 có khả năng chống ồn chủ động tốt hơn đáng kể, thiết kế mới đeo chắc chắn hơn, có cảm biến nhịp tim và đo được calo tiêu thụ.'
        },
        {
            title: 'Samsung xác nhận "sản xuất màn hình gập cho một công ty Mỹ"',
            content: 'Ông Lee Cheong, Chủ tịch Samsung Display, cho biết công ty chuẩn bị sản xuất màn hình smartphone gập cho một công ty Mỹ, nhiều khả năng là Apple.'
        },
        {
            title: 'DeepSeek ra mô hình AI "giảm nửa chi phí khi suy luận"',
            content: 'DeepSeek công bố mô hình V3.2-exp và cho biết đã thiết kế với khả năng giảm đáng kể chi phí suy luận khi sử dụng trong các phép toán ngữ cảnh dài.'
        },
        {
            title: 'Tham vọng đánh bại OpenAI bằng 5 AI nội địa của Hàn Quốc',
            content: 'Hàn Quốc đang phát triển mô hình ngôn ngữ lớn (LLM) phù hợp văn hóa riêng với 5 đại diện trong nước, sẵn sàng cạnh tranh với OpenAI, Google.'
        },
        {
            title: 'Robot hình người giao lưu tại AI4VN 2025',
            content: 'Hà NộiHơn 1.000 khách tham dự Ngày hội trí tuệ nhân tạo Việt Nam 2025 (AI4VN) diễn ra hôm 29/9 ấn tượng với robot VR-H3 bước đi vững vàng, tự giới thiệu về bản thân.'
        }
    ];

    await test.step('Enter 10 notes', async () => {
        
        for (const note of notes) {
            await page.locator('//input[@id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        };
    });

    await test.step('Search notes', async () => {
        const searchTitle = notes[9].title;
        await page.locator('//input[@id="search"]').fill(searchTitle);
    });


});