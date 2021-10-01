let fs = require("fs");

//this is called polyfill of fs.promise.readFile
// how promise are made and implemented:
function myFileReeadePromise(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, function cb(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}


//let fileReadPromise = fs.promise.readFile("f1.txt");
let fileReadPromise = myFileReeadePromise("f1.txt");
fileReadPromise.then(function(data){
    console.log(data);
})
fileReadPromise.catch(function(err){
    console.log(err);
})