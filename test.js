const puppeteer = require('puppeteer');


let config = {
	launchOptions: {
		headless:false

	}
}

puppeteer.launch(config.launchOptions).then(async browser => {
	const page = await browser.newPage();
	await page.goto('https://hotmail.com');
	await browser.close();
});