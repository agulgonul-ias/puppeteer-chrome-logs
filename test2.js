const puppeteer = require('puppeteer');
const fs = require("fs");



let config = {
	launchOptions: {
		headless:false
	}
}

puppeteer.launch(config.launchOptions).then(async browser => {
	const page = await browser.newPage();


	//todo: change the file path
	await page.goto(`file:///Users/agulgonul/Documents/GitHub/puppeteer-chrome-logs/index.html`);
	await page.waitForSelector('div[id="chromeLog"]');

	let getOwnPropertiesElement = await page.$('div[id="chromeLog"]');
	let getOwnPropertiesAsText = await page.evaluate(el => el.textContent, getOwnPropertiesElement);

	let getGlobalObjectElement = await page.$('div[id="globalLog"]');
	let getGlobalObjectAsText = await page.evaluate(el => el.textContent, getGlobalObjectElement);

	await browser.close();

	console.log(getOwnPropertiesAsText);
	console.log(getGlobalObjectAsText);

	//todo change the config.launchOption.headless to false or true
	if (config.launchOptions.headless){
		writeToFile('puppeteer-chrome-headless-getOwnProperties.txt', getOwnPropertiesAsText);
		writeToFile('puppeteer-chrome-headless-getGlobalObjects.txt',getGlobalObjectAsText);
	}else{
		writeToFile('chrome-getOwnProperties.txt', getOwnPropertiesAsText);
		writeToFile('chrome-getGlobalObjects.txt',getGlobalObjectAsText);
	}

});


function writeToFile(fileName, writeData) {
	const fs = require('fs')
	fs.writeFile(fileName, writeData, (err) => {
		// In case of a error throw err.
		if (err) throw err;
	})
}