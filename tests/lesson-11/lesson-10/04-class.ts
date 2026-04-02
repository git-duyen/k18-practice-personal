class LoginPage5 {
    usernameLoc: string;
    passwordLoc: string;

    constructor(param1: string, param2: string) {
        this.usernameLoc = param1;
        this.passwordLoc = param2;
    }

    fillUsername(username: string) {
        console.log("Filling username: ", username);
    }
}

class DashboardPage5 extends LoginPage5 {
    headingLoc: string;

    constructor(headingLoc: string, param1: string, param2: string) {
        super(param1, param2);
        this.headingLoc = headingLoc;
    }
}

const dashboardPageObj = new DashboardPage5("1", "2", "3");
dashboardPageObj.fillUsername("Phong");

