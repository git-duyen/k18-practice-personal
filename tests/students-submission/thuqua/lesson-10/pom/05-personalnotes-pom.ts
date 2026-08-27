import { expect, Page } from "@playwright/test";
import { MateriaBasePage } from './01-materiapage-pom'

export class PersonalNotes extends MateriaBasePage {
    cssTitleInput: string;
    cssContentInput: string
    cssAddnoteButton: string;
    cssSearch: string;
    xpathNoteItem: string;
    cssNoteTitle: string;
    cssNoteContent: string;

    constructor(page: Page) {
        super(page);
        this.cssTitleInput = "#note-title";
        this.cssContentInput = "#note-content";
        this.cssAddnoteButton = "#add-note";
        this.cssSearch = "#search"
        this.xpathNoteItem = "//ul[@id='notes-list']/li";
        this.cssNoteTitle = "strong";
        this.cssNoteContent = "p"
    }
    async addNewNote() {
        const notes = [
            { title: "ChatGPT có phiên bản dành cho thiếu niên", content: 'OpenAI công bố phiên bản "ChatGPT for Teens", bổ sung cơ chế an toàn và tính năng kiểm soát cho phụ huynh, nhằm bảo vệ người dùng nhỏ tuổi trước rủi ro AI. ' },
            { title: "Bản nâng cấp macOS Tahoe làm lộ AirPods trang bị camera", content: 'Video về bản cập nhật macOS Tahoe cho thấy tai nghe AirPods gắn camera của Apple đã sẵn sàng ra mắt.' },
            { title: "Đề xuất phân quyền ban hành chính sách nhập khẩu công nghệ", content: 'Dự thảo luật giao Bộ Khoa học và Công nghệ ban hành theo thẩm quyền hoặc trình cấp có thẩm quyền các chính sách về nhập khẩu, chuyển giao và đổi mới công nghệ.' },
            { title: "Anthropic Claude bị phản ứng vì gắn nhãn AI vào kết quả", content: 'Một số người dùng hủy gói đăng ký Claude sau khi Anthropic áp dụng chính sách gắn nhãn bản quyền lên văn bản do công cụ này tạo ra.' },
            { title: "5 cỗ máy lớn nhất thế giới", content: 'Những cỗ khổng lồ vượt qua mọi giới hạn về kích thước, sức mạnh và độ chính xác đã trở thành biểu tượng cho thành tựu kỹ thuật của nhân loại.' },
            { title: "Còn ba ngày đóng cổng nhận hồ sơ AI Awards 2026", content: 'Cuộc thi AI Awards 2026 sẽ nhận hồ sơ đề cử đến hết ngày 21/8 để bước vào vòng sơ loại, nhằm tìm kiếm sản phẩm, doanh nghiệp và tài năng AI' },
            { title: "Việt Nam thúc đẩy chuyển giao, ứng dụng công nghệ lượng tử", content: 'Theo Trung tâm Đổi mới sáng tạo quốc gia (NIC), Việt Nam sẽ phát triển công nghệ lượng tử thông qua các dự án nghiên cứu, chuyển giao và ứng dụng thực tế.' },
            { title: "Khoa học, công nghệ phải trở thành nguồn tạo ra năng suất mới", content: 'Theo Phó thủ tướng Hồ Quốc Dũng, việc tăng năng suất cần chuyển từ làm theo phong trào sang chuyển đổi sâu, thực chất, trong đó khoa học công nghệ là động lực.' },
            { title: "AI Mỹ xoay xở cạnh tranh giá với Trung Quốc", content: 'Nhiều công ty AI hàng đầu tại Mỹ như OpenAI, Anthropic ra mô hình rẻ hơn khi khách hàng doanh nghiệp có xu hướng chuộng sản phẩm Trung Quốc giá thấp.' },
            { title: "Ứng dụng Tammi nằm trong top tải nhiều tại Việt Nam", content: 'Ứng dụng Tammi tích hợp nhiều dịch vụ như viễn thông, thanh toán, gọi điện, nhắn tin và họp trực tuyến miễn phí, đạt hơn 5 triệu người dùng và đứng đầu về lượt tải.' },
        ]
        for (const note of notes) {
            await this.page.locator(this.cssTitleInput).fill(note.title); // fill title
            await this.page.locator(this.cssContentInput).fill(note.content); // fill content
            await this.page.locator(this.cssAddnoteButton).click(); // Click Add Note button
        }
    }

    async searchKeyword(data: string) {
        await this.page.locator(this.cssSearch).fill(data);
    }

    async verifyAllResultsContainKeyword(keyword: string) {
        const notes = this.page.locator(this.xpathNoteItem);
        const count = await notes.count();

        expect(count, 'Expected at least 1 search result but found none').toBeGreaterThan(0);

        const lowerKeyword = keyword.toLocaleLowerCase();

        for (let i = 0; i < count; i++) {
            const note = notes.nth(i);
            const title = await note.locator(this.cssNoteTitle).innerText();
            const content = await note.locator(this.cssNoteContent).innerText();

            const matched = title.toLocaleLowerCase().includes(lowerKeyword)
                || content.toLocaleLowerCase().includes(lowerKeyword);

            expect(matched, `Note "${title}" does not contain keyword "${keyword}" in title or content`).toBe(true);
        }
    }

}