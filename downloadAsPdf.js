import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    timeout: 0,
    args: ["--disable-gpu", "--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");
  let height = await page.evaluate(() => document.documentElement.offsetHeight);
  await page.pdf({
    path: "resume.pdf",
    printBackground: true,
    height: height + "px",
    width: "1000px",
  });
  await browser.close();
})();
