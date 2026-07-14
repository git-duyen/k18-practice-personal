var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoginPage = /** @class */ (function () {
    function LoginPage(param1, param2, param3, param4) {
        this.usernameLoc = param1;
        this.passwordLoc = param2;
        this.rememberMeLoc = param3;
        this.btnLoginLoc = param4;
    }
    LoginPage.prototype.fillUsername = function (username) {
        console.log("Filling User Name", username);
    };
    LoginPage.prototype.fillPassword = function (password) {
        console.log("Filling Password", password);
    };
    LoginPage.prototype.ClickingRemember = function () {
        console.log("Clicking remember me");
    };
    LoginPage.prototype.ClickingButtonLogin = function () {
        console.log("Clicking button Login");
    };
    return LoginPage;
}());
var DashboardPage = /** @class */ (function (_super) {
    __extends(DashboardPage, _super);
    function DashboardPage(headingLoc, param1, param2, param3, param4) {
        var _this = _super.call(this, param1, param2, param3, param4) || this;
        _this.headingLoc = headingLoc;
        return _this;
    }
    DashboardPage.prototype.ClickMenu = function () {
        console.log("Clicking to menu");
    };
    return DashboardPage;
}(LoginPage));
var DashboardPageObj = new DashboardPage("1", "2", "3", true, "5");
DashboardPageObj.fillUsername("Van");
