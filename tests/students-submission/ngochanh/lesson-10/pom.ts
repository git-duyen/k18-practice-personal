import { Locator, Page } from "@playwright/test";

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string = "//a[contains(text(), 'Register Page')]";
    xpathProductPage: string = "//a[contains(text(), 'Product page')]";
    cssTodoPage: string = "a[href='03-xpath-todo-list.html']";
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.personalNote = this.page.locator("//a[contains(text(), 'Personal notes')]");
    }

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async gotoPage(pageName: string) {
        switch (pageName) {
            case "Register Page":
                await this.page.locator(this.xpathRegisterPage).click();
                break;
            case "Product page":
                await this.page.locator(this.xpathProductPage).click();
                break;
            case "Todo page":
                await this.page.locator(this.cssTodoPage).click();
                break;
        }
    }
}

export class RegisterPage extends MaterialBasePage {
    xpathUsername: string = "//input[@id='username']";
    xpathEmail: string = "//input[@id='email']";
    xpathGenderMale: string = "//input[@id='male']";
    xpathGenderFemale: string = "//input[@id='female']";
    xpathInterests: string = "//select[@id='interests']";
    xpathCountry: string = "//select[@id='country']";
    xpathDoB: string = "//input[@id='dob']";
    xpathProfilePicture: string = "//input[@id='profile']";
    xpathBiography: string = "//textarea[@id='bio']";
    xpathRating: string = "//input[@id='rating']";
    xpathFavColor: string = "//input[@id='favcolor']";
    xpathTooltip: string = "//div[@class='tooltip']";
    xpathNewsletter: string = "//input[@id='newsletter']";
    xpathFeature: string = "//span[@class='slider round']";
    xpathStarRating: string = "//div[@id='starRating']";
    xpathRegisterButton: string = "//button[@type='submit']";

    constructor(page: Page) {
        super(page);
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async checkGender(gender: string) {
        if (gender === "female") {
            await this.page.locator(this.xpathGenderFemale).check();
        } else {
            await this.page.locator(this.xpathGenderMale).check();
        }
    }

    async checkHobby(hobby: string) {
        await this.page.locator(`//input[@id='${hobby}']`).check();
    }

    async selectInterest(interest: string) {
        await this.page.locator(this.xpathInterests).selectOption({ label: interest });
    }

    async selectCountry(country: string) {
        await this.page.locator(this.xpathCountry).selectOption({ label: country });
    }

    async selectDOB(dob: string) {
        await this.page.locator(this.xpathDoB).click();
        await this.page.locator(this.xpathDoB).pressSequentially(dob, { delay: 100 });
    }

    async selectProfilePicture(filePath: string) {
        await this.page.locator(this.xpathProfilePicture).setInputFiles(filePath);
    }

    async fillBiography(biography: string) {
        await this.page.locator(this.xpathBiography).fill(biography);
    }

    async fillRating(rating: string) {
        await this.page.locator(this.xpathRating).fill(rating);
    }

    async fillFavColor(color: string) {
        await this.page.locator(this.xpathFavColor).fill(color);
    }

    async hoverTooltip() {
        await this.page.locator(this.xpathTooltip).hover();
    }

    async checkNewsletter() {
        await this.page.locator(this.xpathNewsletter).check();
    }

    async enableFeature() {
        await this.page.locator(this.xpathFeature).click();
    }

    async clickStarRating(position: { x: number, y: number }) {
        await this.page.locator(this.xpathStarRating).click({ position });
    }

    async clickRegister() {
        await this.page.locator(this.xpathRegisterButton).click();
    }
}

export class ProductPage extends MaterialBasePage {
    xpathAddProduct1: string = "//div[text()='Product 1']//following-sibling::button";
    xpathAddProduct2: string = "//div[text()='Product 2']//following-sibling::button";
    xpathAddProduct3: string = "//div[text()='Product 3']//following-sibling::button";
    priceProduct1: number = 10;
    priceProduct2: number = 20;
    priceProduct3: number = 30;

    constructor(page: Page) {
        super(page);
    }

    async addProduct(productNumber: number) {
        switch (productNumber) {
            case 1: {
                await this.page.locator(this.xpathAddProduct1).click();
                break;
            }
            case 2: {
                await this.page.locator(this.xpathAddProduct2).click();
                break;
            }
            case 3: {
                await this.page.locator(this.xpathAddProduct3).click();
                break;
            }
        }
    }
}

export class TodoPage extends MaterialBasePage {

    constructor(page: Page) {
        super(page);
    }

    async addTask(quantity: number) {
        for (let i = 1; i <= quantity; i++) {
            await this.page.getByPlaceholder('Enter a new task').fill("Todo " + i);
            await this.page.getByRole('button', { name: 'Add Task' }).click();
        }
    }

    async deleteOddTodo(quantity: number) {
        this.page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i <= quantity; i += 2) {
            await this.page.locator(`//button[@id="todo-${i}-delete"]`).click();
        }
    }

}

export class PersonalNotesPage extends MaterialBasePage {
    notes: { title: string, content: string }[] = [
        {
            title: "Phạt 2 tỷ đồng nếu để xảy ra sự cố hạt nhân",
            content: "Chính phủ quy định mức phạt hành chính cao nhất 2 tỷ đồng đối với hành vi không thực hiện các biện pháp ngăn ngừa để xảy ra sự cố tại nhà máy điện hạt nhân."
        },
        {
            title: "Gia công phần mềm không thể giúp Việt Nam thành cường quốc công nghệ",
            content: "Thứ trưởng Khoa học và Công nghệ Bùi Hoàng Phương cho rằng gia công phần mềm đã giúp Việt Nam tạo bước đà quan trọng, nhưng không thể là cường quốc công nghệ."
        },
        {
            title: "Apple ra AirPods Max 2 chống ồn tốt hơn, giá 15 triệu đồng",
            content: "Tối 16/3, Apple giới thiệu tai nghe trùm đầu AirPods Max phiên bản nâng cấp lớn sau 6 năm. Phiên bản này có nhiều cải tiến về chất âm, khả năng khử ồn cũng như một số tính năng mới."
        },
        {
            title: "Internet vệ tinh Starlink dự kiến có giá 2,2 triệu mỗi tháng tại Việt Nam",
            content: "Theo thông tin từ Cục Viễn thông - Bộ Khoa học và Công nghệ, dịch vụ Starlink cho người dùng cá nhân tại Việt Nam có giá 435 USD tháng đầu tiên, trong đó tiền mua bộ thiết bị đầu cuối khoảng 350 USD, và 85 USD"
        },
        {
            title: "Đề xuất 84 công nghệ cao ưu tiên đầu tư phát triển",
            content: "Bộ Khoa học và Công nghệ đang lấy ý kiến về dự thảo danh mục công nghệ cao, trong đó đề xuất ưu tiên nhiều lĩnh vực cốt lõi, như bán dẫn, AI và năng lượng mới."
        },
        {
            title: "Khai trương trung tâm dữ liệu tỉnh Thái Nguyên",
            content: "Trung tâm dữ liệu tỉnh Thái Nguyên gồm kho dữ liệu dùng chung, Trung tâm điều hành thông minh (IOC) và ứng dụng C-Thainguyen bản nâng cấp, vận hành từ ngày 13/3."
        },
        {
            title: "Tranh cãi về bức ảnh cá mập Greenland 392 tuổi",
            content: "Tài khoản awkwardgoogle tuần trước đăng trên X ảnh cá mập Greenland kèm theo dòng chữ: Một con cá mập Greenland 392 tuổi được phát hiện ở Bắc Băng Dương."
        },
        {
            title: "30 tỷ hình ảnh thu thập từ Pokémon Go được dùng để huấn luyện robot",
            content: "Nhà phát triển Pokemon Go cho biết dữ liệu hơn 30 tỷ hình ảnh do người chơi chụp trên khắp thế giới sẽ được sử dụng để giúp robot giao hàng điều hướng."
        },
        {
            title: "Những điểm mới của AirTag 2 giá 890.000 đồng",
            content: "AirTag 2 được bán tại Việt Nam từ tháng 3 với giá 890.000 đồng mỗi chiếc và 2.990.000 đồng cho bộ bốn chiếc. Nâng cấp lớn nhất trên AirTag 2 là chip mới Ultra Wideband 2,"
        },
        {
            title: "Hai anh em tự chế robot xoay rubik",
            content: "The Revenger xoay xong khối rubik bị xáo trộn chỉ trong 45,3 giây, nhanh hơn 33 giây so với robot đứng thứ hai. Nỗ lực lập kỷ lục diễn ra vào năm ngoái tại Đại học Bristol, nơi anh em Pidden theo học"
        }]

    constructor(page: Page) {
        super(page);
    }

    async addNotes() {

        for (const note of this.notes) {
            await this.page.getByLabel('Title:').fill(note.title);
            await this.page.getByLabel('Content:').fill(note.content);
            await this.page.getByRole('button', { name: 'Add Note' }).click();
        }
    }

    async inputToSearchBox(keyword: string) {
        await this.page.getByLabel('Search Notes:').fill(keyword);
    }
}
