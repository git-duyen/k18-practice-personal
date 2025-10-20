class LoginPage2 {
    heading: string;
    usernameLoc: string;
    passwordLoc: string;
    rememberMeLoc: string;
    btnLoginLoc: string;

    constructor() {
        this.heading = "";
        this.usernameLoc = "";
        this.passwordLoc = "";
        this.rememberMeLoc = "";
        this.btnLoginLoc = "";
    }

    fillUsername(username: string) {
        console.log(`Filling username: ${username}`);
    }

    fillPassword(password: string) {
        console.log(`Filling password: ${password}`);
    }

    clickRememberMe() {
        console.log(`Checking remember me`);
    }

    clickBtnLogin() {
        console.log(`Logging in`);
    }
}

class DashboardPage extends LoginPage2 {
    titleLoc: string;

    constructor() {
        super()
        this.titleLoc = "";
    }
}

const dashboard = new DashboardPage();
dashboard.fillUsername("Minh Phong");