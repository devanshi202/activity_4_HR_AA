//npm i puppeteer
let puppeteer = require("puppeteer");

//creating a headless browser 
let browserPromise = puppeteer.launch({
    //by default headless true hota hai to see the browser opening headless false krna hota hai
    headless: false,

    // slowMo: true,

    defaultViewport: null,

    args:['--start-maximized', '--disable-notifications']
});
let browser, page;
//opening a new tab 
browserPromise.then(function(browserData){
    console.log("browser opened");
    browser=browserData;
    browserData.newpage();
    return browserData
}).then(function(newPageData){
    page=newPageData;
    console.log("new page/tab opened");
    let googlePage = newPageData.goto("https://www.google.com/");
    return googlePage;

}).then(function(){
    console.log("google page opened");
    let pepcodingTyped = page.type('input[type="text"]', 'pepcoding');
    return pepcodingTyped;
}).then(function(){
    console.log("pepcoding typed");
    let pepcodingEntered= page.keyboard.press('Enter');
    return pepcodingEntered;
}).then(function(){
    console.log("got website lists");
    let pepcodingSlector=page.waitForSelector(".LC20lb.DKV0Md", {visible:true});
    return pepcodingSlector;
}).then(function(){
    console.log("got the pepcoding sleector");
    let pepcodingPageOpen=page.click(".LC20lb.DKV0Md");
    return pepcodingPageOpen;
}).then(function(){
    console.log("pep website opened");
    let resorcePge=page.waitForSelector('.site-nav-li a[href="/resources"]', {visible:true});
    return resorcePge;
}).then(function(browser){
    let arrOfTabs= browser.pages();
    page=arrOfTabs[2];
    
})



