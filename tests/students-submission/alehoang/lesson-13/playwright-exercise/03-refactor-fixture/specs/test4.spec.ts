import { test } from "../fixture/material-page.fixture";
import { PersonalNotesPage } from '../pom/personal-note.page';

test('Personal notes', async ({ materialPage }) => {
    const personalNotes = [
        { title: "CT Group phát triển UAV bầy đàn chữa cháy", content: "Công ty CT UAV, thành viên của tập đoàn CT Group, phát triển hệ thống UAV bầy đàn hỗ trợ chữa cháy trong ngõ nhỏ, hẻm sâu, nơi xe cứu hỏa khó tiếp cận." },
        { title: "Khánh thành Trung tâm Vũ trụ Việt Nam", content: "Hà NộiTrung tâm Vũ trụ Việt Nam được khánh thành tại Khu công nghệ cao Hòa Lạc, sở hữu hệ thống mặt đất với anten đường kính 9,3 m, trung tâm R&D vệ tinh." },
        { title: "Google Maps đại tu, thêm tính năng hỏi đáp", content: "Google nâng cấp ứng dụng bản đồ, cho phép tài xế đặt câu hỏi về địa điểm, đồng thời giúp việc tìm đường trở nên trực quan hơn." },
        { title: "Lập trình viên Việt giữa dòng xoáy tác nhân AI", content: "Từng có thu nhập 20-35 triệu đồng mỗi tháng nhờ code dạo, Minh Tuấn hiện gần như không thể kiếm được hợp đồng mới trong cơn sốt AI lập trình." },
        { title: "Oppo hé lộ Find N6 không nếp gập, hỗ trợ bút AI", content: "Điện thoại gập mới của Oppo là Find N6 có nếp gập gần như không thể thấy bằng mắt thường cùng nâng cấp quan trọng hỗ trợ bút và các tính năng AI theo kèm." },
        { title: "CEO Adobe từ chức sau 18 năm lãnh đạo", content: "Shantanu Narayen, giữ vị trí CEO tại hãng phần mềm thiết kế Adobe từ năm 2007, sẽ từ chức sau khi công ty chỉ định người kế nhiệm." },
        { title: "Apple sắp tròn 50 tuổi", content: "CEO Tim Cook chia sẻ bức thư '50 năm suy nghĩ khác biệt' và hứa hẹn có sự kiện đặc biệt mừng cột mốc 50 năm thành lập công ty vào ngày 1/4 tới." },
        { title: "Starlink hé lộ tốc độ 5G từ không gian", content: "SpaceX cho biết thế hệ vệ tinh V2 của Starlink Mobile sẽ đạt tốc độ 5G từ không gian với mật độ dữ liệu gấp 100 lần V1 hiện tại." },
        { title: "Meta bắt đầu sản xuất hàng loạt chip AI riêng", content: "Meta cho biết đang trong lộ trình sản xuất bốn chip AI tự phát triển nhằm đáp ứng nhu cầu cho trung tâm dữ liệu và hạn chế phụ thuộc." },
        { title: "IBM bắt tay Lam Research tạo chip nhỏ hơn 1 nm", content: "IBM và Lam Research, hai ông lớn bán dẫn của Mỹ, hợp tác phát triển vật liệu và quy trình sản xuất chip dưới 1 nm dựa trên công nghệ in khắc High NA EUV." }
    ];
    const keyword = "phát triển";

    const personalNotesPage = new PersonalNotesPage(materialPage.page);

    await test.step("Click Bài học 4", async () => {
        await personalNotesPage.gotoPage("Personal Notes");
    });

    await test.step("Add 10 notes", async () => {
        await personalNotesPage.addNotes(personalNotes);
    });

    await test.step("Search", async () => {
        await personalNotesPage.searchKeyword(keyword);
    });

    await test.step("Verify keyword after searching", async () => {
        await personalNotesPage.verifySearchResult(keyword);
    });
});
