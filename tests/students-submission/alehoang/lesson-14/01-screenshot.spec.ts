import { expect, test } from "@playwright/test";

test.use({
    video: "on"
});

const userName = "betterbytes.academy.admin";
const pass = "StrongPass@BetterBytesAcademy";

test("Visual comparision", async ({ page }) => {
    await test.step("Login", async () => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");

        await page.getByLabel("Username").fill(userName);
        await page.getByLabel("Password", { exact: true }).fill(pass);
        await page.getByRole("button", { name: "Log In" }).click();
        await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
        await expect(page.getByText("Attend an upcoming event near you.")).toBeVisible();
    });

    await test.step("Screenshot and mask block Activity, At Glance", async () => {
        await expect(page).toHaveScreenshot({
            mask: [page.locator("#dashboard_activity"),
            page.locator("#dashboard_right_now")
            ],
            maskColor: "#7134eb"
        });
    });

    await test.step("Go to Tag", async () => {
        await page.getByRole("link", { name: "Posts", exact: true }).click();
        await page.getByRole("link", { name: "Tags" }).click();
    });

    await test.step("Screenshot full Tags page", async () => {
        await expect(page).toHaveScreenshot({
            fullPage: true,
            mask: [page.locator("#posts-filter table")],
            maskColor: "#7134eb"
        });
    });
});
