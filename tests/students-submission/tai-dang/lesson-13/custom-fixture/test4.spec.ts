import { test } from './03-custom-fixture';
import { PersonalNotePage } from './03-pom';

let notesData = [
        {
            title: 'Phi hành đoàn Artemis II',
            content: 'Trong một khoảnh khắc đầu tháng 4, phi hành đoàn Artemis II và trạm Thiên Cung ở cách xa nhau hơn bất cứ người nào khác trong lịch sử.'
        },
        {
            title: 'Tên lửa Blue Origin',
            content: 'Blue Origin phóng thành công tên lửa New Glenn, đánh dấu lần đầu tái sử dụng tầng đẩy và tăng tốc cạnh tranh với SpaceX.'
        },
        {
            title: 'Ứng dụng AI trong doanh nghiệp',
            content: 'Theo ông Nguyễn Xuân Phong, Giám đốc công nghệ FPT, khi nhu cầu sử dụng AI tăng, doanh nghiệp càng cần tới các đối tác công nghệ.'
        },
        {
            title: 'OpenAI Thay Đổi Lãnh Đạo',
            content: 'Ba giám đốc cấp cao của OpenAI cùng từ chức cuối tuần qua trong bối cảnh công ty của Sam Altman nỗ lực cắt giảm những bộ phận phụ.'
        },
        {
            title: 'Trung tâm Dữ liệu AI tại Mỹ',
            content: 'Dữ liệu vệ tinh cho thấy gần 40% công trình trung tâm dữ liệu AI tại Mỹ đang chậm tiến độ so với kế hoạch của các tập đoàn công nghệ.'
        },
        {
            title: 'NASA và Mặt Trăng',
            content: 'NASA dự định xây dựng căn cứ trên Mặt Trăng theo ba giai đoạn, tổng cộng 73 chuyến hạ cánh xuống bề mặt thiên thể này.'
        },
        {
            title: 'Robot Chạy Marathon',
            content: 'Robot hình người lần đầu đạt thành tích nhanh hơn kỷ lục thế giới bán marathon của vận động viên con người, trong cuộc đua tại Bắc Kinh.'
        },
        {
            title: 'IPv6 Việt Nam',
            content: 'Theo kế hoạch của Trung tâm Internet Việt Nam, trong năm 2026, tỷ lệ sử dụng IPv6 tại Việt Nam đạt 72%, con số năm 2025 là 67,8%.'
        },
        {
            title: 'iPhone Người Dùng Trung Thành',
            content: 'Có tới 96,4% người dùng iPhone cho biết sẽ tiếp tục sử dụng smartphone này cho lần nâng cấp tiếp theo, còn lại 3,6% muốn chọn thương hiệu khác.'
        },
        {
            title: 'Công Nghệ Và Tương Lai',
            content: 'Các chuyên gia cảnh báo nếu không theo kịp nhịp đổi mới công nghệ và tháo gỡ các điểm nghẽn thể chế, Việt Nam có thể bỏ lỡ cơ hội tăng trưởng.'
        }
    ];

//4.
test('Personal Notes Test', async ({ materialPage }) => {
    const personalNotePage = new PersonalNotePage(materialPage.page);

    await test.step('Go to Personal Notes Page', async () => {
        await personalNotePage.openMaterialBasePage();
        await personalNotePage.goToPage('Personal Note Page');
    });
    await test.step('Add 10 Notes', async () => {
        await personalNotePage.addNotes(notesData);
    });
    let randomNoteIndex = Math.floor(Math.random() * notesData.length);
    await test.step('Search theo keyword bất kì', async () => {
        await personalNotePage.searchNotesByKeyword(notesData[randomNoteIndex].title);
    });
    await test.step('Verify search results contains search keyword', async () => {
        await personalNotePage.verifySearchResults(notesData[randomNoteIndex].title);
    });
});


