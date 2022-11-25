/* eslint-disable quotes */
import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      args: ['--no-sandbox', "--disabled-setupid-sandbox"],
    });

    page = await browser.newPage();
  });

  test('test', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('body');
  });

  afterEach(async () => {
    await browser.close();
  });
});
