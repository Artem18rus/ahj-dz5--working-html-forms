/* eslint-disable quotes */
import puppeteer from 'puppeteer';

describe('Inn Popover', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      args: ["--no-sandbox"],
    });

    page = await browser.newPage();
  });

  test('blockIn', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.block');
  });

  test('clickPopover', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.block');

    const ppov = await page.$('.block');
    const btn = await ppov.$('.btn');

    await btn.click();

    await page.waitForTimeout('.block .click.valid');
  });

  afterEach(async () => {
    await browser.close();
  });
});
