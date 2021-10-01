let mail = "sehox56004@mtlcz.com";
let password="789456123";
let loginLink ="https://www.hackerrank.com/auth/login";
let puppeteer= require("puppeteer");
let {answers} = require("./ans");
let browser = puppeteer.launch({
    headless: false,
    // slowMo: true,
    defaultViewport: null,
    args:['--start-maximized', '--disable-notifications']
});
let page, Browser;
browser.then(function (browserObj){
    Browser=browserObj;
    let newpage=browserObj.newPage();
    return newpage;
}).then(function(newpage){
    page = newpage;
    let hackerrankLogin=newpage.goto(loginLink);
    return hackerrankLogin;
}).then(function(){
    let typedMail=page.type('.ui-tooltip-wrapper input[id="input-1"]', mail);
    return typedMail;
}).then(function(){
    let typedPass=page.type('.ui-tooltip-wrapper input[id="input-2"]', password);
    return typedPass;
}).then(function(){
    let buttonClicked=page.click('button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return buttonClicked;
}).then(function(){
    let algorithm=page.waitForSelector('.topic-card a[data-attr1="algorithms"]');
    return algorithm;
}).then(function(){
    let algorithmClick=page.click('.topic-card a[data-attr1="algorithms"]');
    return algorithmClick;
}).then(function(){
    let warmupCheck=page.waitForSelector('.checkbox-wrap input[value="warmup"]');
    return warmupCheck;
}).then(function(){
    let warmupClicked=page.click('.checkbox-wrap input[value="warmup"]');
    return warmupClicked;
}).then(function(){
    let quesArr = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", {delay:1000});
    return quesArr;
}).then(function(quesArr){
    console.log(quesArr.length);
    let qWillBeSolved= solveQues(quesArr[0], answers[0], page);
    return qWillBeSolved;
}).then(function () {
    console.log("question is solved");
})

function solveQues(ques, ans, page){
   return new Promise(function(resolve, reject){
        let quesSelected = ques.click();
        quesSelected.then(function(){
            let monacoSelector= page.waitForSelector(".monaco-editor.no-user-select.vs");//react sometimes do not load whole page to access the custom test case input check box, we have to select monaco to access it's html
            return monacoSelector;
        }).then(function(){
            return page.click(".monaco-editor.no-user-select.vs")
        }).then(function(){
            return page.waitForSelector(".checkbox-input");
        }).then(function(){
            return page.click(".checkbox-input");
        }).then(function () {
            return page.waitForSelector("textarea.custominput", { visible: true });
        }).then(function () {
            return page.type("textarea.custominput", ans, { delay: 10 });
        }).then(function () {
            let ctrlIsPressedP = page.keyboard.down("Control");
            return ctrlIsPressedP;
        }).then(function () {
            let AIsPressedP = page.keyboard.press("A", { delay: 100 });
            return AIsPressedP;
        }).then(function () {
            return page.keyboard.press("X", { delay: 100 });
        }).then(function () {
            let ctrlIsPressedP = page.keyboard.up("Control");
            return ctrlIsPressedP;
        }).then(function(){
            return page.waitForSelector(".monaco-editor.no-user-select.vs");//react sometimes do not load whole page to access the custom test case input check box, we have to select monaco to access it's html
        }).then(function(){
            return page.click(".monaco-editor.no-user-select.vs")
        }).then(function () {   
            return page.keyboard.down("Control");
        }).then(function () {
            return page.keyboard.press("A", { delay: 100 });
        }).then(function () {
            return page.keyboard.press("V", { delay: 100 });
        }).then(function () {
            return page.keyboard.up("Control");
        }).then(function () {
            return page.click(".hr-monaco__run-code", { delay: 50 });
        })
        .then(function () {
            resolve();
        }).catch(function (err) {
            console.log(err)
            reject(err);
        })
   })
    
}

function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModalPromise = cPage.waitForSelector(selector, { visible: true });
        waitForModalPromise
            .then(function () {
                let clickModal =
                    cPage.click(selector, { delay: 100 });
                return clickModal;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err)
            })
    }
    )
}