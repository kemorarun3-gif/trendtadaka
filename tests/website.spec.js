// Trend Tadka - Website Test
// Chalane ke liye: npx playwright test
const { test, expect } = require('@playwright/test');

test.describe('Trend Tadka Website', () => {

  test('Website khulti hai aur title sahi hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await expect(page).toHaveTitle(/Trend Tadka/);
  });

  test('Logo aur nav dikh raha hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await expect(page.locator('a.logo')).toContainText('TREND');
    await expect(page.locator('.nav')).toContainText('WOMEN');
    await expect(page.locator('.nav')).toContainText('MEN');
  });

  test('Search bar kaam kar raha hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const search = page.locator('#q');
    await expect(search).toBeVisible();
    await search.fill('Sherwani');
    const visibleCards = page.locator('.pcard:visible');
    await expect(visibleCards.first()).toBeVisible();
  });

  test('16 products load ho rahe hain', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const cards = page.locator('.pcard');
    await expect(cards).toHaveCount(16);
  });

  test('Product detail modal khulta hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.locator('.pcard').first().click();
    const modal = page.locator('#productModal');
    await expect(modal).toBeVisible();
    await expect(page.locator('#mName')).not.toBeEmpty();
    await expect(page.locator('#mWaBtn')).toContainText('WhatsApp');
  });

  test('WhatsApp order button kaam kar raha hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const waBtn = page.locator('#mWaBtn');
    await page.locator('.pcard').first().click();
    const href = await waBtn.getAttribute('href');
    expect(href).toContain('wa.me/919098161630');
  });

  test('Order banner dikh raha hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await expect(page.locator('.order-banner')).toContainText('Order Kaise Karen');
  });

  test('Size chart section maujood hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await expect(page.locator('#size-chart')).toContainText('Ladies Size Chart');
    await expect(page.locator('#size-chart')).toContainText('Mens Size Chart');
  });

  test('Delivery aur Refund policy dikh raha hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const grid = page.locator('.policy-grid');
    await expect(grid).toContainText('Delivery');
    await expect(grid).toContainText('Refund');
    await expect(grid).toContainText('Cash on Delivery');
    await expect(grid).toContainText('Return / Refund Tarika');
  });

  test('Google Maps embed maujood hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const iframe = page.locator('iframe[src*="maps.google.com"]');
    await expect(iframe).toHaveAttribute('src', /Thatipur\+Gwalior/);
  });

  test('Customer reviews dikh rahe hain', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const reviews = page.locator('.review-card');
    await expect(reviews).toHaveCount(4);
    await expect(reviews.first()).toContainText('Pooja');
  });

  test('Contact aur phone number sahi hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const contact = page.locator('#contact');
    await expect(contact).toContainText('9098161630');
    await expect(contact).toContainText('Thatipur, Gwalior');
  });

  test('SEO meta tags sahi hain', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc).toContain('Gwalior');
    const keywords = await page.locator('meta[name="keywords"]').getAttribute('content');
    expect(keywords).toContain('saree gwalior');
    const robots = await page.locator('meta[name="robots"]').getAttribute('content');
    expect(robots).toContain('index');
  });

  test('Filter Women / Men kaam kar raha hai', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.locator('button:has-text("Women")').click();
    const visibleMen = page.locator('.pcard.men:visible');
    await expect(visibleMen).toHaveCount(0);
    await page.locator('button:has-text("All")').click();
    await expect(page.locator('.pcard')).toHaveCount(16);
  });

  test('Mobile viewport par bhi website chalti hai', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await expect(page.locator('a.logo')).toBeVisible();
    await expect(page.locator('.wa-big').first()).toBeVisible();
  });

});


