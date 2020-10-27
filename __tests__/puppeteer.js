const puppeteer = require("puppeteer");

const APP = `http://localhost:8080/`

describe("Frontend Tests", () => {
	let page;
	let browser;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
			headless: true,
		});
		page = await browser.newPage();
	});

	afterAll(async () => {
		await browser.close();
	});

	describe("initial load", () => {
		it("page loads successfully", async () => {
			await page.goto(APP);
			await page.waitForSelector("#listNavContainer");
			const title = await page.$eval("#listNavContainer", (el) => el ? true : false);
			expect(title).toBe(true);
		});

		it("list items load", async () => {
			await page.goto(APP);
			await page.waitForSelector("#listContainer");
			const childNodes = await page.$eval(
				"#listContainer",
				(el) => el.childNodes.length
			);
			expect(childNodes).toBe(4);
    });
    
    it("handleClick is working", async () => {
			await page.goto(APP);
      await page.waitForSelector(".buttonContainer");
      await page.click(".buttonContainer", async (el) => {
        const items = (await page.$(".buttonItems")) !== null;
        expect(items).toBe(true);
      });
    });
  });
});
