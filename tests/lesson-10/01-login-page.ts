class LoginPage {
    usernameLoc: string;
    passwordLoc: string;
    rememberMeLoc: string;
    btnLoginLoc: string;

    constructor() {
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

const login1 = new LoginPage();
const login2 = new LoginPage();

login1.fillUsername("Minh Phong");