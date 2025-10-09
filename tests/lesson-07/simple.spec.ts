import { test, expect } from '@playwright/test';

test("Test 01", async ({ page }) => {
    // Khẳng định rằng: title trang phải là "Homepage"
    await expect(page).toHaveTitle('Homepage');

    // Khẳng định rằng: button phải visible (nhìn thấy được)
    await expect(page.locator('button')).toBeVisible();

    // Khẳng định rằng: giá trị phải bằng 5
    expect(2 + 3).toBe(5);
})