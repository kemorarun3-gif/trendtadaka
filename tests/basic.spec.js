const { test, expect } = require('@playwright/test');
test('basic check', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  expect(await page.title()).toContain('Trend Tadka');
});

