//hackerrank.js code converted into async await
let puppeteer = require("puppeteer");
let mail = "sehox56004@mtlcz.com";
let password="789456123";
let {answers} = require("./ans");
let browserObj = puppeteer.launch({
    defaultViewport: null,
    headless: false,
    args : [ '--start-maximized']
});
let page, browser;
(async function fn(){
    try{
        browser = await browserObj;
    page = await browser.newPage();
    await page.goto("https://www.hackerrank.com/auth/login");
    await page.waitForSelector('.ui-tooltip-wrapper input[id="input-1"]', {visible:true});
    await page.type('.ui-tooltip-wrapper input[id="input-1"]', mail);
    await page.type('.ui-tooltip-wrapper input[id="input-2"]', password);
    await page.click('button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    await page.waitForSelector('.topic-card a[data-attr1="algorithms"]', {visible:true});
    await page.click('.topic-card a[data-attr1="algorithms"]');
    await page.waitForSelector('.checkbox-wrap input[value="warmup"]', {visible:true});
    await page.click('.checkbox-wrap input[value="warmup"]');
    await page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", {visible:true});
    let quesArr = await page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", {delay:100});
    // console.log(quesArr.length);
    // for(let i=0; i<answers.length; i++){
    console.log("29"+quesArr[1]);
        await solveQues(page, quesArr[0], answers[0]);
    // }
    }
    catch(err){
        console.log(err);
    }

})();

(async function solveQues(page, quesSelector, answer){
    try{
        console.log("41"+quesSelector);
    await page.waitForSelector(quesSelector, {visible:true});
    await quesSelector.click();

    await page.waitForSelector(".monaco-editor.no-user-select.vs", {visible:true});
    await page.click(".monaco-editor.no-user-select.vs");

    await page.waitForSelector(".checkbox-input", {visible:true});
    await page.click(".checkbox-input");

    await page.waitForSelector("textarea.custominput", {visible:true});
    await page.type("textarea.custominput", answer, { delay: 10 });

    await page.keyboard.down("Control");
    await page.keyboard.press("A",{ delay: 100 });
    await page.keyboard.press("X",{ delay: 100 });
    await page.keyboard.up("Control");

    await page.waitForSelector(".monaco-editor.no-user-select.vs", {visible:true});
    await page.click(".monaco-editor.no-user-select.vs");

    await page.keyboard.down("Control");
    await page.keyboard.press("A",{ delay: 100 });
    await page.keyboard.press("V",{ delay: 100 });
    await page.keyboard.up("Control");

    page.click(".hr-monaco__run-code", { delay: 50 });
    }
    catch(err){
        console.log(err);
    }
    
})();