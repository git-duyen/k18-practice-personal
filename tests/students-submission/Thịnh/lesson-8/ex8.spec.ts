import { test, expect } from "@playwright/test"

test.describe('AUTH-authentication', async () => {
    "//input[@id='user_login']";
    let xpathUserName = "//input[@id='user_login']";
    let xpathPassword = "//input[@id='user_pass']";
    let xpathBtnLogIn = "//input[@id='wp-submit']";
    let xpathErrorMsg = "//div[@id='login_error']";
    let xpathHeadingDashboard = "//h1[text()='Dashboard']";
    let xpathHeadingAtAGlance = "//h2[text()='At a Glance']";
    let xpathHeadingActivity = "//h2[text()='Activity']";
    const username = "betterbytes.academy.admin";
    const password = 'StrongPass@BetterBytesAcademy';
    const passwordInvalid = '123456';
    test.beforeEach(async ({ page }) => {
        await test.step('go to Login page', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-login.php?redirect_to=https%3A%2F%2Fpw-practice-dev.playwrightvn.com%2Fwp-admin%2F&reauth=1')
        })
    })

    test.afterEach(async ({ page }) => {
    })
    test('@AUTH_01- login fail', async ({ page }) => {
        await test.step('Fill username and password invalid', async () => {
            await page.locator(xpathUserName).fill(username);
            await page.locator(xpathPassword).fill(passwordInvalid);

            const actUsername = await page.inputValue(xpathUserName);
            const actPassword = await page.inputValue(xpathPassword)

            expect(actUsername).toBe(username);
            expect(actPassword).toBe(passwordInvalid);

        })
        await test.step("click btn Login", async () => {
            await page.click(xpathBtnLogIn);
        })
    })
    test('@AUTH_02-Login successfully', async ({ page }) => {
        await test.step('Fill username and password valid', async () => {
            await page.locator(xpathUserName).fill(username);
            await page.locator(xpathPassword).fill(password);

            const actUsername = await page.inputValue(xpathUserName);
            const actPassword = await page.inputValue(xpathPassword)

            expect(actUsername).toBe(username);
            expect(actPassword).toBe(password);
        })
        await test.step('click btn Login',async()=>{
            await page.click(xpathBtnLogIn);
            await page.waitForLoadState("domcontentloaded");
            
            await expect(page).toHaveURL(/.*wp-admin/);

            let isHeadingisPlayed=await page.locator(xpathHeadingDashboard).isVisible();
            expect(isHeadingisPlayed).toBeTruthy();

            await expect(page.locator(xpathHeadingAtAGlance)).toBeVisible();
            await expect(page.locator(xpathHeadingActivity)).toBeVisible();
        })
    })
})