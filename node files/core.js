var os = require("os");
//console.log("The current working directory is" + os.homedir());
console.log("The OS is" + os.platform());
const EventEmitter = require("events");
const events = new EventEmitter();
events.on("rains", () => {
    console.log("It is raining . Take Umbrella");
});
events.on("danger", () => {
    console.log("Escape!Situation is dangerous");

});
/*Synchronous
events.emit("danger");
var fs = require("fs");
var ans = fs.readdirSync("./");
console.log("Answer is " + ans);*/
//Asynchronous
var fs = require("fs");
fs.readdir("./", (error, result) => {
    if (error) console.log("Error occured" + error);
    else console.log("Answer is" + result);
})