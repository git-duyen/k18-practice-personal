import { test } from "./materialPage-fixture";
import { PersonalNotePage } from "./01-pom";

test("Personal Notes Search", async ({ materialPage }) => {
    const personalNotePage = new PersonalNotePage(materialPage);
    const notes = [
        { title: 'Phát hiện hành tinh mới', content: 'Các nhà thiên văn phát hiện một hành tinh mới ngoài hệ Mặt Trời. Hành tinh có kích thước lớn hơn Trái Đất. Nghiên cứu tiếp tục được thực hiện.' },
        { title: 'Công nghệ pin mới', content: 'Các nhà khoa học phát triển công nghệ pin mới có khả năng lưu trữ năng lượng cao hơn. Pin này có thể sạc nhanh và bền hơn. Dự kiến sẽ được ứng dụng trong xe điện.' },
        { title: 'AI trong y tế', content: 'AI được sử dụng để chẩn đoán bệnh nhanh chóng và chính xác hơn. Hệ thống AI có thể phân tích hình ảnh y tế và dữ liệu bệnh nhân. Điều này giúp cải thiện chất lượng chăm sóc sức khỏe.' },
    ];

    await personalNotePage.gotoPersonalNotePage();

    await test.step("Add multiple notes", async () => {
        await personalNotePage.addMultipleNotes(notes);

    });

    await test.step("Search by keyword", async () => {
        const keyword = "AI";

        await personalNotePage.search(keyword);

        await personalNotePage.verifyAllSearchResultsContain(keyword);
    });
});