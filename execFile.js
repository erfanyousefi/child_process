
const {execFile} = require("child_process");
const {exec} = require("child_process");
// exec("chmod +x index.py", (err, stdout, stderr) => {
//     if(err) return console.log("Error: ", err.message)
//     if(stderr) return console.log("stderror: ", stderr);
//     console.log("stdout: ", stdout);
// })
execFile("./index.py", (err, stdout, stderr) => {
    if(err) return console.log("Error: ", err.message)
    if(stderr) return console.log("stderror: ", stderr);
    console.log("stdout: ", stdout);
})