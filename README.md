# puppeteer-chrome-logs
This repo is created to collect the unique logs which that already created on index.html file

* document.write(Object.getOwnPropertyNames(window));
* document.write(Object.keys(window));


# puppeteer is:
* js based tool
* works with node.js
* need to have node.js and NPM
* supports chrome and chromium (non-headless & headless)
* npm -v
* node -v

Puppeteer is a Node library and it provides APIs to control Chrome or Chromium
over the DevTools Protocol. Puppeteer on default runs headless, but it can be configured
to run in non-headless full mode at Chrome or Chromium.


## FW Setup:
* Create a file on Finder/documents named MyPuppeteer
* And run the command on the console 
npm init -y 
* to create package.json
   package.json 
* thes file is the controller like build (or maven pom.xml)

Make sure the file is created as below:

```json
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
```

1. install puppeteer by:
   `npm install --save puppeteer
   `


2. Add the script to run the browser
   headless: true/false
```json
   `const puppeteer = require('puppeteer');`
   `let config = {
   launchOPtions: {
   headless:false`
   `	}`
   `}`
```
example test for navigating to google page
```json
  puppeteer.launch(config.launchOPtions).then(async browser => {
      const page = await browser.newPage();
      await page.goto('https://gmail.com');
      await browser.close();
  });`
```
3. edit the runner on the package.json file on the same folder by changing the Script.

   `"test": "echo \"Error: no test specified\" && exit 1"`

   with

   `"node test.js"`

3.1 NOTE: edit package.json file to change the test runs:
```json
  "scripts": {
  "test": "node test2.js"
  },
```
just changed the script test like in cucumber & command to run specific file (ex:node test2.js)


SAVE THE EDITED FILES &

DONE!!!


============================

NOTE: Puppeteer only accepts #css locators.


