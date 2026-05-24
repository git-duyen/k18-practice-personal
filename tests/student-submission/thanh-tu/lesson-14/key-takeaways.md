# Lesson 14 - Many Concepts

# Visual comparison

## Screenshot

```ts
test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page).toHaveScreenshot();
});
```

=> Chạy lần đầu để khởi tạo screenshot
=> Chạy lần 2 để Playwright so sánh

Chạy lệnh trên terminal `npx playwright test <ten_file> --update-snapshots` để update lại screenshot

## Screenshot with mask

```ts
await expect(page).toHaveScreenshot({
  mask: [page.locator('//div[@id="ads-here"]')],
  maskColor: '#000000',
});
```
Sử dụng mặt nạ (`mask`) để che những phần tử có thể thay đổi liên tục (như quảng cáo, banner động, ngày giờ...), giúp tránh việc so sánh UI bị fail không mong muốn.

# Test report

Khi test bị fail, chạy lệnh sau trên terminal để xem report trực quan (lưu ý cấu hình `trace: 'on'` trong file config để xem chi tiết các bước):
`npx playwright show-report` (hoặc lệnh chạy lại test `npx playwright test`).

# Test emulation

## Devices

Thêm devices vào trong file playwright.config.ts:

```ts
{
  name: 'Mobile Safari',
  use: { ...devices['iPhone 15'] },
},
```

## Viewport

Thêm viewport vào devices trong file playwright.config.ts:

```ts
{
  name: 'chromium',
  use: {
    ...devices['Desktop Chrome'],
    // It is important to define the `viewport` property after destructuring `devices`,
    // since devices also define the `viewport` for that device.
    viewport: { width: 1280, height: 720 },
  },
},
```

## Tổng hợp cấu hình giả lập (Locale, Timezone, Color Scheme, Geolocation, Permissions)

Bạn có thể cấu hình chung tất cả các tính năng giả lập này bên trong object use của file playwright.config.ts:

```ts
export default defineConfig({
  use: {
    // Giả lập ngôn ngữ (Locale) của trình duyệt
    locale: 'en-GB',
    
    // Giả lập múi giờ (Timezone)
    timezoneId: 'Europe/Paris',
    
    // Giả lập chế độ Sáng/Tối (Light/Dark mode)
    colorScheme: 'dark',
    
    // Giả lập vị trí địa lý (Tọa độ kinh độ & vĩ độ)
    geolocation: { longitude: 12.492507, latitude: 41.889938 },
    
    // Tự động cấp quyền cho thiết bị khi truy cập lần đầu
    permissions: ['geolocation', 'notifications', 'camera', 'microphone'],

  },
});
```
Nếu chỉ muốn áp dụng riêng cấu hình locale và timezone cho một file test cụ thể, hãy khai báo ngay đầu file test đó:

```ts
test.use({
  locale: 'de-DE',
  timezoneId: 'Europe/Berlin',
});
```
Tài liệu tham khảo thêm:

* Hướng dẫn chi tiết về Emulation: https://playwright.dev/docs/emulation

* Chi tiết về cấp quyền BrowserContext: https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions

# Drag n Drop

```ts
await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drag-at'));

// manually
await page.locator('#item-to-be-dragged').hover();
await page.mouse.down();
await page.locator('#item-to-drag-at').hover();
await page.mouse.up();
```
