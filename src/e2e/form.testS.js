import puppeteer from 'puppeteer';

describe('Inn Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitFor('.block');
  });

  test('valid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitFor('.block');

    const form = await page.$('.block');
    const btn = await form.$('.btn');

    await btn.click();

    await page.waitFor('.block .click.valid');
  });

  afterEach(async () => {
    await browser.close();
  });
});