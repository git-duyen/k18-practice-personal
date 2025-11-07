import { test, expect } from '@playwright/test';

test.describe("Group using emulation", async () => {
  test.use({
    locale: 'de-DE',
    timezoneId: 'Europe/Berlin',
  });
  test('locale & timezone', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
  });
});

test.describe("Group not using emulation", async () => {
  test('locale & timezone', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
  });
})