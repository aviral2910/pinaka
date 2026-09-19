const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://saarthibiz.com/', { waitUntil: 'networkidle2' });
  
  // Extract all text to see what "gov impact" means
  const bodyHandle = await page.$('body');
  const html = await page.evaluate(body => body.innerText, bodyHandle);
  console.log(html);
  
  await browser.close();
})();
