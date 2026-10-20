const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  const count = await page.locator('.pcard').count();
  const title = await page.title();
  console.log('Title:', title);
  console.log('Product cards:', count);
  const jsErrors = [];
  page.on('pageerror', e => jsErrors.push(e.message));
  await page.waitForTimeout(500);
  console.log('JS errors:', jsErrors.length ? jsErrors.join(' | ') : 'none');
  await browser.close();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
