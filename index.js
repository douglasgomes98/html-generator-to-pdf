const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file:/// you file path");
  await page.emulateMediaType('screen');
  await page.pdf({
    path: "document.pdf",
    format: "A4",
    margin: {
      top: "64px",
      left: "64px",
      right: "64px",
      bottom: "64px",
    },
    printBackground: true,
  });
  await browser.close();
})();
