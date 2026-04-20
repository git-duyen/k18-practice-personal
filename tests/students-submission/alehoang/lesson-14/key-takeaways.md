# Lesson 14
## Agenda
1. Visual comparison
2. Test report
3. Test emulation
4. Drag & Drop
---
## Visual comparison
- Tạo screenshot
- Update screenshot
    - Xóa file cũ
    - Dùng terminal command
        - npx playwright test -g "@IMAGE" --update-snapshots
- Mask locator
    - Mask
    - Mask color
```typescript
await page.goto("https://material.playwrightvn.com/");
await expect(page).toHaveScreenshot({
    mask: [
        page.locator("#ads-here"),
    ],
    maskColor: "#000000"
});
```
- Mặc định, khi chụp screenshot, playwright sẽ chỉ chụp màn hình trong viewport.
- Để chụp toàn bộ trang web, thêm option: `fullPage: true` vào trong screenshot option
```typescript
await expect(page).toHaveScreenshot({
    fullPage: true
});
```
## Video recording
- Record video khi run test
- Chỉnh sửa trong file `playwright.config.ts`
    - Mode
    - Size
```typescript
import { defineConfig } from '@playwright/test';
export default defineConfig({
    use: {
        video: {
            mode: "on",
            size: { width: 640, height: 480 }
        }
    }
})
```
## Test report - Trace
- https://playwright.dev/docs/test-reporters#third-party-reporter-showcase

## Test emulation
- Emulation giúp giả lập các thông tin như:
- Device
- Viewport
- Locale & timezone
- Color scheme
- Geolocation
- Permission
    - https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions
- Further reading:
    - https://playwright.dev/docs/emulation
- Để giả lập các thông tin này có thể set trong file `playwright.config.ts` hoặc dùng `test.use` để giả lập ngay trong file test:
```typescript
import { test, expect } from '@playwright/test'

test.use({
    locale: "es-ES",
    timezoneId: "Europe/Madrid",
    permission: ["camera", "geolocation"]
});

test('My test with geolocation', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/017-detect-user-agent.html");
    await page.waitForTimeout(60_000);
});
```
## Drag & Drop
- dragTo
- Drag manually
```typescript
await page.goto("https://material.playwrightvn.com/05-xpath-drag-and-drop.html");

    for (let i = 1; i <= 4; i++) {
        let fromLoc = page.locator(`#piece-${i}`);
        let toLoc = page.locator(`//div[@data-piece='${i}']`);
        // Cách 1 dragTo
        await fromLoc.dragTo(toLoc);

        // Cách 2 manual
        await fromLoc.hover();
        await page.mouse.down();
        await toLoc.hover();
        await page.mouse.up();
    }
```
