# puppeteer-chrome-logs
**PUPPETEER**


* js based tool
* works with node.js
* need to have node.js and NPM
* supports chrome and chromium (non-headless & headless)
* npm -v
* node -v



**FW Setup:**
1. create a file on documents named MyPuppeteer
2. and run the command on the console npm init -y to create package.json
   package.json is the controller like build (or maven pom.xml)

file is created:
`{
"name": "mypuppeteer",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}`


3. install puppeteer by:
   `npm install --save puppeteer
   `


4. Add the script to run the browser
   headless: true/false
   `const puppeteer = require('puppeteer');`
   `let config = {
   launchOPtions: {
   headless:false`
   `	}`
   `}`

`puppeteer.launch(config.launchOPtions).then(async browser => {
const page = await browser.newPage();
await page.goto('https://gmail.com');
await browser.close();
});`

5. edit the runner on the package.json file on the same folder by changing the Script.
   `"test": "echo \"Error: no test specified\" && exit 1"
   `with
   `"node test.js"
   `

5.1 NOTE: edit package.json file to change the test runs:
`"scripts": {
"test": "node test2.js"
},`

just changed the script test like in cucumber to ask to run specific file

DONT FORGET TO SAVE THE EDITED FILES &

DONE!!!



============================

imp note: Puppeteer only accepts #css locators.


