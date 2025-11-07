import { test, expect } from '@playwright/test';

test('locale & timezone', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/017-detect-user-agent.html');
  await page.waitForTimeout(10_000);
});