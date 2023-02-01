import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    timeout: 0,
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");

  const colorPicker = await page.$('.color-picker');

  if (colorPicker) {
    await page.evaluate((element) => {
      element.style.display = 'none';
    }, colorPicker);
  }

  const localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage));
  await page.evaluate((localStorage) => {
    Object.keys(localStorage).forEach(key => {
      localStorage.setItem(key, localStorage[key]);
    });
  }, localStorage);

  let height = await page.evaluate(() => document.documentElement.offsetHeight);
  await page.pdf({
    path: "resume.pdf",
    printBackground: true,
    height: height + "px",
    width: "1000px",
  });
  await browser.close();
})();
