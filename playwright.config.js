// Trend Tadka - Playwright Test Config
// Chalane ke liye: npx playwright test
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    locale: 'hi-IN',
    viewport: { width: 1280, height: 800 },
  },
  projects: [
    { name: 'desktop-chromium', use: { browserName: 'chromium' } },
  ],
  // Test se pehle local server khud chala deta hai
  webServer: {
    command: 'node server.js',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 20000,
  },
});
