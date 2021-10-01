
//getting the headless browser
const browser =  puppeteer.launch()

//opening the new tab in the browser window
const page =  browser.newPage()

//requesting the browser API to go to the desired website on the page/tab
let website_promise= page.goto('https://website.com')

//all the functions generally return promises and unn promises pr then lgagane ke baad hum next task define krte hain

googlePage.type(a, b);
obj={
    a: "input type selector" ,
    b: "text to be entered in the input space selected"
}


//------------------------------------------------------------------------------------------------------


//how promise consuming older method can be converted into async await method

let fs = require("fs");

function myPromisiedFsReader(filePath) {
    //function that returns a promise
    return new Promise(function cb(resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if (err) {
                reject(err);//will trigger cb inside catch of that promise
            }
            else {
                resolve(data);//will trigger cb inside then of that promise
            }
        })
    })

}


//promise consume older method(promise code)

let promise = myPromisiedFsReader("f1.txt");
promise
.then(function (data) { //will be executed when resolve will be called
    console.log("data " + data)
}).catch(function (err) { //will be executed when reject will be called
    console.log("err " + err);
})


//promise consume method using async await
// just use keyword async before the function in which we are going to write the logic 
//write await before the promise and then store the returned value into a new variable
// like all other languages these codes will be written in try and catch

(async function fn() {
    try {
        let promise = myPromisiedFsReader("f1.txt");
        let data = await promise;
        console.log("data " + data);
    } catch (err) {
        console.log("err" + err);
    }
})();