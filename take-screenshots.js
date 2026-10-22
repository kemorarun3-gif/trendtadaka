const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const outDir = 'F:\\photo a.r';
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // 1. Homepage (desktop)
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(outDir, '01-homepage-desktop.png'), fullPage: true });
  console.log('1. homepage desktop saved');

  // 2. Product modal (click first product)
  await page.locator('.pcard').first().click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '02-product-modal.png'), fullPage: false });
  console.log('2. product modal saved');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  // 3. Mobile view
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '03-mobile-view.png'), fullPage: true });
  console.log('3. mobile view saved');

  // 4. Size chart section
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/#size-chart', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(outDir, '04-size-chart.png'), fullPage: false });
  console.log('4. size chart saved');

  // 5. Policies section
  await page.goto('http://localhost:3000/#contact', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(outDir, '05-contact-maps.png'), fullPage: false });
  console.log('5. contact/maps saved');

  // 6. Full page (smaller) - scroll to reviews
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '06-reviews-section.png'), fullPage: false });
  console.log('6. reviews saved');

  await browser.close();
  console.log('All screenshots saved to', outDir);
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
