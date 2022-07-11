
const {exec} = require("child_process");
exec("pwd", (err, stdout, stderr) => {
    if(err) return console.log("Error: ", err.message)
    if(stderr) return console.log("stderror: ", stderr);
    console.log("stdout: ", stdout);
})
exec("/usr/bin/env python3 index.py", (err, stdout, stderr) => {
    if(err) return console.log("Error: ", err.message)
    if(stderr) return console.log("stderror: ", stderr);
    console.log("stdout: ", stdout);
})
exec("node execFile.js", (err, stdout, stderr) => {
    if(err) return console.log("Error: ", err.message)
    if(stderr) return console.log("stderror: ", stderr);
    console.log("stdout: ", stdout);
})